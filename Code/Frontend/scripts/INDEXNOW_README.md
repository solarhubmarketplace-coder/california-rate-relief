# IndexNow submission (Bing, Yandex, Seznam, Naver)

**Run this after every production deploy:**

    cd Code/Frontend && npm run indexnow

That calls `scripts/indexnow-direct.mjs --submit`, which reads the key from the
`public/<key>.txt` file, fetches the live sitemap, and posts the URL list to
`api.indexnow.org`. It needs **no environment variables**. Verified working
2026-09-18: 343 URLs accepted, HTTP 200.

`npm run indexnow:dry` prints the URL list without submitting.

## Two submission paths exist — use the one above

| Path | Needs | Status 2026-09-18 |
|---|---|---|
| `scripts/indexnow-direct.mjs` (**use this**) | the `public/<key>.txt` file only | **Working.** Key file served at https://ratereliefca.com/347b0b05d977589a128970ca5aab84c6.txt (HTTP 200) |
| `scripts/indexnow-submit.mjs` → deployed `/api/indexnow` | `INDEXNOW_KEY` **and** `INDEXNOW_SECRET` set in the Railway service env | **Not usable.** Neither variable is set on the production frontend service (`artistic-appreciation`, project `kind-acceptance`), verified 2026-09-18. It will fail rather than submit. |

Do not "fix" the second path by setting `INDEXNOW_KEY` to a new value: the key
must equal the filename of the file in `public/`, and changing it requires a
redeploy before the file and the variable agree. The direct script sidesteps the
whole problem.

## Still open

Bing Webmaster Tools **site verification** is separate from IndexNow and is not
present in this repo — no `msvalidate.01` meta tag and no `BingSiteAuth.xml`
(grepped 2026-09-18). It may be done via DNS TXT, which is invisible from here.
Confirm in the Bing Webmaster Tools dashboard; without verification you get
IndexNow submission but no Bing impression/click reporting.
