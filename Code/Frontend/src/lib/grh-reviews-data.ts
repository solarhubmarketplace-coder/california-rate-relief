export interface ReviewCard {
  slug: string;
  title: string;
  description: string;
  badge: 'Comparison Guide' | 'Product Review';
  rating?: number;
  icon: 'battery' | 'zap';
  image?: string;
  brand?: string;
}

export const reviews: ReviewCard[] = [
  {
    slug: 'best-portable-power-stations',
    title: 'Best Portable Power Stations 2026',
    description:
      'EcoFlow Delta Pro 3 vs Anker SOLIX F3800 vs Bluetti AC500 vs Jackery 2000 Plus \u2014 which one is right for you?',
    badge: 'Comparison Guide',
    icon: 'battery',
    image: 'https://m.media-amazon.com/images/I/71a+5EKu+8L._AC_UF894,1000_QL80_.jpg',
    brand: 'EcoFlow'
  },
  {
    slug: 'ecoflow-delta-pro-3-review',
    title: 'EcoFlow Delta Pro 3 Review',
    description:
      '4,096 Wh, 4,000W output, X-Stream charging \u2014 the best all-around portable power station for home backup.',
    badge: 'Product Review',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/71a+5EKu+8L._AC_UF894,1000_QL80_.jpg',
    brand: 'EcoFlow'
  },
  {
    slug: 'anker-solix-f3800-review',
    title: 'Anker SOLIX F3800 Review',
    description:
      '6,000W output and 3,840 Wh at an unbeatable price point. The best value in portable power.',
    badge: 'Product Review',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/71WoQNAA-YL._AC_UF894,1000_QL80_.jpg',
    brand: 'Anker'
  },
  {
    slug: 'bluetti-ac500-review',
    title: 'Bluetti AC500 + B300S Review',
    description:
      'The most modular power station with 3,000W solar input and expandability up to 18,432 Wh.',
    badge: 'Product Review',
    rating: 4.5,
    image: 'https://www.bluettipower.ph/cdn/shop/files/ac500_d502c572-8373-4a10-a44f-bcc6c7b2b88d.jpg',
    brand: 'BLUETTI'
  },
  {
    slug: 'jackery-explorer-2000-plus-review',
    title: 'Jackery Explorer 2000 Plus Review',
    description:
      'The most portable power station in its class at 61.5 lbs. Now under $1,000 with LFP battery and 4,000-cycle lifespan.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
    image: 'https://m.media-amazon.com/images/I/71JnAbpQj-L._AC_UF894,1000_QL80_.jpg',
    brand: 'Jackery'
  },
  {
    slug: 'bluetti-ac200l-review',
    title: 'Bluetti AC200L Review',
    description:
      'The best portable power station under $1,000. 2,048 Wh, fast charging (0-80% in 45 min), and expandable to 8,192 Wh.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
    image: 'https://m.media-amazon.com/images/I/712KweyPQQL._AC_UF894,1000_QL80_.jpg',
    brand: 'BLUETTI'
  },
  {
    slug: 'best-electric-bikes',
    title: 'Best Electric Bikes 2026',
    description:
      'Aventon vs Rad Power vs Lectric \u2014 top e-bikes from $799 to $1,999 compared. Fat tire, folding, and city commuter picks.',
    badge: 'Comparison Guide',
    icon: 'zap',
    image: 'https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8835/Aventure-3_Matcha_Side_1__89416.1747331054.jpg',
    brand: 'Aventon'
  },
  {
    slug: 'best-mini-split-ac',
    title: 'Best Mini Split AC 2026',
    description:
      'MrCool DIY mini splits reviewed. Save $3,000-$8,000 on installation with pre-charged QuickConnect line sets. Up to 22.7 SEER2.',
    badge: 'Comparison Guide',
    icon: 'zap',
    image: 'https://crdms.images.consumerreports.org/prod/products/cr/models/413079-ductless-air-conditioners-mrcool-diy-4th-gen-diy-12-hp-wm-115c25-10039675.png',
    brand: 'MrCool'
  },
  {
    slug: 'best-electric-lawn-mower',
    title: 'Best Electric Lawn Mower 2026',
    description:
      'EGO Select Cut vs Greenworks 80V vs Ryobi 40V. Battery platforms compared for every yard size.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-smart-thermostat',
    title: 'Best Smart Thermostat 2026',
    description:
      'Ecobee Premium vs Google Nest 4th Gen. Save up to 26% on energy with smart scheduling and TOU optimization.',
    badge: 'Comparison Guide',
    icon: 'zap',
    image: 'https://www.techhive.com/wp-content/uploads/2023/04/Ecobee-Smart-Thermostat-Premium-installed-1.jpg',
    brand: 'Ecobee'
  },
  {
    slug: 'best-whole-house-generator',
    title: 'Best Whole House Generator 2026',
    description:
      'Generac Guardian 22kW vs 24kW vs 26kW, plus Kohler and Champion. Sizing guide, installation costs, and fuel comparison.',
    badge: 'Comparison Guide',
    icon: 'battery',
    image: 'https://m.media-amazon.com/images/I/71VNiAQEIfL._AC_UF894,1000_QL80_.jpg',
    brand: 'Generac'
  },
  {
    slug: 'rad-power-radrover-6-plus-review',
    title: 'Rad Power RadRover 6 Plus Review',
    description:
      '750W motor, 672Wh battery, 26×4" fat tires. The best-selling all-terrain e-bike for commuters and adventure riders.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
    image: 'https://electricbikereview.com/wp-content/assets/2021/07/rad-power-bikes-radrover-6-plus-stock-high-step-black.jpg',
    brand: 'Rad Power'
  },
  {
    slug: 'aventon-aventure-3-review',
    title: 'Aventon Aventure 3 Review',
    description:
      'Class 3 speed (28 mph), torque sensor, 720Wh battery with 40-60 mile range. The premium all-terrain e-bike.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
    image: 'https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8836/Aventure-3_Stealth_Side_1__66073.1747331060.jpg',
    brand: 'Aventon'
  },
  {
    slug: 'mrcool-diy-4th-gen-review',
    title: 'MrCool DIY 4th Gen Mini Split Review',
    description:
      'Install your own mini split, no HVAC tech needed. 12K-36K BTU, up to 22 SEER2. Save $3,000-$8,000 on installation.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
    image: 'https://crdms.images.consumerreports.org/prod/products/cr/models/413079-ductless-air-conditioners-mrcool-diy-4th-gen-diy-12-hp-wm-115c25-10039675.png',
    brand: 'MrCool'
  },
  {
    slug: 'ego-select-cut-mower-review',
    title: 'EGO Select Cut XP Mower Review',
    description:
      'The best electric lawn mower for gas switchers. 21" deck, 3 swappable blade types, 56V battery platform with 70+ compatible tools.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'generac-guardian-24kw-review',
    title: 'Generac Guardian 24kW Review',
    description:
      'The best-selling whole house standby generator. 24kW output, automatic transfer switch, Mobile Link monitoring. Full install cost breakdown.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'battery',
    image: 'https://m.media-amazon.com/images/I/71VNiAQEIfL._AC_UF894,1000_QL80_.jpg',
    brand: 'Generac'
  },
  {
    slug: 'ecoflow-delta-pro-ultra-review',
    title: 'EcoFlow Delta Pro Ultra Review',
    description:
      'The bridge between portable power and whole-home backup. 6,144Wh expandable to 90kWh, 7,200W output, LFP battery.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'battery',
    image: 'https://us.ecoflow.com/cdn/shop/files/ecoflow-ecoflow-delta-pro-ultra-whole-home-backup-power-ul-9540-certificated-dpu-bundle-1195484329.png',
    brand: 'EcoFlow'
  },
  {
    slug: 'ego-snow-blower-review',
    title: 'EGO SNT2114 Snow Blower Review',
    description:
      'Peak Power technology, 21" clearing width, up to 50-foot throw distance. The best electric snow blower for residential use.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'ryobi-40v-lawn-mower-review',
    title: 'Ryobi 40V HP Lawn Mower Review',
    description:
      'The best budget electric mower at $399. 21" deck, self-propelled, 48-minute runtime. Part of the Ryobi 40V platform with 40+ tools.',
    badge: 'Product Review',
    rating: 4.4,
    icon: 'zap',
  },
  {
    slug: 'mitsubishi-mini-split-review',
    title: 'Mitsubishi Mini Split Review',
    description:
      'The #1 selling mini split brand in North America. Hyper-Heating down to -13°F, 19 dB whisper-quiet, 12-year compressor warranty.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
    image: 'https://dw2p0k56b2hr9.cloudfront.net/ME_GS_Mens_Den_copy_5d9986f120.webp',
    brand: 'Mitsubishi'
  },
  {
    slug: 'best-tankless-water-heater',
    title: 'Best Tankless Water Heater 2026',
    description:
      'Rinnai vs Rheem vs Navien vs Noritz, full comparison with sizing guide, installation costs, and annual savings breakdown.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'milwaukee-chainsaw-review',
    title: 'Milwaukee M18 FUEL Chainsaw Review',
    description:
      '16" bar, 6,600 RPM, up to 150 cuts per charge. The pro-grade battery chainsaw built on the M18 platform with 250+ tools.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'best-electric-dirt-bike-adults',
    title: 'Best Electric Dirt Bikes for Adults 2026',
    description:
      'Sur-Ron vs KTM vs Stark Varg vs Zero FX. Electric dirt bikes from $4,500 to $12,000 compared, performance, range, and street legality.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'daikin-mini-split-review',
    title: 'Daikin Mini Split Review',
    description:
      'World\'s largest HVAC manufacturer. Up to 20.6 SEER2, R-32 refrigerant, 19 dB whisper-quiet. 12-year compressor + parts warranty.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'best-electric-leaf-blower',
    title: 'Best Electric Leaf Blower 2026',
    description:
      'EGO vs Milwaukee vs DeWalt vs Ryobi vs Greenworks. CFM, MPH, noise, runtime, and battery platform compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-chainsaw',
    title: 'Best Electric Chainsaw 2026',
    description:
      'EGO vs DeWalt vs Milwaukee vs Ryobi vs Stihl vs Makita. Bar length guide, battery platforms, and electric vs gas breakdown.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-scooter-with-seat',
    title: 'Best Electric Scooters with Seats 2026',
    description:
      'Segway vs EMOVE vs NIU vs Hiboy vs Razor. Seated electric scooters from $450 to $1,400 compared for commuting and comfort.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'greenworks-80v-lawn-mower-review',
    title: 'Greenworks 80V Lawn Mower Review',
    description:
      'Smart Cut auto-adjusting power, 80V brushless motor, 60-minute runtime. The mid-range electric mower with the best platform value.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'best-induction-cooktop',
    title: 'Best Induction Cooktop & Range 2026',
    description:
      'GE Profile vs Samsung vs Bosch vs LG vs Duxtop. Cooktops and ranges compared — energy savings, cookware compatibility, and smart features.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-moped',
    title: 'Best Electric Mopeds 2026',
    description:
      'NIU vs Segway vs CSC vs ONYX, top electric mopeds from $2,000 to $4,500 compared. Range, speed, and city commuting picks.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-pool-heater',
    title: 'Best Solar Pool Heaters 2026',
    description:
      'Fafco vs SunHeater vs SmartPool vs Game — solar pool heating panels compared. Cut pool heating costs by 50-70%.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-scooter',
    title: 'Best Electric Scooters 2026',
    description:
      'Segway vs Apollo vs EMOVE vs Kaabo, adult electric scooters from $400 to $2,500 compared. Commuter, off-road, and premium picks.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'ecoflow-delta-2-review',
    title: 'EcoFlow Delta 2 Review',
    description:
      '1,024 Wh LFP battery with 1,800W output. The best mid-range portable power station for camping and light home backup.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'best-electric-dirt-bike-kids',
    title: 'Best Electric Dirt Bikes for Kids 2026',
    description:
      'STACYC vs KTM vs Razor vs Sur-Ron. Kids electric dirt bikes from $200 to $3,000. Age-appropriate picks for 3-16 year olds.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-attic-fan',
    title: 'Best Solar Attic Fans 2026',
    description:
      'Remington vs Natural Light vs QuietCool vs iLIVING, solar attic fans compared. Cut cooling costs 10-30% with zero operating cost.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'ryobi-snow-blower-review',
    title: 'Ryobi 40V Snow Blower Review',
    description:
      'The best budget battery snow blower at $449. 21" clearing width, brushless motor, and Ryobi 40V platform compatibility.',
    badge: 'Product Review',
    rating: 4.3,
    icon: 'zap',
  },
  {
    slug: 'dewalt-lawn-mower-review',
    title: 'DeWalt 20V MAX Lawn Mower Review',
    description:
      'Steel deck durability meets the massive 20V MAX ecosystem. Best for existing DeWalt tool owners upgrading from gas.',
    badge: 'Product Review',
    rating: 4.3,
    icon: 'zap',
  },
  {
    slug: 'milwaukee-lawn-mower-review',
    title: 'Milwaukee M18 FUEL Lawn Mower Review',
    description:
      'Professional-grade POWERSTATE motor with M18 platform compatibility. The most powerful battery mower for thick grass and tough yards.',
    badge: 'Product Review',
    rating: 4.4,
    icon: 'zap',
  },
  {
    slug: 'pioneer-mini-split-review',
    title: 'Pioneer Mini Split Review',
    description:
      'The best budget mini split starting at $750. Diamante series with up to 20.5 SEER2 efficiency and 5-year compressor warranty.',
    badge: 'Product Review',
    rating: 4.0,
    icon: 'zap',
  },
  {
    slug: 'honeywell-smart-thermostat-review',
    title: 'Honeywell Home T9 Smart Thermostat Review',
    description:
      'Room sensors, geofencing, and smart scheduling at $169. The best mid-range smart thermostat for multi-room comfort.',
    badge: 'Product Review',
    rating: 4.3,
    icon: 'zap',
  },
  {
    slug: 'trek-electric-bike-review',
    title: 'Trek Allant+ E-Bike Review',
    description:
      'Bosch Performance Line CX motor, 500Wh battery, premium components. The best commuter e-bike for riders who want dealer support.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'best-electric-fireplace-tv-stand',
    title: 'Best Electric Fireplace TV Stands 2026',
    description:
      'Walker Edison vs Ameriwood vs Twin Star vs SEI Furniture vs Real Flame, electric fireplace entertainment centers from $235 to $899.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'heat-pump-vs-furnace',
    title: 'Heat Pump vs Furnace: Which Is Better?',
    description:
      'Complete comparison of heat pumps vs gas furnaces; efficiency, costs, climate zones, and when each makes sense for your home.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-charge-controller',
    title: 'Best Solar Charge Controllers 2026',
    description:
      'Victron vs Renogy vs EPEver vs Rich Solar vs BougeRV, MPPT and PWM controllers compared for off-grid and DIY solar setups.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-battery-pressure-washer',
    title: 'Best Battery Pressure Washers 2026',
    description:
      'EGO vs Greenworks vs Ryobi vs DeWalt vs Sun Joe, cordless pressure washers from 600 to 3,200 PSI compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-skateboard',
    title: 'Best Electric Skateboards 2026',
    description:
      'Boosted vs Evolve vs Meepo vs WowGo vs Exway vs Backfire, electric skateboards from $400 to $2,000+ compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-generator',
    title: 'Best Solar Generators 2026',
    description:
      'EcoFlow vs Bluetti vs Jackery vs Goal Zero vs Anker, complete solar generator bundles for home backup, camping, and off-grid.',
    badge: 'Comparison Guide',
    icon: 'battery',
  },
  {
    slug: 'best-robot-lawn-mower',
    title: 'Best Robot Lawn Mowers 2026',
    description:
      'Husqvarna vs Worx vs EcoVacs vs Mammotion vs Robomow, autonomous mowers from $600 to $3,500. Wire, RTK, and vision navigation compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'lectric-xp-3-review',
    title: 'Lectric XP 3.0 Review',
    description:
      'The best folding e-bike under $1,000. 750W motor, 60-mile range, fat tires, and a massive accessory ecosystem.',
    badge: 'Product Review',
    rating: 4.4,
    icon: 'zap',
    image: 'https://www.nycbicycleshop.com/2049/lectric-xp-30-folding-electric-bike.jpg',
    brand: 'Lectric'
  },
  {
    slug: 'best-outdoor-solar-lights',
    title: 'Best Outdoor Solar Lights 2026',
    description:
      'Path lights, security floods, string lights, and step lights, the best solar-powered outdoor lighting from $15 to $80.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-snow-shovel',
    title: 'Best Electric Snow Shovels 2026',
    description:
      'EGO vs Greenworks vs Snow Joe vs Toro vs Ryobi, battery-powered snow shovels for decks, walkways, and light accumulation.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-panel-kit',
    title: 'Best Solar Panel Kits 2026',
    description:
      'Renogy vs BougeRV vs Rich Solar vs ECO-WORTHY, DIY solar panel kits for RVs, sheds, cabins, and off-grid setups.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-hedge-trimmer',
    title: 'Best Electric Hedge Trimmers 2026',
    description:
      'EGO vs Milwaukee vs DeWalt vs Makita vs BLACK+DECKER — battery hedge trimmers for every yard size and budget.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-portable-air-conditioner',
    title: 'Best Portable Air Conditioners 2026',
    description:
      'LG vs Midea vs Whynter vs BLACK+DECKER, portable AC units from 8,000 to 14,000 BTU. Single-hose and dual-hose models compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-window-air-conditioner',
    title: 'Best Window Air Conditioners 2026',
    description:
      'LG vs Frigidaire vs Midea U-Shaped vs GE Profile. The quietest, most efficient window AC units for every room size.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-ceiling-fan',
    title: 'Best Ceiling Fans 2026',
    description:
      'Hunter vs Big Ass Fans vs Modern Forms vs Fanimation, smart, energy-efficient ceiling fans with DC motors and WiFi control.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-dehumidifier',
    title: 'Best Dehumidifiers 2026',
    description:
      'Frigidaire vs hOmeLabs vs GE vs LG, 35 to 70-pint dehumidifiers for basements, bedrooms, and whole-home moisture control.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'jackery-solar-generator-1000-review',
    title: 'Jackery Solar Generator 1000 Review',
    description:
      'Explorer 1000 + SolarSaga 100W bundle at $1,099. The most portable mid-range solar generator for camping and emergency backup.',
    badge: 'Product Review',
    rating: 4.2,
    icon: 'battery',
  },
  {
    slug: 'best-electric-weed-eater',
    title: 'Best Electric Weed Eaters 2026',
    description:
      'EGO vs Milwaukee vs DeWalt vs Greenworks vs Ryobi. Battery string trimmers with attachment systems and platform compatibility.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-air-purifier',
    title: 'Best Air Purifiers 2026',
    description:
      'Coway vs Blueair vs Levoit vs Winix vs Dyson, HEPA air purifiers compared by CADR, noise, energy cost, and room coverage.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-space-heater',
    title: 'Best Space Heaters 2026',
    description:
      'Dyson vs De\'Longhi vs Lasko vs Vornado vs Dr Infrared, ceramic, oil-filled, and infrared heaters for every room size.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-bike-for-seniors',
    title: 'Best Electric Bikes for Seniors 2026',
    description:
      'Step-through e-bikes from Rad Power, Aventon, Lectric, Pedego, and Gazelle. comfort, safety, and easy-mount designs.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-security-camera',
    title: 'Best Solar Security Cameras 2026',
    description:
      'Ring vs Reolink vs eufy vs Arlo vs Wyze vs Blink — wire-free solar cameras with local and cloud storage options.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-riding-mower',
    title: 'Best Electric Riding Mowers 2026',
    description:
      'EGO Z6 vs Ryobi 80V vs Greenworks vs Cub Cadet vs John Deere. Battery zero-turn and riding mowers from $3K to $8.5K.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-portable-heater',
    title: 'Best Portable Heaters 2026',
    description:
      'Mr. Heater Buddy vs DeWalt vs Lasko vs Dr. Infrared. propane and electric portable heaters for camping, garages, and patios.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-ev-charger',
    title: 'Best Home EV Chargers 2026',
    description:
      'ChargePoint vs Emporia vs Grizzl-E vs JuiceBox vs Wallbox vs Tesla, Level 2 home EV chargers from $400 to $700.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-solar-water-heater',
    title: 'Best Solar Water Heaters 2026',
    description:
      'Duda Solar vs SunEarth vs Rheem vs A.O. Smith. active and passive solar water heating systems compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-pressure-washer',
    title: 'Best Electric Pressure Washers 2026',
    description:
      'Sun Joe vs Greenworks vs Ryobi vs Karcher vs Westinghouse. corded electric power washers from 1,500 to 3,500 PSI.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-heat-pump-water-heater',
    title: 'Best Heat Pump Water Heaters 2026',
    description:
      'Rheem ProTerra vs A.O. Smith Voltex vs GE GeoSpring, hybrid heat pump water heaters with 3-4x efficiency and $2,000+ tax credits.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-ebike-rack',
    title: 'Best E-Bike Racks 2026',
    description:
      '1UP USA vs Thule vs Kuat vs Saris, hitch-mounted e-bike racks rated for 60-75 lb heavy electric bikes.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-smoker',
    title: 'Best Electric Smokers 2026',
    description:
      'Masterbuilt vs Weber vs Traeger vs Pit Boss vs Bradley — electric, pellet, and digital smokers for set-it-and-forget-it BBQ.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  // ============ 2026-04-22 EXPANSION — 46 NEW PAGES ============
  // Smart Thermostats
  {
    slug: 'nest-thermostat-review',
    title: 'Nest Thermostat Review 2026',
    description:
      'Google Nest Learning Thermostat 4th Gen — AI learning, 10-15% energy savings, Rush Hour Rewards in California.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'ecobee-thermostat-review',
    title: 'Ecobee Smart Thermostat Premium Review',
    description:
      'Built-in Alexa, SmartSensor room balancing, air quality monitoring. is ecobee the smarter choice over Nest?',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'smart-thermostat-installation',
    title: 'Smart Thermostat Installation Guide',
    description:
      'DIY in 30 minutes, wire labeling, C-wire workarounds, Title 24 compliance. Step-by-step install instructions.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  // Tankless Water Heaters
  {
    slug: 'tankless-water-heater-cost',
    title: 'Tankless Water Heater Cost 2026',
    description:
      'Unit + install price breakdown, gas, electric, condensing. Total installed cost and rebates explained.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'tankless-water-heater-vs-tank',
    title: 'Tankless vs Tank Water Heater',
    description:
      'Cost, efficiency, lifespan, and 20-year ownership math compared head-to-head.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'tankless-water-heater-pros-and-cons',
    title: 'Tankless Water Heater Pros & Cons',
    description:
      'Is a tankless water heater actually worth it? The honest buyer guide with 6 pros, 6 cons.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'rinnai-tankless-water-heater-review',
    title: 'Rinnai Tankless Water Heater Review',
    description:
      'Rinnai Sensei RX, RU, and RL series compared, Japan-made, 15-year heat exchanger warranty.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'rheem-tankless-water-heater-review',
    title: 'Rheem Tankless Water Heater Review',
    description:
      'Performance Platinum, Prestige condensing, and EcoSmart electric, the budget-friendly Rinnai alternative?',
    badge: 'Product Review',
    rating: 4.4,
    icon: 'zap',
  },
  {
    slug: 'navien-tankless-water-heater-review',
    title: 'Navien Tankless Water Heater Review',
    description:
      'NPE, NPN, and NCB combi compared, 4.7M US installs, 0.97 UEF condensing efficiency, 15-year warranty.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'noritz-tankless-water-heater-review',
    title: 'Noritz Tankless Water Heater Review',
    description:
      'NRC condensing, EZ series drop-in replacements, CB combi, 70-year-old Japanese tankless pioneer.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  // Mini Splits
  {
    slug: 'mrcool-mini-split',
    title: 'MrCool Mini Split Review',
    description:
      'DIY 4th Gen, Olympus Hyper Heat, and Advantage, the no-HVAC-tech-needed mini split everyone is buying.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'diy-mini-split',
    title: 'DIY Mini Split Guide',
    description:
      'How to install a mini split yourself. pre-charged line sets, permits, step-by-step, best DIY kits.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'gree-mini-split-review',
    title: 'Gree Mini Split Review',
    description:
      'Livo Gen 3, Sapphire, Vireo+ — world\u2019s largest mini split manufacturer compared on SEER2, price, and DIY-friendliness.',
    badge: 'Product Review',
    rating: 4.3,
    icon: 'zap',
  },
  {
    slug: 'senville-mini-split-review',
    title: 'Senville Mini Split Review',
    description:
      'LETO, AURA, and SENA compared. Amazon/Home Depot availability, quick-connect line sets, 5-year warranty.',
    badge: 'Product Review',
    rating: 4.2,
    icon: 'zap',
  },
  // Power Stations (expansion)
  {
    slug: 'ecoflow-delta-2-max-review',
    title: 'EcoFlow Delta 2 Max Review',
    description:
      '2,048 Wh LFP, 2,400W output, expandable to 6,144 Wh. The mid-tier power station upgrade worth buying?',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'battery',
  },
  {
    slug: 'ecoflow-river-3-review',
    title: 'EcoFlow River 3 Review',
    description:
      '245 Wh LFP for $259. small-footprint 3,000-cycle portable for CPAP, camping, and outages.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'battery',
  },
  {
    slug: 'ecoflow-river-3-plus-review',
    title: 'EcoFlow River 3 Plus Review',
    description:
      '286 Wh LFP (expandable to 572 Wh), 600W output with X-Boost to 1,200W. Upgraded for $399.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'battery',
  },
  {
    slug: 'ecoflow-river-2-pro-review',
    title: 'EcoFlow River 2 Pro Review',
    description:
      '768 Wh LFP workhorse for camping and CPAP, 800W output, 70-min fast charge, 3,000-cycle lifespan.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'battery',
  },
  {
    slug: 'ecoflow-delta-3-plus-review',
    title: 'EcoFlow Delta 3 Plus Review',
    description:
      '1,024 Wh LFP (expandable 5,120 Wh), 4,000-cycle lifespan, Smart Extra Battery support, the new home backup workhorse.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'battery',
  },
  {
    slug: 'anker-solix-c1000-review',
    title: 'Anker SOLIX C1000 Review',
    description:
      '1,056 Wh LFP, 1,800W output, 600W solar, 58-minute fast charge, the best mid-size power station for $999.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'battery',
  },
  {
    slug: 'bluetti-eb3a-review',
    title: 'Bluetti EB3A Review',
    description:
      '268 Wh LFP for $299 — punches above its price with Power Lifting to 1,200W and 30-min Turbo charge.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'battery',
  },
  {
    slug: 'bluetti-ac200max-review',
    title: 'Bluetti AC200Max Review',
    description:
      '2,048 Wh LFP expandable to 8,192 Wh, 2,200W continuous output, 3,500-cycle lifespan, 900W solar.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'battery',
  },
  {
    slug: 'jackery-explorer-1000-review',
    title: 'Jackery Explorer 1000 v2 Review',
    description:
      '1,070 Wh LFP upgrade (v2), 1,500W output, 4,000-cycle lifespan. The LFP-era Jackery workhorse for $999.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'battery',
  },
  {
    slug: 'whole-house-battery-backup',
    title: 'Whole House Battery Backup Guide',
    description:
      'Tesla Powerwall 3 vs Franklin vs Enphase vs EcoFlow Delta Pro Ultra — permanent vs portable, SGIP rebates, install cost.',
    badge: 'Comparison Guide',
    icon: 'battery',
  },
  // E-Bikes & Scooters (expansion)
  {
    slug: 'electric-dirt-bike',
    title: 'Best Electric Dirt Bikes 2026',
    description:
      'Sur-Ron vs Talaria vs Segway vs Kuberg vs Stark, full-size, kids, and street-legal electric dirt bikes.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'lectric-ebike',
    title: 'Lectric eBikes Review',
    description:
      'XP 3.0, XP Lite, XPedition, XPress, and ONE, Phoenix-based direct-to-consumer lineup fully compared.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'rad-power-bikes',
    title: 'Rad Power Bikes Review',
    description:
      'RadRover 6 Plus, RadRunner, RadCity, RadWagon, RadExpand, RadTrike, Seattle\u2019s largest e-bike brand compared.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'aventon-ebike',
    title: 'Aventon E-Bikes Review',
    description:
      'Aventure 3, Pace 500.3, Level 3, Soltera, Sinch.2, and Abound cargo. Torque sensor e-bikes compared.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'velotric-ebike',
    title: 'Velotric E-Bikes Review',
    description:
      'Discover 2, Nomad 1+, T1, Go, Summit, Breeze — UL 2849 certified, IPX6, SensorShift e-bikes compared.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'electric-motorcycle',
    title: 'Best Electric Motorcycles 2026',
    description:
      'Zero SR/F vs LiveWire ONE vs Energica Ego+ vs Kawasaki Ninja e-1 vs CAKE Kalk OR — street, dual-sport, off-road.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'fastest-electric-bike',
    title: 'Fastest Electric Bikes 2026',
    description:
      'Delfast, HPC, Vintage Electric, Ariel Rider, Stealth Bomber, 35+ mph Class 3 and off-road monsters.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'kids-electric-bike',
    title: 'Best Kids Electric Bikes 2026',
    description:
      'Ages 5-14 tested, Rad Power Youth, Woom UP 5, Razor MX650, Little Fiets, Segway Xyber ranked for safety.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'cheap-electric-bike',
    title: 'Best Cheap Electric Bikes 2026',
    description:
      'Under $1,000 that actually don\u2019t suck — Lectric XP Lite, Ride1Up Roadster V3, Aventon Soltera 2.5, Heybike.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'fastest-electric-scooter',
    title: 'Fastest Electric Scooters 2026',
    description:
      'Dualtron X Limited 68 mph, Weped FS, Kaabo Wolf King GT Pro, NAMI Burn-E 2 Max, Apollo Pro — adult scooters tested.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-scooter-for-adults',
    title: 'Best Electric Scooters for Adults',
    description:
      'Apollo City Pro, Segway GT2, NIU KQi3 Pro, Unagi Voyager, commuter, heavy-duty, and portable scooters compared.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'gotrax-electric-scooter',
    title: 'Gotrax Electric Scooter Review',
    description:
      'GXL V2, XR Pro, G4, G3, Apex XL, USA budget scooter brand, UL 2272 certified, $299-$699 lineup.',
    badge: 'Product Review',
    rating: 4.3,
    icon: 'zap',
  },
  // Lawn Equipment (expansion)
  {
    slug: 'ego-lawn-mower',
    title: 'EGO Lawn Mower Review',
    description:
      'Select Cut XP, Z6 zero-turn, T6 stand-on, push and self-propelled. Full EGO 56V Power+ mower lineup.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'ryobi-lawn-mower',
    title: 'Ryobi Lawn Mower Review',
    description:
      'Ryobi 40V HP Brushless vs 80V HP Ride-On vs 40V Push, Home Depot\u2019s electric mower platform compared.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'greenworks-lawn-mower',
    title: 'Greenworks Lawn Mower Review',
    description:
      '80V Pro, 60V Brushless, 40V, and CrossoverT Riding Mower compared, 3 incompatible battery platforms explained.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'dewalt-chainsaw-review',
    title: 'DeWalt Chainsaw Review',
    description:
      '60V MAX FLEXVOLT 20" DCCS690 tested, 450 cuts per charge, vs Milwaukee M18 Fuel, vs Stihl gas.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'ego-chainsaw-review',
    title: 'EGO Power+ Chainsaw Review',
    description:
      'CS1804 18" and CS1400E 14" tested, 56V Arc Lithium platform, up to 200 cuts per charge, chain brake safety.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'ryobi-chainsaw-review',
    title: 'Ryobi Chainsaw Review',
    description:
      '40V HP Brushless 18" and 14" tested. Oregon bar/chain, 100+ cuts on 4Ah, Home Depot exclusive 5-year warranty.',
    badge: 'Product Review',
    rating: 4.4,
    icon: 'zap',
  },
  {
    slug: 'ego-leaf-blower-review',
    title: 'EGO Leaf Blower Review',
    description:
      'LB7654 765 CFM backpack, LB6504 handheld, LB5804 3-speed, LB5302 PowerLoad — EGO 56V blower lineup tested.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'dewalt-leaf-blower-review',
    title: 'DeWalt Leaf Blower Review',
    description:
      '60V MAX FLEXVOLT DCBL772 125 MPH handheld and DCBL590 backpack vs Milwaukee M18 Fuel vs Stihl gas.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'ryobi-leaf-blower-review',
    title: 'Ryobi Leaf Blower Review',
    description:
      '40V HP Whisper Series 730 CFM backpack, 550 CFM Jet Fan, 110 MPH handheld. 60 dB noise rating tested.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'milwaukee-leaf-blower-review',
    title: 'Milwaukee Leaf Blower Review',
    description:
      'M18 FUEL Dual Battery Backpack 2824-20 and 2728-20 handheld, 145 MPH, jobsite-grade electric blowers.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'jackery-explorer-300-review',
    title: 'Jackery Explorer 300 Review',
    description:
      'Ultra-portable 293Wh power station at just 7.1 lbs. Perfect for camping, road trips, and charging laptops and drones.',
    badge: 'Product Review',
    rating: 4.2,
    icon: 'battery',
  },
];


export const REVIEWS_PER_PAGE = 20;
export const TOTAL_PAGES = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
