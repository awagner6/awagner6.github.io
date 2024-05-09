export const puzzles = [
    
    {
        id: 1,
        solution: ["SNAKE", "FROG", "STARFISH", "ANT", "SPIDER", "CRAB", "CENTIPEDE"],
        initialOrderSequence: "6417235",
        theme: "Animals by limb count",
        hint: "Life and limb",
        hint2: "An arm and a leg",
        post_solve: ["SNAKE: 0", "FROG: 4", "STARFISH: 5", "ANT: 6", "SPIDER: 8", "CRAB: 10", "CENTIPEDE: ~30 (not 100!)" ],
        revAllowed: true
    },
    {
        id: 2,
        solution: ["8 BALL", "CREDIT CARD", "ARMY CORPORAL", "ADIDAS LOGO", "THE CAT IN THE HAT'S HAT", "AMERICAN FLAG", "ZEBRA"],
        initialOrderSequence: "3162745",
        theme: "Stripe count",
        hint: "What's my line?",
        hint2: "Stripe count",
        post_solve: ["8 BALL: 0", "CREDIT CARD: 1", "ARMY CORPORAL: 2", "ADIDAS LOGO: 3", "THE CAT IN THE HAT'S HAT: 5", "AMERICAN FLAG: 13", "ZEBRA: many"],
        revAllowed: true
    },
    {
        id: 3,
        solution: ["MARINARA SAUCE", "KUMQUAT", "POLENTA", "BRUSSELS SPROUTS", "GORGONZOLA VEINS", "FORBIDDEN RICE", "UBE ICE CREAM"],
        initialOrderSequence: "4153726",
        theme: "Colorful foods in ROY G BIV order",
        hint: "Taste the rainbow",
        hint2: "ROY G BIV order",
        post_solve: ["Marinara sauce: Red", "Kumquat: Orange", "Polenta: Yellow", "Brussels sprouts: Green", "Gorgonzola veins: Blue", "Forbidden rice: Indigo", "Ube ice cream: Violet"],
        revAllowed: true
    },
    {
        id: 4,
        solution: ["ONE DOLLAR BILL", "NICKEL", "TWENTY DOLLAR BILL", "PENNY", "FIFTY DOLLAR BILL", "DIME", "HALF DOLLAR"],
        initialOrderSequence: "3475612",
        theme: "Money in order of president",
        hint: "Face forward",
        hint2: "Presidential procession",
        post_solve: ["$1: Washington (1st)", "5¢: Jefferson (3rd)", "$20: Jackson (7th)", "$5: Lincoln (16th)", "$50: Grant (18th)", "10¢: FDR (32nd)", "50¢: JFK (35th)"],
        revAllowed: true
    },
    {
        id: 5,
        solution: ["DORITO", "CHESSBOARD", "FLAG OF NEPAL", "UTAH", "STOP SIGN", "CANADIAN LOONIE", "GLOBE THEATRE"],
        initialOrderSequence: "6527143",
        theme: "Number of sides",
        hint: "So edgy!",
        hint2: "Shapes",
        post_solve: ["Dorito: 3", "Chessboard: 4", "Flag of Nepal: 5", "Utah: 6", "Stop sign: 8", "Loonie: 11", "Globe: 20 (not quite round!)"],
        revAllowed: true
    },
    {
        id: 6,
        solution: ["BIRTHDAY", "BLUE MOON", "WORLD CUP", "US CENSUS", "CICADA EMERGENCE CYCLE", "ROYAL JUBILEE", "HALLEY'S COMET FLYBY"],
        initialOrderSequence: "2735164",
        theme: "Frequencies:<br>happens every...",
        hint: "Often times",
        hint2: "Frequencies",
        post_solve: ["Birthday: Every year", "Blue moon: 2-3 years", "World cup: 4 years", "US Census: 10 years", "Cicada emergence: 13 or 17 years", "Royal Jubilee: 25 years", "Halley's Comet flyby: 75-79 years"],
        revAllowed: true
    },
    {
        id: 7,
        solution: ["HELLO", "BONJOUR", "GUTEN TAG", "TUDO BEM", "HOLA", "JAMBO", "XIN CHÀO"],
        initialOrderSequence: "2637514",
        theme: "Languages alphabetically (exonyms)",
        hint: "Linguistic ABCs",
        hint2: "Languages A-to-Z",
        post_solve: ["Hello: English", "Bonjour: French", "Guten tag: German", "Tudo bem: Portuguese", "Hola: Spanish", "Jambo: Swahili", "Xin chào: Vietnamese"],
        revAllowed: false
    },
    {
        id: 8,
        solution: ["SUMO", "SOCCER", "HOCKEY", "AMERICAN FOOTBALL", "BASEBALL", "BOWLING", "GOLF"],
        initialOrderSequence: "7135426",
        theme: "Number of subdivisions in a game",
        hint: "Game breaks",
        hint2: "Quarters, periods, innings...",
        post_solve: ["Sumo: 1 bout", "Soccer: 2 halves", "Hockey: 3 periods", "American football: 4 quarters", "Baseball: 9 innings", "Bowling: 10 frames", "Golf: 18 holes"],
        revAllowed: true
    },
        {
        id: 9,
        solution: ["SLEEPY HOLLOW HORSEMAN", "STATUE OF LIBERTY", "CATDOG", "CERBERUS", "MOUNT RUSHMORE", "HYDRA", "EASTER ISLAND"],
        initialOrderSequence: "3715462",
        theme: "Head count",
        hint: "Bean counter",
        hint2: "Head count",
        post_solve: ["Headless Horseman: 0", "Statue of Liberty: 1", "CatDog: 2", "Cerberus: 3", "Mount Rushmore: 4", "Hyrdra: 9", "Easter Island: 1,043"],
        revAllowed: true        
    },
    {
        id: 10,
        solution: ["TERA", "GIGA", "MEGA", "KILO", "MICRO", "NANO", "PICO"],
        initialOrderSequence: "5361724",
        theme: "Prefixes of magnitude",
        hint: "SIzes",
        hint2: "Prefixes of magnitude",
        post_solve: ["Tera: trillion", "Giga: billion", "Mega: million", "Kilo: thousand", "Micro: millionth", "Nano: billionth", "Pico: trillionth"],
        revAllowed: true
    },
    {
        id: 11,
        solution: ["TEXAS COUNTRY DANCE NAME", "ALCOHOLICS ANONYMOUS", "HITCHCOCK MOVIE TITLE", "ROCKY MONTAGE STAIRS", "INSTRUCTIONS FOR LEGO EIFFEL TOWER", "EIFFEL TOWER", "DAILY WALKING GOAL"],
        initialOrderSequence: "3761542",
        theme: "Step counts",
        hint: "Step it up",
        hint2: "Counting paces",
        post_solve: ["Texas: two-step", "AA: twelve steps", "Hitchcock: 39 Steps", "Rocky montage: 72 steps", "LEGO Eiffel Tower instructions: 692 steps", "Eiffel Tower: 1665 steps", "Daily walking goal: 10000 steps"],
        revAllowed: true
    },
    {
        id: 12,
        solution: ["DODO", "PREREQUISITE", "PANTOMIMING", "DO YOURSELF A FAVOR", "MISO SOUP", "MALALA", "PETITION"],
        initialOrderSequence: "3461572",
        theme: "Hidden doubled musical scale",
        hint: "Duly noted",
        hint2: "The Sound of Music x2",
        post_solve: ["(Dodo)", "P(rere)quisite", "Panto(mimi)ng", "Do yoursel(f a fa)vor", "Mi(so so)up", "Ma(lala)", "Pe(titi)on"],
        revAllowed: true
    },
    {
        id: 13,
        solution: ["ERHU", "UKELELE", "GUITAR", "MANDOLIN", "SITAR", "CONCERT HARP", "GRAND PIANO"],
        initialOrderSequence: "5621473",
        theme: "Instrument string count",
        hint: "Plucky numbers",
        hint2: "Strings together",
        post_solve: ["Erhu: 2", "Ukelele: 4", "Guitar: 6", "Mandolin: 8", "Sitar: 18-21", "Concert harp: 47", "Grand piano: ~230"],
        revAllowed: true
    },
    {
        id: 14,
        solution: ["HAT TRICK", "DOZEN", "BAKER'S DOZEN", "SCORE", "CENTURY", "GROSS", "GRAND"],
        initialOrderSequence: "3516472",
        theme: "Non-numerical<br>number words",
        hint: "Word counts",
        hint2: "Non-number number words",
        post_solve: ["Hat trick: 3", "Dozen: 12", "Baker's dozen: 13", "Score: 20", "Century: 100", "Gross: 144", "Grand: 1000"],
        revAllowed: true
    },
    {
        id: 15,
        solution: ["FEET", "BRAIN LOBES", "FINGERS", "RIBS", "TEETH", "VERTEBRAE", "CHROMOSOMES"],
        initialOrderSequence: "4517362",
        theme: "Average amounts in the human body",
        hint: "Sum body",
        hint2: "Average amounts in the human body",
        post_solve: ["Feet: 2", "Brain lobes: 6", "Fingers: 10", "Ribs: 24", "Teeth: 32", "Vertebrae: 33", "Chromosomes: 46"],
        revAllowed: true       
    },
    {
        id: 16,
        solution: ["8", "4", "9", "1", "6", "10", "0"],
        initialOrderSequence: "7425136",
        theme: "Numbers, alphabetically",
        hint: "Numberheads",
        hint2: "First letters",
        post_solve: ["Eight", "Four", "Nine", "One", "Six", "Ten", "Zero"],
        revAllowed: true
    },
    {
        id: 17,
        solution: ["WORD", "GAME", "ANIMAL", "HOUSE", "PLANT", "FOOD", "CHAIN"],
        initialOrderSequence: "5374261",
        theme: "Word chain from 'Word' to 'Chain'",
        hint: "Word chain",
        hint2: "2-word pairs",
        post_solve: ["Word game", "Game animal", "Animal house", "House plant", "Plant food", "Food chain"],
        revAllowed: false
    },
    {
        id: 18,
        solution: ["MEXICO", "GUATEMALA", "HONDURAS", "NICARAGUA", "COSTA RICA", "PANAMA", "COLOMBIA"],
        initialOrderSequence: "4721653",
        theme: "North to South America",
        hint: "On the map",
        hint2: "North to South",
        post_solve: ["Mexico", "Guatemala", "Honduras", "Nicaragua", "Costa Rica", "Panama", "Colombia"],
        revAllowed: false
    },
    {
        id: 19,
        solution: ["BAGEL", "NOSE", "BOWLING BALL", "POOL TABLE", "WIFFLE BALL", "CROC SHOE", "SPONGE"],
        initialOrderSequence: "4726315",
        theme: "Holes/pockets/cavities",
        hint: "The pits",
        hint2: "W-hole numbers",
        post_solve: ["Bagel: 1", "Nose: 2", "Bowling ball: 3", "Pool table: 6", "Wiffle ball: 8", "Croc shoe: 13", "Sponge: many"],
        revAllowed: true        
    },
    {
        id: 20,
        solution: ["STONE", "BRONZE", "IRON", "MIDDLE", "MACHINE", "ATOMIC", "INFORMATION"],
        initialOrderSequence: "5241736",
        theme: "Chronological ages by beginning",
        hint: "Eras tour",
        hint2: "Ages of history",
        post_solve: ["Stone age: ~3.4 million BCE", "Bronze age: ~3000 BCE", "Iron age: ~1200 BCE", "Middle ages: ~500 CE", "Machine age: ~1880 CE", "Atomic age: 1945 CE", "Information age: ~1970s"],
        revAllowed: true
    },
    {
        id: 21,
        solution: ["EVERGREEN NEEDLE", "SLEEVELESS TEE", "RENDER SPEECHLESS", "BEST KEPT SECRET", "CRESCENT WRENCH", "STRESS TEST", "STRENGTHS"],
        initialOrderSequence: "2761534",
        theme: "Only-E words by E count",
        hint: "Counties",
        hint2: "Check the vowels",
        post_solve: ["Evergreen needle: 7", "Sleeveless tee: 6", "Render speechless: 5", "Best kept secret: 4", "Crescent wrench: 3", "Stress test: 2", "Strengths: 1"],
        revAllowed: true
    },
    {
        id: 22,
        solution: ["NO HEAVEN", "YOU TRY", "BELOW US", "ONLY SKY", "THE PEOPLE", "FOR TODAY", "OOOOOOH"],
        initialOrderSequence: "2657413",
        theme: "Line-ending lyrics of Imagine",
        hint: "Imagine that!",
        hint2: "Lennon lyrics",
        post_solve: ["Imagine there's NO HEAVEN", "It's easy if YOU TRY", "No hell BELOW US", "Above us, ONLY SKY", "Imagine all THE PEOPLE", "Living FOR TODAY", "OOOOOOH"],
        revAllowed: false
    },
    {
        id: 23,
        solution: ["SNICKERS", "TWIX", "HOSTESS HOHOS", "KITKAT", "STARBURSTS", "MENTOS", "SKITTLES"],
        initialOrderSequence: "4261735",
        theme: "Snack food items per package",
        hint: "Junk heap",
        hint2: "Amount per pack",
        post_solve: ["Snickers: 1 bar", "Twix: 2 bars", "Hostess Hohos: 3 cakes", "Kitkat: 4 bars", "Starbursts: 12 squares", "Mentos: 14 discs", "Skittles: many shells"],
        revAllowed: true
    },
    {
        id: 24,
        solution: ["Players per team roster", "Bat length in inches", "Outs per standard game", "Feet between bases", "Avg. game length in minutes", "Games per season per team", "Avg. stadium seating capacity"],
        initialOrderSequence: "6274135",
        theme: "MLB stat counts",
        hint: "MLB ballpark estimates",
        hint2: "Baseball counts",
        post_solve: ["Players per team: 26-28", "Bat length in inches: 35-37", "Outs per game: 54 (or 51)", "Feet between bases: 90", "Avg game length: 158 min", "Games per season per team: 162", "Avg. stadium capacity: ~45,000"],
        revAllowed: true
    },
    {
        id: 25,
        solution: ["BELL", "POBLANO", "JALAPEÑO", "SERRANO", "CAYENNE", "HABANERO", "GHOST"],
        initialOrderSequence: "2561473",
        theme: "Peppers by Scoville heat level",
        hint: "Spice it up",
        hint2: "Scoville scale",
        post_solve: ["Bell: 0", "Poblano: ~1,500", "Jalapeño: ~3,500", "Serrano: ~15,000", "Cayenne: ~40,000", "Habanero: ~250,000", "Ghost: ~1,000,000"],
        revAllowed: true        
    },
    {
        id: 26,
        solution: ["FRODO BAGGINS", "RINGLING BROS. CIRCUS", "OLYMPIC FLAG", "ARIANA GRANDE SONG", "DANTE'S INFERNO", "OLYMPIC ARCHERY TARGET", "URANUS"],
        initialOrderSequence: "6451732",
        theme: "Rings / Circles",
        hint: "Ring 'em up",
        hint2: "Ring counts",
        post_solve: ["Frodo Baggins: 1", "Ringling bros.: 3", "Olympic flag: 5", "Ariana Grande song: 7", "Dante's Inferno: 9", "Olympic archery target: 10", "Uranus: 13 (known)"],
        revAllowed: true
    },
    {
        id: 27,
        solution: ["MEXICO CITY MEXICO", "DENVER COLORADO", "KATHMANDU NEPAL", "NEW DELHI INDIA", "AMSTERDAM THE NETHERLANDS", "DEATH VALLEY", "DEAD SEA SHORES"],
        initialOrderSequence: "3475162",
        theme: "Elevations (ft)",
        hint: "Highs and lows",
        hint2: "Elevations",
        post_solve: ["Mexico City: 7,349", "Denver: 5,280", "Kathmandu: 4,593", "New Delhi: 689", "Amsterdam: -7", "Death Valley: -282", "Dead Sea shores: -1,412"],
        revAllowed: false
    },
    {
        id: 28,
        solution: ["MESSENGER GOD", "GOD OF LOVE", "GOD OF WAR", "KING OF THE GODS", "GOD OF THE HARVEST", "GOD OF THE SEA", "GOD OF THE HEAVENS"],
        initialOrderSequence: "5231764",
        theme: "Planets by namesake deity",
        hint: "Heavenly bodies",
        hint2: "Planets by god",
        post_solve: ["Messenger: Mercury", "Love: Venus", "War: Mars", "King: Jupiter", "Harvest: Saturn", "Sea: Neptune", "Heavens: Uranus"],
        revAllowed: true
    },
    
    {
        id: 29,
        solution: ["NORMAL CONVERSATION", "HAIRDRYER", "FIRETRUCK SIREN", "SEATTLE SEAHAWKS CROWD RECORD", "JET ENGINE", "KRAKATOA ERUPTION", "SPERM WHALE CLICK"],
        initialOrderSequence: "2734156",
        theme: "Sounds by decibel level",
        hint: "Volume one",
        hint2: "Decibel scale",
        post_solve: ["Normal conversation: ~60 dB", "Hairdryer: 80-90 dB", "Firetruck siren: ~120 dB", "Seahawks crowd record: 137.6 dB(!)", "Jet Engine: 140 dB", "Krakatoa eruption: 180 dB", "Sperm whale click: 230 dB(!!!)"],
        revAllowed: true        
    },
    {
        id: 30,
        solution: ["10-MINUTE SHOWER", "OLYMPIC SWIMMING POOL", "NIAGARA FALLS PER SECOND", "GEORGIA AQUARIUM", "CENTRAL PARK RESERVOIR", "HURRICANE AVG. DAILY RAINFALL", "LAKE TAHOE"],
        initialOrderSequence: "5176342",
        theme: "Water volumes in gallons",
        hint: "Volume two",
        hint2: "Water in gallons",
        post_solve: ["10-minute shower: ~20-25", "Olympic swimming pool: 660,000", "Niagara falls per second: ~700,000", "Georgia Aquarium: 11 million", "Central Park Reservoir: 1 billion", "Hurricane avg. daily rainfall: 2.4 trillion", "Lake Tahoe: 39 trillion"],
        revAllowed: true
    },
    {
        id: 31,
        solution: ["TIC-TAC-TOE", "CHESS", "SUDOKU", "STRATEGO", "SCRABBLE", "GO", "NEW YORK TIMES SUNDAY CROSSWORD"],
        initialOrderSequence: "7513264",
        theme: "Square game boards by size",
        hint: "Squaring off",
        hint2: "Board dimensions",
        post_solve: ["Tic-Tac-Toe: 3x3", "Chess: 8x8", "Sudoku: 9x9", "Stratego: 10x10", "Scrabble: 15x15", "Go: 19x19", "NY Times Sunday Crossword: ~21x21"],
        revAllowed: true
    },
    
    {
        id: 32,
        solution: [ "DR. NO", "ALIENS", "DIE HARD WITH A VENGEANCE", "SHREK FOREVER AFTER", "MISSION: IMPOSSIBLE - ROGUE NATION", "ROCKY BALBOA", "STAR WARS: THE FORCE AWAKENS"],
        initialOrderSequence: "7436152",
        theme: "Movie installment<br>within its franchise",
        hint: "Installments",
        hint2: "Franchise additions",
        post_solve: ["James Bond 1", "Alien 2", "Die Hard 3", "Shrek 4", "M:I 5", "Rocky 6", "Star Wars 7"],
        revAllowed: true

    },
    {
        id: 33,
        solution: ["FEZ", "GRILLZ", "CRAVAT", "CAMISOLE", "CUMMERBUND", "PETTICOAT", "CLOGS"],
        initialOrderSequence: "3712465",
        theme: ["Clothing from head to toe"],
        hint: "Dress down",
        hint2: "Head to toe",
        post_solve: ["Fez: head", "Grillz: teeth", "Cravat: neck", "Camisole: torso", "Cummerbund: waist", "Petticoat: legs", "Clogs: feet"],
        revAllowed: false
    },
    {
        id: 34,
        solution: ["MARBLE", "NBA BASKETBALL", "WORLD RECORD RUBBER BAND BALL", "TIMES SQUARE BALL DROP BALL", "EPCOT'S SPACESHIP EARTH", "VEGAS SPHERE"],
        theme: "Balls/spheres by diameter",
        hint: "Snowballing",
        hint2: "Spheres by size",
        post_solve: ["Marble: <1 inch", "NBA Basketball: 9.5 inches", "Record rubber band ball: 7 feet", "Times Square ball drop ball: 12 feet", "Spaceship Earth: 165 feet", "Vegas Sphere: 516 feet"],
        revAllowed: true
    },
    
    {
        id: 35,
        solution: [ "FILM CRITIC SCOTT", "STEAK SAUCE", "LEATHER FLIGHT JACKET", "EU LETTER-SIZED PAPER", "UMASS SPORTS CONFERENCE", "\"MIDSOMMAR\" FILM STUDIO", "LIL WAYNE SONG" ],
        initialOrderSequence: "2461375",
        theme: "A + number",
        hint: "Accounting",
        hint2: "A + number",
        post_solve: ["Film critic Scott: A.O.", "Steak sauce: A.1.", "Leather flight jacket: A-2", "EU letter-sized paper: A4", "Sports conference: A 10", "Film studio: A24", "Lil Wayne song: A milli (million)"],
        revAllowed: true
    },
    {
        id: 36,
        solution: ["NFL FOOTBALL FIELD", "WHITE HOUSE GROUNDS", "WINNIE THE POOH'S FOREST", "VATICAN CITY", "DISNEY LAND (CALIFORNIA)", "CENTRAL PARK", "DISNEY WORLD (FLORIDA)"],
        initialOrderSequence: "5274136",
        theme: "Acres of land",
        hint: "Acres and acres",
        hint2: "Total area",
        post_solve: ["NFL field: 1.3 acres", "White House grounds: 18 acres", "Winnie the Pooh's forest: 100 acres", "Vatican City: 120 acres", "Disney Land: 500 acres", "Central Park: 842 acres", "Disney World: 25 thousand acres"],
        revAllowed: true
    },
    {
        id: 37,
        solution: ["JANITOR", "FEBREZE", "MARZIPAN", "APRICOT", "MAYANS", "JUNK", "JULIENNED"],
        initialOrderSequence: "4523716",
        theme: "Starts with a month abbr.",
        hint: "Puzzle of the year",
        hint2: "First three letters",
        post_solve: ["JANitor", "FEBreze", "MARzipan", "APRicot", "MAYans", "JUNk", "JULienned"],
        revAllowed: true
    },
    {
        id: 38,
        solution: ["ENGLISH WIKIPEDIA", "KING JAMES BIBLE", "LORD OF THE RINGS TRILOGY", "PRIDE AND PREJUDICE", "I HAVE A DREAM SPEECH", "AMERICAN PIE LYRICS", "ORIGINAL STAR WARS OPENING CRAWL"],
        initialOrderSequence: "5724163",
        theme: "Word counts",
        hint: "I have words",
        hint2: "Word counts",
        post_solve: ["English Wikipedia: 4.5 billion", "King James Bible: 783 thousand", "Lord of the Rings Trilogy: 480 thousand", "Pride and Prejudice: 122 thousand", "I Have A Dream Speech: 1664", "American Pie lyrics: 868", "Star Wars crawl: 83"],
        revAllowed: true
    },
    {
        id: 39,
        solution: ["HALF COURT SHOT", "RUGBY TRY", "TOUCHDOWN", "SCRABBLE X TILE", "BOXING ROUND", "DARTS INNER BULLSEYE", "BOWLING TURKEY"],
        initialOrderSequence: "6125374",
        theme: "Points",
        hint: "Points around",
        hint2: "Point scores",
        post_solve: ["Half court shot: 3", "Rugby try: 5", "Scrabble X tile: 8", "Boxing round: 10", "Darts inner bullseye: 50", "Bowling turkey: 60+"],
        revAllowed: true
    },
    {
        id: 40,
        solution: ["JUNETEENTH", "TET", "KWANZAA", "HANUKKAH", "CHINESE NEW YEAR", "RAMADAN", "LENT"],
        initialOrderSequence: "4715362",
        theme: "Holidays by length",
        hint: "So long!",
        hint2: "Holiday lengths",
        post_solve: ["Juneteenth: 1 day", "Tet: 3 days", "Kwanzaa: 7 days", "Hanukkah: 8 days/nights", "Chinese New Year: 15-16 days", "Ramadan: 29-30 days", "Lent: 40 days"],
        revAllowed: true
    },
    {
        id: 41,
        solution: ["ADELE", "OUTKAST", "NIRVANA", "THE BEATLES", "THE SPICE GIRLS", "WU-TANG CLAN", "MORMON TABERNACLE CHOIR"],
        initialOrderSequence: "3641275",
        theme: "Bands/artists by group size",
        hint: "Music groups",
        hint2: "Number of people",
        post_solve: ["Adele: 1 person", "OutKast: 2 people", "Nirvana: 3 people", "The Beatles: 4 people", "The Spice Girls: 5 people", "Wu-Tang Clan: 9 people", "Tabernacle Choir: 360 people"],
        revAllowed: true
    },
    {
        id: 42,
        solution: ["ANIMALIA", "CHORDATA", "MAMMALIA", "PRIMATES", "HOMINIDAE", "HOMO", "SAPIENS"],
        initialOrderSequence: "4761325",
        theme: "Human taxonomy",
        hint: "Personal bio",
        hint2: "Kingdom, phylum... genus, species",
        post_solve: ["Kingdom: Animalia", "Phylum: Chordata", "Class: Mammalia", "Order: Primates", "Family: Hominidae", "Genus: Homo", "Species: Sapiens"],
        revAllowed: true
    },
    {
        id: 43,
        solution: ["ROADSIDE ASSISTANCE", "CONSUMER WATCHDOG", "\"SO DELICIOUS!\"", "AWAY FROM WORK", "URL STARTER", "BOWLING TURKEY", "SNORING SOUND"],
        initialOrderSequence: "5271346",
        theme: "Triple letters",
        hint: "In triplicate",
        hint2: "Three letters in a row",
        post_solve: ["Roadside assistance: AAA", "Consumer watchdog: BBB", "\"So delicious!\": MMM", "Away from work: OOO", "URL starter: WWW", "Bowling turkey: XXX", "Snoring sound: ZZZ"],
        revAllowed: true
    }
];
