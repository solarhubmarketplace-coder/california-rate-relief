"""Sibling-overlap and local-data-point measure for rendered city pages.

Prose = text inside <main> of <p>, <li>, <h1>-<h4>, <td>, <th>, <dt>, <dd>
blocks, skipping anything inside <form>, <nav>, <aside>, <script>, <style>,
<select>, <button>, <label> and the page's inquiry block. Each block is
lowercased and split into word tokens ([a-z0-9$%.,&'-]+, punctuation trimmed);
8-word shingles are taken within a block. For page A and sibling B in the same
family: containment = |S(A) & S(B)| / |S(A)| (the audit's "overlap": share of
A's 8-grams also on B), jaccard = |S(A) & S(B)| / |S(A) | S(B)|. The gate value
is A's maximum containment over all live siblings (< 0.5 passes). Unique share
= fraction of A's 8-grams found on no sibling.
"""
import html, json, re, sys, csv
from html.parser import HTMLParser

BLOCK = {'p', 'li', 'h1', 'h2', 'h3', 'h4', 'td', 'th', 'dt', 'dd'}
SKIP = {'form', 'nav', 'aside', 'script', 'style', 'select', 'button', 'label', 'svg'}
VOID = {'br', 'img', 'input', 'meta', 'link', 'hr', 'source', 'area', 'col', 'wbr'}

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_main = 0; self.skip = 0; self.stack = []; self.blocks = []; self.cur = None; self.depth_block = 0
        self.keyfacts = 0; self.in_kf = 0
    def handle_starttag(self, tag, attrs):
        if tag in VOID: return
        a = dict(attrs)
        skipit = tag in SKIP or 'data-toc-ignore' in a
        kf = a.get('aria-label') == 'Key facts'
        self.stack.append((tag, skipit, tag in BLOCK, kf))
        if tag == 'main': self.in_main += 1
        if skipit: self.skip += 1
        if kf: self.in_kf += 1
        if tag == 'dt' and self.in_kf: self.keyfacts += 1
        if tag in BLOCK and self.in_main and not self.skip:
            if self.depth_block == 0: self.cur = []
            self.depth_block += 1
    def handle_endtag(self, tag):
        if tag in VOID: return
        while self.stack:
            t, skipit, blk, kf = self.stack.pop()
            if kf: self.in_kf -= 1
            if t == 'main': self.in_main -= 1
            if blk and self.depth_block > 0 and self.in_main >= 0 and not (self.skip - (1 if skipit else 0)):
                self.depth_block -= 1
                if self.depth_block == 0 and self.cur is not None:
                    self.blocks.append(' '.join(self.cur)); self.cur = None
            if skipit: self.skip -= 1
            if t == tag: break
    def handle_data(self, data):
        if self.cur is not None and not self.skip: self.cur.append(data)

TOK = re.compile(r"[a-z0-9$%&'.,-]+")
def tokens(text):
    out = []
    for t in TOK.findall(text.lower()):
        t = t.strip(".,'-")
        if t: out.append(t)
    return out

def page(path):
    p = P(); p.feed(open(path).read())
    blocks = [re.sub(r'\s+', ' ', b).strip() for b in p.blocks]
    blocks = [b for b in blocks if b]
    sh = set(); words = 0
    for b in blocks:
        t = tokens(b); words += len(t)
        for i in range(len(t) - 7): sh.add(' '.join(t[i:i + 8]))
    h = open(path).read()
    inst = 0
    m = re.search(r'<section id="installers">(.*?)</section>', h, re.S)
    if m: inst = len(re.findall(r'<tr class="border-t"', m.group(1)))
    local = 0
    m2 = re.search(r'<section id="local-numbers">(.*?)</section>', h, re.S)
    if m2:
        t = html.unescape(re.sub(r'<[^>]+>', ' ', m2.group(1)))
        local += 1  # 2025 systems and installer count
        local += 1 if 'leased or on a power purchase' in t else 0
        local += 1 if 'with a battery' in t else 0
        local += 1 if 'median size' in t else 0
        local += 1 if 'Systems connected' in t else 0  # 2021-2025 trend
    return {'shingles': sh, 'words': words, 'keyfacts': p.keyfacts, 'installer_rows': inst, 'dg_points': local}

def run(render_dir, family, paths, out_csv):
    data = {}
    for u in paths:
        f = f"{render_dir}/{family}__{u.rsplit('/', 1)[1]}.html"
        data[u] = page(f)
    rows = []
    for u, d in data.items():
        best = (0.0, None, 0.0); S = d['shingles']
        allother = set()
        for v, e in data.items():
            if v == u: continue
            inter = len(S & e['shingles'])
            c = inter / len(S) if S else 0
            if c > best[0]:
                j = inter / len(S | e['shingles']) if S else 0
                best = (c, v, j)
            allother |= e['shingles']
        uniq = len(S - allother) / len(S) if S else 0
        points = d['keyfacts'] + (1 if d['installer_rows'] else 0) + d['dg_points']
        rows.append({'url': u, 'prose_words': d['words'], 'shingles': len(S), 'max_containment': round(best[0], 3), 'nearest': best[1], 'jaccard_nearest': round(best[2], 3), 'unique_share': round(uniq, 3), 'installer_rows': d['installer_rows'], 'keyfacts': d['keyfacts'], 'dg_points': d['dg_points'], 'local_points': points, 'gate': 'pass' if best[0] < 0.5 and points >= 3 else 'fail'})
    rows.sort(key=lambda r: -r['max_containment'])
    with open(out_csv, 'w', newline='') as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
    return rows

if __name__ == '__main__':
    render_dir, family, paths_file, out_csv = sys.argv[1:5]
    paths = [l.strip() for l in open(paths_file) if l.strip()]
    rows = run(render_dir, family, paths, out_csv)
    import statistics
    cs = [r['max_containment'] for r in rows]
    print(f"{family}: n={len(rows)} median={statistics.median(cs):.3f} max={max(cs):.3f} over0.5={sum(c>=0.5 for c in cs)} gate_fail={sum(r['gate']=='fail' for r in rows)}")
    for r in rows[:8]: print('  ', r['url'], r['max_containment'], r['nearest'], r['local_points'], r['prose_words'])
