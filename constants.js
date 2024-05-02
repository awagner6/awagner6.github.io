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
        solution: ["ONE DOLLAR BILL", "NICKEL", "TWENTY DOLLAR BILL", "PENNY", "FIFTY DOLLAR BILL", "DIME", "HALF DOLLAR"],
        initialOrderSequence: "4375612",
        theme: "Money in order of president",
        hint: "Face forward",
        hint2: "Presidential procession",
        post_solve: ["$1: Washington", "5¢: Jefferson", "$20: Jackson", "$5: Lincoln", "$50: Grant", "10¢: FDR", "50¢: JFK"],
        revAllowed: true
    },
    {
        id: 4,
        solution: ["MARINARA SAUCE", "KUMQUAT", "POLENTA", "BRUSSELS SPROUTS", "GORGONZOLA VEINS", "FORBIDDEN RICE", "UBE ICE CREAM"],
        initialOrderSequence: "4237516",
        theme: "Colorful foods in ROY G BIV order",
        hint: "Taste the rainbow",
        hint2: "ROY G BIV order",
        post_solve: ["Marinara sauce: Red", "Kumquat: Orange", "Polenta: Yellow", "Brussels sprouts: Green", "Gorgonzola veins: Blue", "Forbidden rice: Indigo", "Ube ice cream: Violet"],
        revAllowed: true
    },
    {
        id: 5,
        solution: ["JANAE", "JACOBI", "JESSIE", "JODY", "JOEY", "JEFF", "JENJI"],
        initialOrderSequence: "6451723",
        theme: "Alphabetical letter homophone endings",
        hint: "Behind your ear",
        hint2: "Say the endings out loud",
        post_solve: ["JANAE: A", "JACOBI: B", "JESSIE: C", "JODY: D", "JOEY: E", "JEFF: F", "JENJI: G"],
        revAllowed: false
    },
    {
        id: 6,
        solution: [ "DR. NO", "ALIENS", "DIE HARD WITH A VENGEANCE", "SHREK FOREVER AFTER", "MISSION: IMPOSSIBLE - ROGUE NATION", "ROCKY BALBOA", "STAR WARS: THE FORCE AWAKENS"],
        initialOrderSequence: "7436152",
        theme: "Movie installment<br>within its franchise",
        hint: "Installments",
        hint2: "Franchise additions",
        post_solve: ["James Bond 1", "Alien 2", "Die Hard 3", "Shrek 4", "M:I 5", "Rocky 6", "Star Wars 7"],
        revAllowed: true

    },
    {
        id: 7,
        solution: ["SCRUNCHED", "BREAKTHROUGH", "STRAIGHTFORWARD", "ACKNOWLEDGEMENT", "ENTREPRENEURSHIP", "UNRECOGNIZABLE", "CONFIDENTIALITY"],
        initialOrderSequence: "3624175",
        theme: "Number of syllables",
        hint: "What a mouthful!",
        hint2: "Count sounds",
        post_solve: ["SCRUNCHED: 1", "BREAKTHROUGH: 2", "STRAIGHTFORWARD: 3", "ACKNOWLEDGEMENT: 4", "ENTREPRENEURSHIP: 5", "UNRECOGNIZABLE: 6", "CONFIDENTIALITY: 7"],
        revAllowed: true
    },
    {
        id: 8,
        solution: ["ACE", "CONDOR", "ALBATROSS", "EAGLE", "BIRDIE", "PAR", "BOGEY"],
        initialOrderSequence: "2715346",
        theme: "Golf scores by stroke count",
        hint: "Course numbers",
        hint2: "Golf scores",
        post_solve: ["Ace: hole in 1", "Condor: 4 under par", "Albatross: 3 under par", "Eagle: 2 under par", "Birdie: 1 under par", "Par", "Bogey: one over par"],
        revAllowed: true        
    },
    {
        id: 9,
        solution: ["EIGHTIES", "CENTS", "CHEERS", "SEASONS", "SENSES", "FLAGS", "SEAS"],
        initialOrderSequence: "2614573",
        theme: "Preceded by a number",
        hint: "Figures out",
        hint2: "Missing numbers",
        post_solve: ["(ONE) EIGHTIES", "(TWO) CENTS", "(THREE) CHEERS", "(FOUR) SEASONS", "(FIVE) SENSES", "(SIX) FLAGS", "(SEVEN) SEAS"],
        revAllowed: true
    },
    {
        id: 10,
        solution: ["DORITO", "CHESSBOARD", "FLAG OF NEPAL", "HONEYCOMB CELL", "STOP SIGN", "CANADIAN LOONIE", "GLOBE THEATRE"],
        initialOrderSequence: "6527143",
        theme: "Number of sides",
        hint: "So edgy!",
        hint2: "Shapes",
        post_solve: ["DORITO: 3", "CHESSBOARD: 4", "FLAG OF NEPAL: 5", "HONEYCOMB CELL: 6", "STOP SIGN: 8", "LOONIE: 11", "GLOBE: 20 (not quite round!)"],
        revAllowed: true
    },
    {
        id: 11,
        solution: [ "JANITOR", "MARBLE", "MAYONNAISE", "JULIENNED", "AUGMENTATION", "OCTOPUS", "DECISION"],
        initialOrderSequence: "7413625",
        theme: "Starts with a 31-day month abbr.",
        hint: "Ahead of time",
        hint2: "Cal train",
        post_solve: [ "(Jan)itor", "(Mar)ble", "(May)onnaise", "(Jul)ienned", "(Aug)mentation", "(Oct)opus", "(Dec)ision"],
        revAllowed: true
    },
    
    {
        id: 12,
        solution: ["HELLO", "BONJOUR", "GUTEN TAG", "BUONGIORNO", "TUDO BEM", "HOLA", "HEJ"],
        initialOrderSequence: "2637514",
        theme: "E.U. languages<br>alphabetically (exonyms)",
        hint: "Linguistic ABCs",
        hint2: "Languages A-to-Z",
        post_solve: ["Hello: English", "Bonjour: French", "Guten tag: German", "Buongiorno: Italian", "Tudo bem: Portuguese", "Hola: Spanish", "Hej: Swedish"],
        revAllowed: true
    },
    {
        id: 13,
        solution: ["GHOST OF SLEEPY HOLLOW", "MARBLE BUST", "CATDOG", "CERBERUS", "MOUNT RUSHMORE", "HYDRA", "EASTER ISLAND"],
        initialOrderSequence: "3715462",
        theme: "Head count",
        hint: "Bean counter",
        hint2: "Head count",
        post_solve: ["Headless Horseman: 0", "Marble bust: 1", "CatDog: 2", "Cerberus: 3", "Mount Rushmore: 4", "Hyrdra: 9", "Easter Island: 1,043"],
        revAllowed: true        
    },
    {
        id: 14,
        solution: ["TERA", "GIGA", "MEGA", "KILO", "MICRO", "NANO", "PICO"],
        initialOrderSequence: "5361724",
        theme: "Prefixes of magnitude",
        hint: "SIzes",
        hint2: "Prefixes of magnitude",
        post_solve: ["Tera: trillion", "Giga: billion", "Mega: million", "Kilo: thousand", "Micro: millionth", "Nano: billionth", "Pico: trillionth"],
        revAllowed: true
    },
    {
        id: 15,
        solution: ["BIRTHDAY", "BLUE MOON", "WORLD CUP", "US CENSUS", "CICADA EMERGENCE", "ROYAL JUBILEE", "HALLEY'S COMET FLYBY"],
        initialOrderSequence: "2735164",
        theme: "Frequencies:<br>happens every...",
        hint: "Often times",
        hint2: "Frequencies",
        post_solve: ["Birthday: Every year", "Blue moon: 2-3 years", "World cup: 4 years", "US Census: 10 years", "Cicada emergence: 13 or 17 years", "Royal Jubilee: 25 years", "Halley's Comet flyby: 75-79 years"],
        revAllowed: true
    },
    {
        id: 16,
        solution: ["SUMO", "SOCCER", "HOCKEY", "AMERICAN FOOTBALL", "BASEBALL", "BOWLING", "GOLF"],
        initialOrderSequence: "7135426",
        theme: "Number of subdivisions in a game",
        hint: "Game breaks",
        hint2: "Quarters, periods, innings...",
        post_solve: ["Sumo: 1 bout", "Soccer: 2 halves", "Hockey: 3 periods", "American football: 4 quarters", "Baseball: 9 innings", "Bowling: 10 frames", "Golf: 18 holes"],
        revAllowed: true
    },
    {
        id: 17,
        solution: ["DODO", "PREREQUISITE", "PANTOMIMING", "DO YOURSELF A FAVOR", "MISO SOUP", "MALALA", "PETITION"],
        initialOrderSequence: "3461572",
        theme: "Hidden doubled musical scale",
        hint: "Duly noted",
        hint2: "The Sound of Music x2",
        post_solve: ["(Dodo)", "P(rere)quisite", "Panto(mimi)ng", "Do yoursel(f a fa)vor", "Mi(so so)up", "Ma(lala)", "Pe(titi)on"],
        revAllowed: true
    },
    {
        id: 18,
        solution: ["ERHU", "UKELELE", "GUITAR", "MANDOLIN", "SITAR", "CONCERT HARP", "GRAND PIANO"],
        initialOrderSequence: "5621473",
        theme: "Instrument string count",
        hint: "Plucky numbers",
        hint2: "Strings together",
        post_solve: ["Erhu: 2", "Ukelele: 4", "Guitar: 6", "Mandolin: 8", "Sitar: 18-21", "Concert harp: 47", "Grand piano: ~230"],
        revAllowed: true
    },
    {
        id: 19,
        solution: ["HAT TRICK", "DOZEN", "BAKER'S DOZEN", "SCORE", "CENTURY", "GROSS", "GRAND"],
        initialOrderSequence: "3516472",
        theme: "Non-numerical<br>number words",
        hint: "Word counts",
        hint2: "Non-number number words",
        post_solve: ["Hat trick: 3", "Dozen: 12", "Baker's dozen: 13", "Score: 20", "Century: 100", "Gross: 144", "Grand: 1000"],
        revAllowed: true
    },
    {
        id: 20,
        solution: ["FEET", "BRAIN LOBES", "FINGERS", "RIBS", "TEETH", "VERTEBRAE", "CHROMOSOMES"],
        initialOrderSequence: "4517362",
        theme: "Average amounts in the human body",
        hint: "Sum body",
        hint2: "Average amounts in the human body",
        post_solve: ["Feet: 2", "Brain lobes: 6", "Fingers: 10", "Ribs: 24", "Teeth: 32", "Vertebrae: 33", "Chromosomes: 46"],
        revAllowed: true       
    },
    {
        id: 21,
        solution: ["8", "4", "9", "1", "6", "10", "0"],
        initialOrderSequence: "7425136",
        theme: "Numbers, alphabetically",
        hint: "Numberheads",
        hint2: "First letters",
        post_solve: ["Eight", "Four", "Nine", "One", "Six", "Ten", "Zero"],
        revAllowed: true
    },
    {
        id: 22,
        solution: ["WORD", "GAME", "ANIMAL", "HOUSE", "PLANT", "FOOD", "CHAIN"],
        initialOrderSequence: "5374261",
        theme: "Word chain from 'Word' to 'Chain'",
        hint: "Before and after",
        hint2: "2-word pairs",
        post_solve: ["Word game", "Game animal", "Animal house", "House plant", "Plant food", "Food chain"],
        revAllowed: false
    },
    {
        id: 23,
        solution: ["MEXICO", "GUATEMALA", "HONDURAS", "NICARAGUA", "COSTA RICA", "PANAMA", "COLOMBIA"],
        initialOrderSequence: "4721653",
        theme: "North to South America",
        hint: "On the map",
        hint2: "North to South",
        post_solve: ["Mexico", "Guatemala", "Honduras", "Nicaragua", "Costa Rica", "Panama", "Colombia"],
        revAllowed: false
    },
    {
        id: 24,
        solution: ["BAGEL", "NOSE", "BOWLING BALL", "POOL TABLE", "WIFFLE BALL", "CROC SHOE", "SPONGE"],
        initialOrderSequence: "4726315",
        theme: "Holes/pockets/cavities",
        hint: "The pits",
        hint2: "W-hole numbers",
        post_solve: ["Bagel: 1", "Nose: 2", "Bowling ball: 3", "Pool table: 6", "Wiffle ball: 8", "Croc shoe: 13", "Sponge: many"],
        revAllowed: true        
    },
    {
        id: 25,
        solution: ["STONE", "BRONZE", "IRON", "MIDDLE", "MACHINE", "ATOMIC", "INFORMATION"],
        initialOrderSequence: "5241736",
        theme: "Chronological ages by beginning",
        hint: "Eras tour",
        hint2: "Ages of history",
        post_solve: ["Stone age: ~3.4 million BCE", "Bronze age: ~3000 BCE", "Iron age: ~1200 BCE", "Middle ages: ~500 CE", "Machine age: ~1880 CE", "Atomic age: 1945 CE", "Information age: ~1970s"],
        revAllowed: true
    },
    {
        id: 26,
        solution: ["EVERGREEN NEEDLE", "SLEEVELESS TEE", "RENDER SPEECHLESS", "BEST KEPT SECRET", "CRESCENT WRENCH", "STRESS TEST", "STRENGTHS"],
        initialOrderSequence: "2761534",
        theme: "Only-E words by word count",
        hint: "County census",
        hint2: "Check the vowels",
        post_solve: ["Evergreen needle: 7", "Sleeveless tee: 6", "Render speechless: 5", "Best kept secret: 4", "Crescent wrench: 3", "Stress test: 2", "Strengths: 1"],
        revAllowed: true
    },
    {
        id: 27,
        solution: ["NO HEAVEN", "YOU TRY", "BELOW US", "ONLY SKY", "THE PEOPLE", "FOR TODAY", "OOOOOOH"],
        initialOrderSequence: "2657413",
        theme: "Line-ending lyrics of Imagine",
        hint: "Imagine that!",
        hint2: "Lennon lyrics",
        post_solve: ["Imagine there's NO HEAVEN", "It's easy if YOU TRY", "No hell BELOW US", "Above us, ONLY SKY", "Imagine all THE PEOPLE", "Living FOR TODAY", "OOOOOOH"],
        revAllowed: false
    },
    {
        id: 28,
        solution: ["SNICKERS", "TWIX", "HOSTESS HOHOS", "KITKAT", "STARBURSTS", "MENTOS", "SKITTLES"],
        initialOrderSequence: "4261735",
        theme: "Snack food items per package",
        hint: "Junk heap",
        hint2: "Amount per pack",
        post_solve: ["Snickers: 1 bar", "Twix: 2 bars", "Hostess Hohos: 3 cakes", "Kitkat: 4 bars", "Starbursts: 12 squares", "Mentos: 14 discs", "Skittles: many shells"],
        revAllowed: true
    },
    {
        id: 29,
        solution: ["Players per team roster", "Bat length in inches", "Outs per standard game", "Feet between bases", "Avg game length in minutes", "Games per season per team", "Avg. stadium seating capacity"],
        initialOrderSequence: "6274135",
        theme: "MLB stat counts",
        hint: "MLB ballpark estimates",
        hint2: "Baseball counts",
        post_solve: ["Players per team: 26-28", "Bat length in inches: 35-37", "Outs per game: 54 (or 51)", "Feet between bases: 90", "Avg game length: 158 min", "Games per season per team: 162", "Avg. stadium capacity: ~45,000"],
        revAllowed: true
    },
    {
        id: 30,
        solution: ["BELL", "POBLANO", "JALAPEÑO", "SERRANO", "CAYENNE", "HABANERO", "GHOST"],
        initialOrderSequence: "2561473",
        theme: "Peppers by Scoville heat level",
        hint: "Spice it up",
        hint2: "Scoville scale",
        post_solve: ["Bell: 0", "Poblano: ~1,500", "Jalapeño: ~3,500", "Serrano: ~15,000", "Cayenne: ~40,000", "Habanero: ~250,000", "Ghost: ~1,000,000"],
        revAllowed: true        
    },
    {
        id: 31,
        solution: ["RINGLING BROS. CIRCUS", "AUDI LOGO", "OLYMPIC FLAG", "ARIANA GRANDE SONG", "DANTE'S INFERNO", "ARCHERY TARGET", "URANUS"],
        initialOrderSequence: "6451732",
        theme: "Rings / Circles",
        hint: "Ring 'em up",
        hint2: "Ring counts",
        post_solve: ["Ringling bros.: 3", "Audi logo: 4", "Olympic flag: 5", "Ariana Grande song: 7", "Dante's Inferno: 9", "Archery target: 11", "Uranus: 13 (known)"],
        revAllowed: true
    },
    {
        id: 32,
        solution: ["LA PAZ BOLIVIA", "NAIROBI KENYA", "KATHMANDU NEPAL", "CANBERRA AUSTRALIA", "NEW DELHI INDIA", "OTTAWA CANADA", "AMSTERDAM THE NETHERLANDS"],
        initialOrderSequence: "3475162",
        theme: "Natl. capitals by elevation (ft)",
        hint: "Highs and lows",
        hint2: "Capital elevations",
        post_solve: ["La Paz: 11,942", "Nairobi: 5,889", "Kathmandu: 4,593", "Canberra: 1,985", "New Delhi: 689", "Ottawa: 243", "Amsterdam: -7"],
        revAllowed: false
    },
    {
        id: 33,
        solution: ["MESSENGER GOD", "GOD OF LOVE", "GOD OF WAR", "KING OF THE GODS", "GOD OF THE HARVEST", "GOD OF THE SEA", "GOD OF THE HEAVENS"],
        initialOrderSequence: "5231764",
        theme: "Planets by namesake deity",
        hint: "Heavenly bodies",
        hint2: "Planets by god",
        post_solve: ["Messenger: Mercury", "Love: Venus", "War: Mars", "King: Jupiter", "Harvest: Saturn", "Sea: Neptune", "Heavens: Uranus"],
        revAllowed: true
    },
    {
        id: 34,
        solution: ["NORMAL CONVERSATION", "HAIRDRYER", "FIRETRUCK SIREN", "SEATTLE SEAHAWKS CROWD RECORD", "JET ENGINE", "KRAKATOA ERUPTION", "SPERM WHALE CLICK"],
        initialOrderSequence: "2734156",
        theme: "Sounds by decibel level",
        hint: "Volume one",
        hint2: "Decibel scale",
        post_solve: ["Normal conversation: ~60 dB", "Hairdryer: 80-90 dB", "Firetruck siren: ~120 dB", "Seahawks crowd record: 137.6 dB(!)", "Jet Engine: 140 dB", "Krakatoa eruption: 180 dB", "Sperm whale click: 230 dB(!!!)"],
        revAllowed: true        
    },
    {
        id: 35,
        solution: ["10-MINUTE SHOWER", "OLYMPIC SWIMMING POOL", "NIAGARA FALLS PER SECOND", "GEORGIA AQUARIUM", "CENTRAL PARK RESERVOIR", "HURRICANE AVG. DAILY RAINFALL", "LAKE TAHOE"],
        initialOrderSequence: "5176342",
        theme: "Water volumes in gallons",
        hint: "Volume two",
        hint2: "Water in gallons",
        post_solve: ["10-minute shower: ~20-25", "Olympic swimming pool: 660,000", "Niagara falls per second: ~700,000", "Georgia Aquarium: 11 million", "Central Park Reservoir: 1 billion", "Hurricane avg. daily rainfall: 2.4 trillion", "Lake Tahoe: 39 trillion"],
        revAllowed: true
    },
    {
        id: 36,
        solution: ["TIC-TAC-TOE", "CHESS", "SUDOKU", "STRATEGO", "SCRABBLE", "GO", "NEW YORK TIMES SUNDAY CROSSWORD"],
        initialOrderSequence: "7513264",
        theme: "Square game boards by size",
        hint: "Squaring off",
        hint2: "Board dimensions",
        post_solve: ["Tic-Tac-Toe: 3x3", "Chess: 8x8", "Sudoku: 9x9", "Stratego: 10x10", "Scrabble: 15x15", "Go: 19x19", "NY Times Sunday Crossword: ~21x21"],
        revAllowed: true        
    },
    
    
];
