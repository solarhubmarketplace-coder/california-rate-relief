"""Aggregate CPUC DG Stats 'Interconnected Project Sites' (data through 2026-05-31)
into per-city residential solar statistics for ratereliefca.com city pages.

Source: California Distributed Generation Statistics (californiadgstats.ca.gov),
Interconnected Project Sites dataset, file Interconnected_Project_Sites_2026-05-31.zip,
downloaded 2026-09-24. Data key updated 2026-09-01.
"""
import csv, io, json, re, statistics, sys, zipfile
from collections import Counter, defaultdict
from datetime import date

ZIP = 'projects.zip'
OUT = 'city_stats_2026-05-31.json'

COST_FROM, COST_TO = date(2025, 1, 1), date(2026, 5, 31)
YEARS = list(range(2019, 2027))

SUFFIX = re.compile(r'\b(incorporated|inc|llc|l\.l\.c|corp|corporation|co|company|ltd|lp|dba|the)\b\.?', re.I)
PUNCT = re.compile(r'[^a-z0-9 ]+')
ALIASES = {
    'solarcity': 'tesla', 'tesla energy operations': 'tesla', 'tesla energy': 'tesla', 'tesla motors': 'tesla',
    'sunrun installation services': 'sunrun', 'vivint solar developer': 'vivint solar',
}

def norm_installer(name):
    if not name: return ''
    n = name.strip().lower()
    if n in ('none', 'n/a', 'na', 'self', 'self install', 'self installer', 'owner', 'homeowner', 'unknown', '0'): return ''
    n = SUFFIX.sub(' ', n)
    n = PUNCT.sub(' ', n)
    n = re.sub(r'\s+', ' ', n).strip()
    for k, v in ALIASES.items():
        if n.startswith(k): return v
    return n

def norm_city(c):
    c = (c or '').strip().upper()
    c = re.sub(r'\s+', ' ', c)
    return c

def cslb(x):
    x = (x or '').strip()
    if not x: return ''
    try:
        return str(int(float(x)))
    except ValueError:
        return re.sub(r'\D', '', x)

def fnum(x):
    try:
        v = float(x)
        return v if v == v else None
    except (TypeError, ValueError):
        return None

def pdate(x):
    x = (x or '').strip()[:10]
    try:
        y, m, d = x.split('-'); return date(int(y), int(m), int(d))
    except Exception:
        return None

class Agg:
    __slots__ = ('years', 'n2025', 'tpo2025', 'stor2025', 'sizes2025', 'cpw', 'inst2025', 'inst_cslb', 'inst_disp', 'tpo_names2025', 'utility', 'county', 'inst2024_26', 'raw_city')
    def __init__(self):
        self.years = Counter(); self.n2025 = 0; self.tpo2025 = 0; self.stor2025 = 0
        self.sizes2025 = []; self.cpw = []
        self.inst2025 = Counter(); self.inst2024_26 = Counter(); self.inst_cslb = defaultdict(Counter); self.inst_disp = defaultdict(Counter)
        self.tpo_names2025 = Counter(); self.utility = Counter(); self.county = Counter(); self.raw_city = Counter()

cities = defaultdict(Agg); counties = defaultdict(Agg); utils = defaultdict(Agg); state = Agg()
rows_seen = 0; rows_used = 0

z = zipfile.ZipFile(ZIP)
for name in z.namelist():
    with z.open(name) as fh:
        t = io.TextIOWrapper(fh, encoding='utf-8', errors='replace', newline='')
        r = csv.DictReader(t)
        for row in r:
            rows_seen += 1
            tech = (row.get('Technology Type') or '').lower()
            if 'photovoltaic' not in tech: continue
            if (row.get('Customer Sector') or '').strip().lower() != 'residential': continue
            status = (row.get('Application Status') or '').strip().lower()
            if status and 'interconnect' not in status: continue
            d = pdate(row.get('App Approved Date'))
            if not d: continue
            rows_used += 1
            city = norm_city(row.get('Service City'))
            county = (row.get('Service County') or '').strip().upper()
            util = (row.get('Utility') or '').strip().upper()
            size = fnum(row.get('System Size DC'))
            stor = fnum(row.get('Storage Capacity (kWh)')) or 0.0
            tpo = (row.get('Third Party Owned') or '').strip().lower() == 'yes'
            selfi = (row.get('Self Installer') or '').strip().lower() == 'yes'
            raw_inst = (row.get('Installer Name') or '').strip()
            inst = '' if selfi else norm_installer(raw_inst)
            lic = cslb(row.get('CSLB Number'))
            cost = fnum(row.get('Total System Cost'))
            tponame = (row.get('Third Party Name') or '').strip()
            targets = [state, utils[util]]
            if county: targets.append(counties[county])
            if city: targets.append(cities[city])
            for a in targets:
                a.utility[util] += 1
                if county: a.county[county] += 1
                if d.year in YEARS: a.years[d.year] += 1
                if d.year == 2025:
                    a.n2025 += 1
                    if tpo: a.tpo2025 += 1
                    if stor > 0: a.stor2025 += 1
                    if size and 0.5 <= size <= 30: a.sizes2025.append(size)
                    if inst:
                        a.inst2025[inst] += 1
                        a.inst_disp[inst][raw_inst] += 1
                        if lic: a.inst_cslb[inst][lic] += 1
                    if tpo and tponame and tponame.lower() not in ('none', 'n/a'): a.tpo_names2025[tponame] += 1
                if date(2024, 1, 1) <= d <= date(2026, 5, 31) and inst:
                    a.inst2024_26[inst] += 1
                    a.inst_disp[inst][raw_inst] += 1
                    if lic: a.inst_cslb[inst][lic] += 1
                if (COST_FROM <= d <= COST_TO and not tpo and stor <= 0 and cost and size and 1 <= size <= 25):
                    w = cost / (size * 1000.0)
                    if 1.5 <= w <= 12: a.cpw.append(w)
            if city and a is not None:
                cities[city].raw_city[(row.get('Service City') or '').strip()] += 1
    print('done', name, rows_seen, rows_used, file=sys.stderr, flush=True)

