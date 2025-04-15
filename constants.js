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
        post_solve: ["Mexico City: 7\,349", "Denver: 5\,280", "Kathmandu: 4\,593", "New Delhi: 689", "Amsterdam: -7", "Death Valley: -282", "Dead Sea shores: -1\,412"],
        revAllowed: false
    },
    {
        id: 28,
        solution: ["MESSENGER GOD", "GOD OF LOVE", "GOD OF WAR", "KING OF THE GODS", "GOD OF THE HARVEST", "GOD OF THE HEAVENS", "GOD OF THE SEA"],
        initialOrderSequence: "5231764",
        theme: "Planets by namesake deity",
        hint: "Heavenly bodies",
        hint2: "Planets by god",
        post_solve: ["Messenger: Mercury", "Love: Venus", "War: Mars", "King: Jupiter", "Harvest: Saturn", "Heavens: Uranus", "Sea: Neptune"],
        revAllowed: true
    },
    
    {
        id: 29,
        solution: ["NORMAL CONVERSATION", "HAIRDRYER", "FIRETRUCK SIREN", "SEATTLE SEAHAWKS CROWD RECORD", "JET ENGINE", "SPERM WHALE CLICK", "KRAKATOA ERUPTION"],
        initialOrderSequence: "2734156",
        theme: "Sounds by decibel level",
        hint: "Volume one",
        hint2: "Decibel scale",
        post_solve: ["Normal conversation: ~60 dB", "Hairdryer: 80-90 dB", "Firetruck siren: ~120 dB", "Seahawks crowd record: 137.6 dB(!)", "Jet Engine: 140 dB", "Sperm whale click: 230 dB(!!)", "Krakatoa eruption: 310 db(!!!)"],
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
        solution: ["MARBLE", "NBA BASKETBALL", "WORLD RECORD RUBBER BAND BALL", "TIMES SQUARE BALL DROP BALL", "EPCOT'S SPACESHIP EARTH", "VEGAS SPHERE", "PLUTO"],
        initialOrderSequence: "3461257",
        theme: "Balls/spheres by diameter",
        hint: "Snowballing",
        hint2: "Spheres by diameter",
        post_solve: ["Marble: <1 inch", "NBA Basketball: 9.5 inches", "Record rubber band ball: 7 feet", "Times Square ball drop ball: 12 feet", "Spaceship Earth: 165 feet", "Vegas Sphere: 516 feet", "Pluto: ~8 million feet"],
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
        solution: ["PINE TREE", "BAY", "EMPIRE", "GARDEN", "OLD DOMINION", "PEACH", "SUNSHINE"],
        initialOrderSequence: "2745136",
        theme: "East Coast state<br>nicknames down the coast",
        hint: "Down the coast",
        hint2: "State nicknames",
        post_solve: ["The Pine Tree State: Maine", "The Bay State: Massachusetts", "The Empire State: New York", "The Garden State: New Jersey", "The Old Dominion State: Virginia", "The Peach State: Georgia", "The Sunshine State: Florida"],
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
        solution: ["FLAG MAKER ROSS", "HAPPY LITTLE TREES PAINTER ROSS", "DISCO QUEEN ROSS", "\"FRIENDS\" ROSS SURNAME", "MAMET PLAY WITH ROSS IN TITLE", "UNIV. OF ___ ROSS BUSINESS SCHOOL", "RAPPER ROSS"],
        initialOrderSequence: "2651734",
        theme: "Rosses, alphabetically",
        hint: "Rosses A-Z",
        hint2: "Alphabetical order",
        post_solve: ["Flag maker: Betsy Ross", "Painter: Bob Ross", "Disco queen: Diana Ross", "\"Friends\" Ross surname: Ross Geller", "Mamet play: Glengarry Glen Ross", "Ross business school university: Michigan", "Rapper: Rick Ross"],
        revAllowed: true
    },
    {
        id: 48,
        solution: ["SUPREME COURT JUSTICES", "SMITHSONIANS", "CONSTITUTIONAL AMENDMENTS", "WHITE HOUSE BATHROOMS", "LINCOLN MEMORIAL COLUMNS", "VOTING MEMBERS OF CONGRESS", "WASHINGTON MONUMENT HEIGHT (FEET)"],
        initialOrderSequence: "5361472",
        theme: "Washington D.C. counts",
        hint: "D.C. ranks",
        hint2: "Numbers by size",
        post_solve: ["Justices: 9", "Smithsonians: 17 (+3 outside DC)", "Amendments: 27", "White House bathrooms: 35", "Lincoln Memorial columns: 36", "Voting members of Congress: 535", "Washington Monument height: 555 ft"],
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
        post_solve: ["British bathroom: head", "Side of the road: shoulder", "Baby bottle part: nipple", "Cigarette remains: butt", "Hinder: kneecap or hamstring", "Baby cow: calf", "Twelve inches: foot"],
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
        revAllowed: true               
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
        solution: ["FIGURE SKATING SHAPE", "MUSICAL BASED ON A FELLINI FILM", "DEBUT ALBUM BY PEARL JAM", "DEVICE FOR LIFTING HEAVY OBJECTS", "BOHEMIAN RHAPSODY BAND", "DOUBLE-STACKED CHECKERS PIECE", "UNRETURNED TENNIS SERVE"],
        initialOrderSequence: "2537146",
        theme: "Seven-card straight",
        hint: "Deck hand",
        hint2: "In the cards",
        post_solve: ["Figure skating shape: 8", "Musical based on a Fellini film: Nine", "Debut Pearl Jam album: Ten", "Device for lifting heavy objects: Jack", "Bohemian Rhapsody band: Queen", "Checkers piece: King", "Unreturned serve: Ace"],
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
        hint: "Chain -> Word word chain (⬇️)",
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
        hint: "Up the chain",
        hint2: "Food chain",
        post_solve: ["Anaconda: apex predator", "Jaguar: quinary consumer", "Caiman: quaternary consumer", "Waterfowl: tertiary consumer", "Spider: secondary consumer", "Ant: primary consumer", "Tree: producer"],
        revAllowed: true    
    },
    {
        id: 68,
        solution: ["PETRA", "COLOSSEUM", "CHICHÉN ITZÁ", "MACHU PICCHU", "GREAT WALL OF CHINA (BADALING)", "TAJ MAHAL", "CHRIST THE REDEEMER"],
        initialOrderSequence: "2164735",
        theme: "When the 7 Wonders were built",
        hint: "Wonder years",
        hint2: "When they were built",
        post_solve: ["Petra: ~300 BC", "Colosseum: 80 CE", "Chichén Itzá: ~1000 CE", "Machu Picchu: ~1450 (we think!)", "Great Wall (Badalang): 1501", "Taj Mahal: 1648", "Christ the Redeemer: 1931"],
        revAllowed: true
    },
    {
        id: 69,
        solution: ["CANADIAN INTERJECTION", "HONEY PRODUCER", "VISUALIZE", "ACTIVIST RUBY", "SPANISH \"AND\"", "WORST POSSIBLE GRADE", "\"HUH!\""],
        initialOrderSequence: "6572413",
        theme: "Letter homophones",
        hint: "Outspoken characters",
        hint2: "Letter homophones",
        post_solve: ["Canadian interjection: eh (A)", "Honey producer: bee (B)", "Visualize: see (C)", "Activist Ruby: Dee (D)", "Spanish \"and\": y (E)", "Worst grade: F (F)", "\"HUH!\: gee (G)"],
        revAllowed: true   
    },
    {
        id: 70,
        solution: ["TIME FOR SNEEZE TO TRAVEL ONE FOOT", "BLINK OF AN EYE", "SINGLE HEARTBEAT", "RESTING INHALE + EXHALE", "FULL DIGESTION", "TIME FOR HAIR TO GROW ONE INCH", "HUMAN GESTATION PERIOD"],
        initialOrderSequence: "5134726",
        theme: "Biological durations",
        hint: "Just my speed",
        hint2: "How long things take",
        post_solve: ["Sneeze to go 1 ft: .06 seconds", "Blink of an eye: .1 seconds", "Heartbeat: .8 seconds", "Breath: 3-5 seconds", "Digestion: 1-3 days", "Hair to grow 1 in: 8 weeks", "Human gestation: 40 weeks"],
        revAllowed: true
    },
    {
        id: 71,
        solution: ["HEEL BUN", "CHEESE", "LOWER PATTY", "CLUB BUN", "UPPER PATTY", "PICKLES", "CROWN BUN"],
        initialOrderSequence: "4173526",
        theme: "Big Mac stack",
        hint: "McPuzzle",
        hint2: "Big Mac assembly",
        post_solve: ["Crown bun: top", "Pickles", "Upper patty", "Club bun: middle", "Lower patty", "Cheese", "Heel bun: bottom"],
        revAllowed: true
    },
    {
        id: 72,
        solution: ["DISTILLED WATER", "BOTTLED WATER", "CAMPBELL'S CHICKEN NOODLE SOUP", "SWEAT", "OCEAN WATER", "GREAT SALT LAKE", "DEAD SEA"],
        initialOrderSequence: "6513724",
        theme: "Salinity percentage",
        hint: "Getting salty",
        hint2: "Salt percentages by weight",
        post_solve: ["Distilled water: 0%", "Bottled water: .2-.3%", "Campbell's Chicken Noodle Soup: .7%", "Sweat: .9%", "Ocean water: 3.5%", "Great Salt Lake: 5-27% (big range!)", "Dead Sea: 34%"],
        revAllowed: true        
    },
    {
        id: 73,
        solution: ["THE __: BABA O'RILEY BAND", "RESIDES", "CURRENTLY FASHIONABLE", "GOOD GRADE", "HAWAIIAN PIZZA TOPPING", "ANESTHETIZED", "THE OLD MAN AND ___: HEMINGWAY NOVEL"],
        initialOrderSequence: "7314265",
        theme: "SpongeBob SquarePants theme lyrics",
        hint: "Sea shanty",
        hint2: "SpongeBob SquarePants",
        post_solve: ["Baba O'Riley band: WHO", "Resides: LIVES", "Fashionable: IN", "Good grade: A", "Hawaiian topping: PINEAPPLE", "Anesthetized: UNDER", "The Old Man and ___: THE SEA"],
        revAllowed: true
    },
    {
        id: 74,
        solution: ["AFGHAN GIRL", "VJ DAY IN TIMES SQUARE", "68 OLYMPICS BLACK POWER SALUTE", "MIGRANT MOTHER", "RAISING THE FLAG ON IWO JIMA", "LUNCH ATOP A SKYSCRAPER", "ELLEN DEGENERES OSCARS SELFIE"],
        initialOrderSequence: "3761425",
        theme: "Number of subjects in iconic photos",
        hint: "Human subjects",
        hint2: "Main characters",
        post_solve: ["Afghan Girl: 1", "VJ Day in Times Square: 2", "68 Black Power Salute: 3", "Migrant Mother: 4", "Iwo Jima: 6", "Skyscraper lunch: 11", "Ellen selfie: 12 (11 + half of Jared Leto)"],
        revAllowed: true
    },
    {
        id: 75,
        solution: ["\"FOOL'S MATE\" CHESS GAME", "TYPICAL SYMPHONY", "TOTAL CHECKERS OPENINGS", "THE MACARENA", "LONGEST OPTIMAL RUBIK'S CUBE SOLVE", "SHORTEST KLONDIKE SOLITAIRE WIN", "TAI CHI"],
        initialOrderSequence: "4536172",
        theme: "Moves and movements",
        hint: "Making moves",
        hint2: "Number of moves+movements",
        post_solve: ["Fool's mate: 2 moves", "Typical symphony: 4 movements", "Checkers openings: 7 possible moves", "The Macarena: 14 moves", "Longest optimal Rubik's solve: 20", "Shortest solitaire victory (Klondike): 60", "Tai chi: 108"],
        revAllowed: true
    },
    {
        id: 76,
        solution: ["BLACK MAMBA", "HUMAN", "RACEHORSE", "OSTRICH", "SWORDFISH", "CHEETAH", "PEREGRINE FALCON"],
        initialOrderSequence: "6127435",
        theme: "Animals by top speed",
        hint: "Life comes at you fast",
        hint2: "Animals by top speed",
        post_solve: ["Black mamba: 14 mph", "Human: 29.5 mph", "Racehorse: 55 mph", "Ostrich: 56 mph", "Swordfish: 60 mph", "Cheetah: 75 mph", "Peregrine falcon: 242 mph"],
        revAllowed: true
    },
    {
        id: 77,
        solution: ["KOALA'S BRAIN", "GREETING CARD", "CLASSIC PUFF PASTRY", "MAX. FOLDS IN HALF FOR PRINTER PAPER", "U.S. MILITARY FLAG TRIANGLE", "ORIGAMI CRANE", "CHEF'S TOQUE"],
        initialOrderSequence: "5614273",
        theme: "Number of folds",
        hint: "Know when to fold 'em",
        hint2: "Number of folds",
        post_solve: ["Koala's brain: 0 folds", "Greeting card: ~1 fold", "Classic puff pastry: 6 folds", "Max. folds in half for printer paper: 7", "Flag triangle: 13 folds", "Origami crane: 16 folds", "Chef's toque: 100 folds"],
        revAllowed: true
    },
    {
        id: 78,
        solution: ["YOUTUBE", "AMAZON (SMILE)", "SNAPCHAT", "SPOTIFY", "FACEBOOK", "DISCORD", "YAHOO!"],
        initialOrderSequence: "6741325",
        theme: "ROYGBIV tech icon colors",
        hint: "Tech-nicolor rainbow",
        hint2: "ROYGBIV logo colors",
        post_solve: ["YouTube: red", "Amazon smile: orange", "Snapchat: yellow", "Spotify: green", "Facebook: blue", "Discord: indigo ('blurple')", "Yahoo!: violet"],
        revAllowed: true
    },
    {
        id: 79,
        solution: ["FORMULA 1", "WNBA", "BIG TEN CONFERENCE", "PREMIER LEAGUE", "MLB", "NFL", "MARCH MADNESS"],
        initialOrderSequence: "5741326",
        theme: "Number of teams",
        hint: "Team up",
        hint2: "Number of teams",
        post_solve: ["Formula 1: 10 teams", "WNBA: 12 teams", "Big Ten: 14 teams (lol)", "Premier League: 20 teams", "MLB: 30 teams", "NFL: 32 teams", "March Madness: 68 teams"],
        revAllowed: true
    },
    {
        id: 80,
        solution: ["HIGHEST MICHELIN GUIDE RATING", "HIGHEST MILITARY RANK", "SUBARU LOGO", "BIG DIPPER", "VAN GOGH'S STARRY NIGHT", "AMERICAN FLAG", "HOLLYWOOD WALK OF FAME"],
        initialOrderSequence: "3754162",
        theme: "Number of stars",
        hint: "Seeing stars",
        hint2: "Number of stars",
        post_solve: ["Highest Michelin rating: 3", "Highest military rank: 5", "Subaru logo: 6", "Big Dipper: 7", "Starry Night: 10 (plus the moon and Venus)", "American flag: 50", "Walk of Fame: 2781"],
        revAllowed: true
    },
    {
        id: 81,
        solution: ["SHY", "MEDIC", "FOOLISH", "IRRITABLE", "CHIPPER", "LETHARGIC", "HAVING A TICKLY NOSE"],
        initialOrderSequence: "4723615",
        theme: "Seven Dwarves alphabetically",
        hint: "Disney shorts A-Z",
        hint2: "Seven Dwarves",
        post_solve: ["Shy: Bashful", "Medic: Doc", "Foolish: Dopey", "Irritable: Grumpy", "Chipper: Happy", "Lethargic: Sleepy", "Having a tickly nose: Sneezy"],
        revAllowed: true
    },
    {
        id: 82,
        solution: ["HUMAN BODY", "HOTTEST DAY EVER RECORDED ON EARTH", "COOKED CHICKEN (MINIMUM INTERNAL)", "FINNISH SAUNA", "CAMPFIRE", "SURFACE OF THE SUN", "BOLT OF LIGHTNING"],
        initialOrderSequence: "4132765",
        theme: "Temperatures",
        hint: "So hot right now",
        hint2: "Temperatures (shown in Farenheit)",
        post_solve: ["Human body: ~98.6°", "Hottest day ever: ~134.1°", "Cooked chicken: <165°", "Finnish sauna: 175-200°", "Campfire: 900-1500°", "Surface of the sun: 10\,000°", "Lightning bolt: 50\,000°"],
        revAllowed: true
    },
    {
        id: 83,
        solution: ["RHINO BEETLE HORN", "RHINO HORN", "WALRUS TUSK", "MOOSE ANTLERS SPAN", "ELEPHANT TUSK", "TEXAS LONGHORN HORN SPAN", "NARWHAL HORN"],
        initialOrderSequence: "2163754",
        theme: "Average adult horn/antler/tusk lengths",
        hint: "A horny puzzle",
        hint2: "Horn/antler/tusk lengths",
        post_solve: ["Rhino beetle horn: <6 inches", "Rhino horn: <2 feet", "Walrus tusk: <3 feet", "Moose antler span: <6 feet", "Elephant tusk: <8 feet", "Texas Longhorn horn span: <9 feet", "Narwhal horn: <10 feet"],
        revAllowed: true
    },
    {
        id: 84,
        solution: ["UNDERGRAD DEGREE", "TOY GUN AMMO", "ANCIENT TIME INDICATOR", "\"STAYIN' ALIVE\" BANDMATE", "ARMPIT SMELL", "HOGWASH", "BAY STATE SCHOOL"],
        initialOrderSequence: "6312574",
        theme: "B + letter\, alphabetically",
        hint: "B plus",
        hint2: "B + letter\, alphabetically",
        post_solve: ["Undergrad degree: B.A.", "Toy gun ammo: BB", "Ancient time indicator: B.C.", "Stayin' Alive band member: Bee Gee", "Armpit smell: B.O.", "Hogwash: B.S.", "Bay State School: B.U."],
        revAllowed: true        
    },
    {
        id: 85,
        solution: ["LUMIÉRE (BEAUTY AND THE BEAST)", "ADVENT WREATH", "KWANZAA KINARA", "HANUKKIAH", "CANDLEPIN BOWLING LANE", "JOHN HUGHES MOVIE", "CHINESE LANTERN FESTIVAL"],
        initialOrderSequence: "6143275",
        theme: "Numbers of candles",
        hint: "Wicked puzzle",
        hint2: "Candle count",
        post_solve: ["Lumiére: 3 candles", "Advent wreath: 4-5 candles", "Kwanzaa kinara: 7 candles", "Hanukkiah: 9 candles", "Candlepin bowling: 10 candlepins", "Hughes movie: Sixteen Candles", "Lantern festival: many candles"],
        revAllowed: true
    },
    {
        id: 86,
        solution: ["JORDAN ROMERO SUMMITS EVEREST", "JUSTIN BIEBER RELEASES 'BABY'", "LOUIS BRAILLE INVENTS BRAILLE", "GRETA THUNBERG SAILS THE ATLANTIC", "JOAN OF ARC LEADS AT ORLÉANS", "MARY SHELLEY WRITES 'FRANKENSTEIN'", "BABE RUTH JOINS MLB"],
        initialOrderSequence: "4267153",
        theme: "Age when accomplishment happened",
        hint: "Teen ages",
        hint2: "Age when accomplishment happened",
        post_solve: ["Romero summits Everest: 13", "Bieber releases 'Baby': 14", "Braille invents Braille: 15", "Thunberg sails Atlantic: 16", "Joan of Arc at Orléans: 17", "Shelley writes 'Frankenstein': 18", "Ruth joins MLB: 19"],
        revAllowed: true        
    },
    {
        id: 87,
        solution: ["YARD", "METER", "FURLONG", "MILE", "NAUTICAL MILE", "LEAGUE", "PARSEC"],
        initialOrderSequence: "4521736",
        theme: "Units of length by length",
        hint: "So long!",
        hint2: "Length units by length",
        post_solve: ["Yard: 3 feet", "Meter: 3.2 feet", "Furlong: 660 feet", "Mile: 5280 feet", "Nautical mile: 6080 feet", "League: 18\,263.52 feet", "Parsec: 1.01 x 10^17 feet"],
        revAllowed: true
    },
    {
        id: 88,
        solution: ["BACK OF AN LP RECORD", "LAST CAR OF A TRAIN", "BUTT MUSCLE", "LAST GREEK LETTER", "BACK PART OF A SHIP", "THE 'BOOT' OF A CAR", "BACK OF A PAINTING"],
        initialOrderSequence: "2561743",
        theme: "Backs and bottoms, A to Z",
        hint: "I'm back! (A to Z)",
        hint2: "Backs and bottoms alphabetically",
        post_solve: ["Back of an LP: B-side", "Last train car: Caboose", "Butt muscle: Gluteus maximus", "Last Greek letter: Omega", "Back of a ship: Stern", "'Boot' of a car: Trunk", "Back of a painting: Verso"],
        revAllowed: true
    },
    {
        id: 89,
        solution: ["'IT' CLOWN PENNYWISE", "ORIGINAL MARIO KART BATTLE KART", "LAWNCHAIR LARRY WALTERS FLIGHT", "2023 MACY'S THANKSGIVING PARADE", "NENA SONG", "ANNUAL ALBUQUERQUE FESTIVAL", "HOUSE FROM 'UP'"],
        initialOrderSequence: "5321746",
        theme: "Number of balloons",
        hint: "Inflation data",
        hint2: "Number of balloons",
        post_solve: ["Pennywise: 1 balloon", "Mario Kart battle: 3 balloons", "Lawnchair Larry flight: 42 balloons", "2023 Macy's parade: 49 balloons", "Nena song: 99 luftballoons", "ABQ balloon fest: ~700 hot air balloons", "'Up' house: 20\,622 balloons"],
        revAllowed: true
    },
    {
        id: 90,
        solution: ["ANTARCTICA", "SOUTH AMERICA", "OCEANIA", "NORTH AMERICA", "EUROPE", "ASIA", "AFRICA"],
        initialOrderSequence: "4257631",
        theme: "Number of countries",
        hint: "United nations",
        hint2: "Number of countries",
        post_solve: ["Antarctica: 0", "South America: 12", "Oceania: 16", "North America: 23", "Europe: 45", "Asia: 48", "Africa: 54"],
        revAllowed: true
    },
    {
        id: 91,
        solution: ["AUSTRALIA - STATES", "UAE - EMIRATES", "CANADA - PROVINCES", "MEXICO - STATES", "NIGERIA - STATES", "JAPAN - PREFECTURES", "US - STATES"],
        initialOrderSequence: "5143672",
        theme: "Number of<br>states/provinces/etc",
        hint: "United states",
        hint2: "States, provinces, etc",
        post_solve: ["Australia: 6 states", "UAE: 7 emirates", "Canada: 10 provinces", "Mexico: 31 states", "Nigeria: 36 states", "Japan: 47 prefectures", "US: 50 states"],
        revAllowed: true
    },
    {
        id: 92,
        solution: ["FREAKS AND GEEKS", "SUCCESSION", "THE WIRE", "GAME OF THRONES", "GREY'S ANATOMY", "THE SIMPSONS", "SATURDAY NIGHT LIVE"],
        initialOrderSequence: "3265417",
        theme: "Number of seasons",
        hint: "Seasons",
        hint2: "Number of seasons",
        post_solve: ["Freaks and Geeks: 1 season", "Succession: 4", "The Wire: 5", "Game of Thrones: 8", "Grey's Anatomy: 20 (so far)", "The Simpsons: 34 (so far)", "SNL: 49 (so far)"],
        revAllowed: true
    },
    {
        id: 93,
        solution: ["BRITISH PM'S OFFICE", "JUMP STREET CHAPEL", "NBC STUDIOS IN NYC", "'P SHERMAN' (FINDING NEMO)", "ERNIE AND BERT'S APARTMENT", "SHERLOCK HOLMES'S FLAT", "THE WHITE HOUSE"],
        initialOrderSequence: "6471325",
        theme: "Addresses numerically",
        hint: "Addresses",
        hint2: "Addresses numerically",
        post_solve: ["PM's office: 10 Downing Street", "Jump Street Chapel: 21 Jump Street", "NBC Studios: 30 Rockefeller Plaza", "P. Sherman: 42 Wallaby Way", "Ernie and Bert: 123 Sesame Street", "Sherlock Holmes: 221B Baker Street", "White House: 1600 Pennsylvania Avenue"],
        revAllowed: true
    },
    {
        id: 94,
        solution: ["BUTTERFINGER BARS PER PACKAGE", "PEACE SIGN", "SMALLEST MCDONALD'S CHICKEN SELECTS", "MARGE SIMPSON'S HAND", "STATUE OF DAVID'S HAND", "INIGO MONTOYA'S NEMESIS' HAND", "FINGER LAKES"],
        initialOrderSequence: "5371624",
        theme: "Finger counts",
        hint: "Count on your fingers",
        hint2: "Number of fingers",
        post_solve: ["Butterfingers: 1 per package", "Peace sign: 2 fingers", "Smallest chicken selects: 3 fingers", "Marge Simpson's hand: 4 fingers", "David's hand: 5 fingers", "Inigo Montoya's nemesis: 6 fingers", "Finger lakes: 11"],
        revAllowed: true
    },
    {
        id: 95,
        solution: ["BELUGA", "BEAR", "SWAN", "GOOSE", "KANGAROO", "FERRET", "BAT"],
        initialOrderSequence: "5312674",
        theme: "Baby animal names\, alphabetically",
        hint: "Baby names (A-Z)",
        hint2: "Names of baby animals",
        post_solve: ["Beluga: calf", "Bear: cub", "Swan: cygnet", "Goose: gosling", "Kangaroo: joey", "Ferret: kit", "Bat: pup"],
        revAllowed: true
    },
    {
        id: 96,
        solution: ["CAIRO (IL to EGYPT)", "VENICE (CA to ITALY)", "ATHENS (GA to GREECE)", "ST PETERSBURG (FL to RUSSIA)", "ROME (GA to ITALY)", "PARIS (TX to FRANCE)", "BIRMINGHAM (AL to ENGLAND)"],
        initialOrderSequence: "7431652",
        theme: "Distance between same-name cities",
        hint: "So close yet so far",
        hint2: "Distance between cities",
        post_solve: ["Cairos: 10\,314 mi", "Venices: 9\,891 mi", "Athenses: 9\,008 mi", "St Petersburgs: 8\,364 miles mi", "Romes: 8\,105 mi", "Parises: 7\,782 mi", "Birminghams: 6\,795 mi"],
        revAllowed: true
    },
    {
        id: 97,
        solution: ["SHOHEI OHTANI LA DODGERS CONTRACT", "TAYLOR SWIFT ERAS TOUR", "THE LION KING ON BROADWAY", "\"AVATAR\" (2009) BOX OFFICE", "\"HARRY POTTER\" BOOKS", "SPACE INVADERS GAME", "APPLE ANNUAL REVENUE"],
        initialOrderSequence: "4256173",
        theme: "Total revenue earned",
        hint: "Gross!",
        hint2: "Total (gross) revenue",
        post_solve: ["Shohei Ohtani contract: $700 million", "Eras tour: $1 billion", "\"The Lion King\" on Bway: $1.9 billion", "\"Avatar\" box office: $2.9 billion", "\"Harry Potter\" books: $7.7 billion", "Space Invaders: $13 billion ($30B+ with inflation!)", "Apple annual revenue: $383 billion"],
        revAllowed: true
    },
    {
        id: 98,
        solution: ["STANDARD RESIDENTIAL WINDOW", "MONA LISA PROTECTIVE CASE", "GRAND CANYON SKYWALK", "INTL. SPACE STATION WINDOW", "U.S. PRESIDENT'S LIMO WINDOW", "DEEP-SEA SUBMARINE WINDOW", "GEORGIA AQUARIUM GALLERY"],
        initialOrderSequence: "6153274",
        theme: "Glass thicknesses",
        hint: "Through thick and thin",
        hint2: "Glass thicknesses",
        post_solve: ["Residential window: .1 inches", "Mona Lisa case: 1.5 inches", "Grand Canyon skywalk: 2.5 inches", "Space Station window: ~5 inches (4 1-inch panes + gaps)", "President's limo window: 5.1 inches", "Submarine window: 7.8 inches", "Georgia Aquarium gallery: 24 inches(!)"],
        revAllowed: true
    },
    {
        id: 99,
        solution: ["MERCURY", "GEMINI", "APOLLO", "SKYLAB", "SPACE SHUTTLE", "INTL SPACE STATION", "ARTEMIS"],
        initialOrderSequence: "5417623",
        theme: "NASA missions by first launch",
        hint: "NASA launches",
        hint2: "NASA missions by year",
        post_solve: ["Mercury: 1961-63", "Gemini: 1965-66", "Apollo: 1968-72", "Skylab: 1973-74", "Space Shuttle: 1981-2011", "ISS: 1998- (ongoing)", "Artemis: 2025 (planned)"],
        revAllowed: true
    },
    {
        id: 100,
        solution: ["\!", "\@", "\#", "\$", "\%", "\^", "\&"],
        initialOrderSequence: "6241375",
        theme: "Keyboard number row symbols",
        hint: "Keyboard (no peeking!)",
        hint2: "Number row symbols",
        post_solve: ["\!: 1", "\@: 2", "\#: 3", "\$: 4", "\%: 5", "\^: 6", "\&: 7"],
        revAllowed: true
    },
    {
        id: 101,
        solution: ["TYPICAL BATHROOM STALL", "MONICA'S DOOR IN 'FRIENDS'", "SAMSON'S HAIRCUT", "PANAMA CANAL", "OCTUPLE SCULL (OARLOCKS)", "SCOTLAND (LOCHS)", "PARIS LOVERS' BRIDGE CIRCA 2014"],
        initialOrderSequence: "3175624",
        theme: "Lock counts",
        hint: "Lock it in",
        hint2: "Number of locks",
        post_solve: ["Typical bathroom stall: 1 lock", "Monica's door: 3 locks", "Samson's haircut: 7 locks of hair", "Panama Canal: 12 canal locks (6 pairs)", "Octuple rowing scull: 16 oarlocks", "Scotland: ~31,460", "Paris bridge (until 2014): 700,000+ padlocks"],
        revAllowed: true,
    },
    {
        id: 102,
        solution: ["HINDU CHUDAKARANA (FIRST HAIRCUT)", "CATHOLIC FIRST COMMUNION", "JEWISH B'NAI MITZVAH", "MEXICAN/LATIN QUINCEAÑERA", "AMISH RUMSPRINGA", "PHILIPPINE DEBUT", "KOREAN HWANGAP (MAJOR BIRTHDAY)"],
        initialOrderSequence: "4271635",
        theme: "Rites by age",
        hint: "That's rite!",
        hint2: "Rites by age",
        post_solve: ["Chudakarana: 1-7", "First communion: 7-12", "B'nai mitzvah: 13", "Quinceañera: 15", "Rumspringa: 16", "Philippine debut: 18", "Hwangap: 60"],
        revAllowed: true
    },
    {
        id: 103,
        solution: ["THREE-WAY INTERSECTION", "HORSESHOE", "BIRD FLIGHT FORMATION", "SHRUG", "OPEN SCISSORS", "TUNING FORK", "LIGHTNING BOLT"],
        initialOrderSequence: "5417263",
        theme: "Letter shapes T-Z",
        hint: "20-26",
        hint2: "Letter shapes T-Z",
        post_solve: ["Three-way intersection: T", "Horseshoe: U", "Bird formation: V", "Shrug: W", "Open scissors: X", "Tuning fork: Y", "Lightning bolt: Z"],
        revAllowed: true
    },
    {
        id: 104,
        solution: ["ADA WHEELCHAIR ACCESS RAMP", "SF LOMBARD STREET", "OLYMPIC SKI JUMP IN-RUN", "GIZA PYRAMID FACE", "CONEY ISLAND CYCLONE DROP", "LETTER V IN THIS FONT", "SF TRANSAMERICA PYRAMID FACE"],
        initialOrderSequence: "2164735",
        theme: "Steepnesses by angle",
        hint: "A bit steep",
        hint2: "Steepnesses by angle",
        post_solve: ["ADA wheelchair access ramp: <5 degrees", "SF Lombard Street: 27 degrees", "Olympic ski jump in-run: 37 degrees", "Giza pyramid face: 52 degrees", "Coney Island Cyclone drop: 58.6 degrees", "Letter V: 71 degrees", "Transamerica pyramid: 85 degrees"],
        revAllowed: true
    },
    {
        id: 105,
        solution: ["DIANA TAURASI", "MIA HAMM", "PELÉ", "TOM BRADY", "MICHAEL JORDAN", "JACKIE ROBINSON", "WAYNE GRETZKY"],
        initialOrderSequence: "3627154",
        theme: "Jersey numbers",
        hint: "Well-worn numbers",
        hint2: "Jersey numbers",
        post_solve: ["Diana Taurasi: 3", "Mia Hamm: 9", "Pelé: 10", "Tom Brady: 12", "Michael Jordan: 23", "Jackie Robinson: 42", "Wayne Gretzky: 99"],
        revAllowed: true
    },
    {
        id: 106,
        solution: ["MILE", "THINGS I HATE ABOUT YOU", "DRESSES", "DAYS LATER", "FIRST DATES", "DALMATIANS", "DAYS OF SUMMER"],
        initialOrderSequence: "3741526",
        theme: "Movie titles missing a number",
        hint: "Movie magic numbers",
        hint2: "Movie titles missing a number",
        post_solve: ["8 MILE", "10 THINGS I HATE ABOUT YOU", "27 DRESSES", "28 DAYS LATER", "50 FIRST DATES", "101 DALMATIANS", "(500) DAYS OF SUMMER"],
        revAllowed: true
    },
    {
        id: 107,
        solution: ["CONFECTIONER'S SUGAR", "COCONUT SUGAR", "TURBINADO SUGAR", "GRANULATED SUGAR", "BROWN SUGAR (PACKED)", "MAPLE SYRUP", "HONEY"],
        initialOrderSequence: "2143765",
        theme: "Sweeteners by weight\n(grams per cup)",
        hint: "Sweet grams",
        hint2: "Sweeteners by weight",
        post_solve: ["Confectioner's sugar: 115g", "Cocunut sugar: 154g", "Turbinado sugar: 180g", "Granulated sugar: 200g", "Brown sugar: 230g", "Maple syrup: 312g", "Honey: 336g"],
        revAllowed: true
    },
    {
        id: 108,
        solution: ["SUPERMAN", "BATMAN", "CAPTAIN AMERICA", "WONDER WOMAN", "SPIDER-MAN", "STORM (X-MEN)", "SAILOR MOON"],
        initialOrderSequence: "6517423",
        theme: "Superhero debut years",
        hint: "Super debuts",
        hint2: "Superheroes by debut year",
        post_solve: ["Superman: 1938", "Batman: 1939", "Captain America: 1940", "Wonder Woman: 1941", "Spider-man: 1962", "Storm: 1975", "Sailor Moon: 1992"],
        revAllowed: true
    },
    {
        id: 109,
        solution: ["WAITING GAME", "OROGENY", "CALAMARI", "CASCADE", "CASSAVA", "CABERNET FRANC", "CAYUGA"],
        initialOrderSequence: "2614573",
        theme: "West <-> East U.S. states by latitudes",
        hint: "Coast to coast",
        hint2: "First two / last two letters",
        post_solve: ["(WA)ITING GA(ME)", "(OR)OGE(NY)", "(CA)LAMA(RI)", "(CA)SCA(DE)", "(CA)SSA(VA)", "(CA)BERNET FRA(NC)", "(CA)YU(GA)"],
        revAllowed: false
    },
    {
        id: 110,
        solution: ["MARCH MADNESS BRACKET ANNOUNCED", "BOSTON MARATHON", "ELECTION DAY", "PINK DAY IN \"MEAN GIRLS\"", "THANKSGIVING", "\"ALOHA\" DAY", "COLLEGE FOOTBALL GAMES PLAYED"],
        initialOrderSequence: "5132476",
        theme: "Days of the week",
        hint: "Week-minded (S->S)",
        hint2: "Sunday thru Saturday",
        post_solve: ["March Madness bracket announced: Selection Sunday", "Boston Marathon: always on a Monday", "Election Day: Tuesday", "Mean Girls: 'on Wednesdays we wear pink'", "Thanksgiving: Thursday", "\"Aloha\" day: Casual/Aloha Friday", "College Football: Saturday"],
        revAllowed: true
    },
    {
        id: 111,
        solution: ["PAPER", "WOOD", "TIN", "CRYSTAL", "PORCELAIN", "SILVER", "PEARL"],
        initialOrderSequence: "3251764",
        theme: "Classic anniversary gifts",
        hint: "Reveling revolutions",
        hint2: "Anniversary gifts",
        post_solve: ["Paper: 1st", "Wood: 5th", "Tin: 10th", "Crystal: 15th", "Porcelain: 20th", "Silver: 25th", "Pearl: 30th"],
        revAllowed: true
    },
    {
        id: 112,
        solution: ["THE", "BE (ALL CONJUGATIONS)", "TO", "OF", "AND", "A", "IN"],
        initialOrderSequence: "5147263",
        theme: "Most common English words",
        hint: "Popular language",
        hint2: "Most common words",
        post_solve: ["The: 1", "Be: 2", "To: 3", "Of: 4", "And: 5", "A: 6", "In: 7"],
        revAllowed: true
    },
    {
        id: 113,
        solution: ["USA", "GERMANY", "MEXICO", "BRAZIL", "INDIA", "SOUTH KOREA", "JAPAN"],
        initialOrderSequence: "5137264",
        theme: "National currencies A-Z",
        hint: "Currency ABCs",
        hint2: "Alphabetical by currency",
        post_solve: ["USA: Dollar", "Germany: Euro", "Mexico: Peso", "Brazil: Real", "India: Rupee", "South Korea: Won", "Japan: Yen"],
        revAllowed: true
    },
    {
        id: 114,
        solution: ["CHEVRON SHAPE", "THE MARK OF ZORRO", "THE FLASH LOGO", "CONFOUNDED FACE EMOJI MOUTH", "PIKACHU'S TAIL", "SF LOMBARD STREET", "OLYMPIC SLALOM COURSE"],
        initialOrderSequence: "4261735",
        theme: "Number of kinks/turns",
        hint: "Getting kinky",
        hint2: "Number of kinks/turns",
        post_solve: ["Chevron: 1 kink", "Mark of Zorro (Z): 2 kinks", "The Flash logo: 4 kinks", "Confounded emoji mouth: 5 kinks", "Pikachu's tail: 6 kinks", "SF Lombard St: 8 turns", "Olympic Slalom course: 40-75 gates"],
        revAllowed: true
    },
    {
        id: 115,
        solution: ["THE DEPARTED", "THE GODFATHER", "AVENGERS ENDGAME", "TITANIC", "LORD OF THE RINGS RETURN OF THE KING", "LAWRENCE OF ARABIA", "GONE WITH THE WIND"],
        initialOrderSequence: "6412735",
        theme: "Movies by runtime",
        hint: "It's a long story",
        hint2: "Movies by runtime",
        post_solve: ["The Departed: 2h 31m", "The Godfather: 2h 55m", "Avengers Endgame: 3h 2m", "Titanic: 3h 15m", "LOTR ROTK: 3h 21m", "Lawrence Of Arabia: 3h 42m", "Gone With The Wind: 3h 58m"],
        revAllowed: true
    },
    {
        id: 116,
        solution: ["\'FABULOUS!\'", "WEST COAST STATE (JOCULARLY)", "EASILY BROKEN", "SUFFIX WITH 'IDEAL'", "2000s WINDOWS OS", "COMEDIAN WONG", "CANINE LOLCATS EQUIVALENTS"],
        initialOrderSequence: "3256174",
        theme: "Mary Poppins lyric",
        hint: "Mary Poppins",
        hint2: "Mary Poppins lyric",
        post_solve: ["\"Fabulous!\": Super", "West coast state\, jocularly: Cali", "Easily broken: Fragile", "Suffix with 'ideal': -Istic", "2000s Windows OS: XP", "Comedian Wong: Ali", "Canine LOLcats equivalents: Doges"],
        revAllowed: true
    },
    {
        id: 117,
        solution: ["NEAPOLITAN ICE CREAM", "ORIGINAL STARBURSTS PACK", "ORIGINAL SKITTLES BAG", "KFC (HERBS AND SPICES)", "DR PEPPER (RECIPE BLEND)", "BASKIN ROBBINS SLOGAN", "\"OFFICIAL\" JELLY BELLY"],
        initialOrderSequence: "4137625",
        theme: "Number of flavors",
        hint: "Flavortown",
        hint2: "Number of flavors",
        post_solve: ["Neapolitan: 3 flavors", "Starbursts: 4 flavors", "Skittles: 5 flavors", "KFC: 11 herbs/spices", "Dr Pepper: 23-flavor blend", "Baskin Robbins slogan: 31 (tho 1400+ IRL)", "'Official' Jelly Belly: 50 (tho 150+ total)"],
        revAllowed: true        
    },
    {
        id: 118,
        solution: ["CALIFORNICATION", "PLUTO PROJECTOR", "OCEAN AVENUE", "AMERICAN IDIOT", "(DON'T FEAR) THE REAPER", "CLOSER TO FINE", "SMOKE ON THE WATER"],
        initialOrderSequence: "5142673",
        theme: "Musical artist rainbow",
        hint: "Artists palette",
        hint2: "Musical artist rainbow",
        post_solve: ["Californication: RED Hot Chili Peppers", "Pluto Projector: Rex ORANGE County", "Ocean Avenue: YELLOWcard", "American Idiot: GREEN Day", "(Don't Fear) The Reaper: BLUE Öyster Cult", "Closer To Fine: The INDIGO Girls", "Smoke On The Water: Deep PURPLE (violet)"],
        revAllowed: true
    },
    {
        id: 119,
        solution: ["10 / 10", "NATURAL LOG OF 10", "10", "10 + 10", "10 x 10", "10!", "10 ^ 10"],
        initialOrderSequence: "3651472",
        theme: "Smallest to largest",
        hint: "Do the math",
        hint2: "Smallest to largest",
        post_solve: ["10/10 = 1", "ln(10) ~ 2.3", "10", "10 + 10 = 20", "10 x 10 = 100", "10! ~ 3.6 million", "10 ^ 10 = 10 trillion"],
        revAllowed: true
    },
    {
        id: 120,
        solution: ["THE SON OF MAN (MAGRITTE PAINTING)", "MIKE WAZOWSKI (MONSTERS INC)", "CAPTAIN HOOK", "BLINKY THE FISH (THE SIMPSONS)", "HONEYBEE", "TARANTULA", "ARGUS (GREEK MYTHOLOGY)"],
        initialOrderSequence: "6251743",
        theme: "Number of eyes",
        hint: "Eye to eye",
        hint2: "Number of eyes",
        post_solve: ["The Son Of Man: 0", "Mike Wazowski: 1", "Captain Hook: 2 (no eyepatch!)", "Blinky the fish: 3", "Honeybee: 5(?!)", "Tarantula: 8", "Argus: 100"],
        revAllowed: true
    },
    {
        id: 121,
        solution: ["PERSON", "TREE", "ROLLER COASTER", "FERRIS WHEEL", "DAM", "RADIO TOWER", "BUILDING"],
        initialOrderSequence: "3715426",
        theme: "World's tallest-ever...",
        hint: "World's tallest-ever...",
        hint2: "Height records",
        post_solve: ["Person: Robert Wadlow 8' 11\"", "Tree: Hyperion 379.1'", "Roller Coaster: Kingda Ka 456'", "Ferris Wheel: Ain Dubai 820'", "Dam: Jinping-I 1001'", "Radio Tower: Warsaw mast 2121'", "Building: Burj Khalifa 2722'"],
        revAllowed: true
    },
    {
        id: 122,
        solution: ["NOSE", "COCKPIT", "PASSENGER ENTRY", "TURBINES", "WING FLAPS", "STABILIZERS", "EXHAUST"],
        initialOrderSequence: "3472516",
        theme: "737 front to back",
        hint: "On a 737",
        hint2: "737 front to back",
        post_solve: ["Nose: front", "Cockpit: front", "Passenger entry: fuselage", "Turbines: front of wings", "Flaps: back of wings", "Stabilizers: tail", "Exhaust: tail"],
        revAllowed: true
    },
    {
        id: 123,
        solution: ["VICE PRESIDENT", "SPEAKER OF THE HOUSE", "SENATE PRESIDENT PRO TEM", "SECRETARY OF STATE", "SECRETARY OF THE TREASURY", "SECRETARY OF DEFENSE", "ATTORNEY GENERAL"],
        initialOrderSequence: "4651273",
        theme: "Presidential succession",
        hint: "Get in line",
        hint2: "Presidential succession",
        post_solve: ["Vice president: 1st in line", "Speaker of the House: 2nd", "Senate president pro tem: 3rd", "Sec of State: 4th", "Sec of Treasury: 5th", "Sec of Defense: 6th", "Atty Gen: 7th"],
        revAllowed: true
    },
    {
        id: 124,
        solution: ["THE FISH", "THE RAM", "THE BULL", "THE CRAB", "THE LION", "THE SCORPION", "THE GOAT"],
        initialOrderSequence: "2613754",
        theme: "Zodiac animals chronologically",
        hint: "Animal signs (start date)",
        hint2: "Zodiac animals chronologically",
        post_solve: ["The Fish: Feb/March (Pisces)", "The Ram: March/April (Aries)", "The Bull: April/May (Taurus)", "The Crab: June/July (Cancer)", "The Lion: July/August (Leo)", "The Scorpion: October/November (Scorpio)", "The Goat: December/January (Capricorn)"],
        revAllowed: true
    },
    {
        id: 125,
        solution: ["ANTS", "SEAGULLS", "CROWS", "OWLS", "DOLPHINS", "LIONS", "BEES"],
        initialOrderSequence: "5127463",
        theme: "Groups of animals A-Z",
        hint: "A group of... (A-Z)",
        hint2: "Animal groups",
        post_solve: ["Ants: Colony (or Army)", "Seagulls: Flock", "Crows: Murder", "Owls: Parliament", "Dolphins: Pod", "Lions: Pride", "Bees: Swarm"],
        revAllowed: true
    },
    {
        id: 126,
        solution: ["U", "MAROON", "EVE", "MATCHBOX", "SUM", "BLINK", "ANDRÉ"],
        initialOrderSequence: "4136275",
        theme: "Number bands numerically",
        hint: "Musical numbers",
        hint2: "Number bands numerically",
        post_solve: ["U2", "Maroon 5", "Eve 6", "Matchbox Twenty", "Sum 41", "Blink-182", "André 3000<br>Puzzle by Rebecca Goldstein!"],
        revAllowed: true
    },
    {    
        id: 127,
        solution: ["DELAWARE", "OHIO", "FLORIDA", "CALIFORNIA", "ARIZONA", "ALASKA", "HAWAII"],
        initialOrderSequence: "6517342",
        theme: "States by admission to union",
        hint: "Unionized",
        hint2: "Date of admission",
        post_solve: ["Delaware: 1st", "Ohio: 17th", "Florida: 27th", "California: 31st", "Arizona: 48th", "Alaska: 49th", "Hawaii: 50th"],
        revAllowed: true         
    },
    {
        id: 128,
        solution: ["SALTO FORWARD TUCKED", "ARABIAN SALTO TUCKED", "WHIP WITH FULL TWIST", "DOUBLE SALTO BACKWARD PIKED", "DOUBLE ARABIAN SALTO TUCKED", "BILES I (2X LAYOUT HALF-OUT)", "BILES II (2X SALTO BACKWARD TUCKED 3X TWIST)"],
        initialOrderSequence: "5136472",
        theme: "Women's gymnastics floor<br>tumbles by difficulty",
        hint: "Tumbling toughness",
        hint2: "Floor moves by difficulty",
        post_solve: ["Salto forward tucked: A", "Arabian Salto Tucked: B", "Whip with full twist: C", "Double salto backward piked: D", "Double Arabian salto tucked: E", "Biles I: G", "Biles II: J(!!!)"],
        revAllowed: true
    },
    {
        id: 129,
        solution: ["AARON BURR", "HANNIBAL HAMLIN", "SPIRO AGNEW", "WALTER MONDALE", "DAN QUAYLE", "AL GORE", "MIKE PENCE"],
        initialOrderSequence: "5436172",
        theme: "Non-prez VPs in order",
        hint: "Always a VP never a POTUS",
        hint2: "Non-prez VPs in order",
        post_solve: ["Aaron Burr: 3rd (Jefferson)", "Hannibal Hamlin: 15th (Lincoln)", "Spiro Agnew: 39th (Nixon)", "Walter Mondale: 42nd (Carter)", "Dan Quayle: 44th (H.W. Bush)", "Al Gore: 45 (Clinton)", "Mike Pence: 48 (Trump)"],
        revAllowed: true
    },
    {
        id: 130,
        solution: ["AP TEST", "SINGLE GYMNASTICS ROUTINE (PRE 2006)", "SINGLE DARTS ROUND (3 THROWS)", "BOWLING GAME", "SAT SCORE (CURRENT FORMAT)", "JEOPARDY! GAME (DOLLARS)", "PACMAN"],
        initialOrderSequence: "6152734",
        theme: "Perfect scores",
        hint: "Flawless victory",
        hint2: "Perfect scores",
        post_solve: ["AP test: 5", "Single gymnastics routine (pre '06): 10 (now higher)", "Single darts round: 180 (3 triple 20s)", "Bowling game: 300 (12 strikes)", "SAT score: 1600 (prev 2400)", "Jeopardy!: $566,400", "Pacman: 3,333,360"],
        revAllowed: true
    },
    {
        id: 131,
        solution: ["BUZZCUT", "CREW CUT", "PIXIE CUT", "BOB", "LOB", "MERMAID HAIR", "RAPUNZEL"],
        initialOrderSequence: "5724136",
        theme: "Hairstyle lengths",
        hint: "Off the top of my head",
        hint2: "Hairstyle lengths",
        post_solve: ["Buzzcut: shaved head", "Crew cut: a little on top", "Pixie cut: ~ear length", "Bob: jawline", "Lob (long bob): ~collarbone", "Mermaid hair: chest", "Rapunzel: castle height"],
        revAllowed: true
    },
    {
        id: 132,
        solution: ["TABLE TENNIS HIT", "CRICKET BOWL", "BASEBALL PITCH", "HOCKEY SHOT", "SOCCER SHOT", "TENNIS SERVE", "BADMINTON SMASH"],
        initialOrderSequence: "6431725",
        theme: "The fastest-ever...",
        hint: "The fastest-ever...",
        hint2: "Top speeds",
        post_solve: ["Table tennis hit: 72 mph (116 kph)", "Cricket bowl: 100 mph (161 kph)", "Baseball pitch: 105 mph (169 kph)", "Hockey shot: 114 mph (183 kph)", "Soccer shot: 137 mph (221 kph)", "Tennis serve: 163 mph (262 kph)", "Badminton smash: 351 mph (565 kph)"],
        revAllowed: true
    },
    {
        id: 133,
        solution: ["HOVERCRAFT", "UNICYCLE", "SEGWAY", "MOTORCYCLE WITH SIDECAR", "SEDAN", "MARS CURIOSITY ROVER", "SEMI TRUCK WITH RIG"],
        initialOrderSequence: "3512746",
        theme: "Wheel counts",
        hint: "Wheely good puzzle",
        hint2: "Wheel counts",
        post_solve: ["Hovercraft: 0 wheels", "Unicycle: 1 wheel", "Segway: 2 wheels", "Motorcycle w/ sidecar: 3 wheels", "Car: 4 wheels", "Mars curiosity rover: 6 wheels", "Semi truck: ~18 wheels"],
        revAllowed: true
    },
    {
        id: 134,
        solution: ["HAVARTI", "STILTON", "BRIE", "FETA", "GORGONZOLA", "MANCHEGO", "GRUYÉRE"],
        initialOrderSequence: "6472513",
        theme: "European cheese by alphabetical country",
        hint: "Euro cheese whiz (A-Z)",
        hint2: "European cheese by country (A-Z)",
        post_solve: ["Havarti: Denmark", "Stilton: England", "Brie: France", "Feta: Greece", "Gorgonzola: Italy", "Manchego: Spain", "Gruyére: Switzerland"],
        revAllowed: true
    },
    {
        id: 135,
        solution: ["HURRICANE CATEGORY SCALE", "KINSEY SCALE", "MAJ. MUSIC SCALE (# OF NOTES)", "RICHTER SCALE", "BEAUFORT WIND SCALE", "PH SCALE", "GOLD PURITY SCALE (MAX KARATS)"],
        initialOrderSequence: "2751436",
        theme: "Scale maximums",
        hint: "Scaling peaks",
        hint2: "A scale from 0/1 to...",
        post_solve: ["Saffir-Simpson hurricane scale: Category 5", "Kinsey sexuality scale: Max 6", "Maj. music scale: 8 notes", "Richter scale: max 9.9", "Beaufort wind scale: max 12", "pH scale: max 14", "Gold purity: max 24 karats"],
        revAllowed: true
    },
    {
        id: 136,
        solution: ["STARBUCKS", "NIKE", "SALESFORCE", "APPLE", "WARNER BROS. DISCOVERY", "MATTEL", "PETCO"],
        initialOrderSequence: "5416372",
        theme: "West Coast corporate HQs on the map",
        hint: "HQ Trivia",
        hint2: "Corporate HQs North to South",
        post_solve: ["Starbucks: Seattle WA", "Nike: Beaverton (Portland) OR", "Salesforce: San Francisco CA", "Apple: Cupertino (Silicon Valley) CA", "Warner Bros. Discovery: Burbank CA", "Mattel: El Segundo (LA) CA", "PetCo: San Diego CA"],
        revAllowed: true
    },
    {
        id: 137,
        solution: ["ALEXANDER THE GREAT", "CLEOPATRA", "GENGHIS KHAN", "KING HENRY VIII", "KING LOUIS XIV", "CATHERINE THE GREAT", "QUEEN ELIZABETH II"],
        initialOrderSequence: "4632175",
        theme: "Monarchs chronologically by reign",
        hint: "History rules!",
        hint2: "Reigns through history",
        post_solve: ["Alexander the Great: 336-323 BCE", "Cleopatra: 51-30 BCE", "Genghis Khan: 1206-1227", "King Henry VIII: 1509-1547", "King Louis XIV: 1643-1715", "Catherine the Great: 1762-1796", "Queen Elizabeth: 1952-2022"],
        revAllowed: true
    },
    {
        id: 138,
        solution: ["AID", "FIDDLE", "EYE BLIND", "WALL", "ELEMENT", "SENSE", "HEAVEN"],
        initialOrderSequence: "5361274",
        theme: "Preceded by ordinal rank",
        hint: "Ordinal Up!",
        hint2: "First, second, third, etc...",
        post_solve: ["First aid", "Second fiddle", "Third Eye Blind", "Fourth wall", "(The) Fifth Element", "(The) Sixth Sense", "Seventh Heaven"],
        revAllowed: true
    },
    {
        id: 139,
        solution: ["ARCHERY", "BASKETBALL", "JUDO", "TABLE TENNIS", "BEACH VOLLEYBALL", "SURFING", "BREAKING (DANCE)"],
        initialOrderSequence: "5127364",
        theme: "Olympic debut years",
        hint: "Olympic debuts",
        hint2: "Olympic debuts by year",
        post_solve: ["Archery: 1900", "Basketball: 1936", "Judo: 1964", "Table Tennis: 1988", "Beach Volleyball: 1996", "Surfing: 2020", "Breaking (dance): 2024"],
        revAllowed: true
    },
    {
        id: 140,
        solution: ["REFRIGERATOR", "ICE (FREEZING POINT)", "DRY ICE (FREEZING POINT)", "LOWEST EARTH SURFACE TEMP. EVER", "LIQUID NITROGEN", "OUTER SPACE", "ABSOLUTE ZERO"],
        initialOrderSequence: "5126734",
        theme: "Coldnesses",
        hint: "Brr!",
        hint2: "Temperatures by coldness",
        post_solve: ["Refrigerator: 40° F\, 4.44° C", "Ice (freezing point): 32° F\, 0° C", "Dry ice (freezing point): -109.3° F\, -78.5° C", "Lowest Earth surface temp. ever: -128.6° F\, -89.2° C", "Liquid Nitrogen: -321° F\, -196° C", "Outer space: -454° F\, -270° C", "Absolute zero: -459.67° F\, -273.15° C"],
        revAllowed: true
    },
    {
        id: 141,
        solution: ["FLYWEIGHT", "BANTAMWEIGHT", "FEATHERWEIGHT", "LIGHTWEIGHT", "WELTERWEIGHT", "MIDDLEWEIGHT", "HEAVYWEIGHT"],
        initialOrderSequence: "5417623",
        theme: "Boxing weight classes",
        hint: "Pound for pounding",
        hint2: "Boxing weight classes",
        post_solve: ["Flyweight: 108-112 lb", "Bantamweight: 115-118lb", "Featherweight: 122-126 lb", "Lightweight: 130-135 lb", "Welterweight: 140-147 lb", "Middleweight: 154-160 lb", "Heavyweight: 200+ lb"],
        revAllowed: true        
    },
    {
        id: 142,
        solution: ["STANDARD TENNIS BALL TUBE", "BASEBALL WALK", "NEWTON'S CRADLE", "IKEA MEATBALLS PER SERVING", "SKEEBALL ROUND", "STANDARD POOL TABLE", "BINGO"],
        initialOrderSequence: "6517243",
        theme: "Ball counts",
        hint: "Balls",
        hint2: "Number of balls",
        post_solve: ["Tennis ball tube: 3", "Baseball walk: 4", "Newton's cradle: 5", "IKEA meatballs per serving: 8", "Skeeball round: 9", "Pool table: 16", "Bingo: 75 (US) or 90 (UK)"],
        revAllowed: true
    },
    {
        id: 143,
        solution: ["QUEEN FRONTMAN FREDDIE", "TENNIS STAR WILLIAMS", "SOIL", "CHOCOLATE/CARAMEL/NOUGAT BAR", "DROPS OF ___: TRAIN SONG", "90s SEGA CONSOLE", "NUCLEAR POWER ELEMENT NAMESAKE"],
        initialOrderSequence: "5361724",
        theme: "First seven planets",
        hint: "World tour",
        hint2: "First seven planets",
        post_solve: ["Queen frontman: Freddie Mercury", "Tennis star: Venus Williams", "Soil: Earth", "Chocolate/caramel/nougat bar: Mars Bar", "Train song: Drops of Jupiter", "90s console: Sega Saturn", "Uranium namesake: Uranus"],
        revAllowed: true
    },
    {
        id: 144,
        solution: ["KALEY CUOCO \"BIG BANG THEORY\" ROLE", "ELEMENT IN EARTH'S CORE", "PERFECT FOOTBALL PASS SLANGILY", "FRENCH ___: NOLA AREA", "TYPE OF PANCAKE", "HIT LIN MANUEL MIRANDA MUSICAL", "FORMER UK PM DISRAELI"],
        initialOrderSequence: "5126734",
        theme: "Money nicknames",
        hint: "Coining nicknames",
        hint2: "Money nicknames",
        post_solve: ["Kaley Cuoco role: Penny (1c)", "Element in Earth's core: Nickel (5c)", "Perfect football pass: Dime (10c)", "NOLA area French ___: Quarter (25c)", "Type of pancake: Silver dollar ($1)", "Lin musical: Hamilton ($10)", "PM Disraeli: Benjamin ($100)"],
        revAllowed: true
    },
    {
        id: 145,
        solution: ["BEIJING GRAND BRIDGE", "LAKE PONTCHARTRAIN CAUSEWAY", "GOLDEN GATE BRIDGE", "BROOKLYN BRIDGE", "LONDON TOWER BRIDGE", "GOLDEN BRIDGE (VIETNAM)", "PONTE DI RIALTO"],
        initialOrderSequence: "6372145",
        theme: "Bridges by length",
        hint: "Span-ish puzzle",
        hint2: "Bridges by length",
        post_solve: ["Beijing Grand Bridge: 30 miles (48 km)", "The Causeway: 24 miles (38 km)", "Golden Gate Bridge: 1.7 miles (2.7 km)", "Brooklyn Bridge: 1.1 miles (1.8 km)", "London Tower Bridge: 940 ft (290 m)", "Golden Bridge: 490 ft (150 m)", "Ponte di Rialto: 104.3 ft (31.8 m)"],
        revAllowed: true
    },
    {
        id: 146,
        solution: ["TYPE OF MARKETING TEST", "DISK IN A JEWEL CASE", "50TH STATE POSTAL CODE", "\"WHIPLASH\" ACTOR SIMMONS", "TERSE REFUSAL", "CODE FOR ACCESSING AN ONLINE MENU", "LIGHT THAT CAUSES SUNBURNS"],
        initialOrderSequence: "6725314",
        theme: "Consecutive alphabet pairs",
        hint: "Neighbors",
        hint2: "Consecutive alphabet pairs",
        post_solve: ["Type of marketing test: AB", "Disk in a jewel case: CD", "50th state postal code: HI", "Actor Simmons: J.K.", "Terse refusal: NO", "Code for accessing a menu: QR", "Light that causes sunburn: UV"],
        revAllowed: true
    },
    {
        id: 147,
        solution: ["RADIO WAVES", "MICROWAVES", "INFRARED", "VISIBLE LIGHT", "ULTRAVIOLET", "X-RAYS", "GAMMA RAYS"],
        initialOrderSequence: "6251473",
        theme: "Light spectrum",
        hint: "Light it up",
        hint2: "Light spectrum by wavelength",
        post_solve: ["Radio waves: .5-10 meters", "Microwaves: 1 cm", "Infrared: 10 micrometers", "Visible light: 500-1000 nanometers", "UV: 50-100 nm", "X-rays: 1 nm", "Gamma rays: .01 nm"],
        revAllowed: true
    },
    {
        id: 148,
        solution: ["CLIFFORD", "SLINKY DOG (TOY STORY)", "ODIE", "ASTRO JETSON'S COLLAR", "BLUEY", "STIMPY'S NOSE (NOT FUR!)", "DINO FLINTSTONE"],
        initialOrderSequence: "5261374",
        theme: "Animated dog colors",
        hint: "Hue let the dogs out",
        hint2: "Animated dogs by ROYGBIV color",
        post_solve: ["Clifford: red", "Slink: orange", "Odie: yellow", "Astro's collar: green", "Bluey: ...blue", "Stimpy's nose: indigo", "Dino: violet"],
        revAllowed: true
    },
    {
        id: 149,
        solution: ["SHIRE HORSE", "CLYDESDALE", "FRIESIAN", "ARABIAN HORSE", "ICELANDIC HORSE", "SHETLAND PONY", "FALABELLA"],
        initialOrderSequence: "3216475",
        theme: "Horse breeds by max height",
        hint: "High horse",
        hint2: "Horse breeds by max height",
        post_solve: ["Shire horse: up to 219 cm!", "Clydesdale: up to 183 cm", "Friesian: up to 173 cm", "Arabian horse: up to 155 cm", "Icelandic horse: up to 142 cm", "Shetland horse: up to 107 cm", "Falabella: up to 86 cm"],
        revAllowed: true
    },
    {
        id: 150,
        solution: ["NETFLIX SHOW ABOUT A STALKER", "METAL SODA CONTAINER", "OPPOSITE OF GIVE", "I ALTERNATIVE", "VERY POPULAR", "DUMB AND DUMBER __: 2O14 SEQUEL", "CHINESE BOARD GAME"],
        initialOrderSequence: "5127364",
        theme: "HOT TO GO lyric",
        hint: "H-O-T-T-O-G-O...",
        hint2: "Chappell Roan lyric",
        post_solve: ["Netflix show about a stalker: You", "Metal soda container: Can", "Opposite of give: Take", "I alternative: Me", "Very popular: Hot", "Dumb and Dumber To", "Chinese board game: Go"],
        revAllowed: true        
    },
    {
        id: 151,
        solution: ["AVG STONEHENGE STONE", "MOAI (EASTER ISLAND HEAD)", "PLYMOUTH ROCK", "AVG EGYPTIAN PYRAMID BLOCK", "ROSETTA STONE", "HEAVIEST COMPETITION ATLAS STONE", "DWAYNE 'THE ROCK' JOHNSON"],
        initialOrderSequence: "5614723",
        theme: "Rocks/stones by weight",
        hint: "Geologic scale",
        hint2: "Stone things by weight",
        post_solve: ["Avg Stonehenge stone: ~55\,000 lbs (25\,000 kg)", "Moai (Easter Island head): ~30\,500 lbs (13\,800 kg)", "Plymouth Rock: ~20\,000 lbs (9\,100 kg)", "Avg Egyptian pyramid block: ~5\,500 lbs (2\,500 kg)", "Rosetta Stone: 1\,676 lbs (760 kg)", "Heaviest competition atlas stone: 462 lbs (210 kg)", "Dwayne 'The Rock' Johnson: ~260 lbs (118 kg)"],
        revAllowed: true
    },
    {
        id: 152,
        solution: ["VATICAN CITY", "MONACO", "NAURU", "TUVALU", "SAN MARINO", "LIECHTENSTEIN", "MARSHALL ISLANDS"],
        initialOrderSequence: "6152473",
        theme: "Smallest countries",
        hint: "A little geography quiz",
        hint2: "Smallest countries by land area",
        post_solve: ["Vatican City: .19 sq mi", "Monaco: .77 sq mi", "Nauru: 8 sq mi", "Tuvalu: 10 sq mi", "San Marino: 24 sq mi", "Liechtenstein: 62 sq mi", "Marshall Islands: 70 sq mi"],
        revAllowed: true
    },
    {
        id: 153,
        solution: ["TOY STORY", "MONSTERS INC", "FINDING NEMO", "THE INCREDIBLES", "RATATOUILLE", "INSIDE OUT", "COCO"],
        initialOrderSequence: "6341275",
        theme: "Pixar movies by release year",
        hint: "Pixar progression",
        hint2: "Pixar movies by year",
        post_solve: ["Toy Story: 1995", "Monsters Inc.: 2001", "Finding Nemo: 2003", "The Incredibles: 2004", "Ratatouille: 2007", "Inside Out: 2015", "Coco: 2017"],
        revAllowed: true        
    },
    {
        id: 154,
        solution: ["SAN FRANCISCO TOTAL NAMED HILLS", "COUNTIES IN TEXAS HILL COUNTRY", "LAURYN HILL GRAMMYS", "ROME NICKNAME", "'THE HILLS' TV SHOW SEASONS", "WINSTON CHURCHILL P.M. TERMS SERVED", "'___ TREE HILL': CW SHOW"],
        initialOrderSequence: "5237164",
        theme: "Hill-related numbers",
        hint: "Head for the hills",
        hint2: "Hill-related numbers",
        post_solve: ["SF named hills: 48", "Counties in Texas Hill Country: 25", "Lauryn Hill Grammys: 8", "Rome nickname: City of 7 hills", "'The Hills' seasons: 6", "Churchill P.M. terms: 2", "'___ Tree Hill': One"],
        revAllowed: true
    },
    {
        id: 155,
        solution: ["MARVEL SUPERVILLAIN", "NBA GREAT ERVING", "SOFT DRINK SINCE 1885", "SEX THERAPIST WESTHEIMER", "THEODOR GEISEL", "KUBRICK COLD WAR SATIRE", "LONG-RUNNING BRITISH SCI-FI SHOW"],
        initialOrderSequence: "6351472",
        theme: "Doctors A to Z",
        hint: "Club Med (A-Z)",
        hint2: "Doctors A-Z",
        post_solve: ["Marvel supervillain: Dr. Doom", "NBA great Erving: Dr. J", "Soft drink since 1885: Dr. Pepper", "Sex therapist Westheimer: Dr. Ruth", "Theodor Geisel: Dr. Seuss", "Kubrick Cold War satire: Dr. Strangelove", "Long-running British sci-fi show: Doctor Who"],
        revAllowed: true
    },
    {
        id: 156,
        solution: ["BART", "THE L", "SEPTA", "THE SUBWAY", "THE T", "THE TUBE", "UBAHN"],
        initialOrderSequence: "4126735",
        theme: "Transit system names West <-> East",
        hint: "West <-> East transit",
        hint2: "Cities' transit system names",
        post_solve: ["BART: Bay Area", "The L: Chicago", "SEPTA: Philly", "The subway: NYC", "The T: Boston", "The Tube: London", "U-Bahn: Berlin"],
        revAllowed: true
    },
    {
        id: 157,
        solution: ["PICCOLO", "CLARINET", "OBOE", "TRUMPET", "ALTO SAX", "FRENCH HORN", "TUBA"],
        initialOrderSequence: "5471263",
        theme: "Instruments by highest (reasonable) pitch",
        hint: "On a high note",
        hint2: "Instruments by high note",
        post_solve: ["Piccolo: ~4200 Hz", "Clarinet: ~2000 Hz", "Oboe: ~1750 Hz", "Trumpet: ~1400 Hz", "Alto sax: ~900 Hz", "French horn ~700 Hz", "Tuba: ~350 Hz"],
        revAllowed: true
    },
    {
        id: 158,
        solution: ["SHEETS PER REAM OF PAPER", "KIRKLAND TOILET PAPER SHEETS PER ROLL", "FOREVER STAMPS PER STANDARD SHEET", "SHEET MUSIC STAFF (NO. OF HORIZ. LINES)", "___ SHEETS TO THE WIND (DRUNK)", "STANDARD BED SHEET SET", "___ SHEET: ENTERTAINMENT SUMMARY"],
        initialOrderSequence: "5236174",
        theme: "Sheet counts",
        hint: "This puzzle is the sheet",
        hint2: "Sheet counts",
        post_solve: ["Ream: 500 sheets", "Kirkland tp: ~380 sheets", "Stamps per sheet: 20", "Sheet music staff lines: 5", "___ sheets to the wind: 3", "Standard bed set: 2 sheets (top + fitted)", "___ sheet summary: 1"],
        revAllowed: true
    },
    {
        id: 159,
        solution: ["SNOW", "RAIN", "HEAT", "GLOOM OF NIGHT", "COURIERS", "SWIFT COMPLETION", "APPOINTED ROUNDS"],
        initialOrderSequence: "6421735",
        theme: "US Postal Service (unofficial) motto",
        hint: "Mailing list",
        hint2: "Unofficial US postal service motto",
        post_solve: ["Neither SNOW", "Nor RAIN", "Nor HEAT", "Nor GLOOM OF NIGHT", "Stays these COURIERS", "From the SWIFT COMPLETION", "Of their APPOINTED ROUNDS"],
        revAllowed: true
    },
    {
        id: 160,
        solution: ["ENGLISH", "MANDARIN CHINESE", "HINDI", "SPANISH", "MODERN STANDARD ARABIC", "FRENCH", "BENGALI"],
        initialOrderSequence: "6724135",
        theme: "Languages by total speakers (as 1st and/or 2nd language)",
        hint: "Common parlance",
        hint2: "Most-spoken languages",
        post_solve: ["English: 1.515 billion", "Mandarin Chinese: 1.140 billion", "Hindi: 609 million", "Spanish: 560 million", "Modern Standard Arabic: 332 million", "French: 312 million", "Bengali: 278 million"],
        revAllowed: true 
    },
    {
        id: 161,
        solution: ["CITI FIELD", "MADISON SQUARE GARDEN", "BARCLAYS CENTER", "RADIO CITY MUSIC HALL", "METROPOLITAN OPERA HOUSE", "APOLLO THEATER", "SOHO PLAYHOUSE"],
        initialOrderSequence: "4635172",
        theme: "NYC venue capacities",
        hint: "Big Apple crowds",
        hint2: "NYC venue capacities",
        post_solve: ["Citi Field: 41800", "MSG: 20789", "Barclays: 17732", "Radio City: 6013", "Met Opera: 3800", "Apollo Theater: 1538", "SoHo Playhouse: 178"],
        revAllowed: true
    },
    {
        id: 162,
        solution: ["YERBA MATE", "BLACK", "OOLONG", "GREEN", "WHITE", "DECAF", "HERBAL"],
        initialOrderSequence: "5732146",
        theme: "Teas by avg caffeine per cup (8 fl oz)",
        hint: "Building buzz",
        hint2: "Teas by caffeine content",
        post_solve: ["Yerba mate: 150", "Black: 45-90 mg", "Oolong: ~40 mg", "Green: ~35 mg", "White: ~30", "Decaf: <5 mg", "Herbal: 0 mg"],
        revAllowed: true
    },
    {
        id: 163,
        solution: ["MEDIEVAL", "RENAISSANCE", "BAROQUE", "ROMANTICISM", "IMPRESSIONISM", "SURREALISM", "OP ART"],
        initialOrderSequence: "6521743",
        theme: "Art movements chronologically",
        hint: "Movements through history",
        hint2: "Art movements chronologically",
        post_solve: ["Medieval: 500-1400", "Renaissance: 1400-1600", "Baroque: 1600-1750", "Romanticism: 1780-1850", "Impressionism: 1865-1885", "Surrealism: 1920-1950", "Op Art: 1950-1970"],
        revAllowed: true        
    },
    {
        id: 164,
        solution: ["NY PUBLIC LIBRARY MARBLE LIONS", "CADILLAC RANCH CADILLACS (TEXAS)", "CHARLES BRIDGE STATUES (PRAGUE)",  "ST PETER'S SQUARE STATUES (VATICAN CITY)", "MADAME TUSSAUD'S LONDON WAX FIGURES", "RAPA NUI MOAI (EASTER ISLAND HEADS)", "TERRACOTTA SOLDIERS OF QIN SHI HUANG"],
        initialOrderSequence: "5741362",
        theme: "Statue counts",
        hint: "Figures figures",
        hint2: "Numbers of statues",
        post_solve: ["NY Public Library: 2 lions", "Cadillac Ranch: 10 Cadillacs", "Charles Bridge: 30 statues",  "St Peter's Square: 140 statues", "Madame Tussaud's London: 150+ wax figures", "Rapa Nui: 1043 Moai", "Terracotta Army: 8000+ soldiers"],
        revAllowed: true
    },
    {
        id: 165,
        solution: ["WALMART", "MCDONALDS", "AMAZON", "GOOGLE", "APPLE", "META", "NETFLIX"],
        initialOrderSequence: "6451372",
        theme: "Companies by employee count",
        hint: "The workforce",
        hint2: "Number of employees",
        post_solve: ["Walmart: 2.3 million", "McDonalds: 1.7 million", "Amazon: 1.5 million", "Google: 182 thousand", "Apple: 161 thousand", "Meta: 67 thousand", "Netflix: 13 thousand"],
        revAllowed: true
    },
    {
        id: 166,
        solution: ["FLIPPING HEADS", "ROLLING YAHTZEE (5 OF A KIND)", "FINDING A FOUR LEAF CLOVER", "FINDING A PEARL IN AN OYSTER", "BEING HIT BY LIGHTNING IN LIFETIME", "CATCHING A BLUE LOBSTER", "WINNING POWERBALL JACKPOT"],
        initialOrderSequence: "5236174",
        theme: "Likelihoods",
        hint: "What are the odds?",
        hint2: "Probabilities",
        post_solve: ["Flipping heads: 1 in 2", "Rolling Yahtzee: 1 in 1296", "Finding a four leaf clover: 1 in 5 thousand", "Finding a pearl: 1 in 10 thousand", "Being hit by lightning ever: 1 in 15 thousand", "Catching a blue lobster: 1 in 2 million", "Winning Powerball jackpot: 1 in 292.2 million"],
        revAllowed: true
    },
    {
        id: 167,
        solution: ["NINTENDO ENTERTAINMENT SYSTEM", "GAME BOY", "SUPER NINTENDO", "N64", "GAMECUBE", "WII", "SWITCH"],
        initialOrderSequence: "4627135",
        theme: "Nintendo consoles chronologically",
        hint: "Playtime",
        hint2: "Nintendo consoles chronologically",
        post_solve: ["NES: 1985", "Game Boy: 1989", "Super Nintendo: 1991", "Nintendo 64: 1996", "Gamecube: 2001", "Wii: 2006", "Switch: 2017"],
        revAllowed: true
    },
    {
        id: 168,
        solution: ["STRANGER THINGS CHARACTER", "TAYLOR SWIFT SONG", "LONGEST-EVER NBA WIN STREAK", "UK COUNTRY CODE FOR INTL DIALING", "ROUTE __: AMERICA'S 'MOTHER ROAD'", "DEBUT TALKING HEADS ALBUM", "BROOKLYN ___: SITCOM"],
        initialOrderSequence: "5721436",
        theme: "Doubled-digit numbers",
        hint: "Double digits",
        hint2: "11, 22, 33, etc",
        post_solve: ["Stranger Things character: Eleven", "Taylor Swift song: 22", "Longest NBA win streak: 33 ('71 Lakers)", "UK country code: +44", "America's 'Mother Road': Route 66", "Debut album: Talking Heads 77", "Sitcom: Brooklyn Nine-Nine"],
        revAllowed: true
    },
    {
        id: 169,
        solution: ["MONOPOLY CHANCE CARDS", "CLUE TOTAL CARDS (SUSPECTS/WEAPONS/ROOMS)", "EUCHRE DECK", "DECK OF STANDARD PLAYING CARDS", "STANDARD 'MAGIC: THE GATHERING' DECK", "TAROT DECK", "UNO DECK"],
        initialOrderSequence: "6745132",
        theme: "Card amounts",
        hint: "Counting cards",
        hint2: "Card amounts",
        post_solve: ["Monopoly Chance cards: 16", "Clue total cards: 21", "Euchre deck: 24-32", "Standard playing cards deck: 52 (or 54 with jokers)", "Standard 'Magic: The Gathering' deck: 60", "Tarot deck: 78", "Uno deck: 108"],
        revAllowed: true
    },
    {
        id: 170,
        solution: ["MOISTURIZER", "PRIMER", "FOUNDATION", "CONCEALER", "BLUSH", "LIPSTICK", "SETTING SPRAY"],
        initialOrderSequence: "4612573",
        theme: "L'Oréal-recommended makeup order",
        hint: "Make a face (per L'Oréal)",
        hint2: "Makeup steps",
        post_solve: ["1. Moisturize + sunscreen", "2. Primer", "3. Foundation", "4. Concealer", "5. Face makeup: Blush/highligher/bronzer", "6. Lipstick", "7. Setting spray", "(Your mileage may vary!)"],
        revAllowed: true        
    },
    {
        id: 171,
        solution: ["CREATE TIKTOK ACCOUNT", "COMPETE IN THE YOUTH OLYMPICS", "GET U.S. DRIVER'S LICENSE", "JOIN AARP", "DRINK IN THE U.S.", "BECOME U.S. PRESIDENT", "RECEIVE U.S. SOCIAL SECURITY BENEFITS"],
        initialOrderSequence: "6351724",
        theme: "Minimum ages",
        hint: "Age in",
        hint2: "Minimum ages",
        post_solve: ["Create TikTok account: 13", "Compete in Youth Olympics: 15", "Get U.S. driver's license: 16 (in some states)", "Join AARP: 18 (not 50!)", "Drink in the U.S.: 21", "Become U.S. president: 35", "Receive soc. sec. benefits: 62"],
        revAllowed: true
    },
    {
        id: 172,
        solution: ["C", "B", "A", "D", "G", "F", "E"],
        initialOrderSequence: "3214765",
        theme: "Smallest number that contains each letter",
        hint: "Smallest whole number<br>to contain the letter...",
        hint2: "When letters first appear<br>in number names",
        post_solve: ["C: One octillion", "B: One billion", "A: One thousand", "D: One hundred", "G: Eight", "F: Four", "E: Zero"],
        revAllowed: true
    },
    {
        id: 173,
        solution: ["CHEAPEST TOILET PAPER OPTION", "HUMAN SKIN (MAJOR LAYERS)", "EARTH (MAJOR LAYERS)", "EARTH'S AMOSPHERE", "RAINBOW CAKE", "__ LAYER DIP: SUPER BOWL SNACK", "RED ONION"],
        initialOrderSequence: "5372164",
        theme: "Number of layers",
        hint: "A puzzle with layers",
        hint2: "Number of layers",
        post_solve: ["Cheapest toilet paper: 1 (single ply)", "Skin: 3 (epidermis dermis hypodermis)", "Earth: 4 (crust mantle inner/outer core)", "Atmosphere: 5 (tropo-/strato-/meso-/thermo-/exosphere)", "Rainbow cake: 6 (ROYGBV)", "Super bowl snack: 7 layer dip (beans guac sour cream salsa cheese olives green onion)", "Red onion: ~8-15+"],
        revAllowed: true
    },
    {
        id: 174,
        solution: ["PODCAST/SUDOKU", "GIF", "SELFIE", "VAPE", "POST-TRUTH", "VAX", "RIZZ"],
        initialOrderSequence: "5417632",
        theme: "Oxford Word of the Year by year",
        hint: "Oxford Word of the Year",
        hint2: "Word of the Year by year",
        post_solve: ["Podcast/Sudoku: 2005", "GIF: 2012", "Selfie: 2013", "Vape: 2014", "Post-truth: 2016", "Vax: 2021", "Rizz: 2023"],
        revAllowed: true
    },
    {
        id: 175,
        solution: ["CHARLES LINDBERGH", "QUEEN ELIZABETH II", "THE COMPUTER", "MARK ZUCKERBERG", "GRETA THUNBERG", "VOLODYMYR ZELENSKY", "TAYLOR SWIFT"],
        initialOrderSequence: "4751623",
        theme: "TIME Person of the Year",
        hint: "TIME Person of the Year",
        hint2: "Person of the Year by year",
        post_solve: ["Charles Lindbergh: 1927 (first-ever)", "Queen Elizabeth II: 1952", "The Computer: 1982", "Mark Zuckerberg: 2010", "Greta Thunberg: 2019", "Volodymyr Zelensky: 2022", "Taylor Swift: 2023"],
        revAllowed: true
    },
    {
        id: 176,
        solution: ["PLAIN TOAST", "GRILLED CHEESE", "PB AND J", "BLT", "REUBEN", "BASIC CLUB SANDWICH", "BIG MAC"],
        initialOrderSequence: "5736124",
        theme: "Basic ingredient count",
        hint: "Basic ingredients",
        hint2: "Basic ingredient count",
        post_solve: ["Plain toast: 1 (bread)", "Grilled cheese: 2 (bread + cheese)", "PB and J: 3 (bread, peanut butter, jelly)", "BLT: 4 (Bread, bacon, lettuce, tomato)", "Reuben: 5 (Bread, corned beef, swiss cheese, sauerkraut, Thousand Island dressing)", "Basic club: 6 (bread, poultry, bacon, lettuce, tomato, mayo)", "Big Mac: 8 (sesame seeds, bun, beef, cheese, lettuce, pickles, onion, special sauce)"],
        revAllowed: true
    },
    {
        id: 177,
        solution: ["UNITED STATES OF AMERICA", "UNITED KINGDOM", "UGANDA", "UZBEKISTAN", "UKRAINE", "UNITED ARAB EMIRATES", "URUGUAY"],
        initialOrderSequence: "6251473",
        theme: "Populations of the 7 'U' countries",
        hint: "Pop-U-lation",
        hint2: "U countries by population",
        post_solve: ["USA: 335.8 million", "UK: 67.5 million",  "Uganda: 45.9 million", "Uzbekistan: 36.9 million", "Ukraine: 36.7 million", "UAE: 10.2 million", "Uruguay: 3.4 million"],
        revAllowed: true
    },
    {
        id: 178,
        solution: ["___-TRACK MIND: FIXATION", "STANDARD CRIBBAGE BOARD", "POPULAR CASSETTE TAPE TYPE", "MICHAEL JACKSON'S 'THRILLER'", "FORMULA 1 TRACKS (2024)", "GRAND CENTRAL TERMINAL", "AUDIO CD (MAX POSSIBLE)"],
        initialOrderSequence: "4613725",
        theme: "Number of tracks",
        hint: "That tracks",
        hint2: "Number of tracks",
        post_solve: ["Fixation: One-track mind", "Cribbage board: 3 tracks (2-4)", "Popular cassette type: 8-track", "Michael Jackson's 'Thriller': 9 tracks", "Formula 1 (2024): 24 tracks/circuits", "Grand Central Terminal: 67 tracks", "Audio CD max: 99 tracks"],
        revAllowed: true
    },
    {
        id: 179,
        solution: ["ASIA", "SOUTH AMERICA", "NORTH AMERICA", "AFRICA", "EUROPE", "ANTARCTICA", "OCEANIA"],
        initialOrderSequence: "4615732",
        theme: "Continents by highest peak (meters)",
        hint: "Highest high points",
        hint2: "Continents by highest peak height",
        post_solve: ["Asia: Mt. Everest (8\,850 m)", "South America: Aconcagua (6\,962 m)", "North America: Denali (6\,190 m)", "Africa: Kilimanjaro (5\,895 m)", "Europe: Mt. Elbrus (5\,642 m)", "Antarctica: Mt. Vinson (4\,892 m)", "Oceania: Puncak Jaya (4\,884 m)"],
        revAllowed: true        
    },
    {
        id: 180,
        solution: ["2016 RIHANNA ALBUM", "TALK SMACK ABOUT", "SET A PRECEDENT", "INTENDED", "PUT ON TV", "ACTOR MCKELLEN OR MCSHANE", "BELIEF SYSTEM"],
        initialOrderSequence: "5624173",
        theme: "Antidisestablishmentarianism",
        hint: "28-letter word",
        hint2: "Famously long English word",
        post_solve: ["Rihanna album: Anti", "Talk smack about: Diss", "Set a precedent: Establish", "Intended: Meant", "Put on TV: Air", "Actor McKellen or McShane: Ian", "Belief system: Ism"],
        revAllowed: true
    },
    {
        id: 181,
        solution: ["GATEWAY ARCH (MO)", "AMERICAN SAMOA", "ACADIA (ME)", "ZION (UT)", "YOSEMITE (CA)", "YELLOWSTONE (WY)", "DENALI (AK)"],
        initialOrderSequence: "4735126",
        theme: "National parks by size",
        hint: "Park-ing spaces",
        hint2: "National parks by size",
        post_solve: ["Gateway Arch: 192.8 acres (smallest in U.S!)", "American Samoa: 8\,256.7 acres", "Acadia: 49\,071.4 acres", "Zion: 147\,242.7 acres", "Yosemite: 761\,747.5 acres", "Yellowstone: 2\,219\,790.7 acres", "Denali: 4\,740\, 911.2 acres"],
        revAllowed: true
    },
    {
        id: 182,
        solution: ["DIAMOND", "MASONRY DRILL BIT", "WINDOW GLASS", "COPPER", "HUMAN FINGERNAIL", "PENCIL GRAPHITE", "TALC"],
        initialOrderSequence: "5612473",
        theme: "Mohs hardness scale (1 to 10)",
        hint: "How hard could it be?",
        hint2: "Mohs hardness scale",
        post_solve: ["Diamond: 10", "Drill bit: 8.5 (tungsten carbide)", "Window glass: 5.5", "Copper: 3", "Human fingernail: 2.5", "Pencil graphite: 1-2", "Talc: 1"],
        revAllowed: true
    },
    {
        id: 183,
        solution: ["___ TROMBONES: 'THE MUSIC MAN' SONG", "BUGLES (GM SNACK FOOD) PER SERVING", "DARTH MAUL (STAR WARS: EPISODE I)", "U.S. FIRE CHIEF BADGE (BUGLES)", "TRICERATOPS", "IBEX", "SOMALIA (GEOGRAPHICALLY)"],
        initialOrderSequence: "3671245",
        theme: "Horns/bugles",
        hint: "By the horns",
        hint2: "Horns/bugles/trombones/etc",
        post_solve: ["Music Man song: 76 trombones", "GM snack serving: ~37 Bugles", "Darth Maul (Star Wars): 10 horns", "Fire chief badge: 5 bugles", "Triceratops: 3 horns", "Ibex: 2 horns", "Somalia: 1 horn (of Africa)"],
        revAllowed: true
    },
    {
        id: 184,
        solution: ["STEPHEN KING EVIL CLOWN NOVEL", "MLB'S NATIONALS ON SCOREBOARDS", "LETTER IN THE SCARLET LETTER", "NOT JUST DIM", "PLUS", "___ DANIELS (POLITICAL SCANDAL FIGURE)", "SLEEPING TIME"],
        initialOrderSequence: "5361724",
        theme: "Scary story starter",
        hint: "Scary story starter",
        hint2: "It was a dark and stormy night",
        post_solve: ["Stephen King evil clown novel: IT", "MLB's Nats on scoreboards: WAS", "Letter in 'The Scarlet Letter': A", "Not just dim: DARK", "Plus: AND", "___ Daniels: STORMY", "Sleeping time: NIGHT"],
        revAllowed: true
    },
    {
        id: 185,
        solution: ["SOFI STADIUM 'INFINITY SCREEN' (L.A.)", "MARRIOTT MARQUIS TIMES SQ BILLBOARD", "WORLD'S LARGEST IMAX THEATER", "SAMSUNG TVS (FULL RANGE)", "TESLA CYBERTRUCK FRONT DISPLAY", "NINTENDO SWITCH", "APPLE WATCH"],
        initialOrderSequence: "4163275",
        theme: "Screen sizes",
        hint: "Screen test",
        hint2: "Screen sizes",
        post_solve: ["SoFi Stadium 'Infinity Screen': 70,000 sq. ft.", "Marriott Marquis Times Sq. Billboard: 26,000 sq. ft.", "Largest IMAX (Stuttgart, Germany): 9,000 sq. ft.", "Samsung TV: 437.6-4103.8 sq. in.", "Tesla Cybertruck: 123.5 sq. in.", "Nintendo Switch: 16.4 sq. in.", "Apple Watch: 1.5 sq. in."],
        revAllowed: true        
    },
    {
        id: 186,
        solution: ["APRIL FOOLS DAY", "GROUNDHOG DAY", "GUY FAWKES NIGHT", "VALENTINE'S DAY", "ST. PATRICK'S DAY", "EARTH DAY", "HALLOWEEN"],
        initialOrderSequence: "2451673",
        theme: "Day within its month",
        hint: "Day not month",
        hint2: "Day within its month",
        post_solve: ["April Fools Day: 1st (Apr)", "Groundhog Day: 2nd (Feb)", "Guy Fawkes Night: 5th (Nov)", "Valentine's Day: 14th (Feb)", "St. Patrick's Day: 17th (Mar)", "Earth Day: 22nd (Apr)", "Halloween: 31st (Oct)"],
        revAllowed: true        
    },
    {
        id: 187,
        solution: ["VEGAS STRIP LENGTH (MILES)", "LUXOR STEEPNESS (DEGREES)", "VEGAS WELCOME SIGN LIGHT BULBS", "BELLAGIO FOUNTAINS", "YEAR VEGAS WAS FOUNDED", "MGM GRAND HOTEL ROOMS", "LARGEST SLOTS JACKPOT EVER (DOLLARS)"],
        initialOrderSequence: "5763142",
        theme: "Vegas trivia",
        hint: "What happens in Vegas",
        hint2: "Vegas trivia",
        post_solve: ["Strip length: ~4.2 miles", "Luxor steepness: 39 degrees", "Welcome Sign light bulbs: 89", "Bellagio: 1\,214 fountains", "Year Vegas was founded: 1905", "MGM Grand rooms: 6\,852", "Largest-ever slots jackpot: $39 million"],
        revAllowed: true    
    },
    {
        id: 188,
        solution: ["SILVER STATE POSTAL CODE HOMOPHONE", "OVERCONSUMPTION", "'__ IS GOOD': 'WALL STREET' QUOTE", "'__ FOR LIFE': IGGY POP SONG", "GROUP OF LIONS", "'ZOOTOPIA' DMV EMPLOYEE ANIMAL", "'THE GRAPES OF __: STEINBECK NOVEL"],
        initialOrderSequence: "3614725",
        theme: "Seven deadly sins A-Z",
        hint: "Deadly seven (A-Z)",
        hint2: "Seven deadly sins (A-Z)",
        post_solve: ["Silver state abbr homophone: Envy (NV)", "Overconsumption: Gluttony", "'Wall Street' quote: 'Greed (for lack of a better word) is good'", "Iggy Pop song: Lust for life", "Group of lions: Pride", "'Zootopia' DMV employee: Sloth", "Steinbeck novel: 'The Grapes of Wrath'"],
        revAllowed: true
    },
    {
        id: 189,
        solution: ["BEATLES GREATEST HITS ALBUM", "BOXING PUNCH COMBO", "___ INNING: PITCHER'S GOAL", "FEIST SONG", "ZIPCODE FOR SCHENECTADY NY", "MOST POPULAR (UNSAFE!) PASSWORD", "SESAME ST 'PINBALL NUMBER COUNT' LYRIC"],
        initialOrderSequence: "4617253",
        theme: "Consecutive number sequences",
        hint: "The count",
        hint2: "Consecutive sequences (1, 12, 123...)",
        post_solve: ["Beatles greatest hits album: 1", "Boxing combo: 1-2 punch", "Pitcher's goal: 123 inning", "Feist song: 1234", "Zipcode for Schenectady NY: 12345", "Most popular password: 123456", "'Pinball Number Count' lyric: 123456789101112"],
        revAllowed: true      
    },
    {
        id: 190,
        solution: ["STEVE ALLEN", "JACK PAAR", "JOHNNY CARSON", "JAY LENO (FIRST TENURE)", "CONAN O'BRIEN", "JAY LENO (SECOND TENURE)", "JIMMY FALLON"],
        initialOrderSequence: "5624173",
        theme: "Tonight Show hosts",
        hint: "The story of Tonight",
        hint2: "Tonight Show hosts",
        post_solve: ["Steve Allen: 1954-1957", "Jack Paar: 1957-1962", "Johnny Carson: 1962-1992", "Jay Leno (first tenure): 1992-2009", "Conan O'Brien: 2009 :\( ", "Jay Leno (second tenure): 2010-2014", "Jimmy Fallon: 2014-present"],
        revAllowed: true
    },
    {
        id: 191,
        solution: ["MOST EXPENSIVE BOTTLE OF WINE EVER SOLD", "MOST EXPENSIVE WHITE TRUFFLE EVER SOLD", "ONE POUND OF ALMAS BELUGA CAVIAR", "ONE POUND OF SAFFRON", "ONE POUND OF A5 KOBE BEEF", "ONE POUND OF MADAGASCAR VANILLA BEANS", "ONE GALLON OF WHOLE MILK"],
        initialOrderSequence: "6413725",
        theme: "Food/drink by cost",
        hint: "Expensive taste",
        hint2: "Food/drink items by cost",
        post_solve: ["Most expensive wine ever: $500K", "Most expensive white truffle ever: $330K", "1lb Almas beluga caviar: $15K", "1lb saffron: $5K", "1lb A5 Kobe beef: $480-700", "1lb Madagascar vanilla beans: $150-200", "1 gal whole milk: $3-6"],
        revAllowed: true
    },
    {
        id: 192,
        solution: ["FAHRENHEIT ___ (BRADBURY)", "THE ___ DALMATIANS (SMITH)", "___ YEARS OF SOLITUDE (GARCÍA MÁRQUEZ)", "___ SHADES OF GREY (JAMES)", "CATCH-___ (HELLER)", "___ REASONS WHY (ASHER)", "SLAUGHTERHOUSE-___ (VONNEGUT)"],
        initialOrderSequence: "5623174",
        theme: "Book title numbers",
        hint: "Reading writing and arithmetic",
        hint2: "Book title numbers",
        post_solve: ["Bradbury: Farenheit 451", "Smith: The Hundred and One Dalmatians", "García Márquez: One Hundred Years of Solitude", "James: Fifty Shades of Grey", "Heller: Catch-22", "Asher: Thirteen Reasons Why", "Vonnegut: Slaughterhouse-Five"],
        revAllowed: true
    },
    {
        id: 193,
        solution: ["THINK DIFFERENT", "HAVE IT YOUR WAY", "A DIAMOND IS FOREVER", "BECAUSE YOU'RE WORTH IT", "I'M LOVING IT", "JUST DO IT", "TASTE THE RAINBOW"],
        initialOrderSequence: "5614273",
        theme: "Slogans alphabetically by brand",
        hint: "Sloganeers A-Z",
        hint2: "Alphabetically by brand",
        post_solve: ["Think Different: Apple", "Have It Your Way: Burger King", "A Diamond Is Forever: De Beers", "Because You're Worth It: L'Oréal Paris", "I'm Loving It: McDonald's", "Just Do It: Nike", "Taste The Rainbow: Skittles"],
        revAllowed: true
    },
    {
        id: 194,
        solution: ["P (AS IN PAN)", "F (AS IN FAN)", "TH (AS IN THE)", "D (AS IN DAD)", "Y (AS IN YES)", "K (AS IN KING)", "H (AS IN HAPPY)"],
        initialOrderSequence: "4276135",
        theme: "Where in the mouth sounds are made",
        hint: "Sound origins (Lips <-> Throat)",
        hint2: "Where in the mouth sounds are made",
        post_solve: ["P: Lips (bilabial)", "F: Lips + teeth (labio-dental)", "TH (as in 'the'): Teeth (interdental)", "D: Front of palate (alveolar)", "Y (as in 'yes'): mid-palate (palatal)", "K: back of palate (velar)", "H: throat (glottal)<br>Theme idea: Jacob Klein"],
        revAllowed: true  
    },
    {
        id: 195,
        solution: ["ROSE", "CALIFORNIA POPPY", "SUNFLOWER", "BELLS OF IRELAND", "FORGET-ME-NOT", "SIBERIAN IRIS", "VIOLET"],
        initialOrderSequence: "5236174",
        theme: "Flower colors ROYGBIV",
        hint: "Rainbow bouquet",
        hint2: "Flowers by ROYGBIV",
        post_solve: ["Rose: red", "California poppy: orange", "Sunflower: yellow", "Bells of Ireland: green (technically white w/ green calyx)", "Forget-me-not: blue", "Siberian iris: indigo", "Violet"],
        revAllowed: true
    },
    {
        id: 196,
        solution: ["NFL FOOTBALL FIELD LENGTH (YARDS)", "'FIELD OF DREAMS' MOVIE RUNTIME (MINS)", "PLACES NAMED SPRINGFIELD IN US", "OLYMPIC TRACK AND FIELD EVENTS", "FIELDS MEDAL (MATH AWARD) MAX AGE", "FIELD HOCKEY PLAYERS PER TEAM", "SALLY FIELD OSCARS"],
        initialOrderSequence: "6351274",
        theme: "Fields",
        hint: "Field day",
        hint2: "Field-related numbers",
        post_solve: ["NFL football field length: 120 yards", "'Field of Dreams' runtime: 102 minutes", "Places named Springfield in U.S.: 67", "Olympic track and field events: 48 (in 2024)", "Fields medal max age: 40", "Field hockey players per team: 11", "Sally Field Oscars: 2"],
        revAllowed: true
    },
    {
        id: 197,
        solution: ["AFRICAN ELEPHANT", "SPERM WHALE", "HORSE", "HUMAN", "LION", "KANGAROO", "HAMSTER"],
        initialOrderSequence: "2673154",
        theme: "Mammal gestation periods",
        hint: "Guess the gestations",
        hint2: "Mammals by gestation periods (pregnancy lengths)",
        post_solve: ["African elephant: 93 weeks", "Sperm whale: 76 weeks", "Horse: 48 weeks", "Human: 40 weeks", "Lion: 15 weeks", "Kangaroo: 6 weeks", "Hamster: 3 weeks"],
        revAllowed: true
    },
    {
        id: 198,
        solution: ["ESPRESSO", "MACCHIATO", "CORTADO", "CAPPUCCINO", "MOCHA", "LATTE", "GLASS OF MILK"],
        initialOrderSequence: "2761435",
        theme: "Espresso drinks by percent espresso",
        hint: "That's that me espresso ratio",
        hint2: "Ratio of espresso to other ingredients",
        post_solve: ["Espresso: 100% espresso", "Macchiato: 75-86% espresso, 14-25% foamed milk", "Cortado: 50% espresso, 50% steamed milk", "Cappuccino: 33% espresso, 66% steamed milk + foam", "Mocha: 25-33% espresso, 66-75% chocolate/steamed milk/foam", "Latte: 16-25% espresso, 75-84% steamed milk", "Glass of milk: 0% espresso, 100% milk"],
        revAllowed: true
    },
    {
        id: 199,
        solution: ["SPHERE", "CONE", "CYLINDER", "TETRAHEDRON", "SQUARE PYRAMID", "CUBE", "DODECAHEDRON"],
        initialOrderSequence: "4531276",
        theme: "3D shapes by face count",
        hint: "A game of faces",
        hint2: "3D shapes by face count",
        post_solve: ["Sphere: 1 face", "Cone: 2 faces", "Cylinder: 3 faces", "Tetrahedron: 4 faces", "Square pyramid: 5 faces", "Cube: 6 faces", "Dodecahedron: 12 faces"],
        revAllowed: true
    },
    {
        id: 200,
        solution: ["100", "500", "1", "50", "1000", "5", "10"],
        initialOrderSequence: "3674125",
        theme: "Numbers alphabetically by Roman numeral",
        hint: "Roman alphabet",
        hint2: "Numbers alphabetically by Roman numeral",
        post_solve: ["100: C", "500: D", "1: I", "50: L", "1000: M", "5: V", "10: X"],
        revAllowed: true
    },
    {
        id: 201,
        solution: ["FRANCE", "UNITED STATES", "AUSTRALIA", "CANADA", "BRAZIL", "SOUTH AFRICA", "CHINA"],
        initialOrderSequence: "4165723",
        theme: "Number of timezones (incl. territories)",
        hint: "Timezone spans (incl. territories)",
        hint2: "Number of timezones covered",
        post_solve: ["France: 12", "United States: 11", "Australia: 9", "Canada: 6", "Brazil: 4", "South Africa: 2", "China: 1"],
        revAllowed: true
    },
    {
        id: 202,
        solution: ["SMOKESTACKS", "NAVIGATION BRIDGE", "FIRST CLASS PROMENADE", "CAFÉ PARISIEN", "CREW'S QUARTERS", "SQUASH COURTS", "TURBINE ROOM"],
        initialOrderSequence: "5371246",
        theme: "Titanic top to bottom",
        hint: "To the depths below",
        hin2: "Titanic top to bottom",
        post_solve: ["Smokestacks: top of the ship", "Navigation bridge: above the boat deck", "First class promenade: A-deck", "Café Parisien: B-deck", "Crew's quarters: E-deck", "Squash courts: G-deck", "Turbine room: Tank top (lowest deck)"],
        revAllowed: true
    },
    {
        id: 203,
        solution: ["HAIRSTYLE", "LOGICAL COUNTERPART TO 'AND'", "'___ PASS GO...': MONOPOLY INSTRUCTION", "'ALL DONE!'", "EXISTS", "'UH-UH'", "HAVE A GO AT"],
        initialOrderSequence: "4516372",
        theme: "Yoda quote",
        hint: "Yoda-ism",
        hint2: "Do or do not, there is no try",
        post_solve: ["Hairstyle: DO", "Counterpart to 'and': OR", "'___ pass Go': DO NOT", "'All done!': THERE", "Exists: IS", "Uh-uh: NO", "Have a go at: TRY"],
        revAllowed: true        
    },
    {
        id: 204,
        solution: ["SILVERADO", "F-150", "CIVIC", "GRAND CHEROKEE", "OUTBACK", "MODEL X", "PRIUS"],
        initialOrderSequence: "2715346",
        theme: "Car models alphabetically by make",
        hint: "Make alphabetical",
        hint2: "Alphabetical automakers",
        post_solve: ["Silverado: Chevy", "F-150: Ford", "Civic: Honda", "Grand Cherokee: Jeep", "Outback: Subaru", "Model X: Tesla", "Prius: Toyota"],
        revAllowed: true
    },
    {
        id: 205,
        solution: ["CARBON NANOTUBE", "BOBA STRAW", "RIGATONI NOODLE", "HUMAN AORTA", "TOILET PAPER ROLL TUBE", "NORD STREAM 1 GAS PIPELINE", "NYC MIDTOWN TUNNEL"],
        initialOrderSequence: "4612573",
        theme: "Tube diameters",
        hint: "Tube diameters",
        hint2: "Diameter, not length!",
        post_solve: ["Carbon nanotube: .000002 mm", "Boba straw: ~8-12 mm", "Rigatoni noodle: ~16 mm", "Human aorta: ~32 mm", "Toilet paper roll tube: 38 mm", "Nord Stream 1: 1,153 mm", "NYC Midtown tunnel: 9,400"],
        revAllowed: true
    },
    {
        id: 206,
        solution: ["SCIENTIST LOVELACE", "CREATE A SUM", "LEMONY SUMMER BEVERAGE", "MUCH __ ABOUT NOTHING: SHAKESPEARE", "BIG INITIALS IN HOME SECURITY", "GUEST HOUSE IN REALTOR LINGO", "WOODWORKING TOOL"],
        initialOrderSequence: "6735142",
        theme: "Ad + letter, alphabetically",
        hint: "After a word from our sponsors...",
        hint2: "Ad + letter, alphabetically",
        post_solve: ["Scientist Lovelace: Ada (Ad + A)", "Create a sum: Add (Ad + D)", "Lemony summer beverage: Ade (Ad + E)", "Much __ About Nothing: Ado (Ad + O)", "Home security inits: ADT (Ad + T)", "Guest house: ADU (Ad + U)", "Woodworking tool: Adz (Ad + Z)"],
        revAllowed: true
    },
    {
        id: 207,
        solution: ["DUTCH EAST INDIA COMPANY", "DISNEY", "APPLE", "AMAZON", "GENERAL MOTORS", "FACEBOOK (NOW META)", "ZOOM"],
        initialOrderSequence: "5624713",
        theme: "Companies by IPO date",
        hint: "IPOs",
        hint2: "Companies by IPO date",
        post_solve: ["Dutch East India Company: 1602 (first-ever)", "Disney: 1957", "Apple: 1980", "Amazon: 1997", "General Motors: 2010", "Facebook (now Meta): 2012", "Zoom: 2019"],
        revAllowed: true
    },
    {
        id: 208,
        solution: ["SUNFLOWER HEAD", "POMEGRANATE IN JEWISH TRADITION", "MARCH MADNESS (LOWEST SEED)", "APPLE (SEED POCKETS)", "PEANUT", "AVOCADO", "COMMERCIALLY PRODUCED BANANA"],
        initialOrderSequence: "6372154",
        theme: "Number of seeds",
        hint: "A seed of a puzzle idea",
        hint2: "Number of seeds",
        post_solve: ["Sunflower head: 1000+", "Pomegranate in Jewish tradition: 613", "March Madness lowest seed: 16", "Apple: 5 seed pockets", "Peanut: ~2 seeds", "Avocado: 1 seed", "Commercially produced banana: 0 seeds"],
        revAllowed: true
    },
    {
        id: 209,
        solution: ["GOOGOLPLEX", "CENTILLION", "GOOGOL", "NOVEMDECILLION", "UNDECILLION", "TRILLION", "MILLION"],
        initialOrderSequence: "6513274",
        theme: "Very large numbers",
        hint: "Just numerical order, how hard could it be?",
        hint2: "Very large numbers",
        post_solve: ["Googolplex: 1 with a googol zeros", "Centillion: 1 with 303 zeros", "Googol: 1 with 100 zeros", "Novemdecillion: 1 with 60 zeros", "Undecillion: 1 with 36 zeros", "Trillion: 1 with 12 zeros", "Million: 1 with 6 zeros"],
        revAllowed: true
    },
    {
        id: 210,
        solution: ["PERSON (ALL-TIME)", "PERSON IN SPACE", "EVEREST SUMMITER", "INAUGURATED U.S. PRESIDENT", "PERSON TO GIVE BIRTH", "OLYMPIC GYMNAST", "DOG"],
        initialOrderSequence: "3567214",
        theme: "Age of the oldest-ever...",
        hint: "Age of the oldest-ever...",
        hint2: "Age record holders",
        post_solve: ["Person (all-time): 122 (Jeanne Calment, 1997)", "Person in space: 90 (Ed Dwight, 2024)", "Everest summiter: 80 (Yūichirō Miura, 2013)", "Inaugurated U.S. prez: 78 (Joe Biden, 2021)", "Person to give birth: 73 (Erramatti Mangamma, 2019)", "Olympic gymnast: 41  (Oksana Chusovitina, 2016)", "Dog: 29 ('Bluey' died 1929)"],
        revAllowed: true
    },
    {
        id: 211,
        solution: ["NUMBER OF BEATLES IN THE BAND 'WINGS'", "U.S. AVIATOR BADGE NUMBER OF WINGS", "HONEYBEE NUMBER OF WINGS", "SMALLEST BUFFALO WILD WINGS ORDER", "'THE WEST WING' SEASONS", "DETROIT RED WINGS STANLEY CUP WINS", "WIDEST-EVER ALBATROSS WINGSPAN (FEET)"],
        initialOrderSequence: "3164752",
        theme: "Number of wings/wing-related things",
        hint: "Winging it",
        hint2: "Number of wings/wing-related things",
        post_solve: ["Number of Beatles in Wings: 1 (Paul)", "Aviator badge wings: 2", "Honeybee wings: 4", "Smallest Buffalo Wild Wings order: 6 wings", "'The West Wing' seasons: 7", "Detroit Red Wings Stanley Cups: 11", "Wandering albatross wingspan: 12 feet<br>Theme shoutout: Matthew Stock"],
        revAllowed: true
    },
    {
        id: 212,
        solution: ["MICKEY MOUSE", "ALVIN AND THE CHIPMUNKS", "SPIDER-MAN", "MR AND MRS POTATO HEAD", "PIKACHU", "THE MINIONS", "MOANA"],
        initialOrderSequence: "6371254",
        theme: "Macy's Thanksgiving Day Parade balloon debuts",
        hint: "Macy's Thanksgiving Parade balloon debuts",
        hint2: "First year of each character balloon",
        post_solve: ["Mickey Mouse: 1935", "Alvin and the Chipmunks: 1961", "Spider-Man: 1981", "Mr. and Mrs. Potato Head: 1985", "Pikachu: 2001", "The Minions: 2010", "Moana: 2022"],
        revAllowed: true
    },
    {
        id: 213,
        solution: ["BOX OF CHOCOLATES", "PEEPS", "HOT DOGS AND HAMBURGERS", "BAVARIAN PRETZEL", "CANDY CORN", "TURKEY", "CANDY CANE"],
        initialOrderSequence: "4621573",
        theme: "Food calendar",
        hint: "Food calendar",
        hint2: "When in the year foods are eaten",
        post_solve: ["Box of chocolates: Valentine's Day", "Peeps: Easter", "Hot dogs and hamburgers: 4th of July", "Bavarian pretzel: Oktoberfest", "Candy Corn: Halloween", "Turkey: Thanksgiving", "Candy cane: Christmas"],
        revAllowed: true
    },
    {
        id: 214,
        solution: ["CLUE", "SRI", "CHIVE", "HEAVEN", "PINE GREEN", "PLENTY FINE", "DIRTY FUN"],
        initialOrderSequence: "4673215",
        theme: "Rhymes of prime numbers",
        hint: "Prime rhymes",
        hint2: "Rhymes of prime numbers",
        post_solve: ["Clue: Two", "Sri: Three", "Chive: Five", "Heaven: Seven (or Eleven)", "Pine green: Nineteen", "Plenty fine: Twenty nine", "Dirty fun: Thirty one"],
        revAllowed: true
    },
    {
        id: 215,
        solution: ["PLEASE PLEASE ME", "HELP!", "REVOLVER", "SGT. PEPPER'S LONELY HEARTS CLUB BAND", "THE WHITE ALBUM", "ABBEY ROAD", "LET IT BE"],
        initialOrderSequence: "6417523",
        theme: "Beatles albums chronologically",
        hint: "The Beatles through the years",
        hint2: "Beatles albums chronologically",
        post_solve: ["Please Please Me: 1963 (debut)", "Help!: 1965", "Revolver: 1966", "Sgt. Pepper: 1967", "The White Album: 1968", "Abbey Road: 1969", "Let It Be: 1970 (final)<br>Thanks for the suggestion dad!"],
        revAllowed: true        
    },
    {
        id: 216,
        solution: ["OPINION (IN LINGO)", "ABBR OF STATE CLOSEST TO AFRICA", "ASLEEP", "OPPOSITE OF FRO", "NOT JUST 'A'", "GALA", "BOGGLE OR SCRABBLE"],
        initialOrderSequence: "5241673",
        theme: "Take me out to the ballgame",
        hint: "Stadium song",
        hint2: "Take me out to the ballgame",
        post_solve: ["Opinion (in lingo): TAKE", "State closest to Africa: ME (Maine!)", "Asleep: OUT", "Opposite of fro: TO", "Not just 'a': THE", "Gala: BALL", "Boggle or Scrabble: GAME"],
        revAllowed: true        
    },
    {
        id: 217,
        solution: ["KNOCK: TYPE OF JOKE", "BEETLEJUICE: SUMMONING PHRASE", "MAD: '63 FILM 'IT'S A ___ WORLD'", "I DO: ABBA SONG TITLE", "OLE: SOCCER CHANT", "SHAKE: KC & THE SUNSHINE BAND LYRIC '___ YOUR BOOTY'", "BUFFALO: LONGEST VALID REPEATED-WORD SENTENCE"],
        initialOrderSequence: "6721453",
        theme: "Number of repetitions of repeated words",
        hint: "Let me repeat... (2-8)",
        hint2: "Number of repetitions of repeated words",
        post_solve: ["Type of joke: Knock-knock (2)", "Summoning phrase: Beetlejuice Beetlejuice Beetlejuice (3)", "Film title: It's a Mad Mad Mad Mad World (4)", "ABBA song: I do, I do, I do, I do, I do (5)", "Soccer chant: Ole, ole ole ole, ole, ole (6)", "KC & the Sunshine Band lyric: Shake shake shake, shake shake shake, shake your booty (7)", "Repeated 'buffalo' sentence: Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo (8!)"],
        revAllowed: true
    },
    {
        id: 218,
        solution: ["FORMER ROMANTIC PARTNER", "'ATLANTA' NETWORK", "LEFT ON A CLOCK FACE", "YOKED ANIMAL", "PRESCRIPTION ABBR", "LONE STAR STATE POSTAL CODE", "WEB DEVELOPER'S CONCERN"],
        initialOrderSequence: "5724163",
        theme: "Letter + X",
        hint: "Before times",
        hint2: "Letter + X",
        post_solve: ["Former romantic partner: Ex", "'Atlanta' network: FX", "Left on a clock face: IX (9)", "Yoked animal: Ox", "Prescription abbr: Rx", "Lone Star state postal code: TX", "Web developer's concern: UX (user experience)"],
        revAllowed: true
    },
    {
        id: 219,
        solution: ["SEMAPHORE SIGNALER", "NATL FLAGS FEATURING A UNION JACK", "U.S. THEME PARK BRAND", "TOTAL FLAGS PLANTED ON MOON", "VERSIONS OF U.S. FLAG SINCE 1777", "MOST PENALTIES EVER IN NFL GAME", "U.N. HEADQUARTERS EXTERIOR"],
        initialOrderSequence: "3451762",
        theme: "Number of flags",
        hint: "Just flagging",
        hint2: "Number of flags",
        post_solve: ["Semaphore signaler: 2 flags", "Natl flags feat. Union Jack: 5 (UK, AUS, NZ, Tuvalu, Fiji)","U.S. theme park brand: 6 flags", "Total flags planted on moon: 7 (6 US 1 China)", "Versions of U.S. flag since 1777: 27", "Most NFL penalties in game: 37 flags", "U.N. HQ exterior: 195 flags"],
        revAllowed: true        
    },
    {
        id: 220,
        solution: ["DATING WARNING", "OUTLINE OF CYPRUS ON THE CYPRUS FLAG", "FOOTBALL PENALTY INDICATOR", "START OF AN AUTO RACE", "OCEANIC SUSTAINABILITY CERTIFICATION", "STRIPE REMOVED FROM PRIDE FLAGS IN 1979", "BEACH SAFETY FLAG FOR DANGEROUS MARINE LIFE"],
        initialOrderSequence: "6751342",
        theme: "Flag colors",
        hint: "Flags pt. 2: ROYGBIV",
        hint2: "Flag colors",
        post_solve: ["Dating warning: Red flag", "Outline of Cyprus on Cyprus flag: Orange", "Football penalty: Yellow flag", "Start of an auto race: Green flag", "Oceanic sustainability cert: Blue flag", "Stripe removed from Pride flags: Indigo", "Dangerous marine life indicator: Purple flag"],
        revAllowed: true
    },
    {
        id: 221,
        solution: ["IN-N-OUT BURGER", "PAPA JOHN'S", "BURGER KING", "TACO BELL", "MCDONALD'S", "STARBUCKS", "SUBWAY"],
        initialOrderSequence: "5762143",
        theme: "Number of U.S. locations",
        hint: "U.S. locations",
        hint2: "Number of U.S. locations",
        post_solve: ["In-N-Out Burger: 400\+", "Papa John's: 3,100\+", "Burger King: 6,700\+", "Taco Bell: 7,800\+", "McDonald's: 14,300\+", "Starbucks: 16,400\+", "Subway: 20,500\+"],
        revAllowed: true
    },
    {
        id: 222,
        solution: ["HURON-IROQUOIS WORD FOR VILLAGE", "SIOUX WORD FOR FRIEND", "SIOUX WORD FOR FLAT WATER", "SO-CALLED 'PEOPLE OF THE SOUTH WIND'", "CHOCTAW WORDS FOR 'PEOPLE' AND 'RED'", "CADDO WORD FOR FRIEND (SPANISH SPELLING)", "NAHUATL PHRASE 'CENTER OF THE MOON LAKE'"],
        initialOrderSequence: "6712435",
        theme: "Etymologies from Canada to Mexico",
        hint: "North to south etymology tour",
        hint2: "Derivations of country/state names from Canada to Mexico",
        post_solve: ["Huron-Iroquois word for village: Canada", "Sioux word for friend: (N+S) Dakota", "Sioux word for flat water: Nebraska", "People of the south wind: Kansas", "Choctaw 'red' + 'people': Oklahoma", "Spanish spelling of caddo 'friend': Texas", "Nahuatl 'center of the moon lake': Mexico"],
        revAllowed: true
    },
    {
        id: 223,
        solution: ["REFS IN THE RING", "FIGHTERS IN THE RING", "ROPES AROUND THE RING", "SECONDS DOWN FOR A KNOCKOUT", "MAX ROUNDS", "TOTAL WEIGHT CLASSES", "SECONDS BETWEEN ROUNDS"],
        initialOrderSequence: "5246713",
        theme: "Boxing-related numbers",
        hint: "Box(ing) scores",
        hint2: "Boxing-related numbers",
        post_solve: ["Refs in the ring: 1", "Fighters in the ring: 2", "Ropes around the ring: 4", "Seconds down for a knockout: 10", "Max rounds: 12", "Total weight classes: 17", "Seconds between rounds: 60"],
        revAllowed: true
    },
    {
        id: 224,
        solution: ["LOST GENERATION", "GREATEST GENERATION", "SILENT GENERATION", "BABY BOOMERS", "GEN X", "MILLENNIALS", "ZOOMERS"],
        initialOrderSequence: "2645137",
        theme: "Named generations",
        hint: "People mover",
        hint2: "Named generations",
        post_solve: ["Lost generation: born 1883-1900", "Greatest generation: born 1901-1927", "Silent generation: born 1928-1945", "Baby boomers: born 1946-1964", "Gen X: born 1965-1980", "Millennial: 1981-1996", "Zoomers: 1997-2012"],
        revAllowed: true
    },
    {
        id: 225,
        solution: ["SANDALS", "TOGA", "KIMONO", "WATCH", "THREE PIECE SUIT", "BLUE JEANS", "BIKINI"],
        initialOrderSequence: "6724513",
        theme: "When fashion items were invented",
        hint: "The latest fashion",
        hint2: "When fashion items were invented",
        post_solve: ["Sandals: earliest record 8900 BCE (in Oregon!)", "Toga: 750 BCE", "Kimono: ~800 CE", "Watch: 1505 CE", "Three-piece suit: 1666 CE", "Blue jeans: 1873 CE", "Bikini: 1946 CE"],
        revAllowed: true
    },
    {
        id: 226,
        solution: ["SANTÉ!", "PROST!", "YAMAS!", "L'CHAIM!", "CIN! CIN!", "KANPAI!", "¡SALUD!"],
        initialOrderSequence: "3561274",
        theme: "Cheers languages alphabetically",
        hint: "Toasting languages A-Z",
        hint2: "'Cheers!' languages A-Z",
        post_solve: ["Santé!: French", "Prost!: German", "Yamas!: Greek", "L'chaim!: Hebrew", "Cin! Cin!: Italian", "Kanpai!: Japanese", "¡Salud!: Spanish"],
        revAllowed: true
    },
    {
        id: 227,
        solution: ["JACK-JACK (THE INCREDIBLES)", "LISA SIMPSON (THE SIMPSONS)", "KATNISS EVERDEEN (HUNGER GAMES)", "ELSA OF ARENDELLE (FROZEN)", "WALTER WHITE (BREAKING BAD)", "YODA (STAR WARS)", "GANDALF (LORD OF THE RINGS)"],
        initialOrderSequence: "5732146",
        theme: "Characters by age",
        hint: "Age old characters",
        hint2: "Characters by age",
        post_solve: ["Jack-Jack: <1", "Lisa Simpson: 8", "Katniss Everdeen: 16", "Elsa: 21", "Walter White: 50", "Yoda: 900+", "Gandalf: 10,000+"],
        revAllowed: true       
    },
    {
        id: 228,
        solution: ["SWITCHBLADE", "RONDEL DAGGER", "US NAVY CUTLASS", "KATANA", "OLYMPIC ÉPÉE", "LONGSWORD", "SCOTTISH CLAYMORE"],
        initialOrderSequence: "6241375",
        theme: "Blades by blade length",
        hint: "The cutting edge",
        hint2: "Blades by length",
        post_solve: ["Switchblade: <4 inches", "Rondel dagger: 12-20 inches", "US Navy cutlass: 24 7/8 inches", "Katana: <32 inches", "Olympic épée: 35 inches", "Longsword: <43 inches", "Scottish claymore: ~55 inches"],
        revAllowed: true        
    },
    {
        id: 229,
        solution: ["HARVEST", "CRUSH", "PRESS", "FERMENT", "CLARIFY/FILTER", "AGE", "BOTTLE"],
        initialOrderSequence: "5743126",
        theme: "(Traditional) winemaking steps",
        hint: "From vine to bottle",
        hint2: "Winemaking process",
        post_solve: ["Harvest: pick grapes", "Crush: Release juices", "Macerate: Let skins/seeds soak in juice", "Press: Remove skins/seeds", "Ferment: convert sugar to alcohol", "Clarify/filter: remove dead yeast/precipitates", "Age: let develop in a barrel/tank"],
        revAllowed: true
    },
    {
        id: 230,
        solution: ["STOCKPOT TOSS-IN", "PART OF THE EYE", "FINISHED", "SHARPEN", "UNLEAVENED CORNBREAD", "MUSCLE FIRMNESS", "SPECIFIED REGION"],
        initialOrderSequence: "2365174",
        theme: "Letter + 'one' (alphabetically)",
        hint: "One plus 'one'",
        hint2: "Letter + 'one' A-Z",
        post_solve: ["Stockpot toss-in: Bone", "Part of the eye: Cone", "Finished: Done", "Sharpen: Hone", "Unleavened cornbread: Pone", "Muscle firmness: Tone", "Specified region: Zone"],
        revAllowed: true
    },
    {
        id: 231,
        solution: ["PARTRIDGE", "TURTLE DOVE", "FRENCH HEN", "CALLING BIRD", "GOLD RING", "GOOSE", "SWAN"],
        initialOrderSequence: "6534172",
        theme: "12 Days of Christmas",
        hint: "True love's gifts",
        hint2: "12 Days of Christmas",
        post_solve: ["A partridge in a pear tree", "Two turtle doves", "Three French hens", "Four calling birds", "Five gold rings", "Six geese a-laying", "Seven swans a-singing"],
        revAllowed: true
    },
    {
        id: 232,
        solution: ["PUMPKIN", "GREEN SQUASH", "WATERMELON", "CABBAGE", "SWEET POTATO", "CARROT", "APPLE"],
        initialOrderSequence: "3512764",
        theme: "World record weights",
        hint: "The heaviest-ever...",
        hint2: "World record weights",
        post_solve: ["Pumpkin: 2,749 lbs", "Green squash: 2,164 lbs", "Watermelon: 350.5 lbs", "Cabbage: 138.25 lbs", "Sweet potato: 81.56 lbs", "Carrot: 22.44 lbs", "Apple: 4.06 lbs"],
        revAllowed: true
    },
    {
        id: 233,
        solution: ["MANDIBLE", "CLAVICLE", "RIBS", "SACRUM", "FEMUR", "TIBIA", "METATARSALS"],
        initialOrderSequence: "5734162",
        theme: "Bones head to toe",
        hint: "Head to toe, cranium to phalange",
        hint2: "Bones from head to toe",
        post_solve: ["Mandible: jaw", "Clavicle: collarbone/shoulder", "Ribs: torso", "Sacrum: lower back", "Femur: thigh", "Tibia: lower leg", "Metatarsals: feet"],
        revAllowed: true
    },
    {
        id: 234,
        solution: ["___ GHANOUJ: EGGPLANT DIP", "SURREALIST ART MOVEMENT", "LADY ___: POP ARTIST", "LAUGH SYLLABLES", "___ LAND: 2016 MUSICAL", "'FAREWELL!'", "PHILLY-BASED CONVENIENCE CHAIN"],
        initialOrderSequence: "6472531",
        theme: "_A_A",
        hint: "Double-As",
        hint2: "Words of the form _A_A",
        post_solve: ["Eggplant dip: BABA ghanouj", "Surrealist art movement: DADA", "Pop artist: Lady GAGA", "Laugh syllables: HAHA", "2016 musical: LA LA Land", "'Farewell!': 'TA-TA!'", "Philly-based convenience chain: WAWA"],
        revAllowed: true
    },
    {
        id: 235,
        solution: ["Parentheses", "Exponents", "Logarithms", "Multiplication", "Division", "Addition", "Subtraction"],
        initialOrderSequence: "4721653",
        theme: "PE(L)MDAS",
        hint: "Order (of operations) up!",
        hint2: "Order math operations are evaluated",
        post_solve: ["Parentheses: 1st tier", "Exponents: 2nd tier", "Logarithms: 2nd tier (after exponents)", "Multiplication: 3rd tier", "Division: 3rd tier (after multiplication)", "Addition: 4th tier", "Subtraction: 4th tier (after addition)"],
        revAllowed: true   
    },
    {
        id: 236,
        solution: ["PARIS METRO OPENS", "U.S. MILITARY REVEILLE", "NEW YORK STOCK EXCHANGE OPENS", "BUCKINGHAM PALACE CHANGING OF THE GUARD", "SPANISH SIESTA", "DISNEYWORLD FIREWORKS", "CURRENT DOOMSDAY CLOCK SETTING"],
        initialOrderSequence: "2571634",
        theme: "Times of day",
        hint: "According to schedule",
        hint2: "Times of day (local time)",
        post_solve: ["Paris Metro opens: 5:30 am", "U.S. military reveille: 7 am", "NYSE opens: 9:30 am", "Buckingham palace changing of the guard: 10:45 am", "Spanish siesta: ~2-4 pm", "Disneyworld fireworks: ~9 pm", "Current doomsday clock setting: 11:58 pm"],
        revAllowed: true
    },
    {
        id: 237,
        solution: ["PIANO MIDDLE C", "SOUND THAT BREAKS GLASS", "MOSQUITO TONE (SOUND THAT ADULTS CAN'T HEAR)", "HIGHEST AUDIBLE SOUND", "DOG WHISTLE", "DOLPHIN ECHOLOCATION", "AM RADIO"],
        initialOrderSequence: "5217643",
        theme: "Soundwave frequencies/pitches in kiloHertz",
        hint: "What's the Frequency, Kenneth?",
        hint2: "Frequencies/pitches in kiloHertz",
        post_solve: ["Piano middle C: .26 kHz", "Sound that breaks glass: .556 kHz", "Mosquito tone (sound adults can't hear): 18 kHz", "Highest audible sound: 20 kHz", "Dog whistle: 23-54 kHz", "Dolphin echolocation: <130 kHz", "AM radio: 540 - 1700 kHz"],
        revAllowed: true
    },
    {
        id: 238,
        solution: ["CUMULONIMBUS CLOUD (LIQUID WATER)", "HONEY", "WET CEMENT", "HUMAN BODY", "EARTH'S SURFACE", "MILK", "WATERMELON FLESH"],
        initialOrderSequence: "6254173",
        theme: "Percent water",
        hint: "H2-ratiO",
        hint2: "Percent water",
        post_solve: ["Cumulonimbus cloud: <.05% liquid water (mostly just air)", "Honey: ~18%", "Wet cement: ~27-38%", "Human body: ~55-60%", "Earth's surface: ~71%", "Milk: 87%", "Watermelon flesh: 92% (more than milk!)"],
        revAllowed: true
    },
    {
        id: 239,
        solution: ["DETERGENT BRAND", "SMALLEST ROMAN NUMERAL", "DESIRE", "TYPE OF PROGRAMMING LOOP", "YULE", "EXISTS", "SECOND PERSON PRONOUN"],
        initialOrderSequence: "5741326",
        theme: "All I Want For Christmas Is You",
        hint: "Sing it Mariah!",
        hint2: "All I Want For Christmas Is You",
        post_solve: ["Detergent brand: ALL", "Smallest Roman numeral: I", "Desire: WANT", "Programming loop: FOR", "Yule: CHRISTMAS", "Exists: IS", "Second-person pronoun: YOU"],
        revAllowed: true
    },
    {
        id: 240,
        solution: ["VENUS", "EARTH", "MARS", "PLUTO", "URANUS", "JUPITER", "SATURN"],
        initialOrderSequence: "3724165",
        theme: "Number of moons",
        hint: "Many moons",
        hint2: "Number of moons",
        post_solve: ["Venus: 0", "Earth: 1", "Mars: 2", "Pluto: 5", "Uranus: 28", "Jupiter: 95", "Saturn: 146", "Theme idea from Laura Cassellius"],
        revAllowed: true        
    },
    {
        id: 241,
        solution: ["SOCCER PITCH", "AMERICAN FOOTBALL FIELD", "HOCKEY RINK", "BASKETBALL COURT", "TENNIS COURT", "BOXING RING", "TABLE TENNIS TABLE"],
        initialOrderSequence: "4632175",
        theme: "Pro field/court/rink sizes",
        hint: "Play areas",
        hint2: "Field/court/rink sizes",
        post_solve: ["Soccer pitch: 76,590 sq ft", "American football field: 57,600 sq ft", "Hockey rink: 17,000 sq ft", "Basketball court: 4,700 sq ft", "Tennis court: 2,106 sq ft (2,808 with doubles alleys)", "Boxing ring: 256-576 sq ft", "Table tennis table: 45 sq ft"],
        revAllowed: true
    },
    {
        id: 242,
        solution: ["WEEK (BARENAKED LADIES)", "LITTLE BIRDS (BOB MARLEY)", "RINGS (ARIANA GRANDE)", "DAYS A WEEK (THE BEATLES)", "YEARS GONE (LED ZEPPELIN)", "GUNS (GREEN DAY)", "WAYS TO LEAVE YOUR LOVER (PAUL SIMON)"],
        initialOrderSequence: "6271354",
        theme: "Numbers at the start of song titles",
        hint: "Opening numbers",
        hint2: "Numbers at the start of song titles",
        post_solve: ["Barenaked Ladies: One Week", "Bob Marley and the Wailers: Three Little Birds", "Ariana Grande: 7 Rings", "The Beatles: 8 Days a Week", "Led Zeppelin: Ten Years Gone", "Green Day: 21 Guns", "Paul Simon: 50 Ways to Leave Your Lover"],
        revAllowed: true
    },
    {
        id: 243,
        solution: ["CAMPARI", "MIMOSA", "LIMONCELLO", "MATCHA", "ELECTRIC LEMONADE", "ELDERBERRY CORDIAL", "GRAPE FANTA"],
        initialOrderSequence: "4617325",
        theme: "Beverage rainbow ROYGBIV",
        hint: "Rainbow flight",
        hint2: "Beverage rainbow ROYGBIV",
        post_solve: ["Campari: red", "Mimosa: orange", "Limoncello: yellow", "Matcha: green", "Electric lemonade: blue", "Elderberry cordial: indigo", "Grape Fanta: violet"],
        revAllowed: true
    },
    {
        id: 244,
        solution: ["SEAN CONNERY", "GEORGE LAZENBY", "SEAN CONNERY (REPRISAL)", "ROGER MOORE", "TIMOTHY DALTON", "PIERCE BROSNAN", "DANIEL CRAIG"],
        initialOrderSequence: "3652174",
        theme: "James Bond portrayers chronologically",
        hint: "7 007s",
        hint2: "James Bond portrayers",
        post_solve: ["Sean Connery: '62-'67 (5 films)", "George Lazenby: '69 (1 film)", "Sean Connery (reprisal): '71 (1 film)", "Roger Moore: '73-'85 (7 films)", "Timothy Dalton: '87-'89 (2 films)", "Pierce Brosnan: '95-'02 (5 films)", "Daniel Craig: '06-'21 (5 films)"],
        revAllowed: true
    },
    {
        id: 245,
        solution: ["DINGO", "SHAR PEI", "BASSET HOUND", "DACHSHUND", "AKITA", "CHIHUAHUA", "SAINT BERNARD"],
        initialOrderSequence: "5721463",
        theme: "Alphabetical country of origin of dog breeds",
        hint: "Where breeds were born (A-Z countries)",
        hint2: "Dog breed country of origin alphabetically",
        post_solve: ["Dingo: Australia", "Shar Pei: China", "Basset Hound: France" , "Dachshund: Germany", "Akita: Japan", "Chihuahua: Mexico", "Saint Bernard: Switzerland"],
        revAllowed: true
    },
    {
        id: 246,
        solution: ["OUGHT", "LONG-LOST FRIEND E.G.", "RATHER __: CLEAN BANDIT SONG", "DIDN'T REMEMBER", "PLUS", "'WHEN PIGS FLY!'", "RUMINATED"],
        initialOrderSequence: "5627314",
        theme: "Auld Lang Syne lyrics",
        hint: "Happy New Year!",
        hint2: "Auld Lang Syne lyrics",
        post_solve: ["Ought: SHOULD", "Long-lost friend e.g.: OLD ACQUAINTANCE", "Clean Bandit song: Rather BE", "Didn't remember: FORGOT", "Plus: AND", "'When pigs fly!': NEVER", "Ruminated: THOUGHT UPON"],
        revAllowed: true
    },
    {
        id: 247,
        solution: ["THE SOLAR SYSTEM", "GEMINI (NAMESAKE STARS)", "ORION'S BELT", "SOUTHERN CROSS (JUST THE CROSS)", "CASSIOPEIA", "THE BIG DIPPER", "CENTAURUS"],
        initialOrderSequence: "6731425",
        theme: "Constellations by number of major stars",
        hint: "Count-stellations",
        hint2: "Constellations by number of major stars",
        post_solve: ["The Solar System: 1", "Gemini namesake: 2 (Castor & Pollux, 'Gemini' is Latin for 'twins')", "Orion's Belt: 3 (Alnitak, Alnilam, and Mintaka)", "Southern Cross: 4 (Acrux, Mimosa, Gacrux, Imai)", "Cassiopeia: 5", "The Big Dipper: 7", "Centaurus: 288 (most of any constellation!)"],
        revAllowed: true        
    },
    {
        id: 248,
        solution: ["HIGHEST-EVER SKYDIVE", "HIGHEST-EVER BASE JUMP", "LONGEST-EVER COMPETITION SKI JUMP", "LONGEST BUNGEE JUMP (FROM A FIXED STRUCTURE)", "OLYMPIC HIGH DIVE PLATFORM", "HIGH JUMP RECORD", "STANDING JUMP RECORD"],
        initialOrderSequence: "3754162",
        theme: "Jump heights",
        hint: "Jumping off points",
        hint2: "Jump heights",
        post_solve: ["Highest-ever skydive: 135,890 ft", "Highest altitude BASE jump: 25,300 ft", "Longest competition ski jump: 832 ft", "Longest bungee jump: 652.6 ft (max cord length)", "Olmpic high dive: 32.8 ft", "High jump record: 8 ft", "Standing jump record: 5.6 feet"],
        revAllowed: true
    },
    {
        id: 249,
        solution: ["THE TONIGHT SHOW", "JEOPARDY", "DAYS OF OUR LIVES", "60 MINUTES", "SESAME STREET", "MONDAY NIGHT FOOTBALL", "SATURDAY NIGHT LIVE"],
        initialOrderSequence: "6351274",
        theme: "Long-running shows by run length",
        hint: "The long run (years not seasons)",
        hint2: "Long-running shows by run length",
        post_solve: ["The Tonight Show: 70 years", "Jeopardy: 60 years", "Days of Our Lives: 59 years", "60 minutes: 56 years", "Sesame Street (55 years)", "Monday Night Football: 54 years", "Saturday Night Live: 50 years"],
        revAllowed: true        
    },
    {
        id: 250,
        solution: ["WORLD-RECORD PARKING LOT (CAPACITY)", "LONGEST-EVER FREIGHT TRAIN", "LONGEST-EVER PASSENGER TRAIN", "U.S. PRESIDENTIAL MOTORCADE", "INDY 500", "'CARS' FRANCHISE (TOTAL MOVIES)", "AVERAGE U.S. HOUSEHOLD (CARS OWNED)"],
        initialOrderSequence: "4273615",
        theme: "Numbers of cars",
        hint: "Counting cars",
        hint2: "Number of cars",
        post_solve: ["World-record parking lot (capacity): 20,000 cars", "Longest-ever freight train: 685 cars", "Longest-ever passenger train: 100 cars", "U.S. presidential motorcade: 40-50 cars", "Indy 500: 33 cars", "'Cars' franchise: 3 movies", "U.S. household: 1.8 cars (avg)"],
        revAllowed: true
    },
    {
        id: 251,
        solution: ["JUDI DENCH 'BOND' ROLE", "PARENTAL NICKNAME", "DAMAGE", "RED PLANET", "WETLAND", "SENATOR BLACKBURN", "FIRE CHIEF"],
        initialOrderSequence: "7412653",
        theme: "Building the word MARSHAL",
        hint: "Building marshal",
        hint2: "Building the word MARSHAL",
        post_solve: ["Judi Dench 'Bond' role: M", "Parental nickname: MA", "Damage: MAR", "Red planet: MARS", "Wetland: MARSH", "Senator Blackburn: MARSHA", "Fire chief: MARSHAL"],
        revAllowed: true
    },
    {
        id: 252,
        solution: ["U.S. CAPITAL CITY", "CAPITAL OF MISSOURI", "CAPITAL OF WISCONSIN", "CAPITAL OF MISSISSIPPI", "CAPITAL OF NEBRASKA", "HOME OF THE NBA'S CAVALIERS", "DAM ON THE NEVADA ARIZONA BORDER"],
        initialOrderSequence: "5274136",
        theme: "Places in order of namesake president",
        hint: "POTUS places",
        hint2: "Places in order of namesake president",
        post_solve: ["U.S. Capital: Washington DC (1st POTUS)", "Capital of Missouri: Jefferson City (3rd)", "Capital of Wisconsin: Madison (4th)", "Capital of Mississippi: Jackson (7th)", "Capital of Nebraska: Lincoln (16)", "Home of the NBA's Cavaliers: Cleveland (22nd and 24th)", "Dam on the Nevada Arizona border: Hoover Dam (31st)"],
        revAllowed: true
    },
    {
        id: 253,
        solution: ["SPIDER-MAN'S MASK", "THE THING (FANTASTIC FOUR)", "WOLVERINE'S MASK (X-MEN COMICS)", "THE INCREDIBLE HULK", "CAPTAIN AMERICA'S MASK", "NEBULA'S SUIT", "THANOS"],
        initialOrderSequence: "2641735",
        theme: "ROYGBIV of Marvel characters",
        hint: "Marvelous rainbow",
        hint2: "ROYGBIV of Marvel characters",
        post_solve: ["Spider-Man's mask: Red", "The Thing: Orange", "Wolverine's mask: Yellow", "The Incredible Hulk: Green", "Captain America's mask: Blue", "Nebula's suit: Indigo", "Thanos: Violet", "Theme inspo from Alex Wein"],
        revAllowed: true
    },
    {
        id: 254,
        solution: ["CHOCOLATE CHIP COOKIE DOUGH", "CHERRY GARCIA", "CHUNKY MONKEY", "PHISH FOOD", "HALF BAKED", "STEPHEN COLBERT'S AMERICONE DREAM", "THE TONIGHT DOUGH STARRING JIMMY FALLON"],
        initialOrderSequence: "5417362",
        theme: "Ben & Jerry's flavor debut timeline",
        hint: "Ben & Jerry's debuts",
        hint2: "Ben & Jerry's flavor debut timeline",
        post_solve: ["Chocolate Chip Cookie Dough: 1984", "Cherry Garcia: 1987", "Chunky Monkey: 1988", "Phish Food: 1997", "Half Baked: 2000", "Americone Dream: 2007", "The Tonight Dough: 2015"],
        revAllowed: true        
    },
    {
        id: 255,
        solution: ["BERKELEY E.G.", "MAJOR ISLAND NATION", "INTL ORG BASED IN NYC", "PIXAR FILM WITH A DOG NAMED DUG", "ANCIENT 'ROYAL' BOARD GAME", "BEEHIVE STATE POSTAL CODE", "TYPE OF RADIATION"],
        initialOrderSequence: "2671354",
        theme: "U + letter",
        hint: "After you",
        hint2: "U + letter",
        post_solve: ["Berkeley, e.g.: UC", "Major island nation: UK", "Intl. org. based in NYC: UN", "Pixar film with 'Dug': UP", "Ancient 'royal' board game: UR", "Beehive State postal code: UT", "Type of radiation: UV"],
        revAllowed: true
    },
    {
        id: 256,
        solution: ["___'S LACE (WILD CARROT)", "'SINGLE LADIES' SINGER NICKNAME", "LONGEST-REIGNING BRITISH MONARCH EVER", "ARTIST/ACTRESS DANA ELAINE OWENS", "DOMINIQUE MCELLIGOTT ROLE ON 'THE BOYS'", "ANGELA BASSETT ROLE IN 'BLACK PANTHER'", "OPRAH WINFREY NETWORK SHOW SET ON A FARM"],
        initialOrderSequence: "6735142",
        theme: "Queens A-Z",
        hint: "Leading ladies",
        hint2: "Queens A-Z",
        post_solve: ["___'s lace (wild carrot): QUEEN ANNE", "'Single Ladies' singer nickname: QUEEN BEY", "Longest-reigning British monarch: QUEEN ELIZABETH II", "Artist/actress Dana Elaine Owens: QUEEN LATIFAH", "Dominique McElligott role on 'The Boys': QUEEN MAEVE", "Angela Bassett role in 'Black Panther': QUEEN RAMONDA", "Oprah Winfrey Network show: QUEEN SUGAR"],
        revAllowed: true
    },
    {
        id: 257,
        solution: ["___ FLOUR: BAKING AISLE STAPLE", "___ AND THE LIZARD WIZARD: ROCK BAND", "ENGLISH MONARCH WHO MARRIED SIX TIMES", "NICKNAME FOR LEBRON OF THE NBA", "'GOLDEN TOUCH' VICTIM OF PARABLE", "2021 FILM ABOUT THE WILLIAMS SISTERS' FATHER", "BOY MONARCH OF EGYPT"],
        initialOrderSequence: "3162754",
        theme: "Kings A-Z",
        hint: "Leading men",
        hint2: "Kings A-Z",
        post_solve: ["Baking aisle staple: KING ARTHUR flour", "Rock band: KING GIZZARD and the Lizard Wizard", "English monarch who married six times: KING HENRY VIII", "Nickname for Lebron: KING JAMES", "'Golden Touch' victim of parable: KING MIDAS", "2021 film about the Williams sisters' father: KING RICHARD", "Boy monarch of Egypt: KING TUT"],
        revAllowed: true
    },
    {
        id: 258,
        solution: ["NOTED TAYLOR SWIFT PRODUCER/COLLABORATOR", "'SCHOOL OF ROCK' STAR", "FOUNDER OF TWITTER", "'BANANA PANCAKES' SINGER-SONGWRITER", "'ON THE ROAD' AUTHOR", "'THE SHINING' STAR", "'THE WHITE STRIPES' FRONTMAN"],
        initialOrderSequence: "2754136",
        theme: "Jacks A-Z",
        hint: "Jacks",
        hint2: "Jacks A-Z",
        post_solve: ["Taylor Swift producer/collaborator: JACK ANTONOFF", "'School of Rock' star: JACK BLACK", "Founder of Twitter: JACK DORSEY", "'Banana Pancakes' singer-songwriter: JACK JOHNSON", "'On the Road' author: JACK KEROUAC", "'The Shining' star: JACK NICHOLSON", "'The White Stripes' frontman: JACK WHITE"],
        revAllowed: true
    },
    {
        id: 259,
        solution: ["THE LITTLE MERMAID", "SLEEPING BEAUTY", "BEAUTY AND THE BEAST", "ALADDIN", "BRAVE", "TANGLED", "THE PRINCESS AND THE FROG"],
        initialOrderSequence: "2164735",
        theme: "Disney movies by alphabetical princess",
        hint: "Princesses A-Z",
        hint2: "Disney movies by alphabetical princess",
        post_solve: ["The Little Mermaid: Ariel", "Sleeping Beauty: Aurora", "Beauty and the Beast: Belle", "Aladdin: Jasmine", "Brave: Merida", "Tangled: Rapunzel", "The Pricness and the Frog: Tiana", "Theme by Mallory Kanterman"],
        revAllowed: true
    },
    {
        id: 260,
        solution: ["USA", "BRAZIL", "THE EU", "CHINA", "NEW ZEALAND", "PANAMA", "PUERTO RICO"],
        initialOrderSequence: "4651372",
        theme: "Flags by number of stars",
        hint: "Flying stars",
        hint2: "Flags by number of stars",
        post_solve: ["USA: 50", "Brazil: 27", "The EU: 12", "China: 5", "New Zealand: 4", "Panama: 2", "Puerto Rico: 1", "Puzzle by Gabe Antell-Proulx"],
        revAllowed: true
    },
    {
        id: 261,
        solution: ["'JINGLE BELLS' SLEIGH", "RUSSIAN TROIKA", "BIBLICAL APOCALYPSE", "VALUE OF A CAVALRY PIECE IN RISK", "THE MANE ___: 'MY LITTLE PONY' PROTAGONISTS", "BUDWEISER WAGON", "U.S. TRIPLE CROWN WINNERS (EVER)"],
        initialOrderSequence: "2613754",
        theme: "Horse counts",
        hint: "Hold your horses",
        hint2: "Horse counts",
        post_solve: ["'Jingle Bells' sleigh: 1", "Russian troika: 3", "Biblical apocalypse: 4", "Risk cavalry piece value: 5", "'My Little Pony' protagonists: The Mane Six", "Budweiser wagon: 8 Clydesdales", "U.S. Triple Crown winners (ever): 13"],
        revAllowed: true
    },
    {
        id: 262,
        solution: ["MORNING CLOCK ABBR", "PRIVATE INSTAGRAM COMMUNICATION", "HIGHER-FREQUENCY RADIO FORMAT", "OWNER OF CHEVROLET", "APPROX .62 MILES", "COPYRIGHT PROTECTION LETTERS", "SATELLITE RADIO COMPANY THAT MERGED WITH SIRIUS"],
        initialOrderSequence: "2751364",
        theme: "Letter + M",
        hint: "Before the half",
        hint2: "Letter + M",
        post_solve: ["Morning clock abbr: AM", "Private Instagram communication: DM", "Higher-frequency radio format: FM", "Owner of Chevrolet: GM", "Approx .62 miles: KM", "Copyright protection letters: TM", "Satellite radio company: XM"],
        revAllowed: true
    },
    {
        id: 263,
        solution: ["RIHANNA", "SHAKIRA + JENNIFER LOPEZ", "LADY GAGA", "KATY PERRY", "BEYONCÉ", "MADONNA", "DIANA ROSS"],
        initialOrderSequence: "6174253",
        theme: "Super Bowl halftime show headlining ladies",
        hint: "Halftime headliners",
        hint2: "Super Bowl halftime show headlining ladies",
        post_solve: ["Rihanna: LVII (2023)", "Shakira and J. Lo: LIV (2020)", "Lady Gaga: LI (2017)", "Katy Perry: XLIX (2015)", "Beyoncé: XLVII (2013)", "Madonna: XLVI (2012)", "Diana Ross: XXX (1996)"],
        revAllowed: true
    },
    {
        id: 264,
        solution: ["SMALLPOX", "TETANUS", "INFLUENZA", "POLIO", "CHICKENPOX", "MALARIA", "COVID"],
        initialOrderSequence: "6143752",
        theme: "Vaccine invention timeline",
        hint: "Vaccinventions",
        hint2: "Vaccine invention timeline",
        post_solve: ["Smallpox: 1796", "Tetanus: 1924", "Influenza: 1945", "Polio: 1955", "Chickenpox: 1995", "Malaria: 2015", "COVID: 2020", "Thanks for the idea mom!"],
        revAllowed: true
    },
    {
        id: 265,
        solution: ["MARY POPPINS / MARY POPPINS RETURNS", "TOP GUN / TOP GUN: MAVERICK", "BLADE RUNNER / BLADE RUNNER 2049", "TWISTER / TWISTERS", "DUMB AND DUMBER / DUMB AND DUMBER TO", "THE INCREDIBLES / THE INCREDIBLES 2", "KILL BILL: VOLUME 1 / KILL BILL: VOLUME 2"],
        initialOrderSequence: "2613574",
        theme: "Lengths of gaps between movies and sequels",
        hint: "Wait times",
        hint2: "Lengths of gaps between movies and sequels",
        post_solve: ["Mary Poppins / Mary Poppins Returns: 54 years (1964-2018)", "Top Gun / Top Gun: Maverick: 36 years (1986-2022)",  "Blade Runner / Blade Runner 2049: 35 years (1982-2017)", "Twister / Twisters: 28 years (1996-2024)", "Dumb and Dumber / Dumb and Dumber To: 20 years (1994-2014)", "The Incredibles / The Incredibles 2: 14 years (2004-2018)", "Kill Bill Volume 1 / Volume 2: 1 year (2003-2004)", "Theme by Anna Wagner (thanks bub!)"],
        revAllowed: true
    },
    {
        id: 266,
        solution: ["PIZZERIA ___", "___ EQUIS BEER", "___ LECHES CAKE", "____ DE MAYO", "THE ___: ESPN SHOW FOR OBSCURE SPORTS", "NFL NICKNAME CHAD ____ JOHNSON", "___ AÑOS DE SOLEDAD: MÁRQUEZ NOVEL"],
        initialOrderSequence: "6524713",
        theme: "Spanish numbers",
        hint: "Más o menos",
        hint2: "Spanish numbers",
        post_solve: ["Pizzeria UNO", "DOS Equis beer", "TRES leches cake", "CINCO de Mayo", "ESPN 8: The OCHO", "Chad OCHOCINCO Johnson", "CIEN Años de Soledad"],
        revAllowed: true
    },
    {
        id: 267,
        solution: ["FIRST PERSON PRONOUN", "MEDICAL FLUID DELIVERY PROCESS", "FLYING ___: BIRD FORMATION", "BOWLING TURKEY", "LOOP IN ON AN EMAIL", "ON THE ___: HUSH-HUSH", "'BOND' ROLE FOR JUDI DENCH AND RALPH FIENNES"],
        initialOrderSequence: "2751364",
        theme: "Roman numerals",
        hint: "As the Romans do",
        hint2: "Roman numerals",
        post_solve: ["First person pronoun: I (1)", "Medical fluid delivery process: IV (4)", "Bird formation: Flying V (5)", "Bowling turkey: XXX (30)", "Loop in on an email: CC (200)", "Hush-hush: on the DL (550)", "Dench/Fiennes 'Bond' role: M (1000)"],
        revAllowed: true
    },
    {
        id: 268,
        solution: ["MALALA YOUSAFZAI", "NELSON MANDELA", "ELIE WIESEL", "MOTHER TERESA", "MARTIN LUTHER KING JR", "JANE ADDAMS", "THEODORE ROOSEVELT"],
        initialOrderSequence: "3615274",
        theme: "Nobel Peace Prize recipients",
        hint: "Laureates of peace",
        hint2: "Laureates of peace",
        post_solve: ["Malala Yousafzai: 2014", "Nelson Mandela: 1993", "Elie Wiesel: 1986", "Mother Teresa: 1979", "MLK Jr: 1964", "Jane Addams: 1931", "Theodore Roosevelt: 1906"],
        revAllowed: true
    },
    {
        id: 269,
        solution: ["MOTORCYCLE", "INTERNATIONAL SPACE STATION", "DOUBLE-DECKER BUS", "AIRBUS A380", "WORLD'S BIGGEST PASSENGER TRAIN", "NIMITZ-CLASS U.S. NAVY AIRCRAFT CARRIER", "'ICON OF THE SEAS' CRUISE SHIP"],
        initialOrderSequence: "2745163",
        theme: "Vehicle capacities",
        hint: "All aboard!",
        hint2: "Vehicle capacities",
        post_solve: ["Motorcycle: 1-2", "International Space Station: 6 crew members", "Double-decker bus: 70-100 passengers", "Airbus A380: 853 passengers", "Largest train (Swiss Rhaetian Railway): 4,550 passengers", "Nimitz-class aircraft carrier: 5,200 crew members", "'Icon of the Seas' cruise ship: 7,600 passengers + 2,350 crew"],
        revAllowed: true
    },
    {
        id: 270,
        solution: ["ROMAN NUMBERAL 1900", "HEBREW LETTER BEFORE NUN", "STUDIO WITH A FAMOUS LION", "PYRAMID SCHEME INITS", "'DELICIOUS!'", "___ JEANS: PARENTAL FASHION", "HUSH-HUSH"],
        initialOrderSequence: "5437126",
        theme: "M_M",
        hint: "Bothsidesism",
        hint2: "M_M",
        post_solve: ["Roman numeral 1900: MCM", "Hebrew letter before nun: MEM", "Studio with a famous lion: MGM", "Pyramid scheme inits: MLM (multi-level marketing)", "'Delicious!': 'mmm!'", "Parental fashion: MOM jeans", "Hush-hush: MUM"],
        revAllowed: true
    },
    {
        id: 271,
        solution: ["ELMO", "ERNIE", "BIG BIRD", "KERMIT THE FROG", "COOKIE MONSTER", "GONZO", "COUNT VON COUNT"],
        initialOrderSequence: "2654713",
        theme: "ROYGBIV Muppets",
        hint: "Rainbow Connection",
        hint2: "ROYGBIV Muppets",
        post_solve: ["Elmo: red", "Ernie: orange", "Big Bird: yellow", "Kermit the frog: green", "Cookie monster: blue", "Gonzo: indigo", "Count Von Count: violet"],
        revAllowed: true
    },
    {
        id: 272,
        solution: ["CHICAGO NFL", "CINCINNATI NFL", "CHICAGO NHL", "WINNIPEG CFL", "MILWAUKEE MLB", "MILWAUKEE NBA", "CHICAGO NBA"],
        initialOrderSequence: "6571324",
        theme: "B teams A-Z",
        hint: "B teams (A-Z)",
        hint2: "Alphabetical teams",
        post_solve: ["Chicago NFL: Bears", "Cincinnati NFL: Bengals", "Chicago NHL: Blackhawks", "Winnipeg CFL: Blue Bombers", "Milwaukee MLB: Brewers", "Chicago NBA: Bulls"],
        revAllowed: true
    },
    {
        id: 273,
        solution: ["OYSTERS ON THE ___ SHELL", "TURTLE", "TACO BELL CHEESY GORDITA CRUNCH (TACO SHELLS)", "MARIO KART REVOLVING RED SHELLS", "OLYMPIC ROWING FINALS (TOTAL BOATS AKA SHELLS)", "BANDOLIER (AMMO BELT) SHOTGUN SHELLS", "SANIBEL ISLAND FLORIDA SEASHELL SPECIES"],
        initialOrderSequence: "2645173",
        theme: "Number of shells",
        hint: "Shelling out",
        hint2: "Number of shells",
        post_solve: ["Oysters on the ___ shell: Half", "Turtle: 1 shell", "Cheesy Gordita Crunch: 2 shells (flatbread + crispy tortilla)", "Mario Kart revolving red shells: 3", "Olympic rowing finals: 6 shells (boats)", "Bandolier shotgun shells: ~30-60", "Sanibel Island seashell species: 250+"],
        revAllowed: true
    },
    {
        id: 274,
        solution: ["LONDON LANDMARK", "'1984' VILLAIN WHO'S 'WATCHING YOU'", "URSA MAJOR CONSTELLATION", "COEN BROTHERS MOVIE STARRING JEFF BRIDGES", "2000 JAY-Z SONG", "MONTANA NICKNAME", "SCENIC COASTAL CALIFORNIA DESTINATION"],
        initialOrderSequence: "6157324",
        theme: "Big ___ (A-Z)",
        hint: "Kind of a big deal",
        hint2: "Big ___ (A-Z)",
        post_solve: ["London landmark: Big Ben", "'1984' villain: Big Brother", "Ursa Major constellation: Big Dipper", "Coen Brothers movie: Big Lebowski", "2000 Jay-Z song: Big Pimpin'", "Montana nickname: Big Sky", "Scenic California destination: Big Sur"],
        revAllowed: true        
    },
    {
        id: 275,
        solution: ["HAWAII BIG ISLAND MAX ELEVATION", "BIG BEN TOWER HEIGHT", "BIG RIG LENGTH", "BIG BERTHA (WWI CANNON) LENGTH", "BIGGEST-EVER BIGEYE TUNA LENGTH", "BIG BIRD HEIGHT", "NOTORIOUS B.I.G. HEIGHT"],
        initialOrderSequence: "5617423",
        theme: "'Big' things by size",
        hint: "Kind of a big deal pt. 2",
        hint2: "'Big' things by size",
        post_solve: ["Big Island max elevation: 13,803 ft (Mauna Kea)", "Big Ben tower height: 315'", "Big Rig length: ~70-80'", "Big Bertha length: 33'", "Biggest ever bigeye tuna length: 8' 2\" (250 cm!)", "Big Bird height: 8' 2\" (249 cm!)", "Notorious B.I.G. height: 6' 3\""],
        revAllowed: true
    },
    {
        id: 276,
        solution: ["SITE OF CUSTER'S LAST STAND", "NYC NEIGHBORHOOD BETWEEN THE BOWERY AND TRIBECA", "ROBIN HOOD COMPANION", "'UNDER THE SEA' DISNEY MOVIE", "'GOOD GOLLY MISS MOLLY' SINGER", "CAPITAL OF ARKANSAS", "LOUISA MAY ALCOTT NOVEL"],
        initialOrderSequence: "2573164",
        theme: "Little ___ (A-Z)",
        hint: "A little something",
        hint2: "Little ___ (A-Z)",
        post_solve: ["Site of Custer's last stand: Little Bighorn", "NYC neighborhood: Little Italy", "Robin Hood companion: Little John", "Disney movie: Little Mermaid", "'Good Golly Miss Molly' singer: Little Richard", "Capital of Arkansas: Little Rock", "Louisa May Alcott novel: Little Women"],
        revAllowed: true
    },
    {
        id: 277,
        solution: ["PALINDROMIC KITCHEN BRAND", "MOST COMMON LUMBER PLANK DIMENSIONS", "IN N OUT TRIPLE TRIPLE BURGER ON MENUS", "FOUR WHEEL DRIVE VEHICLE", "STANDARD U.S. PRINTER PAPER SIZE", "STANDARD 1080P ASPECT RATIO", "SHORTEST OLYMPIC RELAY"],
        initialOrderSequence: "3761425",
        theme: "A x B products",
        hint: "Products",
        hint2: "A x B products",
        post_solve: ["Palindromic kitchen brand: OXO = 0", "Most common lumber plank: 2x4 = 8", "In N Out Triple Triple burger on menus: 3x3 = 9", "Four wheel drive vehicle: 4x4 = 16", "Standard U.S. printer paper: 8.5 x 11 = 93.5", "1080p aspect ratio: 16 x 9 = 144", "Shortest Olympic relay: 4 x 100 = 400"],
        revAllowed: true
    },
    {
        id: 278,
        solution: ["HYDROGEN'S ATOMIC NUMBER", "DNA BASES", "CAT'S PROVERBIAL LIVES", "PAWNS ON A CHESSBOARD", "CHRISTMAS DAY", "HIGHEST NUMBER ON A U.S. ROULETTE WHEEL", "CALIFORNIA PRO SPORTS TEAM"],
        initialOrderSequence: "6345172",
        theme: "Perfect squares",
        hint: "Squares",
        hint2: "Perfect squares",
        post_solve: ["Hydrogen's atomic number: 1", "DNA bases: 4", "Cat's proverbial lives: 9", "Pawns on a chessboard: 16", "Christmas day: 25", "Highest number on a U.S. roulette wheel: 36", "CA pro sports team: 49ers"],
        revAllowed: true
    },
    {
        id: 279,
        solution: ["GREENLAND", "NEW GUINEA", "MADAGASCAR", "GREAT BRITAIN", "ICELAND", "SRI LANKA", "BIG ISLAND OF HAWAII"],
        initialOrderSequence: "2167354",
        theme: "Islands by size",
        hint: "The big-isled",
        hint2: "Islands by size",
        post_solve: ["Greenland: 836,330 sq. miles", "New Guinea: 303,381 sq. miles", "Madagascar: 226,658 sq. miles", "Great Britain: 80,823 sq. miles", "Iceland: 39,315 sq. miles", "Sri Lanka: 25,332 sq. miles", "Big island of Hawaii: 4,028 sq. miles"],
        revAllowed: true        
    },
    {
        id: 280,
        solution: ["ATM PIN", "ZIP CODE", "SOCIAL SECURITY NUMBER", "US TELEPHONE NUMBER", "CREDIT CARD NUMBER", "HUMAN BODY", "PI"],
        initialOrderSequence: "6517423",
        theme: "Number of digits",
        hint: "Can you digit?",
        hint2: "Number of digits",
        post_solve: ["ATM PIN: 4 digits", "Zip code: 5 digits", "Social security number: 9 digits", "US phone number: 10 digits (11 w/ country code)", "Credit card number: 16 digits (15 for Amex)", "Human body: 20 (fingers and toes)", "Pi: infinitely many digits"],
        revAllowed: true
    },
    {
        id: 281,
        solution: ["___ PAN OF NEVERLAND", "FLAUTIST", "CHOSE", "(A) POKE FROM A CHICKEN", "'__ COURSE!': RESOUNDING YES", "FERMENTED", "JALAPEÑOS AND HABANEROS"],
        initialOrderSequence: "5174263",
        theme: "Peter Piper tongue twister",
        hint: "Untwist the tongue twister",
        hint2: "Peter Piper tongue twister",
        post_solve: ["___ Pan of Neverland: Peter", "Flautist: Piper", "Chose: Picked", "Poke from a chicken: (a) Peck", "__ course!: resounding yes: Of", "Fermented: Pickled", "Jalapeños and habaneros: Peppers"],
        revAllowed: true
    },
    {
        id: 282,
        solution: ["NBA PLAYER JOHN WALL", "WASHINGTON D.C. VIETNAM VETS MEMORIAL WALL", "BERLIN WALL", "SEATTLE CHEWING GUM WALL", "GREAT WALL OF CHINA (AVERAGE HEIGHT)", "FENWAY PARK GREEN MONSTER", "JERSUALEM WESTERN WALL"],
        initialOrderSequence: "6312754",
        theme: "Wall heights",
        hint: "Up a wall",
        hint2: "Wall heights",
        post_solve: ["NBA player John Wall: 6' 3\"", "Vietnam vets memorial wall: 10' 1.5\"", "Berlin Wall: 12'", "Seattle chewing gum wall: <15'", "Great Wall of China (avg): 25.6'", "Fenway Park Green Monster: 37' 2\"", "Jerusalem Western Wall: 62'"],
        revAllowed: true    
    },
    {
        id: 283,
        solution: ["KENTUCKY DERBY", "HEAD OF THE CHARLES REGATTA", "MARATHON", "OLYMPIC TRIATHLON", "MONACO GRAND PRIX", "IDITAROD", "TOUR DE FRANCE"],
        initialOrderSequence: "2654173",
        theme: "Race lengths",
        hint: "Start to finish",
        hint2: "Race lengths",
        post_solve: ["Kentucky Derby: 1.25 miles", "Head of the Charles Regatta: 3 miles", "Marathon: 26.2 miles", "Olympic Triathlon: 32 miles", "Monaco Grand Prix: 174.16", "Iditarod: 1,049 miles", "Tour de France: ~2,200 miles"],
        revAllowed: true
    },
    {
        id: 284,
        solution: ["'FANTASTIC!'", "GENETIC MATERIAL", "BIG AND BULKY", "BRUTAL AND GRAPHIC", "LACKING COMPANIONSHIP", "MÉNAGE À TROIS", "TROUBLING"],
        initialOrderSequence: "2645173",
        theme: "___some A-Z",
        hint: "And then some (A-Z)",
        hint2: "___some A-Z",
        post_solve: ["'Fantastic!': Awesome", "Genetic material: Chromosome", "Big and bulky: Cumbersome", "Brutal and graphic: Gruesome", "Lacking companionship: Lonesome", "Ménage à trois: Threesome", "Troubling: Worrisome"],
        revAllowed: true
    },
    {
        id: 285,
        solution: ["NEW YORK", "CALIFORNIA", "ILLINOIS", "TEXAS", "ARIZONA", "PENNSYLVANIA", "FLORIDA"],
        initialOrderSequence: "5273164",
        theme: "States by largest city population",
        hint: "Biggest biggest cities",
        hint2: "States by largest city population",
        post_solve: ["New York: NYC (8.2 million)", "California: LA (3.8 million)", "Illinois: Chicago (2.6 million)", "Texas: Houston (2.3 million)", "Arizona: Phoenix (1.6 million)", "Pennsylvania: Philadelphia (1.5 million)", "Florida: Jacksonville (985 thousand)"],
        revAllowed: true        
    },
    {
        id: 286,
        solution: ["HUMAN-MADE HOLE", "OCEAN TRENCH", "OIL WELL (FROM SEA BED)", "MINE", "CAVE", "LAKE", "POOL"],
        initialOrderSequence: "6512743",
        theme: "World's deepest depths (ft below surface)",
        hint: "The world's deepest...",
        hint2: "World's deepest depths",
        post_solve: ["Human made hole: 40,230 ft (Kola Superdeep Borehole - Russia)", "Ocean trench: 36,201 ft (Mariana trench)", "Oil well: 35,056 (Tiber well - Gulf of Mexico)", "Mine: 12,800 ft (TauTona Mine - South Africa)", "Cave: 7,231 ft (Veryovkina - Georgia)", "Lake: 5,387 ft (Baikal - Russia)", "Pool: 197 feet (Deep Dive Dubai)"],
        revAllowed: true
    },
    {
        id: 287,
        solution: ["AVATAR", "AVENGERS: ENDGAME", "TITANIC", "STAR WARS: THE FORCE AWAKENS", "INSIDE OUT 2", "JURASSIC WORLD", "THE LION KING (2019)"],
        initialOrderSequence: "2651734",
        theme: "High-grossing movies",
        hint: "Box office smashes",
        hint2: "High-grossing movies",
        post_solve: ["Avatar: $2.9B", "Avengers: Endgame: $2.7B", "Titanic: $2.2B", "Star Wars: The Force Awakens: $2.0B", "Inside Out 2: $1.69B (and counting!)", "Jurassic World: $1.67B", "The Lion King (2019): $1.65B"],
        revAllowed: true
    },
    {
        id: 288,
        solution: ["REASONS: LADY GAGA SONG", "BAR: CHOCOLATE CANDY", "MANIACS: ALT ROCK BAND", "MILES: VANESSA CARLTON SONG", "ACRE WOOD: WINNIE THE POOH HOME", "GALLON HAT: COWBOY ATTIRE", "DIRECTION: BOY BAND"],
        initialOrderSequence: "6142753",
        theme: "Powers of 10",
        hint: "Tenfold",
        hint2: "Powers of 10",
        post_solve: ["Lady Gaga song: Million reasons (1,000,000)", "Chocolate candy: 100 Grand Bar (100,000)", "Alt rock band: Ten thousand maniacs (10,000)", "Vanessa Carlton song: A thousand miles (1,000)", "Winnie the Pooh home: Hundred acre wood (100)", "Cowboy attire: Ten gallon hat (10)", "Boy Band: One Direction (1)"],
        revAllowed: true
    },
    {
        id: 289,
        solution: ["COLLECTIVE PRONOUN", "CONTAIN", "THE ONES OVER HERE", "PROVEN FACTS", "OPPOSITE OF 'FROM'", "'__ OUR GUEST': 'BEAUTY AND THE BEAST' SONG", "INNATELY OBVIOUS"],
        initialOrderSequence: "4253176",
        theme: "Declaration of Independence quote",
        hint: "Declaration declaration",
        hint2: "Declaration of Independence quote",
        post_solve: ["Collective pronoun: We", "Contain: Hold", "The ones over here: These", "Proven facts: Truths", "Opposite of 'from': To", "__ Our Guest: Be", "Innately obvious: Self-evident"],
        revAllowed: true 
    },
    {
        id: 290,
        solution: ["STANDARD SOCCER BALL PANELS", "CHICKEN MCNUGGETS", "PLATONIC SOLIDS", "CHESS PIECES", "TETRIS PIECES", "U.S. ROAD SIGNS", "PASTA"],
        initialOrderSequence: "5374216",
        theme: "Number of different shapes",
        hint: "All different shapes",
        hint2: "Number of different shapes",
        post_solve: ["Soccer ball panels: 2 (hexagon + pentagon)", "Chicken McNuggets: 4 (bell, bone, boot, ball)", "Platonic solids: 5 (tetrahedron, cube, octahedron, dodecahedron, icosahedron)", "Chess pieces: 6 (pawn, rook, knight, bishop, queen, king)", "Tetris pieces: 7", "US road sign shapes: 9", "Pasta shapes: 350+"],
        revAllowed: true    
    },
    {
        id: 291,
        solution: ["INTERNATIONAL SPACE STATION", "GPS SATELLITES", "SATELLITE TV SATELLITES", "THE MOON", "THE SUN", "PLUTO", "VOYAGER 1"],
        initialOrderSequence: "3541672",
        theme: "Distance from Earth",
        hint: "Far from home",
        hint2: "Distance from Earth",
        post_solve: ["ISS: ~250 miles (low Earth orbit)", "GPS satellites: 12,550 miles (medium Earth orbit)", "Satellite TV satellites: 22,000 miles (geosynchronous orbit)", "The moon: 283,000 miles", "The sun: 93 million miles", "Pluto: 3.36 billion miles", "Voyager 1: 15.5 billion miles"],
        revAllowed: true
    },
    {
        id: 292,
        solution: ["FORMER 'DAILY SHOW' CORRESPONDENT OLIVIA", "SMALLEST PRIME NUMBER", "GOT MARRIED", "RIGHT ___: 2003 CHINGY SONG", "COOK IN OIL", "USED A CHAIR", "MALE CHILD"],
        initialOrderSequence: "5742613",
        theme: "Day-of-week abbreviation soundalikes",
        hint: "M-S word",
        hint2: "Day-of-week abbreviation soundalikes",
        post_solve: ["'Daily Show' correspondent Olivia: Munn (MON)", "Smallest prime: Two (TUE)", "Got married: Wed (WED)", "Chingy song: Right Thurr (THUR)", "Cook in oil: Fry (FRI)", "Used a chair: Sat (SAT)", "Male child: Son (SUN)"],
        revAllowed: true
    },
    {
        id: 293,
        solution: ["THE HARPERS (2 AND A HALF MEN)", "THE BUNDYS (MARRIED... WITH CHILDREN)", "THE EVANSES (GOOD TIMES)", "THE \[NO LAST NAME\]S (MALCOLM IN THE MIDDLE)", "THE PARTRIDGES (THE PARTRIDGE FAMILY)", "THE BRADYS (THE BRADY BUNCH)", "THE CAMDENS (7TH HEAVEN)"],
        initialOrderSequence: "6521473",
        theme: "Number of children in TV families",
        hint: "Think of the children! (as of season 1)",
        hint2: "Number of children of TV families",
        post_solve: ["2 and a half men: 1 (Jake)", "Married... with Children: 2 (Kelly and Bud)", "Good Times: 3 (J.J., Thelma, and Michael)", "Malcolm in the Middle: 4 (Francis, Reese, Malcolm, and Dewey)", "The Partridge Family: 5 (Keith, Laurie, Danny, Chris, and Tracy)", "The Brady Bunch: 6 (Marcia, Greg, Jan, Peter, Cindy, and Bobby)", "7th Heaven: 7 (Matt, Mary, Lucy, Simon, Ruthie, Sam, and David)"],
        revAllowed: true        
    },
    {
        id: 294,
        solution: ["BRA", "SHELL GAME", "TEAM USA WOMEN'S WORLD CUP SOCCER WINS", "STARBUCKS CUP SIZES", "BEER PONG SETUP (ONE SIDE)", "COMPETITIVE CUP STACKING SETUP", "ONE GALLON"],
        initialOrderSequence: "5261734",
        theme: "Cups",
        hint: "Cup up",
        hint2: "Cup counts",
        post_solve: ["Bra: 2 cups", "Shell game: 3 cups", "Team USA Women's World Cup wins: 4", "Starbucks cup sizes: 5 (Short, Tall, Grande, Venti, Trenta)", "Beer pong setup: 10 cups per side", "Competitive cup stacking setup: 12 cups", "One gallon: 16 cups"],
        revAllowed: true
    },
    {
        id: 295,
        solution: ["AIRCRAFT WARNING LIGHT", "HIGHEST CORPORATE SUITES", "HIGHEST OBSERVATION DECK", "SITE OF 'MISSION: IMPOSSIBLE' CLIMBING STUNT", "HIGHEST RESIDENTIAL SUITES", "HIGHEST SWIMMING POOL", "MAIN LOBBY"],
        initialOrderSequence: "3461752",
        theme: "Burj Khalifa floorplan",
        hint: "Scaling the Burj Khalifa",
        hint2: "World's tallest building floorplan",
        post_solve: ["Aircraft warning light: spire", "Highest corporate suites: 151st floor", "Highest observation deck: 148th floor", "'M:I' climbing stunt: 123-130th floors", "Highest residential suites: 108th floor", "Highest swimming pool: 76th floor", "Main lobby: ground floor"],
        revAllowed: true
    },
    {
        id: 296,
        solution: ["ACTOR BALABAN", "STRUCTURE OF A WATER MOLECULE", "INTERNET CHUCKLE", "FAMILY MEMBER HONORED IN MAY", "TYPE OF MUSIC OR BEVERAGE", "MAYDAY CALL", "YOUNGIN'"],
        initialOrderSequence: "5341762",
        theme: "_O_ A-Z",
        hint: "Around the circle",
        hint2: "_O_ words A-Z",
        post_solve: ["Actor Balaban: BOB", "Structure of a water molecule: HOH", "Internet chuckle: LOL", "Family member honored in May: MOM", "Type of music or beverage: POP", "Mayday call: SOS", "Youngin;: TOT"],
        revAllowed: true
    },
    {
        id: 297,
        solution: ["415", "310", "303", "312", "404", "202", "212"],
        initialOrderSequence: "6732451",
        theme: "U.S. area codes west<->east",
        hint: "Code-st to coast",
        hint2: "U.S. area codes west<->east",
        post_solve: ["415: San Francisco", "310: Los Angeles", "303: Denver", "312: Chicago", "404: Atlanta", "202: Washington D.C.", "212: New York City"],
        revAllowed: true
    },
    {
        id: 298,
        solution: ["FLINTSTONES FAMILY (INCLUDING DINO!)", "ORIGINAL ROLLING STONES MEMBERS", "INFINITY STONES IN 'THE AVENGERS'", "CURLING STONES PER TEAM", "BIRTHSTONES (IN WESTERN TRADITION)", "POUNDS IN ONE STONE (WEIGHT MEASUREMENT)", "STONEHENGE STONES"],
        initialOrderSequence: "4716352",
        theme: "Stone counts",
        hint: "A pile of stones",
        hint2: "Stone counts",
        post_solve: ["Flintstones family: 4 (Wilma, Fred, Pebbles + Dino)", "Rolling stones members: 5 (Mick, Keith, Brian, Bill, Charlie)", "Infinity stones in 'The Avengers': 6 (space, reality, power, mind, time, soul)", "Curling stones per team: 8", "Birthstones: 12", "Pounds in one stone of weight: 14", "Stonehenge stones: 83 remaining"],
        revAllowed: true        
    },
    {
        id: 299,
        solution: ["THE CROSSWORD", "THE MINI", "SPELLING BEE", "TILES", "WORDLE", "CONNECTIONS", "STRANDS"],
        initialOrderSequence: "2651743",
        theme: "Digital NYT game releases chronologically",
        hint: "Game time (online)",
        hint2: "Digital NYT game releases chronologically",
        post_solve: ["The Crossword: January 1996", "The Mini: August 2014", "Spelling Bee: 2018", "Tiles: 2019", "Wordle: February 2022", "Connections: June 2023", "Strands: March 2024"],
        revAllowed: true        
    },
    {
        id: 300,
        solution: ["2006 MOVIE ABOUT SPARTAN SOLDIERS", "ALT ROCK BAND (OR NON-EMERGENCY PHONE NUMBER)", "PI DAY", "NUMBERS BEFORE 'BLASTOFF!'", "TYPE OF RIGHT TRIANGLE", "DEGREES IN A CIRCLE", "DAYS IN A YEAR"],
        initialOrderSequence: "3614725",
        theme: "3 followed by a number",
        hint: "Puzzle 300!",
        hint2: "3 followed by a number",
        post_solve: ["2006 movie about Spartan soldiers: 300", "Alt rock band (or non emergency number): 311", "Pi day: 314", "Numbers before 'Blastoff!': 321", "Type of right triangle: 345", "Degrees in a circle: 360", "Days in a year: 365"],
        revAllowed: true
    },
    {
        id: 301,
        solution: ["BOOK: HIGH SCHOOL KEEPSAKE", "OF SUNDAYS: IDIOM MEANING A WHILE", "ENDER BAG: TYPE OF LUGGAGE", "TRIPPER: BEATLES SONG", "GLASS: TIMEKEEPER", "MAID: ORANGE JUICE BRAND", "CITY: CHICAGO NICKNAME"],
        initialOrderSequence: "5372416",
        theme: "Units of time",
        hint: "Game time!",
        hint2: "Units of time",
        post_solve: ["High school keepsake: YEARbook", "Idiom meaning a while: MONTH of Sundays", "Type of luggage: WEEKender bag", "Beatles song: DAY Tripper", "Timekeeper: HOURglass", "Orange juice brand: MINUTE Maid", "Chicago nickname: SECOND City"],
        revAllowed: true
    },
    {
        id: 302,
        solution: ["CENTRAL INCISOR", "LATERAL INCISOR", "CANINE", "BICUSPID", "6-YEAR MOLAR", "12-YEAR MOLAR", "WISDOM TOOTH"],
        initialOrderSequence: "3261574",
        theme: "Teeth front <-> back",
        hint: "A puzzle with teeth",
        hint2: "Teeth front <-> back",
        post_solve: ["Central incisor: front teeth", "Lateral incisor: next to front teeth", "Canine: cuspid/eye tooth/'pointy' tooth", "Bicuspid: premolar", "6 year molar: 1st molar", "12 year molar: 2nd molar", "Wisdom: 3rd molar"],
        revAllowed: true
    },
    {
        id: 303,
        solution: ["PARIS", "LAUSANNE", "MILAN", "VENICE", "BELGRADE", "SOFIA", "ISTANBUL"],
        initialOrderSequence: "5472613",
        theme: "Stops along the Simplon Orient Express",
        hint: "The Orient Express (Simplon)",
        hint2: "Stops along the Simplon Orient Express",
        post_solve: ["Paris: (France - terminus)", "Lausanne (Switzerland)", "Milan (Italy)", "Venice (Italy)", "Belgrade (Serbia)", "Sofia (Bulgaria)", "Istanbul (Turkey)"],
        revAllowed: true
    },
    {
        id: 304,
        solution: ["'TOY STORY' ACTION FIGURE", "U.N. FORERUNNER", "DENVER NICKNAME", "UTILITY WORKER WHO CHECKS GAS/WATER/ELECTRIC SYSTEMS", "WIPEOUT IN SKI/SNOWBOARD SLANG", "SOCCER TO A BRIT", "CATERPILLAR NAMED FOR HOW IT MOVES"],
        initialOrderSequence: "3764152",
        theme: "Units of length",
        hint: "Long names",
        hint2: "Units of length",
        post_solve: ["'Toy Story' action figure: Buzz LIGHTYEAR", "U.N. forerunner: LEAGUE of Nations (3 miles)", "Denver nickname: The MILE-high city", "Utility worker: METER reader", "Wipeout in ski/snowboard slang: YARD sale", "Soccer to a Brit: FOOTball", "Caterpillar named for how it moves: INCHworm"],
        revAllowed: true
    },
    {
        id: 305,
        solution: ["SCREW GAUGE", "US RULER", "YARDSTICK", "METER STICK", "STANDARD SEWING TAPE", "NFL CHAINS", "LONGEST-EVER TAPE MEASURE"],
        initialOrderSequence: "6527143",
        theme: "Measuring devices by max measurable distance",
        hint: "Max measures",
        hint2: "Measuring devices by max measurable distance",
        post_solve: ["Screw gauge (aka micrometer): <6 in", "US ruler: 12 inches", "Yardstick: 36 inches (3 ft)", "Meter stick: 39.37 inches (1 meter)", "Sewing tape: 60 inches", "NFL chains: 360 in (10 yards)", "Longest-ever tape measure: 600 ft!"],
        revAllowed: true
    },
    {
        id: 306,
        solution: ["NOOB (GAMING SLANG)", "NOTHING COMPARES TO U (SINÉAD O'CONNOR SONG)", "MEGAN (2023 HORROR MOVIE)", "GOOD FOR U (OLIVIA RODRIGO SONG)", "SEVEN (1995 THRILLER MOVIE)", "SKATER BOI (AVRIL LEVIGNE SONG)", "CANINE UNIT (POLICE DOGS)"],
        initialOrderSequence: "5371642",
        theme: "Names/titles stylized with numbers",
        hint: "It's what's inside that counts",
        hint2: "Names/titles stylized with numbers",
        post_solve: ["Gaming slang: N00B (00)", "Sinéad O'Connor song: Nothing Compares 2 U (2)", "2023 horror movie: M3GAN (3)", "Olivia Rodrigo song: Good 4 U (4)", "1995 thriller movie: Se7en (7)", "Avril Levigne song: Sk8r Boi (8)", "Police dogs: K-9 unit (9)"],
        revAllowed: true
    },
    {
        id: 307,
        solution: ["C-_PO: 'STAR WARS' DROID", "BB-_: 2010s 'STAR WARS' DROID", "K-_: DOCTOR WHO'S COMPANION", "BENDING UNIT __ AKA BENDER ON 'FUTURAMA'", "T-__: 'TERMINATOR' MODEL PLAYED BY ARNOLD", "ROZZUM UNIT ___: 'THE WILD ROBOT' ROBOT", "HAL ___: '2001: A SPACE ODYSSEY' AI"],
        initialOrderSequence: "6351274",
        theme: "Robots/AI of media by number",
        hint: "Bot wait, there's more numbers!",
        hint2: "Robots/AI of media by number",
        post_solve: ["'Star Wars' droid: C-3PO (3)", "2010s 'Star Wars' droid: BB-8 (8)", "Doctor Who's companion: K-9 (9)", "Bender on 'Futurama': Bending unit 22 (22)", "'Terminator' model played by Arnold: T-800 (800)", "'The Wild Robot' robot: ROZZUM unit 7134 (7134)", "'2001: A Space Odyssey' AI: HAL 9000 (9000)"],
        revAllowed: true
    },
    {
        id: 308,
        solution: ["___ WICK: KEANU REEVES ACTION MOVIE", "FORMER 'TONIGHT SHOW' HOST LENO", "BABY BEAR", "CATCHY ADVERTISING TUNE", "OPPOSITE OF LOW", "FRENCH WORD FOR OCEAN", "MAX GREENFIELD 'NEW GIRL' CHARACTER"],
        initialOrderSequence: "4613275",
        theme: "John Jacob Jingleheimer Schmidt",
        hint: "His name is my name too",
        hint2: "John Jacob Jingleheimer Schmidt",
        post_solve: ["Keanu Reeves action movie: JOHN Wick", "Former 'Tonight Show' host: JAY Leno", "Baby Bear: CUB", "Catchy advertising tune: JINGLE", "Opposite of low: HIGH", "French word for ocean: MER", "'New Girl' character: SCHMIDT"],
        revAllowed: true
    },
    {
        id: 309,
        solution: ["MIAMI", "NEW YORK", "SEATTLE", "DETROIT", "SAN FRANCISCO", "LOS ANGELES", "PHOENIX"],
        initialOrderSequence: "5631724",
        theme: "Amounts of rain annually",
        hint: "Let it rain",
        hint2: "Amounts of rain annually",
        post_solve: ["Miami: 1,712 mm", "New York: 1,258 mm", "Seattle: 945 mm", "Detroit: 872 mm", "San Francisco: 501 mm", "Los Angeles: 362 mm", "Phoenix: 183 mm"],
        revAllowed: true
    },
    {
        id: 310,
        solution: ["CASINO DIE", "STANDARD RUBIK'S CUBE", "KLEENEX BOX", "NINTENDO GAMECUBE", "MINECRAFT BLOCK (IN-GAME SCALE)", "THE KAABA (MECCA HOLY SITE)", "THE BORG CUBE (IN STAR TREK UNIVERSE)"],
        initialOrderSequence: "3725164",
        theme: "Cubes by size",
        hint: "Cubes",
        hint2: "Cubes by size",
        post_solve: ["Casino die: 19mm cubed", "Rubik's cube: 5.6 cm cubed", "Kleenex box: 11.4 x 11.4 x 12.7 cm", "Nintendo GameCube: 15 cm x 11 cm x 16.1 cm", "Minecraft block: 1 m cubed", "The Kaaba: 15m x 12m x 10.5 m", "The Borg cube: 3 km cubed"],
        revAllowed: true        
    },
    {
        id: 311,
        solution: ["ANY NUMBER TO THE ZEROTH POWER", "NUMBER SHAPED LIKE A LEMNISCATE", "COUNTRIES IN THE EU", "NINTENDO __: CONSOLE BEFORE GAMECUBE", "NYC STREET HOME TO THE APOLLO THEATER", "CLEVELAND OHIO AREA CODE", "___ INDUSTRIES: STUDIO THAT MAKES 'HALO' GAMES"],
        initialOrderSequence: "3617425",
        theme: "Perfect cubes",
        hint: "Cubes part 2",
        hint2: "Perfect cubes",
        post_solve: ["Any number to the 0th power: 1 (1 cubed)", "Number shaped like a lemniscate: 8 (2 cubed)", "Countries in the EU: 27 (3 cubed)", "Console before GameCube: Nintendo 64 (4 cubed)", "Apollo Theater home: 125th street (5 cubed)", "Cleveland Ohio area code: 216 (6 cubed)", "Studio that makes 'Halo': 343 Industries (7 cubed)"],
        revAllowed: true        
    },
    {
        id: 312,
        solution: ["WHERE FAHRENHEIT AND CELSIUS ARE EQUAL", "HARSH QUESTIONING", "SEPARATION IN A GAME TITLE", "GRAND MASTER TAEKWONDO BLACKBELT", "EARTH'S TILT ON ITS AXIS", "BOY BAND WITH NICK LACHEY", "COMPLETE CIRCLE"],
        initialOrderSequence: "6341725",
        theme: "Numbered degrees",
        hint: "To a degree",
        hint2: "Numbered degrees",
        post_solve: ["Where Fahrenheit and Celsius are equal: -40 degrees", "Harsh questioning: the 3rd degree", "Separation in a game title: 6 degrees", "Grand master taekwondo blackbelt: 9th or 10th degree", "Earth's tilt on its axis: 23.5 degrees", "Boy band with Nick Lachey: 98 Degrees", "Complete circle: 360 degrees"],
        revAllowed: true
    },
    {
        id: 313,
        solution: ["STANDARD SHOT GLASS", "ONE CUP", "RED SOLO CUP", "VENTI STARBUCKS CUP", "7-ELEVEN BIG GULP", "STANLEY QUENCHER WATER BOTTLE (LARGEST)", "STANLEY CUP (NHL)"],
        initialOrderSequence: "5247316",
        theme: "Cups/bottles by size",
        hint: "Cup-acity",
        hint2: "Cups/bottles by size",
        post_solve: ["Standard shot glass: 1.5 oz", "One cup: 8 oz", "Red Solo cup: 16 oz", "Venti Starbucks cup: 20 oz (24 for cold drinks)", "7-Eleven Original Big Gulp: 32 oz", "Stanley Quencher water bottle (largest): 40 oz", "Stanley Cup (NHL): 209 oz"],
        revAllowed: true 
    },
    {
        id: 314,
        solution: ["___ AND WEAVE", "12PM", "POPULAR HONDA SEDAN", "___ MONTANA: RHYMING MILEY CYRUS CHARACTER", "FORMULA 1 AUTOMOBILE", "FANCIFULLY IMAGINED BIBLICAL GREETING TO EVE", "POETIC DESCRIPTION OF TEDDY ROOSEVELT"],
        initialOrderSequence: "4613752",
        theme: "Palindromes by length",
        hint: "A long back and forth",
        hint2: "Palindromes by length",
        post_solve: ["___ and weave: BOB (3 letters)", "12pm: NOON (4 letters)", "Popular Honda sedan: CIVIC (5 letters)", "Miley Cyrus character Montana: HANNAH (6 letters)", "Formula 1 automobile: RACE CAR (7 letters)", "Fancifully imagined greeting to Eve: MADAM, I'M ADAM (10 letters)", "Poetic description of Teddy Roosevelt: A MAN A PLAN A CANAL PANAMA (21 letters)"],
        revAllowed: true
    },
    {
        id: 315,
        solution: ["INSPECTOR ___: 80s CARTOON", "APPLIANCE ADJACENT TO A FRIDGE", "WORLD OF ___: VIDEO GAME FRANCHISE SINCE 2004", "ONE LOOKING UP AT THE NIGHT SKY", "POST-SIP MOUTH SENSATION", "MAGIC WORDS BEFORE 'ALAKAZAM'", "ECHOED"],
        initialOrderSequence: "5176432",
        theme: "Words typed only with the left hand by length",
        hint: "Left hand only (by length)",
        hint2: "Words typed only wiht the left hand by length",
        post_solve: ["80s cartoon: Inspector GADGET (6 letters)", "Appliance adjacent to a fridge: FREEZER (7 letters)", "Video game franchise since 2004: World of WARCRAFT (8 letters)", "One looking up at the night sky: STARGAZER (9 letters)", "Post-sip mouth sensation: AFTERTASTE (10 letters)", "Magic words before 'alakazam': ABRACADABRA (11 letters)", "Echoed: REVERBERATED (12 letters)"],
        revAllowed: true
    },
    {
        id: 316,
        solution: ["WINE SUPERNOVA: CHAPPELL ROAN", "CRUSH: REM", "SUBMARINE: THE BEATLES", "LIGHT: LORDE", "RIDGE MOUNTAINS: FLEET FOXES", "(FEAT. AVERY ANNA): SAM BARBER", "HAZE: JIMI HENDRIX"],
        initialOrderSequence: "2761435",
        theme: "Colors in song titles",
        hint: "Hear the rainbow",
        hint2: "Colors in song titles",
        post_solve: ["Chappell Roan: RED Wine Supernova", "REM: ORANGE Crush", "The Beatles: YELLOW Submarine", "Lorde: GREEN Light", "Fleet Foxes: BLUE Ridge Mountains", "Sam Barber: INDIGO (feat. Avery Anna)", "Jimi Hendrix: PURPLE Haze"],
        revAllowed: true
    },
    {
        id: 317,
        solution: ["MERCEDES BENZ LOGO", "GOOGLE GEMINI LOGO", "DALLAS COWBOYS LOGO", "STANDARD ASTERISK SYMBOL", "CALIFORNIA HIGHWAY PATROL BADGE", "SEATTLE MARINERS COMPASS ROSE", "FLAG OF MALAYSIA"],
        initialOrderSequence: "6345172",
        theme: "Stars by number of points",
        hint: "Points of view",
        hint2: "Stars by number of points",
        post_solve: ["Mercedes Benz logo: 3", "Google Gemini logo: 4", "Dallas Cowboys logo: 5", "Standard asterisk symbol: 6", "California Highway Patrol badge: 7", "Seattle Mariners compass rose: 8", "Flag of Malaysia: 11"],
        revAllowed: true        
    },
    {
        id: 318,
        solution: ["SYMBOLIC AMERICAN DESSERT", "BAND SUPERFAN", "60s ARCHETYPE ADVOCATING 'PEACE AND LOVE'", "WHAT SOMEONE WHO'S 'EATING CROW' IS 'EATING'", "BIRD CLOSELY RELATED TO CROWS", "HAT WORN BY BUSTER KEATON", "PERMANENT MARKER BRAND"],
        initialOrderSequence: "5724136",
        theme: "Pies A-Z",
        hint: "Happy pi(e) day! (A<->Z)",
        hint2: "___pie A<->Z",
        post_solve: ["Symbolic American dessert: Apple pie", "Band superfan: Groupie", "60s archetype: Hippie", "'Eating crow' 'food': Humble pie", "Bird related to crows: Magpie", "Hat worn by Buster Keaton: Pork pie", "Permanent marker brand: Sharpie"],
        revAllowed: true
    },
    {
        id: 319,
        solution: ["ROMAN GOD OF WAR", "LATIN WORD FOR 'TO OPEN'", "GREEK GODDESS OF SPRING", "ROMAN GODDESS OF MARRIAGE", "ASSASSINATED ROMAN STATESMAN", "FIRST ROMAN EMPEROR", "ROMAN NUMBER SEVEN"],
        initialOrderSequence: "6351724",
        theme: "Spring/summer months by etymology",
        hint: "Warmer half",
        hint2: "Spring/summer months by etymology",
        post_solve: ["Roman god of war: MARCH (Mars)", "Latin word for 'to open': APRIL (aperire)", "Greek goddess of spring: MAY (Maia)", "Roman goddess of marriage: JUNE (Juno)", "Assassinated Roman statesman: JULY (Julius Caesar)", "First Roman emperor: AUGUST (Augustus Caesar)", "Roman number seven: SEPTEMBER (septem)"],
        revAllowed: true        
    },
    {
        id: 320,
        solution: ["SILENT FILM STAR CHAPLIN", "CAPULET PROTAGONIST OF SHAKESPEARE", "BOXER TYSON", "ACADEMY AWARD STATUE", "MONTAGUE PROTAGONIST OF SHAKESPEARE", "___ NEVADA: MOUNTAIN RANGE", "WINNER"],
        initialOrderSequence: "5274316",
        theme: "Proper names in the NATO phonetic alphabet",
        hint: "NATO names",
        hint2: "NATO alphabet names A<->Z",
        post_solve: ["Silent film star Chaplin: Charlie", "Capulet protagonist of Shakespeare: Juliet(t)", "Boxer Tyson: Mike", "Academy Award statue: Oscar", "Montague protagonist of Shakespeare: Romeo", "___ Nevada mountain range: Sierra", "Winner: Victor"],
        revAllowed: true        
    },
    {
        id: 321,
        solution: ["HYDROGEN'S IS 1.008", "SOCIAL MEDIA SUFFIX WITH 'INSTA'", "UNIT WHOSE ABBR. ENDS IN A Z", "FIST BUMP", "NATO ALPHABET LETTER AFTER JULIET", "ACTRESS EMMA OR SHARON", "UNIT THAT CAN BE 'SHORT' OR 'LONG'"],
        initialOrderSequence: "6735142",
        theme: "Weight and mass units",
        hint: "The weights of the world",
        hint2: "Weight and mass units",
        post_solve: ["Hydrogen's is 1.008: Atomic Mass (3.6 x 10^-27 lbs)", "Social media suffix with 'Insta': Gram (.002 lbs)", "Unit whose abbr. ends in a z: Ounce (.06 lbs)", "Fist bump: Pound (1 lb)", "NATO letter after Juliet: Kilo (2.2 lbs)", "Actress Emma or Sharon: Stone (14 lbs)", "Unit that can be 'short' or 'long': Ton (2000 lbs U.S.)"],
        revAllowed: true
    },
    {
        id: 322,
        solution: ["SOLITAIRE", "SPIT", "SKAT", "HEARTS", "SHEEPSHEAD (WISCONSIN'S UNOFFICIAL STATE CARD GAME)", "STANDARD CASINO BLACKJACK TABLE MAXIMUM", "WORLD SERIES OF POKER FINAL TABLE"],
        initialOrderSequence: "5612743",
        theme: "Card games by number of players",
        hint: "Card parties",
        hint2: "Card games by number of players",
        post_solve: ["Solitaire: 1", "Spit: 2", "Skat: 3", "Hearts: 4", "Sheepshead: 5", "Standard casino blackjack table maximum: 7 (+ dealer)", "WSOP final table: 9"],
        revAllowed: true        
    },
    {
        id: 323,
        solution: ["BLIND MAN'S BLUFF (FOREHEAD POKER)", "TEXAS HOLD 'EM", "KEMPS / KENT", "EUCHRE", "UNO", "GIN RUMMY", "HEARTS"],
        initialOrderSequence: "6471532",
        theme: "Card games by size of hand",
        hint: "What's your deal?",
        hint2: "Card games by size of hand",
        post_solve: ["Blind Man's Bluff: 1 card", "Texas Hold 'Em: 2 cards", "Kemps/Kent: 4 cards", "Euchre: 5 cards", "Uno: 7 cards", "Gin Rummy: 10 cards", "Hearts: 13 cards"],
        revAllowed: true        
    },
    {
        id: 324,
        solution: ["CHESTER ARTHUR", "SUSAN ANTHONY", "JOHN CALHOUN", "JOHN ROCKEFELLER", "CHUCK CHEESE", "JOHN KENNEDY", "WARREN HARDING"],
        initialOrderSequence: "2371465",
        theme: "Middle initials A-Z",
        hint: "Middle out",
        hint2: "Middle initials A-Z",
        post_solve: ["CHESTER A. ARTHUR", "SUSAN B. ANTHONY", "JOHN C. CALHOUN", "JOHN D. ROCKEFELLER", "CHUCK E. CHEESE", "JOHN F. KENNEDY", "WARREN G. HARDING"],
        revAllowed: true
    },
    {
        id: 325,
        solution: ["BALDWIN", "MARTIN", "GOODMAN", "HANKS / HENRY", "CHASE", "WALKEN", "FEY / JOHANSSON / BARRYMORE / DEVITO / GOULD / MULANEY"],
        initialOrderSequence: "5731624",
        theme: "SNL host appearances",
        hint: "Live-from-New-Yorks",
        hint2: "SNL host appearances",
        post_solve: ["Alec Baldwin: 17 times", "Steve Martin: 16 times", "John Goodman: 13 times", "Tom Hanks / Buck Henry: 10 times", "Chevy Chase: 8 times", "Christopher Walken: 7 times", "Fey/Johansson/Barrymore/Devito/Gould/Mulaney: 6 times"],
        revAllowed: true
    },
    {
        id: 326,
        solution: ["BOB HOPE", "BILLY CRYSTAL", "JOHNNY CARSON", "WHOOPI GOLDBERG", "STEVE MARTIN", "ELLEN DEGENERES", "ANNE HATHAWAY"],
        initialOrderSequence: "2753164",
        theme: "Oscar host appearances",
        hint: "Live from the Dolby theater",
        hint2: "Oscar host appearances",
        post_solve: ["Bob Hope: 19", "Billy Crystal: 9", "Johnny Carson: 5", "Whoopi Goldberg: 4", "Steve Martin: 3", "Ellen DeGeneres: 2", "Anne Hathaway: 1"],
        revAllowed: true        
    },
    {
        id: 327,
        solution: ["DONKEY'S SOUND", "'BONKERS'", "SKIRMISH", "WHITE/BLACK MIX", "PRACTICE RELIGION", "AIRPLANE EATING SURFACE", "TYPE OF MEDICAL IMAGING"],
        initialOrderSequence: "4613275",
        theme: "Letter + 'ray'",
        hint: "Ray array (A-Z)",
        hint2: "Letter + 'ray'",
        post_solve: ["Donkey's sound: Bray", "'Bonkers': Cray", "Skirmish: Fray", "White/black mix: Gray", "Practice religion: Pray", "Airplane eating surface: Tray", "Type of medical imaging: X-ray"],
        revAllowed: true
    },
    {
        id: 328,
        solution: ["FUTURAMA", "STAR TREK (ORIGINAL SERIES)", "THE JETSONS", "STRANGER THINGS", "DOWNTON ABBEY", "SHOGUN", "THE FLINTSTONES"],
        initialOrderSequence: "2641753",
        theme: "TV shows by when they were set",
        hint: "TV settings",
        hint2: "TV shows by when they were set",
        post_solve: ["Futurama: 3,000 CE", "Star Trek Original Series: 2266", "The Jetsons: 2062", "Stranger Things: 1980s", "Downton Abbey: 1910s-20s", "Shogun: ~1600", "The Flintstones: 10,000 BCE"],
        revAllowed: true        
    },
    {
        id: 329,
        solution: ["ISAAC NEWTON BENEATH A TREE", "RAINBOW APPLE WITH WORD 'APPLE'", "RAINBOW APPLE", "MONOCHROME APPLE (FIRST TIME: BLACK)", "GLASSY 'AQUA VERSION'", "METALLIC 'CHROME VERSION'", "MONOCHROME APPLE (SECOND TIME: GREY)"],
        initialOrderSequence: "6254173",
        theme: "Apple logos over time",
        hint: "How you like them Apples?",
        hint2: "Apple logos over time",
        post_solve: ["Isaac Newton beneath a tree: 1976", "Rainbow apple with word 'apple': 1977", "Rainbow apple: 1984", "Black monochrome apple (first time): 1998", "Glassy 'aqua version' apple: 2001", "Metallic 'chrome version' apple: 2007", "Grey monochrome apple: 2017"],
        revAllowed: true        
    },
    {
        id: 330,
        solution: ["MARIO (HAT)", "YOSHI (SHOES)", "PRINCESS PEACH (HAIR)", "YOSHI (BODY)", "MARIO (PANTS)", "SHADOW MARIO (BODY)", "WALUIGI (HAT)"],
        initialOrderSequence: "2641375",
        theme: "Super Mario characters by ROYGBIV color",
        hint: "Over the gamebow",
        hint2: "Super Mario characters by ROYGBIV color",
        post_solve: ["Mario (hat): Red", "Yoshi (shoes): Orange", "Princess Peach (hair): Yellow", "Yoshi (body): Green", "Mario (pants): Blue", "Shadow Mario (body): Indigo", "Waluigi (hat): Violet"],
        revAllowed: true
    },
    {
        id: 331,
        solution: ["___ RIDER: ALLMAN BROTHERS BAND", "__AM: MATCHBOX 20", "25 OR 6 TO __: CHICAGO", "__AM: LIL UZI VERT", "__ TO FIVE: DOLLY PARTON", "__ AM: INCUBUS", "HIGH ___: TEX RITTER"],
        initialOrderSequence: "4763152",
        theme: "Songs by time of morning in title",
        hint: "Morning music",
        hint2: "Songs by time of mroning in title",
        post_solve: ["Allman Brothers Band: Midnight Rider", "Matchbox 20: 3AM", "Chicago: 25 or 6 to 4", "Lil Uzi Vert: 7am", "Dolly Parton: 9 to 5", "Incubus: 11 am", "Tex Ritter: High Noon"],
        revAllowed: true
    },
    {
        id: 332,
        solution: ["DESCRIPTOR FOR THE SUPER WEALTHY", "FAT IN REDUCED FAT MILK", "'SAVE ___ OR MORE BY SWITCHING TO GEICO: AD SLOGAN", "U.S. TIPPING STANDARD FOR GOOD SERVICE", "COIN TOSS ODDS", "'ABSOLUTELY YES!'", "EFFORT THAT ATHLETES HYPERBOLICALLY GIVE"],
        initialOrderSequence: "4723516",
        theme: "Numerical percentages",
        hint: "Play the percentages",
        hint2: "Numerical percentages",
        post_solve: ["Descriptor for the super wealthy: The 1%", "Fat in reduced fat milk: 2%", "'Save __ or more by switching to Geico: 15%", "U.S. tipping standard for good service: 18-20%+", "Coin toss odds: 50%", "'Absolutely yes!': 100%", "Effort that athletes hyperbolically give: 110%"],
        revAllowed: true       
    },
    {
        id: 333,
        solution: ["STRAWBERRIES", "CHERRIES/BLUEBERRIES", "PLUMS", "TOMATOES", "APPLES", "PUMPKINS", "CITRUS (BEGINNING OF SEASON!)"],
        initialOrderSequence: "5724163",
        theme: "Fruits/vegetables by beginning of peak season",
        hint: "Season's greetings (CA)",
        hint2: "Fruits/vegetables by beginning of peak season",
        post_solve: ["Strawberries: season starts April", "Cherries/blueberries: season starts May", "Plums: season starts June", "Tomatoes: season starts July", "Apples: season starts August", "Pumpkins: season starts September", "Citrus: season starts ~December<br>Theme idea: Niki Lustig"],
        revAllowed: true
    },
    {
        id: 334,
        solution: ["'BUTTERFLIES'", "'LITTLE RIBBONS'", "'QUILL / FEATHER WRITING IMPLEMENT'", "'TO WRAP' OR 'LITTLE TURNIP'", "'LITTLE WHEELS'", "'LITTLE STRINGS'", "'LITTLE WORMS'"],
        initialOrderSequence: "3764152",
        theme: "Etymologies of A<->Z pastas",
        hint: "Pasta party A<->Z",
        hint2: "Etymologies of A<->Z pastas",
        post_solve: ["'Butterflies': Farfalle", "'Little ribbons': Fettucine", "'Quill / feather writing implement': Penne", "'To wrap' or 'little turnip': Ravioli", "'Little wheels': Rotelle", "'Little strings': Spaghetti", "'Little worms': Vermicelli"],
        revAllowed: true
    },
    {
        id: 335,
        solution: ["NBA", "TEN PIN BOWLING", "WNBA", "NFL", "MLB", "NHL", "FIFA WORLD CUP"],
        initialOrderSequence: "4627135",
        theme: "All-time highest combined scores",
        hint: "All-time high scores (combined)",
        hint2: "All-time highest combined scores",
        post_solve: ["NBA: 370 (186-184 triple overtime)", "Ten pin bowling: 300 (perfect game)", "WNBA: 251 points (127-124)", "NFL: 113 points (72-41)", "MLB: 49 runs (26-23)", "NHL: 21 goals (12-9)", "FIFA WORLD CUP: 12 goals (7-5)"],
        revAllowed: true
    },
    {
        id: 336,
        solution: ["R", "B", "A", "P", "C", "T", "Y"],
        initialOrderSequence: "3621754",
        theme: "Letters by alphabetical homophone",
        hint: "Alphabetical homophones 😈",
        hint2: "Letters by the first letter of their alphabetical homophone",
        post_solve: ["R: Are (A)", "B: Bee (B)", "A: Eh (E)", "P: Pea/Pee (P)", "C: Sea/See (S)", "T: Tee/Tea (T)", "Y: Why (W)<br>Happy April Fools Day!"],
        revAllowed: true
    },    
    {
        id: 337,
        solution: ["DRONE PROPELLER", "POWER DRILL HIGH GEAR", "WASHING MACHINE TOP SPEED", "FIGURE SKATER (WORLD RECORD)", "BLACK HAWK HELICOPTER MAIN ROTOR", "LP RECORD", "EARTH"],
        initialOrderSequence: "3674512",
        theme: "Spin speeds in revolutions per minute (RPM)",
        hint: "Spin speeds (RPM)",
        hint2: "Revolutions per minute",
        post_solve: ["Drone propeller: 10,000-40,000 rpm", "Power drill high gear: 2,000 rpm", "Washing machine top speed: 800-1600 rpm", "Figure skater (world record): 342 rpm", "Black Hawk helicopter main rotor: 254 rpm", "LP record: 33 1/3 or 45 rpm", "Earth: .00069 RPM (1 rotation per 24 hours)"],
        revAllowed: true        
    },
    {
        id: 338,
        solution: ["'THE' ALTERNATIVE", "STOMACH MUSCLE", "NETWORK THAT AIRS 'THE BACHELOR'", "'WHO WANTS TO BE A MILLIONAIRE' OPTIONS", "SCANTRON OPTIONS", "'___U': POP SONG BY GAYLE", "A NATURAL SCALE MUSICAL NOTES"],
        initialOrderSequence: "2547136",
        theme: "From A to ABCDEFG",
        hint: "Alphabet runs",
        hint2: "From A to ABCDEFG",
        post_solve: ["'The' alternative: A", "Stomach muscle: AB", "Network that airs 'The Bachelor': ABC", "'Who Wants To Be A Millionaire' options: ABCD", "Scantron options: ABCDE", "___U (Gayle song): ABCDEF", "A natural scale musical notes: ABCDEFG"],
        revAllowed: true        
    },
    {
        id: 339,
        solution: ["❤️", "😂", "🥑", "🧵", "🥺", "🏳️‍⚧️", "🫶"],
        initialOrderSequence: "2516473",
        theme: "Emojis by release date",
        hint: "Release the emojis!",
        hint2: "Emojis by release date",
        post_solve: ["❤️: 1999", "😂: 2010", "🥑: 2016", "🧵: 2018", "🥺: 2019", "🏳️‍⚧️: 2020", "🫶: 2022"],
        revAllowed: true        
    },
    {
        id: 340,
        solution: ["FEDERAL RESERVE NOTE", "THE UNITED STATES OF AMERICA", "THIS NOTE IS LEGAL TENDER", "FOR ALL DEBTS PUBLIC AND PRIVATE", "WASHINGTON D.C.", "LOWER SERIAL NUMBER", "ONE DOLLAR"],
        initialOrderSequence: "5634172",
        theme: "Front of a dollar bill from top to bottom",
        hint: "On the dollar (top <-> bottom)",
        hint2: "Front of a dollar bill elements",
        post_solve: ["FEDERAL RESERVE NOTE: upper border", "THE UNITED STATES OF AMERICA: top center", "This note is legal tender: upper left of portrait", "For all debts public and private: upper left of portrait", "Washington D.C.: center right of portrait", "Lower serial number: lower left of portrait", "ONE DOLLAR: bottom center"],
        revAllowed: true        
    },
    {
        id: 341,
        solution: ["THE TORTURED POETS DEPARTMENT", "MIDNIGHTS", "EVERMORE/FOLKLORE", "LOVER", "REPUTATION", "1989", "RED"],
        initialOrderSequence: "3641275",
        theme: "Taylor Swift discography",
        hint: "Swift releases",
        hint2: "Taylor Swift's 7 most recent albums",
        post_solve: ["The Tortured Poets Department: 2024", "Midnights: 2022", "Evermore/Folklore: 2020", "Lover: 2019", "Reputation: 2017", "1989: 2014", "Red: 2012"],
        revAllowed: true
    },
    {
        id: 342,
        solution: ["US STATES THAT CONTAIN THE WORD 'ISLAND'", "HAWAII (INHABITED)", "FRENCH POLYNESIA (INHABITED)", "GREECE (INHABITED)", "JAPAN (INHABITED)", "AMERICAN/CANADIAN SALAD DRESSING", "INDONESIA (INHABITED)"],
        initialOrderSequence: "2473516",
        theme: "Number of islands",
        hint: "Island counts",
        hint2: "Number of islands",
        post_solve: ["US states that contain 'island': 1 (Rhode Island)", "Hawaii: 7 inhabited (137 total)", "French Polynesia: 75 inhabited (121 total)", "Greece: 227 inhabited (~6k total)", "Japan: 260 inhabited (14k+ total)", "American/Canadian salad dressing: Thousand Island dressing", "Indonesia: ~6000 inhabited (17k+ total)"],
        revAllowed: true        
    },
    {
        id: 343,
        solution: ["CHINESE BOARD GAME WITH A TWO-LETTER NAME", "SEA BETWEEN EUROPE AND AFRICA", "SEA SOUTHEAST OF SWEDEN", "TYPE OF HANDWOVEN RUG", "WHERE BEN & JERRY'S IS HEADQUARTERED", "YALE'S STATE", "PRISON"],
        initialOrderSequence: "5264173",
        theme: "Monopoly spaces along the opening side",
        hint: "On the board",
        hint2: "Monopoly spaces along the opening side",
        post_solve: ["Chinese board game: GO", "Sea between Europe and Africa: Mediterranean", "Sea southeast of Sweden: Baltic", "Type of handwoven rug: Oriental", "Where Ben & Jerry's is headquartered: Vermont", "Yale's state: Connecticut", "Prison: Jail"],
        revAllowed: true
    },
    {
        id: 344,
        solution: ["NAME OF A BOARD GAME OR CEREAL", "THIS ___ NOT A DRILL", "ENJOY", "__-FRAME: LETTER SHAPED ARCHITECTURAL STYLE", "FIGHT IN A RING", "JOAN __ ARC", "COCOA-BASED CONFECTIONS"],
        initialOrderSequence: "4735162",
        theme: "Forrest Gump quote",
        hint: "You never know what you're gonna get",
        hint2: "Forrest Gump quote",
        post_solve: ["Name of a board game or cereal: LIFE", "This __ not a drill: IS", "Enjoy: LIKE", "__-Frame architectural style: A", "Fight in a ring: BOX", "Joan __ Arc: OF", "Cocoa-based confections: CHOCOLATES"],
        revAllowed: true
    },
    {
        id: 345,
        solution: ["TYPE OF MEDICAL KIT", "VIP AIRPLANE SECTION", "NFL PLAY THAT 'MOVES THE CHAINS'", "MARTHA WASHINGTON OR MARY TODD LINCOLN", "CAPTAIN'S NEXT IN COMMAND", "LIKE THE PRONOUN 'I'", "FROSH"],
        initialOrderSequence: "2541673",
        theme: "Firsts alphabetically",
        hint: "First words (A<->Z)",
        hint2: "First + word",
        post_solve: ["Type of medical kit: First AID", "VIP airplane section: First CLASS", "NFL play that 'moves the chains': First DOWN", "Martha Washington or Mary Todd Lincoln: First LADY", "Captain's next in command: First MATE", "Like the pronoun 'I': First PERSON", "Frosh: First YEAR"],
        revAllowed: true
    },
    {
        id: 346,
        solution: ["'WHO WANTS TO BE A MILLIONAIRE' CONFIRMATION", "ARENA ROCK SONG BY EUROPE", "APPLE VIDEO EDITING SOFTWARE", "HORROR FILM FRANCHISE SINCE 2000", "PENULTIMATE MARCH MADNESS ROUND", "STAR TREK DESCRIPTION OF SPACE", "LAST CLUE READ BY KEN JENNINGS"],
        initialOrderSequence: "3627154",
        theme: "Finals alphabetically",
        hint: "Final words (A<->Z)",
        hint2: "Final + word",
        post_solve: ["'Who Wants To Be A Millionaire' confirmation: Final ANSWER", "Arena rock song by Europe: (The) Final COUNTDOWN", "Apple video editing software: Final CUT", "Horror film franchise: Final DESTINATION", "Penultimate March Madness round: Final FOUR", "Star Trek description of space: (The) Final FRONTIER", "Last clue read by Ken Jennings: Final JEOPARDY"],
        revAllowed: true
    },
    {
        id: 347,
        solution: ["GRIDDY", "NAE NAE", "CHA CHA SLIDE", "MACARENA", "MOONWALK", "YMCA", "THE TWIST"],
        initialOrderSequence: "2641753",
        theme: "Dance craze timeline",
        hint: "(Time)line dances",
        hint2: "Dance craze timeline",
        post_solve: ["Griddy: 2021", "Whip / Nae Nae: 2015", "Cha Cha Slide: 2000", "Macarena: 1996", "Moonwalk: 1983", "YMCA: 1979", "The Twist: 1960"],
        revAllowed: true        
    },
    {
        id: 348,
        solution: ["ANTS ___ING: DAVE MATTHEWS BAND", "___ COME SHE WILL: SIMON & GARFUNKEL", "___BE I'M AMAZED: PAUL MCCARTNEY", "FOURTH OF ___: SUFJAN STEVENS", "____: EARTH WIND AND FIRE", "____ RAIN: GUNS 'N ROSES", "A LONG ____: COUNTING CROWS"],
        initialOrderSequence: "3612754",
        theme: "Music months",
        hint: "The year in music",
        hint2: "Hidden months",
        post_solve: ["Dave Matthews Band: Ants MARCHing", "Simon & Garfunkel: APRIL Come She Will", "Paul McCartney: MAYbe I'm Amazed", "Sufjan Stevens: Fourth of JULY", "Earth, Wind, and Fire: SEPTEMBER", "Guns 'N Roses: NOVEMBER Rain", "Counting Crows: A Long DECEMBER"],
        revAllowed: true
    },
    {
        id: 349,
        solution: ["LETTUCE UNIT", "___BREAKER: HARD CANDY", "LITTLE___ CLAMS (NAMED FOR A LONG ISLAND TOWN)", "ARTICHOKE CENTER", "TYPE OF ORANGE WITH A 'BUTTON'", "FROG ___: CAJUN DELICACY", "___LONG: SUBWAY SANDWICH OPTION"],
        initialOrderSequence: "5724136",
        theme: "Head to toe of food",
        hint: "Food for the body",
        hint2: "Head to toe of food",
        post_solve: ["HEAD of lettuce", "JAWbreaker", "LittleNECK clams", "Artichoke HEART", "NAVEL orange", "Frog LEGS", "FOOTlong sub"],
        revAllowed: true
    },
    {
        id: 350,
        solution: ["LONGTIME AUDI SEDAN OR SIZE OF PAPER", "PYRIDOXINE (VITAMIN)", "CUBIC BOARD GAME ROLLER WITH PIPS (IN LINGO)", "KEYBOARD KEY WITH A MOON ICON ON MACS", "LUXURY PRIVATE JET IN A 2010 SONG", "POPULAR FRENCH TV CHANNEL OR BMW MODEL", "TYPE OF COMBUSTION ENGINE"],
        initialOrderSequence: "2651743",
        theme: "Letter + 6",
        hint: "All 6s",
        hint2: "Letter + 6",
        post_solve: ["Longtime Audi sedan or paper size: A6", "Pyridoxine: Vitamin B6", "Cubic board game roller (in lingo): D6", "Keyboard key with a moon icon: F6", "Luxury private jet in a 2010 song: (Like a) G6", "Popular French TV channel or BMW model: M6", "Type of combustion engine: V6"],
        revAllowed: true
    },
    {
        id: 351,
        solution: ["ADAM WEST", "MICHAEL KEATON", "VAL KILMER", "GEORGE CLOONEY", "CHRISTIAN BALE", "BEN AFFLECK", "ROBERT PATTINSON"],
        initialOrderSequence: "3612754",
        theme: "Batman actors over the years",
        hint: "Cavemen of history",
        hint2: "Batman actors over the years",
        post_solve: ["Adam West: 1966-68", "Michael Keaton: 1989-1992", "Val Kilmer: 1995", "George Clooney: 1997", "Christian Bale: 2005-2012", "Ben Affleck: 2016-2021", "Robert Pattinson: 2022-"],
        revAllowed: true
    },
    {
        id: 352,
        solution: ["POPULAR URL ENDER", "VIN DIESEL 'FAST AND FURIOUS' ROLE", "FAMILY MEMBER", "CUTESY EATING NOISE (WHEN TRIPLED)", "CHEERLEADING OBJECT (WHEN DOUBLED)", "ACTOR HARDY OR HIDDLESTON", "___ KIPPUR: JEWISH HOLIDAY"],
        initialOrderSequence: "2517634",
        theme: "Letter + om",
        hint: "Premeditated",
        hint2: "Letter + om",
        post_solve: ["Popular URL ender: COM", "Vin Diesel 'Fast and Furious' role: DOM", "Family member: MOM", "Cutesy eating noise (when tripled): NOM", "Cheerleading object (when doubled): POM", "Actor Hardy or Hiddleston: TOM", "___ Kippur: Jewish holiday: YOM"],
        revAllowed: true
    },
    {
        id: 353,
        solution: ["CHINA", "BRAZIL", "INDIA", "SOUTH AFRICA", "MEXICO", "USA", "SOUTH KOREA"],
        initialOrderSequence: "5426173",
        theme: "Number of land neighbors",
        hint: "Land neighbors",
        hint2: "Number of distinct land border neighbors",
        post_solve: ["China: 14", "Brazil: 10", "India: 7", "South Africa: 6", "Mexico: 3", "USA: 2", "South Korea: 1"],
        revAllowed: true
    },
    {
        id: 354,
        solution: ["TWILIGHT SEQUEL", "DREAMWORKS LOGO", "THE LETTER D", "DEBUT KID CUDI ALBUM COVER", "WEREWOLF TRANSFORMATION TRIGGER", "NFL PERIOD OF PLAY AFTER HALF TIME", "FLAG OF TURKEY"],
        initialOrderSequence: "2641753",
        theme: "Phases of the moon (starting with new)",
        hint: "It's just a phase (new start)",
        hint2: "Phases of the moon (starting with new)",
        post_solve: ["Twilight sequel: New moon", "Dreamworks logo: waxing crescent", "The letter D: waxing half", "Debut Kid Cudi album cover: waxing gibbous", "Werewolf transformation trigger: full moon", "NFL period after half time: Third quarter (aka waning half)", "Flag of Turkey: waning crescent"],
        revAllowed: true        
    },
    {
        id: 355,
        solution: ["GREEK LETTER ETA", "MALE PRONOUN", "ACTION STAR JET", "EXIST", "3.0 GPA", "ROMAN NUMBERAL 100", "UP ON A COMPASS"],
        initialOrderSequence: "6451723",
        theme: "First seven periodic table element abbrs",
        hint: "Table setting",
        hint2: "First seven periodic table element abbrs",
        post_solve: ["Greek letter eta: H (Hydrogen: 1)", "Male pronoun: He (Helium: 2)", "Action star Jet: Li (Lithium: 3)", "Exist: Be (Beryllium: 4)", "3.0 GPA: B (Boron: 5)", "Roman numeral 100: C (Carbon 6)", "Up on a compass: N (Nitrogen: 7)"],
        revAllowed: true
    },
];
