export const puzzles = [
    {
        id: 1,
        solution: ["FIRE TRUCK", "PUMPKIN", "BLONDE", "CROCODILE", "SKY", "DENIM", "LAVENDER"],
        initialOrderSequence: "6243175",
        theme: "ROYGBIV",
        hint: "Take a bow",
        hint2: "Get colorful",
        post_solve: ["Fire truck: Red", "Pumpkin: Orange", "Blonde: Yellow", "Crocodile: Green", "Sky: Blue", "Denim: Indigo", "Lavender: Violet"]
    },
    {
        id: 2,
        solution: ["SNAKE", "FROG", "STARFISH", "ANT", "SPIDER", "CRAB", "CENTIPEDE"],
        initialOrderSequence: "6417235",
        theme: "Animals by limb count",
        hint: "Natural extremes",
        hint2: "Go out on a limb",
        post_solve: ["SNAKE: 0", "FROG: 4", "STARFISH: 5", "ANT: 6", "SPIDER: 8", "CRAB: 10", "CENTIPEDE: ~30 (not 100!)" ]
    },
    {
        id: 3,
        solution: ["ONE DOLLAR BILL", "NICKEL", "TWENTY DOLLAR BILL", "PENNY", "FIFTY DOLLAR BILL", "DIME", "HALF DOLLAR"],
        initialOrderSequence: "4375612",
        theme: "Money in order of president",
        hint: "Face value",
        hint2: "Presidential procession",
        post_solve: ["$1: Washington", "5¢: Jefferson", "$20: Jackson", "$5: Lincoln", "$50: Grant", "10¢: FDR", "50¢: JFK"]
    },

    {
        id: 4,
        solution: ["JANAE", "JACOBI", "JESSIE", "JODY", "JOEY", "JEFF", "JENJI"],
        initialOrderSequence: "6451723",
        theme: "Alphabetical letter homophone endings",
        hint: "Behind your ear",
        hint2: "Say the endings out loud",
        post_solve: ["JANAE: A", "JACOBI: B", "JESSIE: C", "JODY: D", "JOEY: E", "JEFF: F", "JENJI: G"]
    },
    // Add more puzzles as needed

    {
        id: 5,
        solution: ["8 BALL", "CREDIT CARD", "ARMY CORPORAL", "NEAPOLITAN ICE CREAM", "RAINBOW", "AMERICAN FLAG", "ZEBRA"],
        initialOrderSequence: "5316274",
        theme: "Stripe count",
        hint: "What's my line?",
        hint2: "Solids' counterparts",
        post_solve: ["8 BALL: 0", "CREDIT CARD: 1", "ARMY CORPORAL: 2", "NEAPOLITAN ICE CREAM: 3", "RAINBOW: 7", "AMERICAN FLAG: 13", "ZEBRA: Many"]
    },
    {
        id: 6,
        solution: [ "JANITOR", "MARBLE", "MAYONNAISE", "JULIENNED", "AUGMENTATION", "OCTOPUS", "DECISION"],
        initialOrderSequence: "7413625",
        theme: "Starts with a 31-day month abbr.",
        hint: "Ahead of time",
        hint2: "Cal train",
        post_solve: [ "(Jan)itor", "(Mar)ble", "(May)onnaise", "(Jul)ienned", "(Aug)mentation", "(Oct)opus", "(Dec)ision"]
    },
    {
        id: 7,
        solution: [ "DR. NO", "ALIENS", "DIE HARD WITH A VENGEANCE", "SHREK FOREVER AFTER", "MISSION: IMPOSSIBLE - ROGUE NATION", "ROCKY BALBOA", "STAR WARS: THE FORCE AWAKENS"],
        initialOrderSequence: "7436152",
        theme: "Movie installment<br>within its franchise",
        hint: "Installments",
        hint2: "Franchise additions",
        post_solve: ["James Bond 1", "Alien 2", "Die Hard 3", "Shrek 4", "M:I 5", "Rocky 6", "Star Wars 7"]

    },
    {
        id: 8,
        solution: ["SCRUNCHED", "BREAKTHROUGH", "STRAIGHTFORWARD", "ACKNOWLEDGEMENT", "ENTREPRENEURSHIP", "UNRECOGNIZABLE", "CONFIDENTIALITY"],
        initialOrderSequence: "3624175",
        theme: "Number of syllables",
        hint: "What a mouthful!",
        hint2: "Count sounds",
        post_solve: ["SCRUNCHED: 1", "BREAKTHROUGH: 2", "STRAIGHTFORWARD: 3", "ACKNOWLEDGEMENT: 4", "ENTREPRENEURSHIP: 5", "UNRECOGNIZABLE: 6", "CONFIDENTIALITY: 7"]
    },
    {
        id: 9,
        solution: ["WAITING GAME", "OROGENY", "CALAMARI", "CASCADE", "CASSAVA", "CABERNET FRANC", "CAYUGA"],
        initialOrderSequence: "2614573",
        theme: "West <-> East U.S. states by latitudes",
        hint: "Coast to coast",
        hint2: "First two, last two",
        post_solve: ["(WA)ITING GA(ME)", "(OR)OGE(NY)", "(CA)LAMA(RI)", "(CA)SCA(DE)", "(CA)SSA(VA)", "(CA)BERNET FRA(NC)", "(CA)YU(GA)"]
    },
    {
        id: 10,
        solution: ["EIGHTIES", "CENTS", "CHEERS", "SEASONS", "SENSES", "FLAGS", "SEAS"],
        initialOrderSequence: "2614573",
        theme: "Preceded by a number",
        hint: "Figures out",
        hint2: "Missing numbers",
        post_solve: ["(ONE) EIGHTIES", "(TWO) CENTS", "(THREE) CHEERS", "(FOUR) SEASONS", "(FIVE) SENSES", "(SIX) FLAGS", "(SEVEN) SEAS"]
    },
    {
        id: 11,
        solution: ["DORITO", "CHESSBOARD", "FLAG OF NEPAL", "HONEYCOMB CELL", "STOP SIGN", "CANADIAN LOONIE", "GLOBE THEATRE"],
        initialOrderSequence: "6527143",
        theme: "Number of sides",
        hint: "So edgy!",
        hint2: "Shapes",
        post_solve: ["DORITO: 3", "CHESSBOARD: 4", "FLAG OF NEPAL: 5", "HONEYCOMB CELL: 6", "STOP SIGN: 8", "LOONIE: 11", "GLOBE: 20 (not quite round!)"]
    },
    {
        id: 12,
        solution: ["HELLO", "BONJOUR", "GUTEN TAG", "BUONGIORNO", "TUDO BEM", "HOLA", "HEJ"],
        initialOrderSequence: "2637514",
        theme: "E.U. languages<br>alphabetically (exonyms)",
        hint: "Linguistic ABCs",
        hint2: "Languages A-to-Z",
        post_solve: ["Hello: English", "Bonjour: French", "Guten tag: German", "Buongiorno: Italian","Tudo bem: Portuguese", "Hola: Spanish", "Hej: Swedish"]
    },
    {
        id: 13,
        solution: ["GHOST OF SLEEPY HOLLOW", "MARBLE BUST", "CATDOG", "CERBERUS", "MOUNT RUSHMORE", "HYDRA", "EASTER ISLAND"],
        initialOrderSequence: "3715462",
        theme: "Head count",
        hint: "Bean counter",
        hint2: "Head count",
        post_solve: ["Headless Horseman: 0", "Marble bust: 1", "CatDog: 2", "Cerberus: 3", "Mount Rushmore: 4", "Hyrdra: 9", "Easter Island: 1,043"]        
    },
    {
        id: 14,
        solution: ["TERA", "GIGA", "MEGA", "KILO", "MICRO", "NANO", "PICO"],
        initialOrderSequence: "5361724",
        theme: "Prefixes of magnitude",
        hint: "SIzes",
        hint2: "Prefixes of magnitude",
        post_solve: ["Tera: trillion", "Giga: billion", "Mega: million", "Kilo: thousand", "Micro: millionth", "Nano: billionth", "Pico: trillionth"]
    },
    {
        id: 15,
        solution: ["BIRTHDAY", "BLUE MOON", "WORLD CUP", "US CENSUS", "CICADA EMERGENCE", "ROYAL JUBILEE", "HALLEY'S COMET FLYBY"],
        initialOrderSequence: "2735164",
        theme: "Frequencies:<br>happens every...",
        hint: "Often times",
        hint2: "Frequencies",
        post_solve: ["Birthday: Every year", "Blue moon: 2-3 years", "World cup: 4 years", "US Census: 10 years", "Cicada emergence: 13 or 17 years", "Royal Jubilee: 25 years", "Halley's Comet flyby: 75-79 years"]
    },
    {
        id: 16,
        solution: ["SUMO", "SOCCER", "HOCKEY", "AMERICAN FOOTBALL", "BASEBALL", "BOWLING", "GOLF"],
        initialOrderSequence: "7135426",
        theme: "Number of subdivisions in a game",
        hint: "Game breaks",
        hint2: "Quarters, periods, innings...",
        post_solve: ["Sumo: 1 bout", "Soccer: 2 halves", "Hockey: 3 periods", "American football: 4 quarters", "Baseball: 9 innings", "Bowling: 10 frames", "Golf: 18 holes"]
    },
    {
        id: 17,
        solution: ["DODO", "PREREQUISITE", "PANTOMIMING", "DO YOURSELF A FAVOR", "MISO SOUP", "MALALA", "PETITION"],
        initialOrderSequence: "3461572",
        theme: "Hidden doubled musical scale",
        hint: "Duly noted",
        hint2: "The Sound of Music x2",
        post_solve: ["(Dodo)", "P(rere)quisite", "Panto(mimi)ng", "Do yoursel(f a fa)vor", "Mi(so so)up", "Ma(lala)", "Pe(titi)on"]
    },
    {
        id: 18,
        solution: ["ERHU", "UKELELE", "GUITAR", "MANDOLIN", "SITAR", "CONCERT HARP", "GRAND PIANO"],
        initialOrderSequence: "5621473",
        theme: "Instrument string count",
        hint: "Plucky numbers",
        hint2: "Strings together",
        post_solve: ["Erhu: 2", "Ukelele: 4", "Guitar: 6", "Mandolin: 8", "Sitar: 18-21", "Concert harp: 47", "Grand piano: ~230"]
    },
    {
        id: 19,
        solution: ["HAT TRICK", "DOZEN", "BAKER'S DOZEN", "SCORE", "CENTURY", "GROSS", "GRAND"],
        initialOrderSequence: "3516472",
        theme: "Non-numerical<br>number words",
        hint: "Word counts",
        hint2: "Non-number number words",
        post_solve: ["Hat trick: 3", "Dozen: 12", "Baker's dozen: 13", "Score: 20", "Century: 100", "Gross: 144", "Grand: 1000"]
    },
    {
        id: 20,
        solution: ["FEET", "BRAIN LOBES", "FINGERS", "RIBS", "TEETH", "VERTEBRAE", "CHROMOSOMES"],
        initialOrderSequence: "4517362",
        theme: "Average amounts in the human body",
        hint: "Sum body",
        hint2: "Average amounts per body",
        post_solve: ["Feet: 2", "Brain lobes: 6", "Fingers: 10", "Ribs: 24", "Teeth: 32", "Vertebrae: 33", "Chromosomes: 46"]       
    }
        
];
