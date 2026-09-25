"""Installer tables and local statistics for the /solar-companies and
/solar-savings city pages, from CPUC DG Stats "Interconnected Project Sites"
(data through 2026-05-31).

Why a second cut: dgstats-2026-05-31.json keeps two separate top-10 installer
lists per city (2025, and Jan 2024 - May 2026), so an installer in the 2025 list
often has no count for the longer window. The companies table shows both counts
for the same installer, and the county and region pages need rollups the slim
file does not carry. Filters, name normalization and CSLB handling are copied
unchanged from aggregate_dgstats.py so the two files agree.

Run from this folder with the ZIP beside it:
  python3 aggregate_companies.py /path/to/Interconnected_Project_Sites_2026-05-31.zip
Writes companies-2026-05-31.json.

Source: California Distributed Generation Statistics (CPUC), Interconnected
Project Sites data set, data through May 31, 2026, downloaded 2026-09-24 from
https://www.californiadgstats.ca.gov/downloads/
"""
import csv, html, io, json, re, statistics, sys, zipfile
from collections import Counter, defaultdict
from datetime import date

ZIP = sys.argv[1] if len(sys.argv) > 1 else 'projects.zip'
SLIM = 'dgstats-2026-05-31.json'
OUT = 'companies-2026-05-31.json'
YEARS = list(range(2019, 2027))
TOP = 12

# --- copied from aggregate_dgstats.py -----------------------------------------
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
    return re.sub(r'\s+', ' ', c)

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
# ------------------------------------------------------------------------------

# Region pages: which DG Stats service cities or counties each one rolls up.
# Taken from the places each region page's own table lists (growth-cities.ts).
REGIONS = {
    'coachella-valley': {'label': 'Coachella Valley', 'cities': ['PALM SPRINGS', 'DESERT HOT SPRINGS', 'CATHEDRAL CITY', 'RANCHO MIRAGE', 'PALM DESERT', 'INDIAN WELLS', 'LA QUINTA', 'INDIO', 'COACHELLA', 'BERMUDA DUNES', 'THOUSAND PALMS', 'THERMAL', 'MECCA']},
    'high-desert': {'label': 'High Desert', 'cities': ['VICTORVILLE', 'APPLE VALLEY', 'HESPERIA', 'ADELANTO', 'BARSTOW', 'HELENDALE', 'PHELAN', 'OAK HILLS', 'LUCERNE VALLEY', 'LANCASTER', 'PALMDALE', 'QUARTZ HILL', 'TWENTYNINE PALMS', 'YUCCA VALLEY']},
    'bay-area': {'label': 'Bay Area', 'counties': ['ALAMEDA', 'CONTRA COSTA', 'MARIN', 'NAPA', 'SAN FRANCISCO', 'SAN MATEO', 'SANTA CLARA', 'SANTA CRUZ', 'SOLANO', 'SONOMA']},
    'orange-county': {'label': 'Orange County', 'counties': ['ORANGE']},
    'san-mateo-county': {'label': 'San Mateo County', 'counties': ['SAN MATEO']},
    'riverside-county': {'label': 'Riverside County', 'counties': ['RIVERSIDE']},
    'kern-county': {'label': 'Kern County', 'counties': ['KERN']},
    'ventura-county': {'label': 'Ventura County', 'counties': ['VENTURA']},
}

slim = json.load(open(SLIM))
city_slugs = defaultdict(list)            # DG service city -> site slugs
for slug, c in slim['cities'].items():
    city_slugs[c['dgName']].append(slug)
region_by_city = defaultdict(list)
region_by_county = defaultdict(list)
for slug, r in REGIONS.items():
    for c in r.get('cities', []): region_by_city[c].append(slug)
    for c in r.get('counties', []): region_by_county[c].append(slug)

class Agg:
    __slots__ = ('years', 'n2025', 'tpo2025', 'stor2025', 'sizes2025', 'inst2025', 'inst2426', 'inst_cslb', 'inst_disp', 'utility2025', 'utility')
    def __init__(self):
        self.years = Counter(); self.n2025 = 0; self.tpo2025 = 0; self.stor2025 = 0; self.sizes2025 = []
        self.inst2025 = Counter(); self.inst2426 = Counter()
        self.inst_cslb = defaultdict(Counter); self.inst_disp = defaultdict(Counter)
        self.utility2025 = Counter(); self.utility = Counter()

