# DG Stats city data (CPUC)

- `dgstats-2026-05-31.json`: residential solar statistics per site city, county, utility and statewide, derived from the California Distributed Generation Statistics "Interconnected Project Sites" data set (file `Interconnected_Project_Sites_2026-05-31.zip`, data through 2026-05-31, key updated 2026-09-01, downloaded 2026-09-24 from https://www.californiadgstats.ca.gov/downloads/).
- Scope: PG&E, SCE and SDG&E territories only. Municipal utilities (LADWP, SMUD, Anaheim, Riverside, Pasadena, Glendale, Burbank, Santa Clara, Roseville and others) are not in the data set, so a city served mostly by one shows only its IOU-served pockets.
- Cost per watt: host-owned (not lease/PPA), PV-only (no storage), 1–25 kW DC, systems approved 2025-01-01 to 2026-05-31; reported Total System Cost ÷ System Size DC; values outside $1.50–$12/W dropped. It is what owners reported, not a quote.
- Installers: names and CSLB numbers as reported on interconnection applications (validated by the utility), residential systems with permission to operate in 2025 (and Jan 2024–May 2026). Not a ranking.
- `aggregate_dgstats.py` rebuilds the raw per-city JSON from the ZIP; the slim file is cut from it for the 149 site city slugs (13 have no DG Stats city: municipal-utility cities and region/county slugs).