def q(v, p):
    if not v: return None
    v = sorted(v); k = (len(v) - 1) * p; f = int(k); c = min(f + 1, len(v) - 1)
    return round(v[f] + (v[c] - v[f]) * (k - f), 2)

def pack(a, top=12):
    installers = []
    for n, c in a.inst2025.most_common(top):
        disp = a.inst_disp[n].most_common(1)[0][0] if a.inst_disp[n] else n
        lic = a.inst_cslb[n].most_common(1)[0][0] if a.inst_cslb[n] else ''
        installers.append({'name': disp, 'systems_2025': c, 'cslb': lic})
    installers_24_26 = []
    for n, c in a.inst2024_26.most_common(top):
        disp = a.inst_disp[n].most_common(1)[0][0] if a.inst_disp[n] else n
        lic = a.inst_cslb[n].most_common(1)[0][0] if a.inst_cslb[n] else ''
        installers_24_26.append({'name': disp, 'systems_2024_to_may2026': c, 'cslb': lic})
    return {
        'utility': dict(a.utility.most_common()), 'county': a.county.most_common(1)[0][0] if a.county else '',
        'systems_by_year': {str(y): a.years.get(y, 0) for y in YEARS},
        'systems_2025': a.n2025,
        'third_party_owned_share_2025': round(a.tpo2025 / a.n2025, 3) if a.n2025 else None,
        'storage_attach_share_2025': round(a.stor2025 / a.n2025, 3) if a.n2025 else None,
        'median_size_kw_dc_2025': q(a.sizes2025, 0.5),
        'cost_per_watt': {'window': f'{COST_FROM}..{COST_TO}', 'basis': 'host-owned, PV-only (no storage), 1-25 kW DC, reported Total System Cost / System Size DC',
                          'n': len(a.cpw), 'p25': q(a.cpw, .25), 'median': q(a.cpw, .5), 'p75': q(a.cpw, .75)},
        'installers_2025': installers, 'installers_2024_to_may2026': installers_24_26,
        'installer_count_2025': len(a.inst2025),
        'third_party_owners_2025': [{'name': n, 'systems': c} for n, c in a.tpo_names2025.most_common(5)],
    }

out = {
    '_source': {
        'publisher': 'California Distributed Generation Statistics (CPUC), californiadgstats.ca.gov',
        'dataset': 'Interconnected Project Sites (Rule 21 / NEM), file Interconnected_Project_Sites_2026-05-31.zip',
        'data_through': '2026-05-31', 'key_updated': '2026-09-01', 'downloaded': '2026-09-24',
        'url': 'https://www.californiadgstats.ca.gov/downloads/',
        'scope': 'Residential photovoltaic applications with an approval (permission to operate) date; PG&E, SCE and SDG&E territories only (municipal utilities such as LADWP and SMUD are not in this dataset).',
        'rows_seen': rows_seen, 'rows_used': rows_used,
    },
    'state': pack(state, 25),
    'utilities': {k: pack(v, 15) for k, v in utils.items()},
    'counties': {k: pack(v, 12) for k, v in counties.items()},
    'cities': {k: dict(pack(v, 12), raw_names=dict(v.raw_city.most_common(3))) for k, v in cities.items()},
}
json.dump(out, open(OUT, 'w'), indent=1)
print('wrote', OUT, len(out['cities']), 'cities', file=sys.stderr)