cities = defaultdict(Agg); regions = defaultdict(Agg); counties = defaultdict(Agg)
rows_used = 0
z = zipfile.ZipFile(ZIP)
for name in z.namelist():
    with z.open(name) as fh:
        t = io.TextIOWrapper(fh, encoding='utf-8', errors='replace', newline='')
        for row in csv.DictReader(t):
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
            targets = [cities[s] for s in city_slugs.get(city, [])]
            targets += [regions[s] for s in region_by_city.get(city, [])]
            targets += [regions[s] for s in region_by_county.get(county, [])]
            if county: targets.append(counties[county])
            if not targets: continue
            util = (row.get('Utility') or '').strip().upper()
            size = fnum(row.get('System Size DC'))
            stor = fnum(row.get('Storage Capacity (kWh)')) or 0.0
            tpo = (row.get('Third Party Owned') or '').strip().lower() == 'yes'
            selfi = (row.get('Self Installer') or '').strip().lower() == 'yes'
            raw_inst = (row.get('Installer Name') or '').strip()
            inst = '' if selfi else norm_installer(raw_inst)
            lic = cslb(row.get('CSLB Number'))
            in2426 = date(2024, 1, 1) <= d <= date(2026, 5, 31)
            for a in targets:
                a.utility[util] += 1
                if d.year in YEARS: a.years[d.year] += 1
                if d.year == 2025:
                    a.n2025 += 1
                    a.utility2025[util] += 1
                    if tpo: a.tpo2025 += 1
                    if stor > 0: a.stor2025 += 1
                    if size and 0.5 <= size <= 30: a.sizes2025.append(size)
                    if inst:
                        a.inst2025[inst] += 1
                        a.inst_disp[inst][raw_inst] += 1
                        if lic: a.inst_cslb[inst][lic] += 1
                if in2426 and inst:
                    a.inst2426[inst] += 1
                    a.inst_disp[inst][raw_inst] += 1
                    if lic: a.inst_cslb[inst][lic] += 1
    print('done', name, rows_used, file=sys.stderr, flush=True)

# Display names: the spelling most often reported, with HTML entities decoded
# (SCE's file writes "&" as "&amp;") and all-caps names set in title case the way
# dgstats-2026-05-31.json prints them. Words are otherwise left as reported.
KEEP_UPPER = {'LLC', 'DBA', 'HVAC', 'USA', 'PBC', 'LP', 'LLP', 'II', 'III', 'IE', 'TLP', 'GAF', 'NRG', 'PV', 'SD', 'OC', 'LA',
              'JV', 'CA', 'ESP', 'OCP', 'APG', 'SLO', 'CE', 'PES'}
LOWER = {'and', 'of'}

def display(name):
    name = html.unescape(name).strip()
    if name != name.upper():
        return name
    out = []
    for t in name.split():
        core = re.sub(r'[^A-Za-z0-9]', '', t)
        # Kept in capitals: known abbreviations, initials, words with digits
        # and short vowel-less letter groups (KBC, GRC, WSC), which read as
        # abbreviations rather than words.
        if core in KEEP_UPPER or len(core) <= 1 or re.search(r'\d', core) or (len(core) <= 4 and not re.search(r'[AEIOUY]', core)):
            out.append(t)
        elif t.lower() in LOWER and out:
            out.append(t.lower())
        else:
            out.append(t[0] + t[1:].lower())
    return ' '.join(out)

def median(v):
    if not v: return None
    v = sorted(v); k = (len(v) - 1) * 0.5; f = int(k); c = min(f + 1, len(v) - 1)
    return round(v[f] + (v[c] - v[f]) * (k - f), 2)

def pack(a):
    rows = []
    for n, c in a.inst2025.most_common(TOP):
        rows.append({
            'name': display(a.inst_disp[n].most_common(1)[0][0]) if a.inst_disp[n] else n,
            'cslb': a.inst_cslb[n].most_common(1)[0][0] if a.inst_cslb[n] else '',
            'n2025': c,
            'n2024to2026': a.inst2426[n],
        })
    return {
        'utility': dict(a.utility.most_common()),
        'utility2025': dict(a.utility2025.most_common()),
        'systemsByYear': {str(y): a.years.get(y, 0) for y in YEARS},
        'systems2025': a.n2025,
        'thirdPartyOwnedShare2025': round(a.tpo2025 / a.n2025, 3) if a.n2025 else None,
        'storageAttachShare2025': round(a.stor2025 / a.n2025, 3) if a.n2025 else None,
        'medianSizeKwDc2025': median(a.sizes2025),
        'installerCount2025': len(a.inst2025),
        'installers': rows,
    }

out = {
    'source': dict(slim['source'], note='Installer rows: top installers by residential systems granted permission to operate in 2025, each with its count for Jan 2024 - May 2026. Built by aggregate_companies.py with the filters of aggregate_dgstats.py.'),
    'regions': {s: dict(pack(regions[s]), label=r['label'], cities=r.get('cities', []), counties=r.get('counties', [])) for s, r in REGIONS.items()},
    'cities': {s: dict(pack(cities[s]), dgName=slim['cities'][s]['dgName'], county=slim['cities'][s]['county']) for s in slim['cities']},
    'counties': {k.title(): pack(v) for k, v in counties.items()},
}
json.dump(out, open(OUT, 'w'), separators=(',', ':'))
print('wrote', OUT, len(out['cities']), 'cities', len(out['counties']), 'counties', file=sys.stderr)
