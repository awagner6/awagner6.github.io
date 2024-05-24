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
        solution: ["DIDDLEY BOW", "UKELELE", "GUITAR", "MANDOLIN", "SITAR", "CONCERT HARP", "GRAND PIANO"],
        initialOrderSequence: "5621473",
        theme: "Instrument string count",
        hint: "Plucky numbers",
        hint2: "Strings together",
        post_solve: ["Diddley bow: 1", "Ukelele: 4", "Guitar: 6", "Mandolin: 8", "Sitar: 18-21", "Concert harp: 47", "Grand piano: ~230"],
        revAllowed: true
    },
    {
        id: 14,
        solution: ["HAT TRICK", "BAKER'S DOZEN", "SCORE", "CENTURY", "LONG HUNDRED", "GROSS", "GRAND"],
        initialOrderSequence: "3516472",
        theme: "Non-numerical<br>number words",
        hint: "Word counts",
        hint2: "Non-number number words",
        post_solve: ["Hat trick: 3", "Baker's dozen: 13", "Score: 20", "Century: 100", "Long hundred: 120", "Gross: 144", "Grand: 1000"],
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
        revAllowed: false
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
        solution: ["PLAYERS PER TEAM ROSTER", "BAT LENGTH (INCHES)", "OUTS PER STANDARD GAME", "DISTANCE BETWEEN BASES (FEET)", "AVG. GAME LENGTH (MINUTES)", "GAMES PER SEASON PER TEAM", "AVG. STADIUM SEATING CAPACITY"],
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
        post_solve: ["Half court shot: 3", "Rugby try: 5", "Touchdown: 6", "Scrabble X tile: 8", "Boxing round: 10", "Darts inner bullseye: 50", "Bowling turkey: 60+"],
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
    },
    {
        id: 44,
        solution: ["O'DOUL'S", "GUINNESS", "BUDWEISER", "CHAMPAGNE", "SAKE", "JACK DANIEL'S BLACK LABEL", "EVERCLEAR"],
        initialOrderSequence: "6524713",
        theme: "Beverages by alcohol by volume",
        hint: "Burden of proof",
        hint2: "Alcohol by volume",
        post_solve: ["O'Doul's: 0%", "Guinness: 4.2%", "Budweiser: 5%", "Champagne: ~11-13%", "Sake: ~15-20%", "Jack Daniel's Black Label: 40%", "Everclear: 60-90%"],
        revAllowed: true
    },
    {
        id: 45,
        solution: ["PINE TREE", "BAY", "EMPIRE", "OLD DOMINION", "PEACH", "SUNSHINE"],
        initialOrderSequence: "2745136",
        theme: "East Coast state nicknames<br>north to south",
        hint: "Down the coast",
        hint2: "State nicknames north to south",
        post_solve: ["The Pine Tree State: Maine", "The Bay State: Massachusetts", "The Empire State: New York", "The Old Dominion State: Virginia", "The Peach State: Georgia", "The Sunshine State: Florida"],
        revAllowed: false 
    },
    {
        id: 46,
        solution: ["\"LONELY BOY\" BAND", "UBS LOGO", "STENO MACHINE", "WESTERN SHEET MUSIC", "TYPEWRITER", "PIANO", "FLORIDA"],
        initialOrderSequence: "5276314",
        theme: "Key counts",
        hint: "Keyed up",
        hint2: "Number of keys",
        post_solve: ["Black Keys: 2 (members)", "UBS logo: 3", "Steno machine: 23", "Western sheet music: 30", "Typewriter: 44", "Piano: 88", "Florida: ~800"],
        revAllowed: true
    },
    {
        id: 47,
        solution: ["FLAG MAKER ROSS", "HAPPY LITTLE TREES PAINTER ROSS", "DISCO QUEEN ROSS", "MAMET PLAY WITH ROSS IN TITLE", "UNIV. OF ___ ROSS BUSINESS SCHOOL", "RAPPER ROSS"],
        initialOrderSequence: "2651734",
        theme: "Rosses, alphabetically",
        hint: "Rosses A-Z",
        hint2: "Alphabetical order",
        post_solve: ["Flag maker: Betsy Ross", "Painter: Bob Ross", "Disco queen: Diana Ross", "Mamet play: Glengarry Glen Ross", "Ross business school university: Michigan", "Rapper: Rick Ross"],
        revAllowed: false
    },
    {
        id: 48,
        solution: ["SUPREME COURT JUSTICES", "SMITHSONIANS", "CONSTITUTIONAL AMENDMENTS", "WHITE HOUSE BATHROOMS", "LINCOLN MEMORIAL COLUMNS", "VOTING MEMBERS OF CONGRESS", "WASHINGTON MONUMENT HEIGHT (FEET)"],
        initialOrderSequence: "5361472",
        theme: "Washington D.C. counts",
        hint: "D.C. ranks",
        hint2: "Numbers by size",
        post_solve: ["Justices: 3", "Smithsonians: 17 (+3 outside DC)", "Amendments: 27", "White House bathrooms: 35", "Lincoln Memorial columns: 36", "Voting members of Congress: 535", "Washington Monument height: 555 ft"],
        revAllowed: true
    },
    {
        id: 49,
        solution: ["BINDI", "UMLAUT", "DOMINO'S LOGO", "\"MORSE CODE\" IN MORSE CODE", "\"BRAILLE\" IN BRAILLE", "ALL FACES OF A DIE COMBINED", "SEURAT'S SUNDAY AFTERNOON PAINTING"],
        initialOrderSequence: "4512736",
        theme: "Dot counts",
        hint: "Dot games",
        hint2: "Count the dots",
        post_solve: ["Bindi: 1", "Umlaut: 2", "Domino's logo: 3", "\"Morse code\" in Morse code: 11", "\"Braille\" in Braille: 17", "All die faces: 21", "Seurat's Sunday Afternoon: ~220 thousand"],
        revAllowed: true        
    },
    {
        id: 50,
        solution: ["THERMOSPHERE", "MESOSPHERE", "STRATOSPHERE", "TROPOSPHERE", "CRUST", "MANTLE", "CORE"],
        initialOrderSequence: "3645172",
        theme: "Layers of Earth<br>and atmosphere",
        hint: "Layering",
        hint2: "Earth and atmosphere",
        post_solve: ["Thermosphere: 50-440 miles up", "Mesosphere: 30-50 miles up", "Stratosphere: 7-30 miles up", "Troposphere: 0-7 miles up", "Crust: 5-25 miles down", "Mantle: 25-1800 miles down", "Core: 1800-4000 miles down"],
        revAllowed: true
    },
    {
        id: 51,
        solution: ["TUNING PEGS", "NUT", "FRETS", "SOUND HOLE", "PICK GUARD", "SADDLE", "BRIDGE PINS"],
        initialOrderSequence: "4517263",
        theme: "Guitar top to bottom",
        hint: "On the guitar",
        hint2: "Top to bottom",
        post_solve: ["Tuning pegs: head", "Nut: neck", "Frets: neck", "Sound hole: body", "Pick guard: body", "Saddle: bridge", "Bridge pins: bridge"],
        revAllowed: false
    },
    {
        id: 52,
        solution: ["MARATHON", "AQUATHLON", "IRON MAN RACE", "TRACK AND FIELD RELAY", "OLYMPIC SAILING REGATTA", "THE AMAZING RACE", "TOUR DE FRANCE"],
        initialOrderSequence: "3417625",
        theme: "Races by number of<br>legs or stages",
        hint: "This puzzle has legs",
        hint2: "Race legs and stages",
        post_solve: ["Marathon: 1 (run)", "Aquathlon: 2 (swim run)", "Iron Man: 3 (swim bike run)", "Relay: 4 (run)", "Olympic regatta: ~9 (sail)", "Amazing Race: 11-12 (varied)", "Tour de France: 21 stages (bike)"],
        revAllowed: true
    },
    {
        id: 53,
        solution: ["GRAMMYS", "OSCARS", "PULITZERS", "TONYS", "ESPYS", "EMMYS", "NOBELS"],
        initialOrderSequence: "4175362",
        theme: "Awards calendar",
        hint: "Awards calendar",
        hint2: "When throughout the year",
        post_solve: ["Grammys: Jan-Feb", "Oscars: Feb-Mar", "Pulitzers: May", "Tonys: June", "Espys: July", "Emmys: September", "Nobels: December"],
        revAllowed: true
    },
    {
        id: 54,
        solution: ["BRITISH BATHROOM", "SIDE OF THE HIGHWAY", "BABY BOTTLE PART", "CIGARETTE REMAINS", "HINDER", "BABY COW", "TWELVE INCHES"],
        initialOrderSequence: "6417325",
        theme: "Body parts head to toe",
        hint: "Body language",
        hint2: "From top to bottom",
        post_solve: ["British bathroom: head", "Side of the road: shoulder", "Baby bottle part: nipple", "Cigarette remains: butt", "Hinder: kneecap", "Baby cow: calf", "Twelve inches: foot"],
        revAllowed: false
    },
    {
        id: 55,
        solution: ["MEMORY", "MISTER CELLOPHANE", "MATCHMAKER", "MY SHOT", "MASTER OF THE HOUSE", "MAMA WHO BORE ME", "MARIA"],
        initialOrderSequence: "7241536",
        theme: "Songs by alphabetical musical",
        hint: "M-usicals A to Z",
        hint2: "Name each song's musical",
        post_solve: ["Memory: Cats", "Mister Cellophane: Chicago", "Matchmaker: Fiddler on the Roof", "My Shot: Hamilton", "Master of the House: Les Misérables", "Mama who bore me: Spring Awakening", "Maria: West Side Story"],
        revAllowed: false               
    },
    {
        id: 56,
        solution: ["BURJ KHALIFA", "TAIPEI 101", "PETRONAS TOWERS", "SEARS TOWER", "WORLD TRADE CENTER NORTH TOWER", "EMPIRE STATE BUILDING", "CHRYSLER BUILDING"],
        initialOrderSequence: "7423165",
        theme: "World's tallest building record holders",
        hint: "New heights",
        hint2: "Tallest buildings of history",
        post_solve: ["Burj Khalifa: 2010-present", "Taipei 101: 2004-2010", "Petronas Towers: 1996-2004", "Sears Tower: 1974-1996","World Trade Center: 1972-1974", "Empire State Building: 1931-1972", "Chrysler Building: 1930-1931"],
        revAllowed: true
    },
    {
        id: 57,
        solution: ["SIMONE BILES", "MOTHER THERESA", "NAPOLEON BONAPARTE", "TAYLOR SWIFT", "DANIEL DAY-LEWIS", "ABRAHAM LINCOLN", "LEBRON JAMES"],
        initialOrderSequence: "6531274",
        theme: "People by height",
        hint: "New heights pt. 2",
        hint2: "People by height",
        post_solve: ["Simone Biles: 4' 8\"", "Mother Theresa: 5' 0\"", "Napoleon Bonaparte: 5' 6\"", "Taylor Swift: 5' 11\"", "Daniel Day-Lewis: 6' 2\"", "Abraham Lincoln: 6' 4\"", "Lebron James: 6' 9\""],
        revAllowed: true
    },
    {
        id: 58,
        solution: ["TRIVIAL PURSUIT PIECE", "TRADITIONAL PIZZA PIE", "ZODIAC WHEEL", "TWISTER SPINNER", "DARTBOARD", "WHEEL OF FORTUNE WHEEL", "ROULETTE WHEEL"],
        initialOrderSequence: "2753164",
        theme: "Number of slices",
        hint: "However you slice it",
        hint2: "Circles by slice count",
        post_solve: ["Trivial Pursuit piece: 6", "Pizza pie: 8", "Zodiac wheel: 12", "Twister spinner: 16", "Dartboard: 20", "Wheel of Fortune wheel: 24", "Roulette wheel: 38 (37 in E.U.)"],
        revAllowed: true
    },
    {
        id: 59,
        solution: ["APT RHYME OF LEMNISCATE", "MUSICAL BASED ON A FELLINI FILM", "DEBUT ALBUM BY PEARL JAM", "DEVICE FOR LIFTING HEAVY OBJECTS", "BOHEMIAN RHAPSODY BAND", "DOUBLE-STACKED CHECKERS PIECE", "UNRETURNED TENNIS SERVE"],
        initialOrderSequence: "2537146",
        theme: "Seven-card straight",
        hint: "Deck hand",
        hint2: "In the cards",
        post_solve: ["Lemniscate rhyme: 8", "Musical based on a Fellini film: Nine", "Debut Pearl Jam album: Ten", "Device for lifting heavy objects: Jack", "Bohemian Rhapsody band: Queen", "Checkers piece: King", "Unreturned serve: Ace"],
        revAllowed: true
    },
    {
        id: 60,
        solution: ["BRIEFS", "BOY SHORTS", "BERMUDA SHORTS", "PEDAL PUSHERS", "CAPRIS", "CHINOS", "STIRRUP LEGGINGS"],
        initialOrderSequence: "2653174",
        theme: "Legwear by where it ends",
        hint: "Legends",
        hint2: "Pant leg lengths",
        post_solve: ["Briefs: crotch", "Boy shorts: thigh", "Bermuda shorts: just above knee", "Pedal pushers: just below knee", "Capris: calf", "Chinos: ankle", "Stirrup leggings: under foot"],
        revAllowed: false
    },
    {
        id: 61,
        solution: ["CHAIN", "SAW", "HORSE", "POWER", "BAR", "CODE", "WORD"],
        initialOrderSequence: "7164253",
        theme: "Word chain from Chain to Word",
        hint: "Chain->word word chain",
        hint2: "Two-word phrases",
        post_solve: ["Chain saw", "Saw horse", "Horse power", "Power bar", "Bar code", "Code word"],
        revAllowed: false
    },
    {
        id: 62,
        solution: ["WAS VICTORIOUS", "ALSO", "NOT OPPOSED", "UNLEASHES A DOG (ON)", "HAD FOOD", "GERMAN 'NO'", "KNOXVILLE'S ST."],
        initialOrderSequence: "2531764",
        theme: "Number homophones",
        hint: "Sound data",
        hint2: "Number homophones",
        post_solve: ["Was victorious: won (one)", "Also: too (two)", "Not opposed: for (four)", "Unleashes a dog (on): sics (six)", "Had food: ate (eight)", "German 'no': nein (nine)", "Knoxville's st.: Tenn. (ten)"],
        revAllowed: true
    },
    {
        id: 63,
        solution: ["VINYL RECORD", "GOLF CLUB FACE", "ESCALATOR STEP", "TIRE TREAD", "ROMAN AQUEDUCT", "ERIE CANAL", "GRAND CANYON"],
        initialOrderSequence: "4726153",
        theme: "Grooved things by depth of grooves",
        hint: "Deep in the groove",
        hint2: "Grooves/channels by depth",
        post_solve: ["Vinyl record: .0011 inches", "Golf club face: .022 inches", "Escalator step: ~.15-.23 inches", "Tire tread: .31-.34 inches", "Roman aqueduct: ~80 inches", "Erie Canal: 144 inches", "Grand Canyon: 48000 inches"],
        revAllowed: true
    },
    {
        id: 64,
        solution: ["YVES KLEIN PAINTING IKB 79", "GOOGLE LOGO", "SEYCHELLES FLAG", "RUBIK'S CUBE", "RAINBOW", "FULL LEGO BLOCK COLOR PALETTE", "LARGEST CRAYOLA CRAYON BOX"],
        initialOrderSequence: "4261573",
        theme: "Number of hues/colors/shades",
        hint: "But hues counting?",
        hint2: "Number of hues/colors/shades",
        post_solve: ["IKB 79: 1 color", "Google logo: 4 colors", "Seychelles flag: 5 colors", "Rubik's cube: 6 colors", "Rainbow: 7 colors", "Full LEGO palette: 73 colors (currently in use)", "Largest Crayola crayon box: 120 colors"],
        revAllowed: true
    },
    {
        id: 65,
        solution: ["SILK CHIFFON", "SILK SATIN", "LINEN", "T-SHIRT COTTON", "MERINO WOOL", "UPHOLSTERY TWEED", "DENIM"],
        initialOrderSequence: "4512673",
        theme: "Fabrics by weight<br>(gsm: grams per square meter)",
        hint: "It'll weigh on you",
        hint2: "Fabrics by weight",
        post_solve: ["Silk chiffon: 25-40 gsm", "Silk satin: 50-100 gsm", "Linen: 100-150 gsm", "T-shirt cotton: 160-200 gsm", "Merino wool: 200-250 gsm", "Upholstery tweed: 350-400 gsm", "Denim: 400-600 gsm"],
        revAllowed: true
    },
    {
        id: 66,
        solution: ["TUNING FORK", "AMERICAN GOTHIC PITCHFORK", "STAR OF DAVID", "STATUE OF LIBERTY'S CROWN", "LIONFISH", "PRAGUE'S NICKNAME", "PORCUPINE"],
        initialOrderSequence: "5241763",
        theme: "Number of pointy bits",
        hint: "Points of interest",
        hint2: "Points, spikes, prongs, spines, etc",
        post_solve: ["Tuning fork: 2 prongs", "American Gothic pitchfork: 3 prongs", "Star of David: 6 points", "Statue of Liberty's crown: 7 spikes", "Lionfish: 18 spines", "Prague's nickname: (city of) 100 spires", "Porcupine: 30,000+ quills"],
        revAllowed: true
    },
    {
        id: 67,
        solution: ["ANACONDA", "JAGUAR", "CAIMAN", "WATERFOWL", "SPIDER", "ANT", "TREE"],
        initialOrderSequence: "5436271",
        theme: "Rainforest food chain",
        hint: "Rainforest cafe",
        hint2: "Food chain",
        post_solve: ["Anaconda: apex predator", "Jaguar: quinary consumer", "Caiman: quaternary consumer", "Waterfowl: tertiary consumer", "Spider: secondary consumer", "Ant: primary consumer", "Tree: producer"],
        revAllowed: true    
    },
    {
        id: 68,
        solution: ["CANADIAN INTERJECTION", "HONEY PRODUCER", "VISUALIZE", "ACTIVIST RUBY", "SPANISH \"AND\"", "WORST POSSIBLE GRADE", "\"HUH!\""],
        initialOrderSequence: "6572413",
        theme: "Letter homophones",
        hint: "Outspoken characters",
        hint2: "Letter homophones",
        post_solve: ["Canadian interjection: eh (A)", "Honey producer: bee (B)", "Visualize: see (C)", "Activist Ruby: Dee (D)", "Spanish \"and\": y (E)", "Worst grade: F (F)", "\"HUH!\: gee (G)"],
        revAllowed: true   
    },
];
