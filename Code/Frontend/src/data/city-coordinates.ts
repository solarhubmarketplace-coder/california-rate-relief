// =============================================================================
// city-coordinates.ts — one point per city page, for nearest-city links only.
//
// Source: U.S. Census Bureau TIGERweb, Places_CouSub_ConCity_SubMCD MapServer,
// layer 4 (Incorporated Places) or layer 5 (Census Designated Places) for the
// unincorporated communities, fields CENTLAT / CENTLON (the place's internal
// point). Queried 2026-09-22 by BASENAME within STATE '06'. GEOID in the
// comment identifies the Census place each point came from.
//
// These points are never rendered. They only order the "Solar near <city>"
// links, so a city's neighbours are the nearest live city pages rather than
// an alphabetical list. A city page with no entry here falls back to county
// order in src/lib/city-pages.ts.
// =============================================================================

export const CITY_COORDINATES: Readonly<Record<string, readonly [lat: number, lon: number]>> = {
  anaheim: [33.8389984, -117.8573937], // Anaheim city, GEOID 0602000
  aptos: [36.9911500, -121.8934565], // Aptos CDP, GEOID 0602378
  auburn: [38.8949136, -121.0777135], // Auburn city, GEOID 0603204
  bakersfield: [35.3528015, -119.0359555], // Bakersfield city, GEOID 0603526
  beaumont: [33.9083764, -116.9785403], // Beaumont city, GEOID 0604758
  'california-city': [35.1578139, -117.8722241], // California City city, GEOID 0609780
  berkeley: [37.8663942, -122.2989164], // Berkeley city, GEOID 0606000 (queried 2026-09-23)
  camarillo: [34.2229954, -119.0321552], // Camarillo city, GEOID 0610046
  carlsbad: [33.1246265, -117.2835437], // Carlsbad city, GEOID 0611194
  chico: [39.7571245, -121.8172296], // Chico city, GEOID 0613014
  'chula-vista': [32.6281388, -117.0143700], // Chula Vista city, GEOID 0613392
  concord: [37.9721841, -122.0015871], // Concord city, GEOID 0616000 (queried 2026-09-23)
  corona: [33.8615850, -117.5649056], // Corona city, GEOID 0616350
  danville: [37.8121416, -121.9698235], // Danville town, GEOID 0617988
  'el-cajon': [32.8016733, -116.9604685], // El Cajon city, GEOID 0621712
  'el-dorado-hills': [38.6749746, -121.0489390], // El Dorado Hills CDP, GEOID 0621880
  encinitas: [33.0490536, -117.2611729], // Encinitas city, GEOID 0622678
  escondido: [33.1347266, -117.0722438], // Escondido city, GEOID 0622804
  fallbrook: [33.3693279, -117.2258948], // Fallbrook CDP, GEOID 0623462
  fontana: [34.0971920, -117.4597869], // Fontana city, GEOID 0624680
  fremont: [37.5246203, -121.9950257], // Fremont city, GEOID 0626000
  fresno: [36.7829379, -119.7936074], // Fresno city, GEOID 0627000
  glendale: [34.1819184, -118.2467980], // Glendale city, GEOID 0630000
  'grass-valley': [39.2203048, -121.0526538], // Grass Valley city, GEOID 0630798
  'half-moon-bay': [37.4685155, -122.4380764], // Half Moon Bay city, GEOID 0631708
  hayward: [37.6273710, -122.1041832], // Hayward city, GEOID 0633000
  hemet: [33.7340679, -116.9968083], // Hemet city, GEOID 0633182
  hollister: [36.8556176, -121.3995445], // Hollister city, GEOID 0634120
  'huntington-beach': [33.6955110, -118.0023610], // Huntington Beach city, GEOID 0636000
  irvine: [33.6772013, -117.7738402], // Irvine city, GEOID 0636770
  'lake-elsinore': [33.6846868, -117.3344535], // Lake Elsinore city, GEOID 0639486
  lakewood: [33.8470755, -118.1221583], // Lakewood city, GEOID 0639892
  lancaster: [34.6934638, -118.1753047], // Lancaster city, GEOID 0640130 (queried 2026-09-23)
  lincoln: [38.8774847, -121.3044800], // Lincoln city, GEOID 0641474
  livermore: [37.6867558, -121.7606574], // Livermore city, GEOID 0641992
  lodi: [38.1218057, -121.2930667], // Lodi city, GEOID 0642202
  'long-beach': [33.7796092, -118.1681783], // Long Beach city, GEOID 0643000
  'los-angeles': [34.1069326, -118.4112607], // Los Angeles city, GEOID 0644000
  manteca: [37.7924888, -121.2265580], // Manteca city, GEOID 0645484
  marina: [36.6835160, -121.7916540], // Marina city, GEOID 0645778
  menifee: [33.6909262, -117.1848746], // Menifee city, GEOID 0646842
  merced: [37.3116235, -120.4706983], // Merced city, GEOID 0646898
  modesto: [37.6377640, -121.0029887], // Modesto city, GEOID 0648354
  monterey: [36.6012840, -121.8830093], // Monterey city, GEOID 0648872
  'moreno-valley': [33.9243763, -117.2043332], // Moreno Valley city, GEOID 0649270
  'mountain-view': [37.4005649, -122.0795486], // Mountain View city, GEOID 0649670
  murrieta: [33.5743760, -117.1906785], // Murrieta city, GEOID 0650076
  napa: [38.2974793, -122.3010855], // Napa city, GEOID 0650258
  oakland: [37.7695164, -122.2244858], // Oakland city, GEOID 0653000
  oceanside: [33.2246458, -117.3084145], // Oceanside city, GEOID 0653322
  ontario: [34.0392592, -117.6064073], // Ontario city, GEOID 0653896
  'pacific-grove': [36.6224077, -121.9262315], // Pacific Grove city, GEOID 0654848
  'palm-desert': [33.7377747, -116.3695003], // Palm Desert city, GEOID 0655184
  'palm-springs': [33.8015805, -116.5380755], // Palm Springs city, GEOID 0655254
  pasadena: [34.1596757, -118.1388655], // Pasadena city, GEOID 0656000
  perris: [33.7898009, -117.2233475], // Perris city, GEOID 0656700
  petaluma: [38.2421637, -122.6266387], // Petaluma city, GEOID 0656784
  pleasanton: [37.6663228, -121.8804974], // Pleasanton city, GEOID 0657792
  'rancho-cordova': [38.5736650, -121.2527201], // Rancho Cordova city, GEOID 0659444
  'rancho-cucamonga': [34.1306095, -117.5621696], // Rancho Cucamonga city, GEOID 0659451
  redding: [40.5702465, -122.3655747], // Redding city, GEOID 0659920 (queried 2026-09-23)
  redlands: [34.0511294, -117.1711567], // Redlands city, GEOID 0659962
  richmond: [37.9517605, -122.3602500], // Richmond city, GEOID 0660620
  vacaville: [38.3586717, -121.9673440], // Vacaville city, GEOID 0681554 (queried 2026-09-23)
  riverside: [33.9381301, -117.3949083], // Riverside city, GEOID 0662000
  rocklin: [38.8074883, -121.2487164], // Rocklin city, GEOID 0662364
  roseville: [38.7702963, -121.3196342], // Roseville city, GEOID 0662938
  sacramento: [38.5676011, -121.4684797], // Sacramento city, GEOID 0664000
  salinas: [36.6882842, -121.6316728], // Salinas city, GEOID 0664224
  'san-bernardino': [34.1423578, -117.2950957], // San Bernardino city, GEOID 0665000
  'san-clemente': [33.4497564, -117.6102053], // San Clemente city, GEOID 0665084
  'san-diego': [32.8303240, -117.1227002], // San Diego city, GEOID 0666000
  'san-francisco': [37.7600883, -122.6941393], // San Francisco city, GEOID 0667000
  'san-jacinto': [33.7969433, -116.9915163], // San Jacinto city, GEOID 0667112
  'san-jose': [37.3013987, -121.8484394], // San Jose city, GEOID 0668000
  'san-luis-obispo': [35.2663432, -120.6688479], // San Luis Obispo city, GEOID 0668154
  'san-marcos': [33.1352559, -117.1743034], // San Marcos city, GEOID 0668196
  'san-mateo': [37.5604010, -122.3109648], // San Mateo city, GEOID 0668252
  'santa-ana': [33.7366893, -117.8817818], // Santa Ana city, GEOID 0669000
  'santa-barbara': [34.4056511, -119.7133939], // Santa Barbara city, GEOID 0669070
  'santa-clarita': [34.4198909, -118.4988804], // Santa Clarita city, GEOID 0669088
  'santa-cruz': [36.9733787, -122.0355326], // Santa Cruz city, GEOID 0669112
  'santa-rosa': [38.4458044, -122.7067794], // Santa Rosa city, GEOID 0670098
  seaside: [36.6223941, -121.8203947], // Seaside city, GEOID 0670742
  'simi-valley': [34.2662409, -118.7489736], // Simi Valley city, GEOID 0672016
  sonoma: [38.2903313, -122.4598310], // Sonoma city, GEOID 0672646
  stockton: [37.9764734, -121.3095246], // Stockton city, GEOID 0675000
  sunnyvale: [37.3857409, -122.0263936], // Sunnyvale city, GEOID 0677000
  temecula: [33.4927981, -117.1314136], // Temecula city, GEOID 0678120
  'thousand-oaks': [34.1913548, -118.8755788], // Thousand Oaks city, GEOID 0678582
  tracy: [37.7266015, -121.4522865], // Tracy city, GEOID 0680238
  tulare: [36.1996942, -119.3362487], // Tulare city, GEOID 0680644
  vallejo: [38.1070939, -122.2627404], // Vallejo city, GEOID 0681666
  ventura: [34.2675230, -119.2542951], // San Buenaventura (Ventura) city, GEOID 0665042
  victorville: [34.5277034, -117.3536343], // Victorville city, GEOID 0682590
  visalia: [36.3288143, -119.3275007], // Visalia city, GEOID 0682954
  'walnut-creek': [37.9024264, -122.0398557], // Walnut Creek city, GEOID 0683346
  watsonville: [36.9216950, -121.7709886], // Watsonville city, GEOID 0683668
  westminster: [33.7523083, -117.9939825], // Westminster city, GEOID 0684550
  wildomar: [33.6172783, -117.2583117], // Wildomar city, GEOID 0685446
  winchester: [33.7146079, -117.0774331], // Winchester CDP, GEOID 0685894
  windsor: [38.5422826, -122.8088032], // Windsor town, GEOID 0685922
  'yorba-linda': [33.8890131, -117.7712954], // Yorba Linda city, GEOID 0686832 (queried 2026-09-23)
  'yuba-city': [39.1322915, -121.6394821], // Yuba City city, GEOID 0686972
  yucaipa: [34.0335696, -117.0428872], // Yucaipa city, GEOID 0687042
};
