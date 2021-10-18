/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

const faker = require('faker')
const filters = require('../filters')(process.env)

module.exports = {
	// Insert values here
	regions: false,
	messageParts: {
		certainty: {
			Observed: {
				short: 'flooding started',
				long: 'flooding has started',
			},
			Likely: {
				short: 'flooding expected',
				long: 'flooding is expected',
			},
			Possible: {
				short: 'flooding possible',
				long: 'flooding is possible',
			},
		},
		response: {
			None: {
				short: 'no action needed',
				long: 'no action needed',
			},
			Monitor: {
				short: 'monitor situation',
				long: 'monitor the situation',
			},
			Avoid: {
				short: 'avoid area',
				long: 'avoid the are if you can',
			},
			Execute: {
				short: 'act now',
				long: 'carry out your flood plan',
			},
			Prepare: {
				short: 'be ready',
				long: 'be ready to carry out your flood plan',
			},
			Evacuate: {
				short: 'evacuate if able',
				long: 'evacuate the affected area if you are able',
			},
		},
	},
	savedTemplates: {
		'example-1': {
			title: 'Levels are more than 0.8mAOD',
			message:
				'This message has been issued because there is a possibility of some flooding of homes and businesses between **time** and **time** today, ((today)). Water levels are expected to be higher than usual, due to the forecast weather conditions as a surge coincides with the high water. Areas most at risk are ((area description)). For more info refer to local tide tables. Take care on coastal roads and footpaths, and don’t put yourself in unnecessary danger. We are closely monitoring the situation and not expecting the situation to escalate, or to issue anything else for the following water level rises.',
			author: faker.name.findName(),
			date: filters.randomDate(180),
		},
		'example-2': {
			title: 'Levels are more than 1.5mAOD',
			message:
				'This message has been issued because there is a possibility of some flooding of homes and businesses between **time** and **time** today, ((today)). Water levels are expected to be higher than usual, due to the forecast weather conditions as a surge coincides with the high water. Areas most at risk are ((area description)). For more info refer to local tide tables). Take care on coastal roads and footpaths, and don’t put yourself in unnecessary danger. We are closely monitoring the situation and not expecting the situation to escalate, or to issue anything else for the following water level rises.',
			author: faker.name.findName(),
			date: filters.randomDate(180),
		},
		'example-3': {
			title: 'Levels are more than 1.2mAOD',
			message:
				'This message has been issued because there is a possibility of some flooding of homes and businesses between **time** and **time** today, ((today)). Water levels are expected to be higher than usual, due to the forecast weather conditions as a surge coincides with the high water. Areas most at risk are ((area description)). For more info refer to local tide tables). Take care on coastal roads and footpaths, and don’t put yourself in unnecessary danger. We are closely monitoring the situation and not expecting the situation to escalate, or to issue anything else for the following water level rises.',
			author: faker.name.findName(),
			date: filters.randomDate(180),
		},
	},
	pronunciations: [
		{
			phrase: 'A5087',
			pronunciation: 'A50 87',
		},
		{
			phrase: 'A590',
			pronunciation: 'A5 90',
		},
		{
			phrase: 'A595',
			pronunciation: 'A 5 9 5',
		},
		{
			phrase: 'A686',
			pronunciation: 'A 6 8 6',
		},
		{
			phrase: 'Armathwait',
			pronunciation: 'Arma thwait',
		},
		{
			phrase: 'Armathwaite',
			pronunciation: 'Arma thwait',
		},
		{
			phrase: 'B5282',
			pronunciation: 'B 5 2 8 2',
		},
		{
			phrase: 'B5300',
			pronunciation: 'B 5 3 O O',
		},
		{
			phrase: 'B5320',
			pronunciation: 'B5 3 20',
		},
		{
			phrase: 'B6263',
			pronunciation: 'B 6 2 6 3',
		},
		{
			phrase: 'Bowsteads',
			pronunciation: 'Bousteads',
		},
		{
			phrase: 'Brathay',
			pronunciation: 'Brathaye',
		},
		{
			phrase: 'Brocklewath',
			pronunciation: 'Brocoli Wath',
		},
		{
			phrase: 'Burneside',
			pronunciation: 'Burnyside',
		},
		{
			phrase: 'Caldew',
			pronunciation: 'Coldew',
		},
		{
			phrase: 'Caldewgate',
			pronunciation: 'Coldew-gate',
		},
		{
			phrase: 'Coldew',
			pronunciation: 'Colldew',
		},
		{
			phrase: 'Greta',
			pronunciation: 'Greeta',
		},
		{
			phrase: 'Haverigg',
			pronunciation: 'Haverrigg',
		},
		{
			phrase: 'Irt',
			pronunciation: 'Irrt',
		},
		{
			phrase: 'Kirkoswald',
			pronunciation: 'Kirk-oswald',
		},
		{
			phrase: 'Langwathby',
			pronunciation: 'Lang-wath-be',
		},
		{
			phrase: 'Mintsfeet',
			pronunciation: 'Mints feet',
		},
		{
			phrase: 'Poaka',
			pronunciation: 'Pokah',
		},
		{
			phrase: 'Roa',
			pronunciation: 'Ro',
		},
		{
			phrase: 'Southwaite',
			pronunciation: 'Southwait',
		},
		{
			phrase: 'Spital Ing',
			pronunciation: 'Spital-ing',
		},
		{
			phrase: 'Stonethwaite',
			pronunciation: 'Stone thwait',
		},
		{
			phrase: 'A5099',
			pronunciation: 'A5 O 9 9',
		},
		{
			phrase: 'A565',
			pronunciation: 'A 5 6 5',
		},
		{
			phrase: 'A582',
			pronunciation: 'A5 8 2',
		},
		{
			phrase: 'A585',
			pronunciation: 'A5 8 5',
		},
		{
			phrase: 'A588',
			pronunciation: 'A5 8 8',
		},
		{
			phrase: 'A595',
			pronunciation: 'A5 9 5',
		},
		{
			phrase: 'Altcar',
			pronunciation: 'Olttcar',
		},
		{
			phrase: 'Altys',
			pronunciation: 'Altees',
		},
		{
			phrase: 'Ault',
			pronunciation: 'Ollt',
		},
		{
			phrase: 'Avenham',
			pronunciation: 'Ay-venham',
		},
		{
			phrase: 'Chorley',
			pronunciation: 'Choare-lee',
		},
		{
			phrase: 'Colne',
			pronunciation: 'Coane',
		},
		{
			phrase: 'Darwen',
			pronunciation: 'Darwin',
		},
		{
			phrase: 'Heysham',
			pronunciation: 'Heesham',
		},
		{
			phrase: 'Hyndburn',
			pronunciation: 'Hynburn',
		},
		{
			phrase: 'Livesey',
			pronunciation: 'Livsey',
		},
		{
			phrase: 'Lomeshaye',
			pronunciation: 'Loma-shay',
		},
		{
			phrase: 'Lonsdale',
			pronunciation: 'Lonnsdale',
		},
		{
			phrase: 'Maghull',
			pronunciation: 'Magull',
		},
		{
			phrase: 'Maricourt',
			pronunciation: 'Marry-courtte',
		},
		{
			phrase: 'Oswaldtwistle',
			pronunciation: 'Ozzultwistle',
		},
		{
			phrase: 'Pleasington',
			pronunciation: 'Plesington',
		},
		{
			phrase: 'Sharoe',
			pronunciation: 'Sharrow',
		},
		{
			phrase: 'Stannah',
			pronunciation: 'Stana',
		},
		{
			phrase: 'Stanner',
			pronunciation: 'Stan-er',
		},
		{
			phrase: 'A3072',
			pronunciation: 'A3 O 7 2',
		},
		{
			phrase: 'A386',
			pronunciation: 'A3 8 6',
		},
		{
			phrase: 'A387',
			pronunciation: 'A 3 8 7',
		},
		{
			phrase: 'A388',
			pronunciation: 'A3 8 8',
		},
		{
			phrase: 'A389',
			pronunciation: 'A3 8 9',
		},
		{
			phrase: 'A390',
			pronunciation: 'A3 90',
		},
		{
			phrase: 'B3247',
			pronunciation: 'B 3 2 4 7',
		},
		{
			phrase: 'B3254',
			pronunciation: 'B 3 2 5 4',
		},
		{
			phrase: 'B3263',
			pronunciation: 'B3 2 6 3',
		},
		{
			phrase: 'B3275',
			pronunciation: 'B3 2 7 5',
		},
		{
			phrase: 'B3297',
			pronunciation: 'B3 2 9 7',
		},
		{
			phrase: 'B3311',
			pronunciation: 'B3 3 1 1',
		},
		{
			phrase: 'Bolingey',
			pronunciation: 'Bollinjee',
		},
		{
			phrase: 'Calenick',
			pronunciation: 'Calla-nick',
		},
		{
			phrase: 'Calstock',
			pronunciation: 'Cal-stock',
		},
		{
			phrase: 'Cawsand',
			pronunciation: 'Caw sand',
		},
		{
			phrase: 'Cotehele',
			pronunciation: 'Coteal',
		},
		{
			phrase: 'Dunmere',
			pronunciation: 'Dunmeer',
		},
		{
			phrase: 'Eddystone',
			pronunciation: 'Eddy-stone',
		},
		{
			phrase: 'Egloshayle',
			pronunciation: 'Eggloss-hayle',
		},
		{
			phrase: 'Flaxmoor',
			pronunciation: 'Flaxmore',
		},
		{
			phrase: 'Golant',
			pronunciation: 'Go lant',
		},
		{
			phrase: 'Hele',
			pronunciation: 'Heel',
		},
		{
			phrase: 'Helebridge',
			pronunciation: 'Heelbridge',
		},
		{
			phrase: 'Kingsand',
			pronunciation: 'King sand',
		},
		{
			phrase: 'Laira',
			pronunciation: 'Lyra',
		},
		{
			phrase: 'Langreek',
			pronunciation: 'Lan-greek',
		},
		{
			phrase: 'Lanivet',
			pronunciation: 'Lan-ive-it',
		},
		{
			phrase: 'Lansallos',
			pronunciation: 'Lan-sall-os',
		},
		{
			phrase: 'Larrigan',
			pronunciation: 'Lah-rrigan',
		},
		{
			phrase: 'Launceston',
			pronunciation: 'Lawnston',
		},
		{
			phrase: 'Lelant',
			pronunciation: 'Le lant',
		},
		{
			phrase: 'Lerryn',
			pronunciation: 'Lere-in',
		},
		{
			phrase: 'Linketty',
			pronunciation: 'Link-itty',
		},
		{
			phrase: 'Lopwell',
			pronunciation: 'Lopp-well',
		},
		{
			phrase: 'Lynher',
			pronunciation: 'Liner',
		},
		{
			phrase: 'Meavy',
			pronunciation: 'Meevy',
		},
		{
			phrase: 'Mylor',
			pronunciation: 'Myler',
		},
		{
			phrase: 'Ottery',
			pronunciation: 'Otterie',
		},
		{
			phrase: 'Pentewan',
			pronunciation: 'Pent-yuen',
		},
		{
			phrase: 'Polruan',
			pronunciation: 'Pol-ruan',
		},
		{
			phrase: 'Polson',
			pronunciation: 'Polesen',
		},
		{
			phrase: 'Polzeath',
			pronunciation: 'Pol-zeth',
		},
		{
			phrase: 'Portloe',
			pronunciation: 'Port-low',
		},
		{
			phrase: 'Portscatho',
			pronunciation: 'PortscAtho',
		},
		{
			phrase: 'Rodds',
			pronunciation: 'Rods',
		},
		{
			phrase: 'Saltash',
			pronunciation: 'Salt-ash',
		},
		{
			phrase: "Scarlett's",
			pronunciation: 'Scarlets',
		},
		{
			phrase: 'Shaugh',
			pronunciation: 'Shore',
		},
		{
			phrase: 'Strat',
			pronunciation: 'Stratt',
		},
		{
			phrase: 'Sydenham',
			pronunciation: 'Sydnem',
		},
		{
			phrase: 'Tamar',
			pronunciation: 'Taymar',
		},
		{
			phrase: 'Tamarstone',
			pronunciation: 'Taymar-stone',
		},
		{
			phrase: 'Trago Mills',
			pronunciation: 'Traygo Mills',
		},
		{
			phrase: 'Tregony',
			pronunciation: 'Tregany',
		},
		{
			phrase: 'Trekeivesteps',
			pronunciation: 'Trekeevsteps',
		},
		{
			phrase: 'Trelion',
			pronunciation: 'Trellion',
		},
		{
			phrase: 'Trevellas',
			pronunciation: 'Tre-vell-as',
		},
		{
			phrase: 'Tywarnhayle',
			pronunciation: 'Tiewarnhayle',
		},
		{
			phrase: 'Valency',
			pronunciation: 'Vallencie',
		},
		{
			phrase: 'Yeolmbridge',
			pronunciation: 'Yelmbridge',
		},
		{
			phrase: 'A3052',
			pronunciation: 'A3 O 5 2',
		},
		{
			phrase: 'A3072',
			pronunciation: 'A3 O 7 2',
		},
		{
			phrase: 'A3121',
			pronunciation: 'A 3 1 2 1',
		},
		{
			phrase: 'A3124',
			pronunciation: 'A 3 1 2 4',
		},
		{
			phrase: 'A361',
			pronunciation: 'A3 6 1',
		},
		{
			phrase: 'A375',
			pronunciation: 'A 3 7 5',
		},
		{
			phrase: 'A377',
			pronunciation: 'A3 7 7',
		},
		{
			phrase: 'A379',
			pronunciation: 'A 3 7 9',
		},
		{
			phrase: 'A381',
			pronunciation: 'A3 8 1',
		},
		{
			phrase: 'A383',
			pronunciation: 'A3 8 3',
		},
		{
			phrase: 'A386',
			pronunciation: 'A3 8 6',
		},
		{
			phrase: 'A388',
			pronunciation: 'A3 8 8',
		},
		{
			phrase: 'A396',
			pronunciation: 'A3 9 6',
		},
		{
			phrase: 'Alswear',
			pronunciation: 'Alsweir',
		},
		{
			phrase: 'Aveton Giffard',
			pronunciation: 'Avaton Jifford',
		},
		{
			phrase: 'Aveton Gifford',
			pronunciation: 'Avaton Jifford',
		},
		{
			phrase: 'B3165',
			pronunciation: 'B 3 1 6 5',
		},
		{
			phrase: 'B3181',
			pronunciation: 'B3 1 8 1',
		},
		{
			phrase: 'B3185',
			pronunciation: 'B3 1 8 5',
		},
		{
			phrase: 'B3212',
			pronunciation: 'B3 2 1 2',
		},
		{
			phrase: 'B3220',
			pronunciation: 'B3 2 2 0',
		},
		{
			phrase: 'B3222',
			pronunciation: 'B3 2 2 2',
		},
		{
			phrase: 'B3223',
			pronunciation: 'B3 2 2 3',
		},
		{
			phrase: 'B3224',
			pronunciation: 'B3 2 2 4',
		},
		{
			phrase: 'B3226',
			pronunciation: 'B3 2 2 6',
		},
		{
			phrase: 'B3227',
			pronunciation: 'B3 2 2 7',
		},
		{
			phrase: 'B3277',
			pronunciation: 'B3 2 7 7',
		},
		{
			phrase: 'B3391',
			pronunciation: 'B3 3 9 1',
		},
		{
			phrase: 'Barnstaple',
			pronunciation: 'Barnstable',
		},
		{
			phrase: 'Bayards',
			pronunciation: 'Bayarrds',
		},
		{
			phrase: 'Beesands',
			pronunciation: 'Bee Sands',
		},
		{
			phrase: 'Bideford',
			pronunciation: 'Biddaford',
		},
		{
			phrase: 'Blackpool',
			pronunciation: 'Black pool',
		},
		{
			phrase: 'Bolham',
			pronunciation: 'Bollem',
		},
		{
			phrase: 'Bovey',
			pronunciation: 'Bovvey',
		},
		{
			phrase: 'Buckfastleigh',
			pronunciation: 'Buckfarstleigh',
		},
		{
			phrase: 'Caen',
			pronunciation: 'Cane',
		},
		{
			phrase: 'Challacombe',
			pronunciation: 'shallercombe',
		},
		{
			phrase: "Chaloner's",
			pronunciation: "Challoner's",
		},
		{
			phrase: 'Coly',
			pronunciation: 'Collie',
		},
		{
			phrase: 'Colyford',
			pronunciation: 'Collaford',
		},
		{
			phrase: 'Colyton',
			pronunciation: 'Collaton',
		},
		{
			phrase: 'Damerel',
			pronunciation: 'Damerell',
		},
		{
			phrase: 'Dolton',
			pronunciation: 'Dollton',
		},
		{
			phrase: 'Haddeo',
			pronunciation: 'Haddio',
		},
		{
			phrase: 'Hallsands',
			pronunciation: 'Hall Sands',
		},
		{
			phrase: 'Kingswear',
			pronunciation: 'Kingsweir',
		},
		{
			phrase: 'Latchmoor',
			pronunciation: 'Latch-more',
		},
		{
			phrase: 'Meethe',
			pronunciation: 'Meeth',
		},
		{
			phrase: 'Monkokehampton',
			pronunciation: 'Monkoakhampton',
		},
		{
			phrase: 'Muddlebridge',
			pronunciation: 'Muddell-bridge',
		},
		{
			phrase: 'North Tawton',
			pronunciation: 'North Taughton',
		},
		{
			phrase: 'Oakhay',
			pronunciation: 'Oak-hay',
		},
		{
			phrase: 'Ottery',
			pronunciation: 'Ottary',
		},
		{
			phrase: 'Passaford',
			pronunciation: 'Pahssaford',
		},
		{
			phrase: 'Pilton',
			pronunciation: 'Pillton',
		},
		{
			phrase: 'Powderham',
			pronunciation: 'Powderum',
		},
		{
			phrase: 'Raleigh',
			pronunciation: 'Rarleigh',
		},
		{
			phrase: 'River Taw',
			pronunciation: 'River - Taw',
		},
		{
			phrase: 'Simonsbath',
			pronunciation: 'Simmonsbath',
		},
		{
			phrase: 'Teign',
			pronunciation: 'Teen',
		},
		{
			phrase: 'Torre',
			pronunciation: 'Torr',
		},
		{
			phrase: 'Totnes',
			pronunciation: 'Tottness',
		},
		{
			phrase: 'Uffculme',
			pronunciation: 'Uffcum',
		},
		{
			phrase: 'Upottery',
			pronunciation: 'Up-ottery',
		},
		{
			phrase: 'Velator',
			pronunciation: 'Vellertaw',
		},
		{
			phrase: 'Walronds',
			pronunciation: 'Walrunds',
		},
		{
			phrase: 'Warland',
			pronunciation: 'Warrlund',
		},
		{
			phrase: 'Winsham',
			pronunciation: 'Winshum',
		},
		{
			phrase: 'A1101',
			pronunciation: 'A1 1 O 1',
		},
		{
			phrase: 'A1123',
			pronunciation: 'A 1 1 2 3',
		},
		{
			phrase: 'A422',
			pronunciation: 'A 4 2 2',
		},
		{
			phrase: 'B1041',
			pronunciation: 'B1 O 4 1',
		},
		{
			phrase: 'B645',
			pronunciation: 'B6 4 5',
		},
		{
			phrase: 'A1017',
			pronunciation: 'A 1 O 1 7',
		},
		{
			phrase: 'A1062',
			pronunciation: 'A1 O 6 2',
		},
		{
			phrase: 'A1066',
			pronunciation: 'A 1 O 6 6',
		},
		{
			phrase: 'A1079',
			pronunciation: 'A 1 O 7 9',
		},
		{
			phrase: 'A1141',
			pronunciation: 'A 1 1 4 1',
		},
		{
			phrase: 'A120',
			pronunciation: 'A1 20',
		},
		{
			phrase: 'A130',
			pronunciation: 'A1 30',
		},
		{
			phrase: 'A1307',
			pronunciation: 'A 1 3 O 7',
		},
		{
			phrase: 'A138',
			pronunciation: 'A1 3 8',
		},
		{
			phrase: 'A143',
			pronunciation: 'A 1 4 3',
		},
		{
			phrase: 'A144',
			pronunciation: 'A 1 4 4',
		},
		{
			phrase: 'A145',
			pronunciation: 'A 1 4 5',
		},
		{
			phrase: 'A146',
			pronunciation: 'A 1 4 6',
		},
		{
			phrase: 'A149',
			pronunciation: 'A1 4 9',
		},
		{
			phrase: 'Acle',
			pronunciation: 'Aycle',
		},
		{
			phrase: 'Alde',
			pronunciation: 'Ald',
		},
		{
			phrase: 'B1058',
			pronunciation: 'B 1 O 5 8',
		},
		{
			phrase: 'B1108',
			pronunciation: 'B 1 1 O 8',
		},
		{
			phrase: 'B1135',
			pronunciation: 'B 1 1 3 5',
		},
		{
			phrase: 'B1140',
			pronunciation: 'B 1 1 4 O',
		},
		{
			phrase: 'B1147',
			pronunciation: 'B 1 1 4 7',
		},
		{
			phrase: 'B1159',
			pronunciation: 'B 1 1 5 9',
		},
		{
			phrase: 'B1355',
			pronunciation: 'B 1 3 5 5',
		},
		{
			phrase: 'Beaconsfield',
			pronunciation: 'Beconsfield',
		},
		{
			phrase: 'Bloodmore',
			pronunciation: 'Blood-more',
		},
		{
			phrase: 'Blythburgh',
			pronunciation: 'Blytheburgh',
		},
		{
			phrase: 'Brent Eleigh',
			pronunciation: 'Brent Eely',
		},
		{
			phrase: 'Bure',
			pronunciation: 'Bewer',
		},
		{
			phrase: 'Burham Over',
			pronunciation: 'Burnham Overy Town',
		},
		{
			phrase: 'Chediston',
			pronunciation: 'Cheddiston',
		},
		{
			phrase: 'Cley',
			pronunciation: 'Cleye',
		},
		{
			phrase: 'Cley-next-the-sea',
			pronunciation: 'Cleye-next-the-Sea',
		},
		{
			phrase: 'Cobholm',
			pronunciation: 'Cobbum',
		},
		{
			phrase: 'Coggeshall',
			pronunciation: 'Coggershall',
		},
		{
			phrase: 'Colne',
			pronunciation: 'Coahlnnn',
		},
		{
			phrase: 'Combs',
			pronunciation: 'Coombs',
		},
		{
			phrase: 'Covehithe',
			pronunciation: 'Cove-hythe',
		},
		{
			phrase: 'Crostwick',
			pronunciation: 'Cros-wick',
		},
		{
			phrase: 'Deben',
			pronunciation: 'Deaben',
		},
		{
			phrase: 'Dengie',
			pronunciation: 'Dennjie',
		},
		{
			phrase: 'Ely',
			pronunciation: 'Eleigh',
		},
		{
			phrase: 'Fulmodeston',
			pronunciation: 'Fulmerdiston',
		},
		{
			phrase: 'Grundisburgh',
			pronunciation: 'Grunds-bruh',
		},
		{
			phrase: 'Haverhill',
			pronunciation: 'Haver-hill',
		},
		{
			phrase: 'Hedingham',
			pronunciation: 'Headingum',
		},
		{
			phrase: 'Iken',
			pronunciation: 'Eyeken',
		},
		{
			phrase: 'Maldon',
			pronunciation: 'Mauldon',
		},
		{
			phrase: 'Minsmere',
			pronunciation: 'Mins-mere',
		},
		{
			phrase: 'Monks Eleigh',
			pronunciation: 'Monks Eely',
		},
		{
			phrase: 'Mundesley',
			pronunciation: 'Mundsley',
		},
		{
			phrase: 'Mutford',
			pronunciation: 'Muttford',
		},
		{
			phrase: 'Polstead',
			pronunciation: 'Pollstead',
		},
		{
			phrase: 'Rivers Ter and Sandon Brook',
			pronunciation: 'Rivers Turr, and Sandon Brook',
		},
		{
			phrase: 'Salcott',
			pronunciation: 'Solcut',
		},
		{
			phrase: 'Semer',
			pronunciation: 'Seemer',
		},
		{
			phrase: 'Shotesham',
			pronunciation: 'Shotisham',
		},
		{
			phrase: 'South Denes',
			pronunciation: 'South Deans',
		},
		{
			phrase: 'Southchurch',
			pronunciation: 'south church',
		},
		{
			phrase: 'Southwold',
			pronunciation: 'South-wold',
		},
		{
			phrase: 'Sproughton',
			pronunciation: 'Sprawton',
		},
		{
			phrase: 'Ter',
			pronunciation: 'Ter',
		},
		{
			phrase: 'Thorpeness',
			pronunciation: 'Thorpe-ness',
		},
		{
			phrase: 'Titchwell',
			pronunciation: 'Titch-well',
		},
		{
			phrase: 'Walpole',
			pronunciation: 'Woll-pole',
		},
		{
			phrase: 'Walton',
			pronunciation: 'Wollton',
		},
		{
			phrase: 'Wat',
			pronunciation: 'What',
		},
		{
			phrase: 'Westway',
			pronunciation: 'West-way',
		},
		{
			phrase: 'Wiveton',
			pronunciation: 'Wiverton',
		},
		{
			phrase: 'Yare',
			pronunciation: 'Yair',
		},
		{
			phrase: 'A1133',
			pronunciation: 'A 1 1 3 3',
		},
		{
			phrase: 'A156',
			pronunciation: 'A 1 5 6',
		},
		{
			phrase: 'A512',
			pronunciation: 'A 5 1 2',
		},
		{
			phrase: 'A5132',
			pronunciation: 'A 5 1 3 2',
		},
		{
			phrase: 'A6005',
			pronunciation: 'A6 O O 5',
		},
		{
			phrase: 'A6006',
			pronunciation: 'A 6 O O 6',
		},
		{
			phrase: 'A607',
			pronunciation: 'A 6 O 7',
		},
		{
			phrase: 'A6097',
			pronunciation: 'A 6 O 9 7',
		},
		{
			phrase: 'A610',
			pronunciation: 'A 6 1 O',
		},
		{
			phrase: 'A614',
			pronunciation: 'A6 1 4',
		},
		{
			phrase: 'A6142',
			pronunciation: 'A6 1 4 2',
		},
		{
			phrase: 'A616',
			pronunciation: 'A6 1 6',
		},
		{
			phrase: 'A619',
			pronunciation: 'A 6 1 9',
		},
		{
			phrase: 'A631',
			pronunciation: 'A6 3 1',
		},
		{
			phrase: 'Alkborough',
			pronunciation: 'Olkbbrer',
		},
		{
			phrase: 'Alkborough',
			pronunciation: 'Olkbrer',
		},
		{
			phrase: 'B4114',
			pronunciation: 'B4 1 1 4',
		},
		{
			phrase: 'B5008',
			pronunciation: 'B 5 O O 8',
		},
		{
			phrase: 'B5010',
			pronunciation: 'B5 O 1 O',
		},
		{
			phrase: 'B5057',
			pronunciation: 'B 5 O 5 7',
		},
		{
			phrase: 'B5327',
			pronunciation: 'B 5 3 2 7',
		},
		{
			phrase: 'B5328',
			pronunciation: 'B 5 3 2 8',
		},
		{
			phrase: 'B6016',
			pronunciation: 'B6 O 1 6',
		},
		{
			phrase: 'B6179',
			pronunciation: 'B 6 1 7 9',
		},
		{
			phrase: 'B6450',
			pronunciation: 'B 6 4 5 O',
		},
		{
			phrase: 'B6521',
			pronunciation: 'B6 5 2 1',
		},
		{
			phrase: 'B6540',
			pronunciation: 'B6 5 4 O',
		},
		{
			phrase: 'B675',
			pronunciation: 'B 6 7 5',
		},
		{
			phrase: 'B676',
			pronunciation: 'B6 7 6',
		},
		{
			phrase: 'Bottle Brook',
			pronunciation: 'Bottlebrook',
		},
		{
			phrase: 'Calton on Trent',
			pronunciation: 'Carl Tunontrent',
		},
		{
			phrase: 'Carlton',
			pronunciation: 'Carl tun',
		},
		{
			phrase: 'Carlton on Trent',
			pronunciation: 'Carl Tunontrent',
		},
		{
			phrase: 'Colwick',
			pronunciation: 'Colick',
		},
		{
			phrase: 'Crowle',
			pronunciation: 'Krowl',
		},
		{
			phrase: 'Dieu',
			pronunciation: 'due',
		},
		{
			phrase: 'East and West',
			pronunciation: 'eastandwest',
		},
		{
			phrase: 'Ecclesbourne',
			pronunciation: 'Eccles bourne',
		},
		{
			phrase: 'Fernhook',
			pronunciation: 'Fern hook',
		},
		{
			phrase: 'Fledborough',
			pronunciation: 'Fledbrer',
		},
		{
			phrase: 'Fosse',
			pronunciation: 'Foss',
		},
		{
			phrase: 'Haughton',
			pronunciation: 'Haugh tun',
		},
		{
			phrase: 'Hole',
			pronunciation: 'Whole',
		},
		{
			phrase: 'Ilkeston',
			pronunciation: 'Ilk eston',
		},
		{
			phrase: 'Ironville',
			pronunciation: 'Iron Vil',
		},
		{
			phrase: 'Kegworth',
			pronunciation: 'Keg Wurth',
		},
		{
			phrase: 'Laneham',
			pronunciation: 'Laynam',
		},
		{
			phrase: 'Lowdham',
			pronunciation: 'Lau Dam',
		},
		{
			phrase: 'M180',
			pronunciation: 'M1 80',
		},
		{
			phrase: 'Matlock',
			pronunciation: 'Mat lock',
		},
		{
			phrase: 'Meaty',
			pronunciation: 'Meteor',
		},
		{
			phrase: 'Meden',
			pronunciation: 'Meedun',
		},
		{
			phrase: 'Medun',
			pronunciation: 'Meedun',
		},
		{
			phrase: 'Misson',
			pronunciation: 'Mizzon',
		},
		{
			phrase: 'Narborough',
			pronunciation: 'Narbrer',
		},
		{
			phrase: 'Oakhay',
			pronunciation: 'Oak-hay',
		},
		{
			phrase: 'Ripley',
			pronunciation: 'Rip Lee',
		},
		{
			phrase: 'Salby',
			pronunciation: 'Sileby',
		},
		{
			phrase: 'Syston',
			pronunciation: 'Sigh Stun',
		},
		{
			phrase: 'Thorpe Acre',
			pronunciation: 'Thorpacre',
		},
		{
			phrase: 'Toton',
			pronunciation: 'Towe Ton',
		},
		{
			phrase: 'Wetstone',
			pronunciation: 'whetstone',
		},
		{
			phrase: 'Whitwick',
			pronunciation: 'Whit ik',
		},
		{
			phrase: 'Winthorpe',
			pronunciation: 'Win thorp',
		},
		{
			phrase: 'A538',
			pronunciation: 'A 5 3 8',
		},
		{
			phrase: 'A557',
			pronunciation: 'A5 5 7',
		},
		{
			phrase: 'A560',
			pronunciation: 'A 5 60',
		},
		{
			phrase: 'A562',
			pronunciation: 'A5 6 2',
		},
		{
			phrase: 'A6041',
			pronunciation: 'A6 O 4 1',
		},
		{
			phrase: 'A681',
			pronunciation: 'A6 8 1',
		},
		{
			phrase: 'B5158',
			pronunciation: 'B5 1 5 8',
		},
		{
			phrase: 'B5213',
			pronunciation: 'B5 2 1 3',
		},
		{
			phrase: 'Abridge',
			pronunciation: 'Aybridge',
		},
		{
			phrase: 'Barwick',
			pronunciation: 'Barrick',
		},
		{
			phrase: 'Beane',
			pronunciation: 'Beeeen',
		},
		{
			phrase: 'Bishops Stortford',
			pronunciation: 'BishopStortford',
		},
		{
			phrase: "Bishop's Stortford",
			pronunciation: 'BishopStortford',
		},
		{
			phrase: 'Braughing',
			pronunciation: 'Bruffing',
		},
		{
			phrase: 'Chenies',
			pronunciation: 'Chaines',
		},
		{
			phrase: 'Cheshunt',
			pronunciation: 'Chesent',
		},
		{
			phrase: 'Clavering',
			pronunciation: 'Clayvering',
		},
		{
			phrase: 'Codicote',
			pronunciation: 'Coddycot',
		},
		{
			phrase: 'Colne',
			pronunciation: 'Coln',
		},
		{
			phrase: 'Creekmouth',
			pronunciation: 'Creek mouth',
		},
		{
			phrase: 'Edgware',
			pronunciation: 'Edgwear',
		},
		{
			phrase: 'Furneux',
			pronunciation: 'Furnucks',
		},
		{
			phrase: 'Hertford',
			pronunciation: 'Heartford',
		},
		{
			phrase: 'Hertingfordbury',
			pronunciation: 'Heartingfordbury',
		},
		{
			phrase: 'Iver',
			pronunciation: 'Ivur',
		},
		{
			phrase: 'Loughton',
			pronunciation: 'Loughtonn',
		},
		{
			phrase: 'Luton',
			pronunciation: 'Lutonn',
		},
		{
			phrase: 'Markyate',
			pronunciation: 'Marckyate',
		},
		{
			phrase: 'Mimram',
			pronunciation: 'Mimramm',
		},
		{
			phrase: 'Misbourne',
			pronunciation: 'Mizzbourne',
		},
		{
			phrase: 'Ongar',
			pronunciation: 'Ongur',
		},
		{
			phrase: 'Radlett',
			pronunciation: 'Radlet',
		},
		{
			phrase: 'Sacombe',
			pronunciation: 'Saycombe',
		},
		{
			phrase: 'Ver',
			pronunciation: 'Vurr',
		},
		{
			phrase: 'Walken',
			pronunciation: 'Walkun',
		},
		{
			phrase: 'Ware',
			pronunciation: 'Wear',
		},
		{
			phrase: 'Whiteway',
			pronunciation: 'White way',
		},
		{
			phrase: 'A2070',
			pronunciation: 'A2 O 7 O',
		},
		{
			phrase: 'A245',
			pronunciation: 'A 2 4 5',
		},
		{
			phrase: 'A256',
			pronunciation: 'A 2 5 6',
		},
		{
			phrase: 'A257',
			pronunciation: 'A 2 5 7',
		},
		{
			phrase: 'B2008',
			pronunciation: 'B2 O O 8',
		},
		{
			phrase: 'Bekesbourne',
			pronunciation: 'Beaksbourne',
		},
		{
			phrase: 'Benover',
			pronunciation: 'Bernover',
		},
		{
			phrase: 'Bethersden',
			pronunciation: 'Beversden',
		},
		{
			phrase: 'Beult',
			pronunciation: 'Belt',
		},
		{
			phrase: 'Bishopsbourne',
			pronunciation: 'Bishops bourne',
		},
		{
			phrase: 'Brasted',
			pronunciation: 'Braysted',
		},
		{
			phrase: 'Bromley',
			pronunciation: 'Brom li',
		},
		{
			phrase: 'Chartham',
			pronunciation: 'Charthum',
		},
		{
			phrase: 'Chilham',
			pronunciation: 'Chilhum',
		},
		{
			phrase: "D'Abernon",
			pronunciation: 'Dabernon',
		},
		{
			phrase: 'Elham',
			pronunciation: 'Eelam',
		},
		{
			phrase: 'Eltham',
			pronunciation: 'Eltum',
		},
		{
			phrase: 'Ensfield',
			pronunciation: 'Ens field',
		},
		{
			phrase: 'Godmersham',
			pronunciation: 'Godmershum',
		},
		{
			phrase: 'Greatstone',
			pronunciation: 'Great stone',
		},
		{
			phrase: 'Leigh',
			pronunciation: 'Lie',
		},
		{
			phrase: 'Littlestone',
			pronunciation: 'Little stone',
		},
		{
			phrase: 'Medway',
			pronunciation: 'Med way',
		},
		{
			phrase: 'Nailbourne',
			pronunciation: 'Nail bourne',
		},
		{
			phrase: 'Shalmsford',
			pronunciation: 'Shalmsfod',
		},
		{
			phrase: 'Stour',
			pronunciation: 'Stawar',
		},
		{
			phrase: 'Teston',
			pronunciation: 'Teeston',
		},
		{
			phrase: 'Thannington',
			pronunciation: 'Thanington',
		},
		{
			phrase: 'Tovil',
			pronunciation: 'Tovvall',
		},
		{
			phrase: 'Upnor',
			pronunciation: 'Upna',
		},
		{
			phrase: 'Westerham',
			pronunciation: 'Westurum',
		},
		{
			phrase: 'Whyteleafe',
			pronunciation: 'Whyte leafe',
		},
		{
			phrase: 'Wingham',
			pronunciation: 'Wingum',
		},
		{
			phrase: 'Wouldham',
			pronunciation: 'Waldum',
		},
		{
			phrase: 'Yalding',
			pronunciation: 'Yulding',
		},
		{
			phrase: 'A1031',
			pronunciation: 'A 1 O 3 1',
		},
		{
			phrase: 'A153',
			pronunciation: 'A 1 5 3',
		},
		{
			phrase: 'A158',
			pronunciation: 'A 1 5 8',
		},
		{
			phrase: 'B1040',
			pronunciation: 'B ten forty',
		},
		{
			phrase: 'B1240',
			pronunciation: 'B1 2 4 O',
		},
		{
			phrase: 'Boaters',
			pronunciation: 'boat ers',
		},
		{
			phrase: 'Braceborough',
			pronunciation: 'Bracebra',
		},
		{
			phrase: 'Carre Street',
			pronunciation: 'Carry Street',
		},
		{
			phrase: 'Cogenhoe',
			pronunciation: 'Koogghna',
		},
		{
			phrase: 'Coningsby',
			pronunciation: 'Conningsby',
		},
		{
			phrase: 'Conisholme',
			pronunciation: 'Conishome',
		},
		{
			phrase: 'Cowbit',
			pronunciation: 'Cubbit',
		},
		{
			phrase: 'Edenham',
			pronunciation: 'Eddnham',
		},
		{
			phrase: 'Fosdyke',
			pronunciation: 'Fozzdyke',
		},
		{
			phrase: 'Freiston',
			pronunciation: 'Freeston',
		},
		{
			phrase: 'Haltham',
			pronunciation: 'Hal thamm',
		},
		{
			phrase: 'Heighington',
			pronunciation: 'Hay ington',
		},
		{
			phrase: 'Huttoft',
			pronunciation: 'Hutofft',
		},
		{
			phrase: 'Ingoldmells',
			pronunciation: 'Ingomells',
		},
		{
			phrase: 'Kirkby',
			pronunciation: 'Kirkkby',
		},
		{
			phrase: 'Lady Wath',
			pronunciation: 'LadyWath',
		},
		{
			phrase: 'LN',
			pronunciation: 'L N',
		},
		{
			phrase: 'Louth',
			pronunciation: 'Stone pit',
		},
		{
			phrase: 'Louth',
			pronunciation: 'Louthf',
		},
		{
			phrase: 'Low Barlings',
			pronunciation: 'Low Barrlings',
		},
		{
			phrase: 'Low-lying',
			pronunciation: 'low lying',
		},
		{
			phrase: 'Maudit',
			pronunciation: 'Mauditt',
		},
		{
			phrase: 'Merefield',
			pronunciation: 'Meerfield',
		},
		{
			phrase: 'Northampton',
			pronunciation: 'North hampton',
		},
		{
			phrase: 'Pinchbeck',
			pronunciation: 'Pinnchbeck',
		},
		{
			phrase: 'River Slea',
			pronunciation: 'River Slee',
		},
		{
			phrase: 'River Witham',
			pronunciation: 'River Withum',
		},
		{
			phrase: 'Rumbold',
			pronunciation: 'Rummbold',
		},
		{
			phrase: 'Ryhall',
			pronunciation: 'Ryall',
		},
		{
			phrase: 'South Kesteven',
			pronunciation: 'South Kestephen',
		},
		{
			phrase: 'Stallingborough',
			pronunciation: 'Stallinborough',
		},
		{
			phrase: 'Stonepit',
			pronunciation: 'Stone pit',
		},
		{
			phrase: 'Swaton',
			pronunciation: 'Swayton',
		},
		{
			phrase: 'Tydd',
			pronunciation: 'Tidd',
		},
		{
			phrase: 'Watermill road',
			pronunciation: 'Water Mill road',
		},
		{
			phrase: 'Witham',
			pronunciation: 'Withm',
		},
		{
			phrase: 'Wold',
			pronunciation: 'Wwold',
		},
		{
			phrase: 'Wybers',
			pronunciation: 'Wibbers',
		},
		{
			phrase: 'Wyberton',
			pronunciation: 'Wiberton',
		},
		{
			phrase: 'Afon',
			pronunciation: 'Av on',
		},
		{
			phrase: 'AOD',
			pronunciation: 'above ordnance datum',
		},
		{
			phrase: 'BST',
			pronunciation: 'British Summer Time',
		},
		{
			phrase: 'Coed',
			pronunciation: 'Coid',
		},
		{
			phrase: 'Cwm',
			pronunciation: 'Coom',
		},
		{
			phrase: 'Cwrt',
			pronunciation: 'Court',
		},
		{
			phrase: 'Fach',
			pronunciation: 'Vach',
		},
		{
			phrase: 'FAS',
			pronunciation: 'Flood Advisory Service',
		},
		{
			phrase: 'GMT',
			pronunciation: 'Greenwich Mean Time',
		},
		{
			phrase: 'gov.uk',
			pronunciation: 'guv dot uk',
		},
		{
			phrase: 'GOV.UK',
			pronunciation: 'guv dot uk',
		},
		{
			phrase: 'info',
			pronunciation: 'information',
		},
		{
			phrase: 'LRF',
			pronunciation: 'L, R, F',
		},
		{
			phrase: 'Maes',
			pronunciation: 'Mice',
		},
		{
			phrase: 'mAOD',
			pronunciation: 'metres above ordnance datum',
		},
		{
			phrase: 'mAODN',
			pronunciation: 'metres above ordnance datum',
		},
		{
			phrase: 'metoffice',
			pronunciation: 'met office',
		},
		{
			phrase: 'NE',
			pronunciation: 'North east',
		},
		{
			phrase: 'NW',
			pronunciation: 'North west',
		},
		{
			phrase: 'Quickdial',
			pronunciation: 'quick dial',
		},
		{
			phrase: 'quickdial',
			pronunciation: 'quick dial',
		},
		{
			phrase: 'SE',
			pronunciation: 'South east',
		},
		{
			phrase: 'SW',
			pronunciation: 'South west',
		},
		{
			phrase: 'tele-conn',
			pronunciation: 'telecon',
		},
		{
			phrase: 'wind',
			pronunciation: 'windd',
		},
		{
			phrase: 'winds',
			pronunciation: 'windds',
		},
		{
			phrase: 'A167',
			pronunciation: 'A1 6 7',
		},
		{
			phrase: 'Alnmouth',
			pronunciation: 'Aln mouth',
		},
		{
			phrase: 'B1284',
			pronunciation: 'B 1 2 8 4',
		},
		{
			phrase: 'Bellingham',
			pronunciation: 'Belling ham',
		},
		{
			phrase: 'Billingham',
			pronunciation: 'Billing ham',
		},
		{
			phrase: 'Blackhall',
			pronunciation: 'Black hall',
		},
		{
			phrase: 'Browes',
			pronunciation: 'Broghs',
		},
		{
			phrase: 'Cowbar',
			pronunciation: 'Cowwbaar',
		},
		{
			phrase: 'Derwenthaugh',
			pronunciation: 'Derwenthoff',
		},
		{
			phrase: 'Estuarine',
			pronunciation: 'Estureen',
		},
		{
			phrase: 'Falstone',
			pronunciation: 'Falston',
		},
		{
			phrase: 'Greatham',
			pronunciation: 'Greath am',
		},
		{
			phrase: 'Haltwhistle',
			pronunciation: 'Holt Whistle',
		},
		{
			phrase: 'Hartlepool',
			pronunciation: 'Hartleypool',
		},
		{
			phrase: 'Haugh',
			pronunciation: 'Hoff',
		},
		{
			phrase: 'Hebron',
			pronunciation: 'Heb-ron',
		},
		{
			phrase: 'Heughenden',
			pronunciation: 'hewenden',
		},
		{
			phrase: 'High Stanners',
			pronunciation: 'Highstanners',
		},
		{
			phrase: 'Houghall',
			pronunciation: 'Hoff all',
		},
		{
			phrase: 'Hurworth',
			pronunciation: 'Hur wuth',
		},
		{
			phrase: 'InnerHaugh',
			pronunciation: 'InnerHoff',
		},
		{
			phrase: 'Lambley',
			pronunciation: 'Lambblee',
		},
		{
			phrase: 'Leven',
			pronunciation: 'Leeven',
		},
		{
			phrase: 'Low Stanners',
			pronunciation: 'Lowstanners',
		},
		{
			phrase: 'Lower Stanners',
			pronunciation: 'Lowerstanners',
		},
		{
			phrase: 'Newcomen',
			pronunciation: 'Newcowmen',
		},
		{
			phrase: 'Ovingham',
			pronunciation: 'ofvingjam',
		},
		{
			phrase: 'Pont',
			pronunciation: 'Pontt',
		},
		{
			phrase: 'Ponteland',
			pronunciation: 'Pontteeland',
		},
		{
			phrase: 'Prestwick Mill',
			pronunciation: 'PrestwickMill',
		},
		{
			phrase: 'Redcar',
			pronunciation: 'red car',
		},
		{
			phrase: 'Redeside',
			pronunciation: 'Readside',
		},
		{
			phrase: 'Redesmouth',
			pronunciation: 'Readsmouth',
		},
		{
			phrase: 'Saltburn',
			pronunciation: 'Salt-burn',
		},
		{
			phrase: 'Sedgeletch',
			pronunciation: 'Sedge letch',
		},
		{
			phrase: 'Slaggyford',
			pronunciation: 'Slaggeefurd',
		},
		{
			phrase: 'Sycamore',
			pronunciation: 'syc amor',
		},
		{
			phrase: 'The Stanners',
			pronunciation: 'Thestanners',
		},
		{
			phrase: 'Waren',
			pronunciation: 'Waaren',
		},
		{
			phrase: 'Waughold',
			pronunciation: 'Woffhold',
		},
		{
			phrase: 'Wear',
			pronunciation: 'Weir',
		},
		{
			phrase: 'Whynd',
			pronunciation: 'wind',
		},
		{
			phrase: 'Witton-le-Wear',
			pronunciation: 'Wittonn-lea-Weir',
		},
		{
			phrase: 'Wolsingham',
			pronunciation: 'Wollsingham',
		},
		{
			phrase: 'A4080',
			pronunciation: 'A4 O 8 O',
		},
		{
			phrase: 'A470',
			pronunciation: 'A4 70',
		},
		{
			phrase: 'A487',
			pronunciation: 'A4 8 7',
		},
		{
			phrase: 'A497',
			pronunciation: 'A4 9 7',
		},
		{
			phrase: 'A499',
			pronunciation: 'A4 9 9',
		},
		{
			phrase: 'A525',
			pronunciation: 'A5 2 5',
		},
		{
			phrase: 'A541',
			pronunciation: 'A5 4 1',
		},
		{
			phrase: 'A545',
			pronunciation: 'A5 4 5',
		},
		{
			phrase: 'A547',
			pronunciation: 'A5 4 7',
		},
		{
			phrase: 'A548',
			pronunciation: 'A5 4 8',
		},
		{
			phrase: 'Aber Erch Dunes',
			pronunciation: 'AberErck, Dunes',
		},
		{
			phrase: 'Abererch',
			pronunciation: 'AberErck',
		},
		{
			phrase: 'B5069',
			pronunciation: 'B 5 O 6 9',
		},
		{
			phrase: 'B5106',
			pronunciation: 'B 5 1 O 6',
		},
		{
			phrase: 'Bagillt',
			pronunciation: 'Baaguiltht',
		},
		{
			phrase: 'Betws y Coed',
			pronunciation: 'Bet oos ur kooid',
		},
		{
			phrase: 'Bryn Llwyd',
			pronunciation: 'Bryn thlwid',
		},
		{
			phrase: 'Cadach',
			pronunciation: 'Cad-ackh',
		},
		{
			phrase: 'Cae Ddol',
			pronunciation: 'kigh Ddol',
		},
		{
			phrase: 'Cae Seren',
			pronunciation: 'kigh, Seren',
		},
		{
			phrase: 'Capel',
			pronunciation: 'Cap-pel',
		},
		{
			phrase: 'Craig-y-Don',
			pronunciation: 'cry-gger Don',
		},
		{
			phrase: 'Derwenlas',
			pronunciation: "Derwen La's",
		},
		{
			phrase: 'Dol-Belidr',
			pronunciation: 'Dol Bel-iddir',
		},
		{
			phrase: 'Dolgellau',
			pronunciation: 'doll-gesh-aye',
		},
		{
			phrase: 'Dwyryd',
			pronunciation: 'Dwu-rid',
		},
		{
			phrase: 'Elwy',
			pronunciation: 'El-we',
		},
		{
			phrase: 'Erch',
			pronunciation: 'Erck',
		},
		{
			phrase: 'Fawr',
			pronunciation: 'Fawer',
		},
		{
			phrase: 'Ganllwyd',
			pronunciation: 'Gan thlwid',
		},
		{
			phrase: 'Heol y Llan',
			pronunciation: 'hayol (uh) (chlan)',
		},
		{
			phrase: 'HTM',
			pronunciation: 'H T M',
		},
		{
			phrase: 'Llanbrynmair',
			pronunciation: 'chllanbryn-mire',
		},
		{
			phrase: 'Llanddona',
			pronunciation: 'thlan ddona',
		},
		{
			phrase: 'Llandegla',
			pronunciation: 'Lland-egg lah',
		},
		{
			phrase: 'Llangollen',
			pronunciation: 'Lan goth luhn',
		},
		{
			phrase: 'Llanuwchllyn',
			pronunciation: 'thlan yookh thlin',
		},
		{
			phrase: 'Llay',
			pronunciation: 'thay',
		},
		{
			phrase: 'Lleyn',
			pronunciation: 'thlein',
		},
		{
			phrase: 'Llong',
			pronunciation: 'thllong',
		},
		{
			phrase: 'Lon-y-Cyll',
			pronunciation: 'Lon err (gyth)',
		},
		{
			phrase: 'M180',
			pronunciation: 'M1 80',
		},
		{
			phrase: 'Machynlleth',
			pronunciation: 'mack-un-chleth',
		},
		{
			phrase: 'Maenan',
			pronunciation: 'Maynan',
		},
		{
			phrase: 'Maes Ffynnon',
			pronunciation: 'Mice Vynnon',
		},
		{
			phrase: 'Mawddwy',
			pronunciation: 'Mouthwy',
		},
		{
			phrase: 'Min y Don',
			pronunciation: 'Miin, ur Don',
		},
		{
			phrase: 'Mochdre',
			pronunciation: 'Mockhh-dre',
		},
		{
			phrase: 'Mor Awel',
			pronunciation: 'Mor, Awel',
		},
		{
			phrase: 'Morfa',
			pronunciation: 'Morvah',
		},
		{
			phrase: 'Mwrog',
			pronunciation: 'Moorok',
		},
		{
			phrase: 'Parc yr Eryr',
			pronunciation: 'Parc, err  Er-ear',
		},
		{
			phrase: 'Pen Rhewl',
			pronunciation: 'Pen Riwl',
		},
		{
			phrase: 'Penial',
			pronunciation: 'Penn-yall',
		},
		{
			phrase: 'Pont ar Ddyfi',
			pronunciation: 'Pontt ar Dyfi',
		},
		{
			phrase: 'Pont Yr-Allt-Goch',
			pronunciation: 'Pontt ur, ath gokh',
		},
		{
			phrase: 'Porth yr Aur',
			pronunciation: 'Porth er eyerh',
		},
		{
			phrase: 'Pwllheli',
			pronunciation: 'Puth Hell e',
		},
		{
			phrase: 'Rhuddlan',
			pronunciation: 'Rhythlan',
		},
		{
			phrase: 'Rhyd-y-Goleu',
			pronunciation: 'Rhyd err goll aye',
		},
		{
			phrase: 'Rhydymwyn',
			pronunciation: 'Rhyd-duh-mooin',
		},
		{
			phrase: 'Rossett',
			pronunciation: 'Rosett',
		},
		{
			phrase: 'Ruthin',
			pronunciation: 'Rith-yn',
		},
		{
			phrase: 'Sarn-y-bryn-caled',
			pronunciation: 'Sarn-uh-bryn-caled',
		},
		{
			phrase: 'Trearddur',
			pronunciation: 'Treeargh The',
		},
		{
			phrase: 'Wnion',
			pronunciation: 'Oohneon',
		},
		{
			phrase: 'A473',
			pronunciation: 'A4 7 3',
		},
		{
			phrase: 'A474',
			pronunciation: 'A4 7 4',
		},
		{
			phrase: 'A489',
			pronunciation: 'A 4 8 9',
		},
		{
			phrase: 'A490',
			pronunciation: 'A 4 9 O',
		},
		{
			phrase: 'A495',
			pronunciation: 'A 4 9 5',
		},
		{
			phrase: 'Aberbechan',
			pronunciation: 'Aberbechann',
		},
		{
			phrase: 'Abercynon',
			pronunciation: 'Aberkunon',
		},
		{
			phrase: 'Aberfan',
			pronunciation: 'Abervan',
		},
		{
			phrase: 'Abermule',
			pronunciation: 'Abermiwl',
		},
		{
			phrase: 'Abertillery',
			pronunciation: 'Abertilairree',
		},
		{
			phrase: 'B438',
			pronunciation: 'B 4 3 8',
		},
		{
			phrase: 'B4381',
			pronunciation: 'B 4 3 8 1',
		},
		{
			phrase: 'B439',
			pronunciation: 'B 4 3 9',
		},
		{
			phrase: 'B4393',
			pronunciation: 'B 4 3 9 3',
		},
		{
			phrase: 'B4398',
			pronunciation: 'B 4 3 9 8',
		},
		{
			phrase: 'Bassaleg',
			pronunciation: 'Baseleg',
		},
		{
			phrase: 'Caerhowel',
			pronunciation: 'Kyre Howel',
		},
		{
			phrase: 'Cilcewydd',
			pronunciation: 'Kill care wyth',
		},
		{
			phrase: 'Cynon',
			pronunciation: 'Cunon',
		},
		{
			phrase: 'Dyffryn',
			pronunciation: 'Duffryn',
		},
		{
			phrase: 'Fawr',
			pronunciation: 'Vowr',
		},
		{
			phrase: 'Fron',
			pronunciation: 'Vron',
		},
		{
			phrase: 'Gelli',
			pronunciation: 'Gheclee',
		},
		{
			phrase: 'Lanelay',
			pronunciation: 'Lan Lay',
		},
		{
			phrase: 'Llanyrafon',
			pronunciation: 'Clan ur afon',
		},
		{
			phrase: 'Lledan',
			pronunciation: 'Ledan',
		},
		{
			phrase: 'Llwyd',
			pronunciation: 'Loid',
		},
		{
			phrase: 'Machen',
			pronunciation: 'Macen',
		},
		{
			phrase: 'Maes y felin',
			pronunciation: 'Maesyfelin',
		},
		{
			phrase: 'Maindee',
			pronunciation: 'Mayndy',
		},
		{
			phrase: 'Merthyr Tydfil',
			pronunciation: 'Merther Tydfil',
		},
		{
			phrase: 'New Tredegar',
			pronunciation: 'New Tredeegar',
		},
		{
			phrase: 'Roath',
			pronunciation: 'Rowth',
		},
		{
			phrase: 'Sirhowy',
			pronunciation: 'Sirhowee',
		},
		{
			phrase: 'Spytty Pil',
			pronunciation: 'Spitty Pill',
		},
		{
			phrase: 'St Fagans',
			pronunciation: 'Saint Faggans',
		},
		{
			phrase: 'Trehelig',
			pronunciation: 'Tre Hel ig',
		},
		{
			phrase: 'Trewern',
			pronunciation: 'Tre-wernn',
		},
		{
			phrase: 'Troedyrhiw',
			pronunciation: 'Troydurheuw',
		},
		{
			phrase: 'Uskmouth',
			pronunciation: 'Usk Mouth',
		},
		{
			phrase: 'Welshpool',
			pronunciation: 'Welsh Pool',
		},
		{
			phrase: 'Ynyshir',
			pronunciation: 'Urnicehear',
		},
		{
			phrase: 'Ystrad Mynach',
			pronunciation: 'Ustrad Munnach',
		},
		{
			phrase: 'A4066',
			pronunciation: 'A4 O 6 6',
		},
		{
			phrase: 'A4069',
			pronunciation: 'A4 O 6 9',
		},
		{
			phrase: 'A4120',
			pronunciation: 'A4 1 2 O',
		},
		{
			phrase: 'A482',
			pronunciation: 'A4 8 2',
		},
		{
			phrase: 'A483',
			pronunciation: 'A4 8 3',
		},
		{
			phrase: 'A484',
			pronunciation: 'A4 8 4',
		},
		{
			phrase: 'A486',
			pronunciation: 'A4 8 6',
		},
		{
			phrase: 'Abercraf',
			pronunciation: 'Aber Crave',
		},
		{
			phrase: 'Aberdulais',
			pronunciation: 'Aber Dulais',
		},
		{
			phrase: 'Abergarw',
			pronunciation: 'Aber garw',
		},
		{
			phrase: 'Aberkenfig',
			pronunciation: 'Aber Kenfig',
		},
		{
			phrase: 'Amman',
			pronunciation: 'Amm an',
		},
		{
			phrase: 'B4265',
			pronunciation: 'B 4 2 6 5',
		},
		{
			phrase: 'B4299',
			pronunciation: 'B 4 2 9 9',
		},
		{
			phrase: 'B4300',
			pronunciation: 'B 4 3 O O',
		},
		{
			phrase: 'B4306',
			pronunciation: 'B 4 3 O 6',
		},
		{
			phrase: 'B4309',
			pronunciation: 'B 4 3 O 9',
		},
		{
			phrase: 'B4316',
			pronunciation: 'B 4 3 1 6',
		},
		{
			phrase: 'B4318',
			pronunciation: 'B 4 3 1 8',
		},
		{
			phrase: 'B4320',
			pronunciation: 'B 4 3 2 O',
		},
		{
			phrase: 'B4327',
			pronunciation: 'B 4 3 2 7',
		},
		{
			phrase: 'B4337',
			pronunciation: 'B 4 3 3 7',
		},
		{
			phrase: 'B4343',
			pronunciation: 'B 4 3 4 3',
		},
		{
			phrase: 'B4404',
			pronunciation: 'B 4 4 O 4',
		},
		{
			phrase: 'B4410',
			pronunciation: 'B 4 4 1 O',
		},
		{
			phrase: 'B4434',
			pronunciation: 'B 4 4 3 4',
		},
		{
			phrase: 'B4476',
			pronunciation: 'B 4 4 7 6',
		},
		{
			phrase: 'Bwlch',
			pronunciation: 'Boolk',
		},
		{
			phrase: 'Bynea',
			pronunciation: 'Bin yeah',
		},
		{
			phrase: 'Caerbont',
			pronunciation: 'Kyre bont',
		},
		{
			phrase: 'Canal Side',
			pronunciation: 'Canal  Side',
		},
		{
			phrase: 'Clarach',
			pronunciation: 'Clarack',
		},
		{
			phrase: 'Cleddau',
			pronunciation: 'Cleth eye',
		},
		{
			phrase: 'Clydach',
			pronunciation: 'Clidack',
		},
		{
			phrase: 'Cothi',
			pronunciation: 'Cotthi',
		},
		{
			phrase: 'Cresselly',
			pronunciation: 'Cress Elly',
		},
		{
			phrase: 'Cwmafon',
			pronunciation: 'Coom Afon',
		},
		{
			phrase: 'Cwmbach',
			pronunciation: 'Coom back',
		},
		{
			phrase: 'Cwmtwrch',
			pronunciation: 'Coom toorck',
		},
		{
			phrase: 'Cwmtwrch Uchaf',
			pronunciation: 'Coom toorck eecaf',
		},
		{
			phrase: 'Cynin',
			pronunciation: 'Cunnin',
		},
		{
			phrase: 'Dolau',
			pronunciation: 'Dorl eye',
		},
		{
			phrase: 'Dolybont',
			pronunciation: 'Dol uh Bont',
		},
		{
			phrase: 'Dyfatty',
			pronunciation: 'Dyfatti',
		},
		{
			phrase: 'Elli',
			pronunciation: 'Etli',
		},
		{
			phrase: 'Erwlon',
			pronunciation: 'Eru lawn',
		},
		{
			phrase: 'Ewenny',
			pronunciation: 'Ewe any',
		},
		{
			phrase: 'Fawr',
			pronunciation: 'fowr',
		},
		{
			phrase: 'Felinfoel',
			pronunciation: 'Vel Invoil',
		},
		{
			phrase: 'Ffairfach',
			pronunciation: 'Fire vack',
		},
		{
			phrase: 'Ffrwdwyllt',
			pronunciation: 'Ffrwdwyltht',
		},
		{
			phrase: 'Glangors',
			pronunciation: 'Glan Gorse',
		},
		{
			phrase: "Godre'r Graig",
			pronunciation: "God re'r gra ig",
		},
		{
			phrase: 'Gogerddan',
			pronunciation: 'Go Gerr Than',
		},
		{
			phrase: 'Graig',
			pronunciation: 'Griyg',
		},
		{
			phrase: 'Grovener',
			pronunciation: 'Grovenor',
		},
		{
			phrase: 'Gwydderig',
			pronunciation: 'Gwytherig',
		},
		{
			phrase: 'Hafod',
			pronunciation: 'Havod',
		},
		{
			phrase: 'Haverfordwest',
			pronunciation: 'Haaver fordwest',
		},
		{
			phrase: 'Hoddnant',
			pronunciation: 'Hoth nant',
		},
		{
			phrase: 'Hydfron',
			pronunciation: 'Hudfron',
		},
		{
			phrase: 'Kemys',
			pronunciation: 'cem maes',
		},
		{
			phrase: 'Landore',
			pronunciation: 'Landoor',
		},
		{
			phrase: 'Laugharne',
			pronunciation: 'Larne',
		},
		{
			phrase: 'Llanbadarn',
			pronunciation: 'Clan badarn',
		},
		{
			phrase: 'Llanddowror',
			pronunciation: 'Tlan thow ror',
		},
		{
			phrase: 'Llandeilo',
			pronunciation: 'Tlan deilo',
		},
		{
			phrase: 'Llandovery',
			pronunciation: 'Tlan Dovery',
		},
		{
			phrase: 'Llandybie',
			pronunciation: 'Clan dub e air',
		},
		{
			phrase: 'Llandysul',
			pronunciation: 'Tlan dysul',
		},
		{
			phrase: 'Llanelli',
			pronunciation: 'Tlanelli',
		},
		{
			phrase: 'Llanfarian',
			pronunciation: 'Clan Farian',
		},
		{
			phrase: 'Llangadog',
			pronunciation: 'Tlan gadog',
		},
		{
			phrase: 'Llangennech',
			pronunciation: 'Tlaan Genn eck',
		},
		{
			phrase: 'Llangunnor',
			pronunciation: 'Tlan gunor',
		},
		{
			phrase: 'Llanrhystud',
			pronunciation: 'Clan Russtyd',
		},
		{
			phrase: 'Llansamlet',
			pronunciation: 'Tlan Samlet',
		},
		{
			phrase: 'Llansteffan',
			pronunciation: 'Tlan steffan',
		},
		{
			phrase: 'Llantwit',
			pronunciation: 'Thlan Twitt',
		},
		{
			phrase: 'Llanwrda',
			pronunciation: 'Tlan oor da',
		},
		{
			phrase: 'Llanybyther',
			pronunciation: 'Tlan uh butha',
		},
		{
			phrase: 'Lliedi',
			pronunciation: 'Tliedi',
		},
		{
			phrase: 'Llynfi',
			pronunciation: 'Tlynfi',
		},
		{
			phrase: 'Loughor',
			pronunciation: 'Luckor',
		},
		{
			phrase: 'Machynys',
			pronunciation: 'Mak unys',
		},
		{
			phrase: 'Maesteg',
			pronunciation: 'Micetairg',
		},
		{
			phrase: 'Melincryddan',
			pronunciation: 'Mel incry than',
		},
		{
			phrase: 'Melindwr',
			pronunciation: 'Mel in doer',
		},
		{
			phrase: 'Merthyr',
			pronunciation: 'Myrr thir',
		},
		{
			phrase: 'Min y Nant',
			pronunciation: 'Mean uh Nant',
		},
		{
			phrase: 'Minyrafon',
			pronunciation: 'Mean urr afon',
		},
		{
			phrase: 'Morlais',
			pronunciation: 'Mor lice',
		},
		{
			phrase: 'Nantyffyllon',
			pronunciation: 'Nant urr ffyl lon',
		},
		{
			phrase: 'Ogmore',
			pronunciation: 'Ogg more',
		},
		{
			phrase: 'Parc Bwtri Mawr',
			pronunciation: 'Parc bootree Mawr',
		},
		{
			phrase: 'Parc y Llyn',
			pronunciation: 'Parc uhthlyn',
		},
		{
			phrase: 'Pembrey',
			pronunciation: 'Pembrrr ei',
		},
		{
			phrase: 'Pendine',
			pronunciation: 'Pen Dine',
		},
		{
			phrase: 'Penllwyn',
			pronunciation: 'Pentlwyune',
		},
		{
			phrase: 'Penprysg',
			pronunciation: 'Penprissg',
		},
		{
			phrase: 'Penrhiwtyn',
			pronunciation: 'Pen rrue tin',
		},
		{
			phrase: 'Penrhyncoch',
			pronunciation: 'Pen rhyn cochk',
		},
		{
			phrase: 'Plas Newydd',
			pronunciation: 'Plas Newyth',
		},
		{
			phrase: 'Pont Llangorwen',
			pronunciation: 'Pontt Thlan gorrwen',
		},
		{
			phrase: 'Pont Tanycastell',
			pronunciation: 'Pont Tann uhcastethl',
		},
		{
			phrase: 'Pont Walby',
			pronunciation: 'Pon Ttwolby',
		},
		{
			phrase: 'Pontardawe',
			pronunciation: 'Pont ar Dow way',
		},
		{
			phrase: 'Pontarddulais',
			pronunciation: 'Pontt ar ddil ice',
		},
		{
			phrase: 'Pontargothi',
			pronunciation: 'Pontt are goffi',
		},
		{
			phrase: 'Pontrhydfendigaid',
			pronunciation: 'Pontt read fen diguide',
		},
		{
			phrase: 'Pontynyswen',
			pronunciation: 'Pontt un is when',
		},
		{
			phrase: 'Pwll',
			pronunciation: 'Puuulth',
		},
		{
			phrase: 'Pwllhai',
			pronunciation: 'Puuulth hai',
		},
		{
			phrase: 'Resolven',
			pronunciation: 'Resolve n',
		},
		{
			phrase: 'Rheidol',
			pronunciation: 'Ride ol',
		},
		{
			phrase: 'Rheolau',
			pronunciation: 'Reorl lie',
		},
		{
			phrase: 'Ritec',
			pronunciation: 'Writ ek',
		},
		{
			phrase: 'Talybont',
			pronunciation: 'Tal uh Bont',
		},
		{
			phrase: 'Tawe',
			pronunciation: 'Toweh',
		},
		{
			phrase: 'Teifi',
			pronunciation: 'Tive ee',
		},
		{
			phrase: 'Tondu',
			pronunciation: 'Tondee',
		},
		{
			phrase: 'Trefechan',
			pronunciation: 'Treveckan',
		},
		{
			phrase: 'Twrch',
			pronunciation: 'Toorck',
		},
		{
			phrase: 'Waun Llwyd',
			pronunciation: 'Waun Tlwyd',
		},
		{
			phrase: 'Wauneos',
			pronunciation: 'Wine oss',
		},
		{
			phrase: 'Wernffrwd',
			pronunciation: 'Wern frood',
		},
		{
			phrase: 'Wyre',
			pronunciation: 'Weer ehhh',
		},
		{
			phrase: 'Ynysderw',
			pronunciation: 'Un is derw',
		},
		{
			phrase: 'Ynysforgan',
			pronunciation: 'Un is forgan',
		},
		{
			phrase: 'Ynyslas',
			pronunciation: 'Uhniss lass',
		},
		{
			phrase: 'Ynystanglws',
			pronunciation: 'Un is tan gloose',
		},
		{
			phrase: 'Ynystawe',
			pronunciation: 'Un is Toweh',
		},
		{
			phrase: 'Yr Ysgol Gymraeg',
			pronunciation: 'Ur us gol Gumraag',
		},
		{
			phrase: 'Ysgol',
			pronunciation: 'Ussgoll',
		},
		{
			phrase: 'Ystalyfera',
			pronunciation: 'Ustal afairraa',
		},
		{
			phrase: 'Ystradgynlais',
			pronunciation: 'Ustrad Gunlice',
		},
		{
			phrase: 'Ystwyth',
			pronunciation: 'Ustwyth',
		},
		{
			phrase: 'A259',
			pronunciation: 'A 2 5 9',
		},
		{
			phrase: 'A271',
			pronunciation: 'A 2 7 1',
		},
		{
			phrase: 'A272',
			pronunciation: 'A 2 7 2',
		},
		{
			phrase: 'A281',
			pronunciation: 'A 2 8 1',
		},
		{
			phrase: 'A285',
			pronunciation: 'A 2 8 5',
		},
		{
			phrase: 'A286',
			pronunciation: 'A 2 8 6',
		},
		{
			phrase: 'A3020',
			pronunciation: 'A 3 O 2 O',
		},
		{
			phrase: 'A3057',
			pronunciation: 'A3 O 5 7',
		},
		{
			phrase: 'Adur',
			pronunciation: 'ay dur',
		},
		{
			phrase: 'Alresford',
			pronunciation: 'allsferd',
		},
		{
			phrase: 'Alver',
			pronunciation: 'alva',
		},
		{
			phrase: 'Arun',
			pronunciation: 'Arron',
		},
		{
			phrase: 'B2141',
			pronunciation: 'B2 1 4 1',
		},
		{
			phrase: 'B2233',
			pronunciation: 'B2 2 3 3',
		},
		{
			phrase: 'B3048',
			pronunciation: 'B 3 O 4 8',
		},
		{
			phrase: 'B3054',
			pronunciation: 'B 3 O 5 4',
		},
		{
			phrase: 'B3056',
			pronunciation: 'B 3 O 5 6',
		},
		{
			phrase: 'Bishops Waltham',
			pronunciation: 'bishops walltham',
		},
		{
			phrase: 'Bosham',
			pronunciation: 'bossum',
		},
		{
			phrase: 'Bramdean',
			pronunciation: 'brammm dean',
		},
		{
			phrase: 'Brockenhurst',
			pronunciation: 'brok enhurst',
		},
		{
			phrase: 'Eling',
			pronunciation: 'ealing',
		},
		{
			phrase: 'Ems',
			pronunciation: 'Emms',
		},
		{
			phrase: 'Hamble Estuary',
			pronunciation: 'hamble estuary',
		},
		{
			phrase: 'Houghton',
			pronunciation: 'howtonne',
		},
		{
			phrase: 'Itchen Abbas',
			pronunciation: 'itchen abbus',
		},
		{
			phrase: 'Itchen Estuary',
			pronunciation: 'itchen estuary',
		},
		{
			phrase: 'Kimpton',
			pronunciation: 'kim pton',
		},
		{
			phrase: 'Medmerry',
			pronunciation: 'medmery',
		},
		{
			phrase: 'Monktonmead',
			pronunciation: 'monktonmede',
		},
		{
			phrase: 'Rock a Nore',
			pronunciation: 'rock ah nor',
		},
		{
			phrase: 'Sidlesham',
			pronunciation: 'siddleshhum',
		},
		{
			phrase: 'Stockbridge',
			pronunciation: 'stock bridge',
		},
		{
			phrase: 'West Itchenor',
			pronunciation: 'west itchener',
		},
		{
			phrase: 'West Tytherly',
			pronunciation: 'west tiverly',
		},
		{
			phrase: 'Wherwell',
			pronunciation: 'werwell',
		},
		{
			phrase: 'Wyke',
			pronunciation: 'Wick',
		},
		{
			phrase: 'Yaverland',
			pronunciation: 'yaver land',
		},
		{
			phrase: 'A3102',
			pronunciation: 'A 3 1 O 2',
		},
		{
			phrase: 'A419',
			pronunciation: 'A 4 1 9',
		},
		{
			phrase: 'A420',
			pronunciation: 'A 4 20',
		},
		{
			phrase: 'A436',
			pronunciation: 'A 4 3 6',
		},
		{
			phrase: 'B4553',
			pronunciation: 'B 4 5 5 3',
		},
		{
			phrase: 'Bisham',
			pronunciation: 'Bishham',
		},
		{
			phrase: 'Ginge',
			pronunciation: 'guinge',
		},
		{
			phrase: 'A303',
			pronunciation: 'A3 O 3',
		},
		{
			phrase: 'A3033',
			pronunciation: 'A3 O 3 3',
		},
		{
			phrase: 'A356',
			pronunciation: 'A 3 5 6',
		},
		{
			phrase: 'A358',
			pronunciation: 'A3 5 8',
		},
		{
			phrase: 'A361',
			pronunciation: 'A3 6 1',
		},
		{
			phrase: 'A362',
			pronunciation: 'A3 6 2',
		},
		{
			phrase: 'A363',
			pronunciation: 'A 3 6 3',
		},
		{
			phrase: 'A370',
			pronunciation: 'A3 70',
		},
		{
			phrase: 'Abbas',
			pronunciation: 'Abbus',
		},
		{
			phrase: 'Aller',
			pronunciation: 'Aler',
		},
		{
			phrase: 'B3106',
			pronunciation: 'B 3 1 O 6',
		},
		{
			phrase: 'B3151',
			pronunciation: 'B3 1 5 1',
		},
		{
			phrase: 'B3165',
			pronunciation: 'B 3 1 6 5',
		},
		{
			phrase: 'B3168',
			pronunciation: 'B 3 1 6 8',
		},
		{
			phrase: 'B3225',
			pronunciation: 'B3 2 2 5',
		},
		{
			phrase: 'Barwick',
			pronunciation: 'Barick',
		},
		{
			phrase: 'Berkeley',
			pronunciation: 'Barkeley',
		},
		{
			phrase: 'Butham',
			pronunciation: 'Buthem',
		},
		{
			phrase: 'Callington',
			pronunciation: 'Call ington',
		},
		{
			phrase: 'Challeymead',
			pronunciation: 'Challey mead',
		},
		{
			phrase: 'Churnmead',
			pronunciation: 'Churn mead',
		},
		{
			phrase: 'Colliters',
			pronunciation: 'Colli ters',
		},
		{
			phrase: 'Cowpool',
			pronunciation: 'Cow pool',
		},
		{
			phrase: 'Dulcote',
			pronunciation: 'Dull cote',
		},
		{
			phrase: 'Episcopi',
			pronunciation: 'Episc cup e',
		},
		{
			phrase: 'Fenlyns',
			pronunciation: 'Fen lyns',
		},
		{
			phrase: 'Glenfrome',
			pronunciation: 'Glen frome',
		},
		{
			phrase: 'Gordano',
			pronunciation: 'Gor dano',
		},
		{
			phrase: 'Halsewater',
			pronunciation: 'Holes water',
		},
		{
			phrase: 'Hullavington',
			pronunciation: 'Hull avington',
		},
		{
			phrase: 'Iford',
			pronunciation: 'I furd',
		},
		{
			phrase: 'Lambrok',
			pronunciation: 'Lam brok',
		},
		{
			phrase: 'Lonsdale',
			pronunciation: 'Lons dale',
		},
		{
			phrase: 'Naite',
			pronunciation: 'Nate',
		},
		{
			phrase: 'Netham',
			pronunciation: 'Neth um',
		},
		{
			phrase: 'Newfoundland',
			pronunciation: 'New foundland',
		},
		{
			phrase: 'Princestreet',
			pronunciation: 'Prince street',
		},
		{
			phrase: 'Providance',
			pronunciation: 'Provi dunce',
		},
		{
			phrase: 'Redham',
			pronunciation: 'Redhum',
		},
		{
			phrase: 'Rhynes',
			pronunciation: 'Rhenes',
		},
		{
			phrase: 'Roundpond',
			pronunciation: 'Round pond',
		},
		{
			phrase: 'Ruishton',
			pronunciation: 'Ruistun',
		},
		{
			phrase: 'Shepperdine',
			pronunciation: 'Shepperdene',
		},
		{
			phrase: 'Sowy',
			pronunciation: 'Souw we',
		},
		{
			phrase: 'Stathe',
			pronunciation: 'Staithe',
		},
		{
			phrase: 'Steart',
			pronunciation: 'Steertt',
		},
		{
			phrase: 'Stoford',
			pronunciation: 'Stowford',
		},
		{
			phrase: 'Surmaville',
			pronunciation: 'Surma vill',
		},
		{
			phrase: 'Thicketmead',
			pronunciation: 'Thicket mead',
		},
		{
			phrase: 'Totterdown',
			pronunciation: 'Totter down',
		},
		{
			phrase: 'Twerton',
			pronunciation: 'Twurton',
		},
		{
			phrase: 'Tytherington',
			pronunciation: 'Titherington',
		},
		{
			phrase: 'Wanstrow',
			pronunciation: 'Wons strow',
		},
		{
			phrase: 'Westport',
			pronunciation: 'West port',
		},
		{
			phrase: 'Witham',
			pronunciation: 'Withum',
		},
		{
			phrase: 'Wookey',
			pronunciation: 'Woukey',
		},
		{
			phrase: 'Worle',
			pronunciation: 'Wurle',
		},
		{
			phrase: 'Worton',
			pronunciation: 'Wurton',
		},
		{
			phrase: 'Yatton',
			pronunciation: 'Yatten',
		},
		{
			phrase: 'A303',
			pronunciation: 'A3 O 3',
		},
		{
			phrase: 'A354',
			pronunciation: 'A3 5 4',
		},
		{
			phrase: 'A357',
			pronunciation: 'A3 5 7',
		},
		{
			phrase: 'A371',
			pronunciation: 'A3 7 1',
		},
		{
			phrase: 'Asker',
			pronunciation: 'Assk  cerr',
		},
		{
			phrase: 'Av',
			pronunciation: 'Ave',
		},
		{
			phrase: 'B3347',
			pronunciation: 'B3 3 4 7',
		},
		{
			phrase: 'Cerne Abbas',
			pronunciation: 'Serne Abbis',
		},
		{
			phrase: 'Cheselbourne',
			pronunciation: 'Cheselborne',
		},
		{
			phrase: 'Chitterne',
			pronunciation: 'Chhitterne',
		},
		{
			phrase: 'Cl',
			pronunciation: 'Close',
		},
		{
			phrase: 'Ct',
			pronunciation: 'Court',
		},
		{
			phrase: 'Frome',
			pronunciation: 'Froome',
		},
		{
			phrase: 'Gillingham',
			pronunciation: 'Gilingham',
		},
		{
			phrase: 'Iford',
			pronunciation: 'Eyeford',
		},
		{
			phrase: 'Iwerne Minster',
			pronunciation: 'UUrn Minster',
		},
		{
			phrase: 'Milton Abbas',
			pronunciation: 'Milton Abbis',
		},
		{
			phrase: 'Mullen',
			pronunciation: 'Mull in',
		},
		{
			phrase: 'Piddletrenthide',
			pronunciation: 'Piddle trentide',
		},
		{
			phrase: 'Stour',
			pronunciation: 'Stao-ur',
		},
		{
			phrase: 'Toller',
			pronunciation: 'Tolller',
		},
		{
			phrase: 'Winterborne Houghton',
			pronunciation: 'Winterborne Howghton',
		},
		{
			phrase: 'Wrackleford',
			pronunciation: 'Wracklefurd',
		},
		{
			phrase: 'A513',
			pronunciation: 'A 5 1 3',
		},
		{
			phrase: 'A515',
			pronunciation: 'A 5 1 5',
		},
		{
			phrase: 'A522',
			pronunciation: 'A 5 2 2',
		},
		{
			phrase: 'Basford',
			pronunciation: 'Bazford',
		},
		{
			phrase: 'Coton',
			pronunciation: 'Coaton',
		},
		{
			phrase: 'Dove',
			pronunciation: 'Duvv',
		},
		{
			phrase: 'Doveridge',
			pronunciation: 'Duvv ridge',
		},
		{
			phrase: 'Eathorpe',
			pronunciation: 'E thorpe',
		},
		{
			phrase: 'Gilwiskaw',
			pronunciation: 'Gilwiska',
		},
		{
			phrase: 'Leam',
			pronunciation: 'Lem',
		},
		{
			phrase: 'Middleway',
			pronunciation: 'Middle way',
		},
		{
			phrase: 'Queensville',
			pronunciation: 'Queensvil',
		},
		{
			phrase: 'Rea',
			pronunciation: 'Ray',
		},
		{
			phrase: 'Rocester',
			pronunciation: 'Rowster',
		},
		{
			phrase: 'Scropton',
			pronunciation: 'Scroptunn',
		},
		{
			phrase: 'Sow',
			pronunciation: 'Sau',
		},
		{
			phrase: 'Sowe',
			pronunciation: 'Sau',
		},
		{
			phrase: 'Stour',
			pronunciation: 'Stawar',
		},
		{
			phrase: 'Wellesbourne',
			pronunciation: 'Wellsbourne',
		},
		{
			phrase: 'Wychnor',
			pronunciation: 'Wych nor',
		},
		{
			phrase: 'Wyken',
			pronunciation: 'Wicken',
		},
		{
			phrase: 'A4103',
			pronunciation: 'A 4 1 O 3',
		},
		{
			phrase: 'A4104',
			pronunciation: 'A 4 1 O 4',
		},
		{
			phrase: 'A4112',
			pronunciation: 'A 4 1 1 2',
		},
		{
			phrase: 'A4113',
			pronunciation: 'A 4 1 1 3',
		},
		{
			phrase: 'A417',
			pronunciation: 'A 4 1 7',
		},
		{
			phrase: 'A438',
			pronunciation: 'A 4 3 8',
		},
		{
			phrase: 'A443',
			pronunciation: 'A 4 4 3',
		},
		{
			phrase: 'A449',
			pronunciation: 'A 4 4 9',
		},
		{
			phrase: 'A458',
			pronunciation: 'A 4 5 8',
		},
		{
			phrase: 'A528',
			pronunciation: 'A 5 2 8',
		},
		{
			phrase: 'B4123',
			pronunciation: 'B 4 1 2 3',
		},
		{
			phrase: 'B4194',
			pronunciation: 'B 4 1 9 4',
		},
		{
			phrase: 'B4195',
			pronunciation: 'B 4 1 9 5',
		},
		{
			phrase: 'B4196',
			pronunciation: 'B 4 1 9 6',
		},
		{
			phrase: 'B4204',
			pronunciation: 'B 4 2 O 4',
		},
		{
			phrase: 'B4211',
			pronunciation: 'B 4 2 1 1',
		},
		{
			phrase: 'B4213',
			pronunciation: 'B 4 2 1 3',
		},
		{
			phrase: 'B4234',
			pronunciation: 'B 4 2 3 4',
		},
		{
			phrase: 'B4362',
			pronunciation: 'B 4 3 6 2',
		},
		{
			phrase: 'B4380',
			pronunciation: 'B 4 3 8 O',
		},
		{
			phrase: 'B4399',
			pronunciation: 'B 4 3 9 9',
		},
		{
			phrase: 'B4510',
			pronunciation: 'B 4 5 1 O',
		},
		{
			phrase: 'B456',
			pronunciation: 'B 4 5 6',
		},
		{
			phrase: 'B5067',
			pronunciation: 'B 5 O 6 7',
		},
		{
			phrase: 'Bevere',
			pronunciation: 'Bev er ee',
		},
		{
			phrase: 'Brockweir',
			pronunciation: 'Brock-weir',
		},
		{
			phrase: 'Cambridge',
			pronunciation: 'Cam bridge',
		},
		{
			phrase: 'Cound',
			pronunciation: 'Kound',
		},
		{
			phrase: 'Eardisland',
			pronunciation: 'Er dis land',
		},
		{
			phrase: 'Eardiston',
			pronunciation: 'Earr diston',
		},
		{
			phrase: 'Elmdale',
			pronunciation: 'Elm dale',
		},
		{
			phrase: 'Epney',
			pronunciation: 'Eppkney',
		},
		{
			phrase: 'Frampton',
			pronunciation: 'Frammp,ton',
		},
		{
			phrase: 'Leadon',
			pronunciation: 'Leaddon',
		},
		{
			phrase: 'No Gains',
			pronunciation: 'No-Gains',
		},
		{
			phrase: 'Powick',
			pronunciation: 'Poawick',
		},
		{
			phrase: 'Purton',
			pronunciation: 'Purrton',
		},
		{
			phrase: 'Rea',
			pronunciation: 'Rey',
		},
		{
			phrase: 'Salwarpe',
			pronunciation: 'Sal-war-pe',
		},
		{
			phrase: 'Shrawardine',
			pronunciation: 'Shrawwardine',
		},
		{
			phrase: 'Stour',
			pronunciation: 'Stawar',
		},
		{
			phrase: 'Strensham',
			pronunciation: 'Stren sham',
		},
		{
			phrase: 'Vyrnwy',
			pronunciation: 'Vern wee',
		},
		{
			phrase: 'Worfe',
			pronunciation: 'Wharf',
		},
		{
			phrase: 'Yazor',
			pronunciation: 'Yazzor',
		},
		{
			phrase: 'A1174',
			pronunciation: 'A 1 1 7 4',
		},
		{
			phrase: 'A1237',
			pronunciation: 'A 1 2 3 7',
		},
		{
			phrase: 'A164',
			pronunciation: 'A 1 6 4',
		},
		{
			phrase: 'A167',
			pronunciation: 'A1 6 7',
		},
		{
			phrase: 'A171',
			pronunciation: 'A1 7 1',
		},
		{
			phrase: 'A174',
			pronunciation: 'A1 7 4',
		},
		{
			phrase: 'A658',
			pronunciation: 'A6 5 8',
		},
		{
			phrase: 'B1222',
			pronunciation: 'B 1 2 2 2',
		},
		{
			phrase: 'B1257',
			pronunciation: 'B1 2 5 7',
		},
		{
			phrase: 'B1333',
			pronunciation: 'B1 3 3 3',
		},
		{
			phrase: 'B6165',
			pronunciation: 'B 6 1 6 5',
		},
		{
			phrase: 'B6270',
			pronunciation: 'B6 2 7 O',
		},
		{
			phrase: 'B6451',
			pronunciation: 'B 6 4 5 1',
		},
		{
			phrase: 'Blacktoft',
			pronunciation: 'Black toft',
		},
		{
			phrase: 'Brandsholme',
			pronunciation: 'Brands holme',
		},
		{
			phrase: 'Bubwith',
			pronunciation: 'Bub with',
		},
		{
			phrase: 'Cattal',
			pronunciation: 'Cattle',
		},
		{
			phrase: 'Cawood',
			pronunciation: 'Kay-wood',
		},
		{
			phrase: 'Hovingham',
			pronunciation: 'Hoveringham',
		},
		{
			phrase: 'Masham',
			pronunciation: 'Massum',
		},
		{
			phrase: 'Naburn',
			pronunciation: 'Nayburn',
		},
		{
			phrase: 'Osbaldwick',
			pronunciation: 'Osbald wick',
		},
		{
			phrase: 'Ruswarp',
			pronunciation: 'Russup',
		},
		{
			phrase: 'Sculcoates',
			pronunciation: 'Scul-coats',
		},
		{
			phrase: 'Tunstall',
			pronunciation: 'Tun-stall',
		},
		{
			phrase: 'Weighton',
			pronunciation: 'Wee-ton',
		},
		{
			phrase: 'A628',
			pronunciation: 'A6 2 8',
		},
		{
			phrase: 'A629',
			pronunciation: 'A6 2 9',
		},
		{
			phrase: 'A645',
			pronunciation: 'A 6 4 5',
		},
		{
			phrase: 'A656',
			pronunciation: 'A6 5 6',
		},
		{
			phrase: 'B1220',
			pronunciation: 'B1 2 20',
		},
		{
			phrase: 'B6200',
			pronunciation: 'B6 2 O O',
		},
		{
			phrase: 'Balne',
			pronunciation: 'Balln',
		},
		{
			phrase: 'Ea Beck',
			pronunciation: 'E Beck',
		},
		{
			phrase: 'Knowsthorpe',
			pronunciation: 'Knostrop',
		},
		{
			phrase: 'Liversedge',
			pronunciation: 'Liver-sidge',
		},
		{
			phrase: 'Mytholmes',
			pronunciation: 'Myvums',
		},
		{
			phrase: 'Slaightwaite',
			pronunciation: 'Slow-it',
		},
		{
			phrase: 'Stockbridge',
			pronunciation: 'stock bridge',
		},
		{
			phrase: 'Stourton',
			pronunciation: 'Stirton',
		},
	],
}
