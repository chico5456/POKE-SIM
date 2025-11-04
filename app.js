// ========================================
// POKEMON DATA WITH POKEDEX NUMBERS
// ========================================

const POKEMON_DATABASE = [
    {
        id: 1,
        name: "Gardevoir",
        pokedex: 282,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        stats: {
            acting: 9,
            improv: 8,
            comedy: 7,
            dance: 8,
            design: 9,
            runway: 10,
            lipsync: 9,
            makeover: 9,
            rusical: 8,
            rumix: 8
        },
        personality: "Elegant and graceful, the fashion queen of the competition",
        entranceQuote: "Grace, elegance, and a whole lot of psychic energy!",
        storylines: ["Perfectionist", "Fashion Icon"],
        relationships: {}
    },
    {
        id: 2,
        name: "Lopunny",
        pokedex: 428,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
        stats: {
            acting: 7,
            improv: 9,
            comedy: 8,
            dance: 10,
            design: 7,
            runway: 9,
            lipsync: 10,
            makeover: 7,
            rusical: 9,
            rumix: 10
        },
        personality: "High energy dancer with fierce lip sync skills",
        entranceQuote: "Hop, hop, honey! Time to jump into the competition!",
        storylines: ["Dance Diva", "Underestimated"],
        relationships: {}
    },
    {
        id: 3,
        name: "Milotic",
        pokedex: 350,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 6,
            dance: 7,
            design: 8,
            runway: 10,
            lipsync: 8,
            makeover: 9,
            rusical: 7,
            rumix: 7
        },
        personality: "Beautiful and serene, runway powerhouse",
        entranceQuote: "From ugly duckling to beautiful swan, darling!",
        storylines: ["Transformation Story", "Beauty Queen"],
        relationships: {}
    },
    {
        id: 4,
        name: "Tsareena",
        pokedex: 763,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 7,
            dance: 9,
            design: 7,
            runway: 9,
            lipsync: 8,
            makeover: 7,
            rusical: 8,
            rumix: 9
        },
        personality: "Fierce and commanding, natural performer",
        entranceQuote: "Bow down to the queen of the tropics!",
        storylines: ["Fierce Competitor", "Leadership"],
        relationships: {}
    },
    {
        id: 5,
        name: "Primarina",
        pokedex: 730,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
        stats: {
            acting: 9,
            improv: 7,
            comedy: 6,
            dance: 8,
            design: 8,
            runway: 8,
            lipsync: 10,
            makeover: 8,
            rusical: 10,
            rumix: 9
        },
        personality: "Theatrical and dramatic, born for the stage",
        entranceQuote: "Let me sing you the song of my people... and slay!",
        storylines: ["Theater Kid", "Vocal Queen"],
        relationships: {}
    },
    {
        id: 6,
        name: "Vespiquen",
        pokedex: 416,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
        stats: {
            acting: 8,
            improv: 9,
            comedy: 9,
            dance: 7,
            design: 9,
            runway: 8,
            lipsync: 7,
            makeover: 8,
            rusical: 7,
            rumix: 8
        },
        personality: "Strategic and commanding, natural leader",
        entranceQuote: "The queen bee has arrived, and honey, I'm sticky sweet!",
        storylines: ["Strategic Player", "Camp Queen"],
        relationships: {}
    },
    {
        id: 7,
        name: "Florges",
        pokedex: 671,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
        stats: {
            acting: 7,
            improv: 7,
            comedy: 6,
            dance: 7,
            design: 10,
            runway: 9,
            lipsync: 7,
            makeover: 10,
            rusical: 7,
            rumix: 7
        },
        personality: "Artistic and creative, design specialist",
        entranceQuote: "Blooming into excellence, one petal at a time!",
        storylines: ["Design Genius", "Quiet Strength"],
        relationships: {}
    },
    {
        id: 8,
        name: "Delphox",
        pokedex: 655,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
        stats: {
            acting: 9,
            improv: 8,
            comedy: 7,
            dance: 7,
            design: 8,
            runway: 8,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Mystical and theatrical, well-rounded competitor",
        entranceQuote: "I predict a win in my future... and it's looking magical!",
        storylines: ["Mystic", "All-Rounder"],
        relationships: {}
    },
    {
        id: 9,
        name: "Salazzle",
        pokedex: 758,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
        stats: {
            acting: 8,
            improv: 10,
            comedy: 10,
            dance: 8,
            design: 7,
            runway: 8,
            lipsync: 9,
            makeover: 7,
            rusical: 8,
            rumix: 9
        },
        personality: "Sassy and charismatic, comedy queen",
        entranceQuote: "Too hot to handle, too fierce to ignore!",
        storylines: ["Comedy Queen", "Shady"],
        relationships: {}
    },
    {
        id: 10,
        name: "Kangaskhan",
        pokedex: 115,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 8,
            dance: 7,
            design: 7,
            runway: 7,
            lipsync: 7,
            makeover: 9,
            rusical: 7,
            rumix: 7
        },
        personality: "Motherly and supportive, team player",
        entranceQuote: "Mama's here to nurture... and to win!",
        storylines: ["Mom Figure", "Heart of Gold"],
        relationships: {}
    },
    {
        id: 11,
        name: "Nidoqueen",
        pokedex: 31,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        stats: {
            acting: 7,
            improv: 8,
            comedy: 8,
            dance: 8,
            design: 7,
            runway: 8,
            lipsync: 8,
            makeover: 7,
            rusical: 8,
            rumix: 8
        },
        personality: "Strong and confident, powerhouse performer",
        entranceQuote: "Bow to the queen! This crown is mine!",
        storylines: ["Power Player", "Confident"],
        relationships: {}
    },
    {
        id: 12,
        name: "Lilligant",
        pokedex: 549,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
        stats: {
            acting: 7,
            improv: 6,
            comedy: 7,
            dance: 9,
            design: 8,
            runway: 9,
            lipsync: 7,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Sweet and graceful, dance specialist",
        entranceQuote: "Watch me bloom on this runway!",
        storylines: ["Sweet Soul", "Growth Journey"],
        relationships: {}
    },
    {
        id: 13,
        name: "Gothitelle",
        pokedex: 576,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
        stats: {
            acting: 9,
            improv: 7,
            comedy: 6,
            dance: 7,
            design: 8,
            runway: 9,
            lipsync: 7,
            makeover: 8,
            rusical: 8,
            rumix: 7
        },
        personality: "Dramatic and mysterious, method actor",
        entranceQuote: "I see your future... and I'm in it, winning!",
        storylines: ["Method Actor", "Dark Horse"],
        relationships: {}
    },
    {
        id: 14,
        name: "Froslass",
        pokedex: 478,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 7,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 8,
            makeover: 7,
            rusical: 7,
            rumix: 8
        },
        personality: "Cool and collected, ice queen energy",
        entranceQuote: "Ice cold looks, red hot performances!",
        storylines: ["Ice Queen", "Mysterious"],
        relationships: {}
    },
    {
        id: 15,
        name: "Cinccino",
        pokedex: 573,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
        stats: {
            acting: 7,
            improv: 9,
            comedy: 9,
            dance: 8,
            design: 7,
            runway: 8,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Bubbly and energetic, crowd favorite",
        entranceQuote: "Cute, fluffy, and ready to slay!",
        storylines: ["Fan Favorite", "Bubbly"],
        relationships: {}
    },
    {
        id: 16,
        name: "Mismagius",
        pokedex: 429,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
        stats: {
            acting: 9,
            improv: 8,
            comedy: 7,
            dance: 7,
            design: 8,
            runway: 8,
            lipsync: 9,
            makeover: 7,
            rusical: 9,
            rumix: 8
        },
        personality: "Spooky and theatrical, performance artist",
        entranceQuote: "I'm here to haunt the competition!",
        storylines: ["Spooky Queen", "Theatrical"],
        relationships: {}
    },
    {
        id: 17,
        name: "Cresselia",
        pokedex: 488,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 6,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Dreamy and ethereal, artistic performer",
        entranceQuote: "Sweet dreams are made of this... and this crown!",
        storylines: ["Dreamy", "Artistic"],
        relationships: {}
    },
    {
        id: 18,
        name: "Bellossom",
        pokedex: 182,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
        stats: {
            acting: 7,
            improv: 8,
            comedy: 8,
            dance: 9,
            design: 7,
            runway: 7,
            lipsync: 8,
            makeover: 7,
            rusical: 9,
            rumix: 8
        },
        personality: "Cheerful and optimistic, natural entertainer",
        entranceQuote: "Time to dance my way to the crown!",
        storylines: ["Optimist", "Dancer"],
        relationships: {}
    },
    {
        id: 19,
        name: "Ninetales (Alola)",
        pokedex: 38,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 7,
            dance: 7,
            design: 9,
            runway: 10,
            lipsync: 8,
            makeover: 9,
            rusical: 7,
            rumix: 8
        },
        personality: "Sophisticated and regal, high fashion",
        entranceQuote: "Nine tails, infinite looks!",
        storylines: ["Fashion Forward", "Regal"],
        relationships: {}
    },
    {
        id: 20,
        name: "Meloetta",
        pokedex: 648,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
        stats: {
            acting: 9,
            improv: 8,
            comedy: 7,
            dance: 9,
            design: 7,
            runway: 8,
            lipsync: 10,
            makeover: 7,
            rusical: 10,
            rumix: 10
        },
        personality: "Musical prodigy, versatile performer",
        entranceQuote: "Let me serenade you... with my excellence!",
        storylines: ["Music Legend", "Versatile"],
        relationships: {}
    }
];

// ========================================
// CHALLENGES DATA
// ========================================

const CHALLENGES = [
    { name: "Acting Challenge", type: "acting", emoji: "🎭", description: "Show us your dramatic chops!" },
    { name: "Snatch Game", type: "improv", emoji: "🎤", description: "Impersonate a celebrity!" },
    { name: "Stand-Up Comedy", type: "comedy", emoji: "😂", description: "Make Ru laugh!" },
    { name: "Choreography Challenge", type: "dance", emoji: "💃", description: "Dance for your life!" },
    { name: "Design Challenge", type: "design", emoji: "✂️", description: "Create a look from scratch!" },
    { name: "Runway Extravaganza", type: "runway", emoji: "👗", description: "Serve looks!" },
    { name: "Makeover Challenge", type: "makeover", emoji: "💄", description: "Transform someone else!" },
    { name: "Rusical", type: "rusical", emoji: "🎵", description: "Sing and dance in a musical!" },
    { name: "Girl Groups", type: "rumix", emoji: "🎶", description: "Perform in a girl group!" }
];

// ========================================
// DRAMA & STORYLINE GENERATORS
// ========================================

const DRAMA_TEMPLATES = [
    "{queen1} and {queen2} clash over {topic}!",
    "{queen1} breaks down in the workroom about {emotion}",
    "{queen2} calls out {queen1} for being {trait}!",
    "{queen1} and {queen2} form a surprising alliance",
    "{queen1} reveals a vulnerable moment about their journey",
    "Tension rises as {queen1} disagrees with the judges",
    "{queen2} throws shade at {queen1}'s look",
    "{queen1} questions if they belong in the competition",
    "A heated argument erupts between {queen1} and {queen2}",
    "{queen1} emerges as an unexpected frontrunner"
];

const TOPICS = ["the challenge", "runway looks", "strategy", "favoritism", "talent"];
const EMOTIONS = ["pressure", "homesickness", "self-doubt", "competition stress"];
const TRAITS = ["fake", "arrogant", "safe", "trying too hard", "not trying enough"];

const LIPSYNC_DESCRIPTIONS = [
    "An electrifying performance with high energy and fierce moves!",
    "Both queens serve emotion and vulnerability in a powerful battle!",
    "Death drops, splits, and pure charisma fill the stage!",
    "A close battle where both queens give it their all!",
    "One queen clearly dominates with flawless execution!",
    "Hair flips, reveals, and stunning choreography!",
    "An emotional journey told through dance and expression!",
    "Camp, comedy, and character - this lipsync has it all!"
];

// ========================================
// APP STATE
// ========================================

const AppState = {
    selectedQueens: [],
    cast: [],
    currentEpisode: 0,
    currentPhase: 'CAST_SELECTION',
    episodeData: [],
    trackRecords: {},
    eliminated: [],
    relationships: {},
    seasonDrama: [],
    producerOverrides: {},
    pendingChallenge: null // Store challenge info before creating episode
};

// ========================================
// HELPER FUNCTIONS
// ========================================

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateDrama() {
    if (AppState.cast.length < 2) return null;

    const template = randomChoice(DRAMA_TEMPLATES);
    const queen1 = randomChoice(AppState.cast);
    const queen2 = randomChoice(AppState.cast.filter(q => q.id !== queen1.id));

    let drama = template
        .replace('{queen1}', queen1.name)
        .replace('{queen2}', queen2.name)
        .replace('{topic}', randomChoice(TOPICS))
        .replace('{emotion}', randomChoice(EMOTIONS))
        .replace('{trait}', randomChoice(TRAITS));

    return drama;
}

function calculatePerformance(queen, challengeType) {
    const baseStat = queen.stats[challengeType] || 5;
    const variance = Math.random() * 4 - 2; // -2 to +2
    return Math.max(1, Math.min(10, baseStat + variance));
}

function generatePerformanceDescription(queen, challengeType, score) {
    const descriptions = {
        high: [
            `${queen.name} absolutely slays this challenge with incredible skill!`,
            `${queen.name} delivers a standout performance that wows everyone!`,
            `${queen.name} proves why they're a frontrunner with this amazing showing!`,
            `The judges can't stop raving about ${queen.name}'s performance!`
        ],
        mid: [
            `${queen.name} delivers a solid, safe performance.`,
            `${queen.name} does well but doesn't quite stand out.`,
            `${queen.name} plays it safe and does just enough.`,
            `A decent showing from ${queen.name}, but nothing memorable.`
        ],
        low: [
            `${queen.name} struggles with this challenge and it shows.`,
            `Unfortunately, ${queen.name} misses the mark on this one.`,
            `${queen.name} stumbles through the challenge.`,
            `The judges are disappointed with ${queen.name}'s performance.`
        ]
    };

    const category = score >= 7 ? 'high' : score >= 5 ? 'mid' : 'low';
    return randomChoice(descriptions[category]);
}

function assignPlacements(queensInCompetition, challengeType, overrides = {}) {
    // Calculate scores for each queen
    const performances = queensInCompetition.map(queen => ({
        queen,
        score: calculatePerformance(queen, challengeType),
        description: ''
    }));

    // Sort by score
    performances.sort((a, b) => b.score - a.score);

    // Generate descriptions
    performances.forEach(p => {
        p.description = generatePerformanceDescription(p.queen, challengeType, p.score);
    });

    const placements = {};
    const numQueens = queensInCompetition.length;

    // Determine placement counts based on number of queens
    let numWin = 1;
    let numHigh = 2;
    let numLow = 1;
    let numBtm = 2;

    if (numQueens <= 5) {
        numWin = 1;
        numHigh = 2;
        numLow = 0;
        numBtm = 2;
    }

    // Apply overrides or assign based on performance
    let assigned = 0;

    // WIN
    if (overrides.WIN) {
        placements[overrides.WIN] = 'WIN';
        assigned++;
    } else {
        placements[performances[0].queen.id] = 'WIN';
        assigned++;
    }

    // HIGH
    const highQueens = overrides.HIGH || [];
    if (highQueens.length > 0) {
        highQueens.forEach(id => {
            if (id) placements[id] = 'HIGH';
        });
    } else {
        let highCount = 0;
        for (let i = 1; i < performances.length && highCount < numHigh; i++) {
            if (!placements[performances[i].queen.id]) {
                placements[performances[i].queen.id] = 'HIGH';
                highCount++;
            }
        }
    }

    // BTM2
    const btmQueens = overrides.BTM2 || [];
    if (btmQueens.length > 0) {
        btmQueens.forEach(id => {
            if (id) placements[id] = 'BTM2';
        });
    } else {
        placements[performances[numQueens - 2].queen.id] = 'BTM2';
        placements[performances[numQueens - 1].queen.id] = 'BTM2';
    }

    // LOW
    if (numQueens > 5) {
        if (overrides.LOW) {
            placements[overrides.LOW] = 'LOW';
        } else {
            for (let i = numQueens - 3; i >= 0; i--) {
                if (!placements[performances[i].queen.id]) {
                    placements[performances[i].queen.id] = 'LOW';
                    break;
                }
            }
        }
    }

    // SAFE for everyone else
    queensInCompetition.forEach(queen => {
        if (!placements[queen.id]) {
            placements[queen.id] = 'SAFE';
        }
    });

    return { placements, performances };
}

// ========================================
// UI RENDERING FUNCTIONS
// ========================================

function render() {
    const app = document.getElementById('app');

    switch (AppState.currentPhase) {
        case 'CAST_SELECTION':
            app.innerHTML = renderCastSelection();
            break;
        case 'ENTRANCES':
            app.innerHTML = renderEntrances();
            break;
        case 'PROMO':
            app.innerHTML = renderPromo();
            break;
        case 'CHALLENGE_SELECT':
            app.innerHTML = renderChallengeSelect();
            break;
        case 'PRODUCER_ROOM':
            app.innerHTML = renderProducerRoom();
            break;
        case 'CHALLENGE_ANNOUNCE':
            app.innerHTML = renderChallengeAnnounce();
            break;
        case 'PERFORMANCES':
            app.innerHTML = renderPerformances();
            break;
        case 'RESULTS':
            app.innerHTML = renderResults();
            break;
        case 'LIPSYNC':
            app.innerHTML = renderLipsync();
            break;
        case 'ELIMINATION':
            app.innerHTML = renderElimination();
            break;
        case 'FINALE':
            app.innerHTML = renderFinale();
            break;
        case 'WINNER':
            app.innerHTML = renderWinner();
            break;
        default:
            app.innerHTML = '<p>Unknown phase</p>';
    }
}

function renderCastSelection() {
    const selectedCount = AppState.selectedQueens.length;

    return `
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-drag-pink mb-4">Select Your Cast</h2>
            <p class="text-center text-xl mb-4">Choose 10-14 Queens</p>
            <p class="text-center text-2xl font-bold mb-8">Selected: ${selectedCount}/14</p>

            ${selectedCount < 10 ? '<div class="bg-red-500 text-white p-4 rounded-lg mb-8 text-center font-bold">⚠️ Please select at least 10 queens to continue</div>' : ''}

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
                ${POKEMON_DATABASE.map(pokemon => `
                    <div class="bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 ${AppState.selectedQueens.includes(pokemon.id) ? 'border-drag-pink bg-gradient-to-br from-pink-50 to-purple-50' : 'border-transparent'}"
                         onclick="toggleQueenSelection(${pokemon.id})">
                        <div class="relative">
                            <img src="${pokemon.image}" alt="${pokemon.name}" class="w-full h-32 object-contain sprite-pixel">
                            ${AppState.selectedQueens.includes(pokemon.id) ? '<div class="absolute top-0 right-0 bg-drag-pink text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">✓</div>' : ''}
                        </div>
                        <h3 class="font-bold text-center text-sm md:text-base mt-2">${pokemon.name}</h3>
                        <div class="mt-2 space-y-1 text-xs">
                            <div class="flex justify-between"><span>Acting:</span> <span class="font-bold">${pokemon.stats.acting}</span></div>
                            <div class="flex justify-between"><span>Comedy:</span> <span class="font-bold">${pokemon.stats.comedy}</span></div>
                            <div class="flex justify-between"><span>Dance:</span> <span class="font-bold">${pokemon.stats.dance}</span></div>
                            <div class="flex justify-between"><span>Runway:</span> <span class="font-bold">${pokemon.stats.runway}</span></div>
                            <div class="flex justify-between"><span>Lipsync:</span> <span class="font-bold">${pokemon.stats.lipsync}</span></div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex justify-center gap-4">
                ${selectedCount >= 10 ? '<button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="startCompetition()">START COMPETITION ✨</button>' : ''}
            </div>

            ${selectedCount > 0 ? `<div class="fixed bottom-8 right-8 bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-6 py-4 rounded-full shadow-2xl font-bold text-lg z-50 animate-bounce-slow">${selectedCount} Queens Selected</div>` : ''}
        </div>
    `;
}

function renderEntrances() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8 text-drag-pink">🌟 Queen Entrances 🌟</h2>
            <div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div class="space-y-4">
                    ${AppState.cast.map((queen, index) => `
                        <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl animate-slideIn" style="animation-delay: ${index * 0.1}s;">
                            <img src="${queen.image}" alt="${queen.name}" class="w-24 h-24 object-contain sprite-pixel">
                            <div class="flex-1">
                                <h3 class="font-bold text-xl text-drag-pink">${queen.name}</h3>
                                <p class="italic text-gray-700 mt-1">"${queen.entranceQuote}"</p>
                                <div class="flex flex-wrap gap-2 mt-2">
                                    ${queen.storylines.map(s => `<span class="bg-drag-pink text-white px-3 py-1 rounded-full text-xs font-bold">${s}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="nextPhase()">CONTINUE TO PROMO 📸</button>
            </div>
        </div>
    `;
}

function renderPromo() {
    return `
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8 text-drag-pink">📸 Meet the Queens 📸</h2>
            <div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl mb-8">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    ${AppState.cast.map(queen => `
                        <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 text-center">
                            <img src="${queen.image}" alt="${queen.name}" class="w-full h-32 object-contain sprite-pixel">
                            <h3 class="font-bold mt-2">${queen.name}</h3>
                            <p class="text-xs text-gray-600 mt-1">${queen.personality}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${renderTrackRecordTable()}
            ${renderSeasonStats()}

            <div class="flex justify-center mt-8">
                <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="nextPhase()">START EPISODE 1 🎬</button>
            </div>
        </div>
    `;
}

function renderChallengeSelect() {
    const episode = AppState.currentEpisode + 1;
    const queensLeft = AppState.cast.length;

    return `
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-4 text-drag-pink">🎬 Episode ${episode} 🎬</h2>
            <p class="text-center text-2xl font-bold mb-8">${queensLeft} Queens Remain</p>

            <div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl mb-8">
                <h3 class="text-2xl font-bold mb-6 text-center">Select This Week's Challenge:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${CHALLENGES.map(challenge => `
                        <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-drag-pink"
                             onclick="selectChallenge('${challenge.type}', '${challenge.name}', '${challenge.emoji}')">
                            <div class="text-4xl text-center mb-2">${challenge.emoji}</div>
                            <h4 class="font-bold text-center text-lg mb-2">${challenge.name}</h4>
                            <p class="text-sm text-gray-600 text-center">${challenge.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${renderTrackRecordTable()}
            ${renderSeasonStats()}
        </div>
    `;
}

function renderProducerRoom() {
    const currentEp = AppState.currentEpisode + 1;
    const queensInComp = AppState.cast;
    const challenge = AppState.pendingChallenge;

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-4 text-drag-purple">🎬 Producer's Room 🎬</h2>
            <p class="text-center text-xl mb-8">Episode ${currentEp}: ${challenge.name}</p>

            <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
                <h3 class="text-2xl font-bold mb-4">Override Placements (Optional)</h3>
                <p class="mb-6 text-gray-700">Leave as "Auto" to let the simulator decide, or manually set placements to control the narrative!</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white rounded-lg p-4">
                        <label class="font-bold block mb-2">🏆 WIN:</label>
                        <select class="w-full p-2 border-2 border-gray-300 rounded-lg" id="override-win">
                            <option value="">Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                        </select>
                    </div>

                    <div class="bg-white rounded-lg p-4">
                        <label class="font-bold block mb-2">⭐ HIGH (1):</label>
                        <select class="w-full p-2 border-2 border-gray-300 rounded-lg" id="override-high1">
                            <option value="">Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                        </select>
                    </div>

                    <div class="bg-white rounded-lg p-4">
                        <label class="font-bold block mb-2">⭐ HIGH (2):</label>
                        <select class="w-full p-2 border-2 border-gray-300 rounded-lg" id="override-high2">
                            <option value="">Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                        </select>
                    </div>

                    ${queensInComp.length > 5 ? `
                        <div class="bg-white rounded-lg p-4">
                            <label class="font-bold block mb-2">⚠️ LOW:</label>
                            <select class="w-full p-2 border-2 border-gray-300 rounded-lg" id="override-low">
                                <option value="">Auto</option>
                                ${queensInComp.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                            </select>
                        </div>
                    ` : ''}

                    <div class="bg-white rounded-lg p-4">
                        <label class="font-bold block mb-2">💔 BTM2 (1):</label>
                        <select class="w-full p-2 border-2 border-gray-300 rounded-lg" id="override-btm1">
                            <option value="">Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                        </select>
                    </div>

                    <div class="bg-white rounded-lg p-4">
                        <label class="font-bold block mb-2">💔 BTM2 (2):</label>
                        <select class="w-full p-2 border-2 border-gray-300 rounded-lg" id="override-btm2">
                            <option value="">Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                        </select>
                    </div>
                </div>
            </div>

            <div class="flex justify-center gap-4">
                <button class="bg-gradient-to-r from-drag-purple to-drag-purple-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="applyProducerOverrides()">CONTINUE TO EPISODE ▶️</button>
            </div>
        </div>
    `;
}

function renderChallengeAnnounce() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-4 text-drag-pink">🎬 Episode ${AppState.currentEpisode} 🎬</h2>
            <div class="bg-white rounded-2xl p-8 shadow-xl mb-8">
                <div class="text-6xl text-center mb-4">${currentEp.emoji}</div>
                <h3 class="text-3xl md:text-4xl font-bold text-center text-drag-pink mb-4">
                    ${currentEp.challengeName}
                </h3>
                <p class="text-xl text-center text-gray-700 mb-8">
                    This week, our queens will compete in a ${currentEp.challengeType} challenge!
                </p>

                ${AppState.seasonDrama.length > 0 ? `
                    <div class="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 rounded-lg p-6">
                        <h4 class="text-2xl font-bold mb-4">☕ Tea Time ☕</h4>
                        ${AppState.seasonDrama.slice(-3).map(drama => `
                            <p class="italic mb-2">🗣️ ${drama}</p>
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <div class="flex justify-center">
                <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="nextPhase()">SEE PERFORMANCES 🎭</button>
            </div>
        </div>
    `;
}

function renderPerformances() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    return `
        <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8 text-drag-pink">🎭 ${currentEp.challengeName} Performances 🎭</h2>
            <div class="space-y-4 mb-8">
                ${currentEp.performances.map(perf => `
                    <div class="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4">
                        <img src="${perf.queen.image}" alt="${perf.queen.name}" class="w-20 h-20 object-contain sprite-pixel">
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-drag-pink">${perf.queen.name}</h3>
                            <p class="text-gray-700 mt-1">${perf.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex justify-center">
                <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="nextPhase()">JUDGING & RESULTS 👑</button>
            </div>
        </div>
    `;
}

function renderResults() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    const winQueen = AppState.cast.find(q => currentEp.placements[q.id] === 'WIN');
    const highQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'HIGH');
    const safeQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'SAFE');
    const lowQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'LOW');
    const btmQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'BTM2');

    return `
        <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8 text-drag-pink">👑 Episode ${AppState.currentEpisode} Results 👑</h2>

            <div class="space-y-6 mb-8">
                ${winQueen ? `
                    <div class="bg-gradient-to-r from-yellow-200 to-amber-200 rounded-2xl p-8 shadow-xl border-4 border-yellow-500">
                        <h3 class="text-3xl font-bold text-center mb-4">🏆 CHALLENGE WINNER 🏆</h3>
                        <div class="flex items-center justify-center gap-4 bg-white rounded-xl p-4">
                            <img src="${winQueen.image}" alt="${winQueen.name}" class="w-24 h-24 object-contain sprite-pixel animate-bounce-slow">
                            <span class="text-2xl font-bold text-yellow-700">${winQueen.name}</span>
                        </div>
                    </div>
                ` : ''}

                ${highQueens.length > 0 ? `
                    <div class="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 shadow-xl border-4 border-green-400">
                        <h3 class="text-2xl font-bold text-center mb-4 text-green-700">⭐ TOP QUEENS ⭐</h3>
                        <div class="flex flex-wrap gap-3 justify-center">
                            ${highQueens.map(q => `
                                <div class="flex items-center gap-2 bg-white rounded-lg p-3 shadow">
                                    <img src="${q.image}" alt="${q.name}" class="w-12 h-12 object-contain sprite-pixel">
                                    <span class="font-bold">${q.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${safeQueens.length > 0 ? `
                    <div class="bg-gray-100 rounded-2xl p-6 shadow-xl">
                        <h3 class="text-2xl font-bold text-center mb-4 text-gray-700">SAFE</h3>
                        <div class="flex flex-wrap gap-3 justify-center">
                            ${safeQueens.map(q => `
                                <div class="flex items-center gap-2 bg-white rounded-lg p-2 shadow">
                                    <img src="${q.image}" alt="${q.name}" class="w-10 h-10 object-contain sprite-pixel">
                                    <span class="text-sm font-bold">${q.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${lowQueens.length > 0 ? `
                    <div class="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 shadow-xl border-4 border-orange-400">
                        <h3 class="text-2xl font-bold text-center mb-4 text-orange-700">⚠️ LOW ⚠️</h3>
                        <div class="flex flex-wrap gap-3 justify-center">
                            ${lowQueens.map(q => `
                                <div class="flex items-center gap-2 bg-white rounded-lg p-3 shadow">
                                    <img src="${q.image}" alt="${q.name}" class="w-12 h-12 object-contain sprite-pixel">
                                    <span class="font-bold">${q.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${btmQueens.length > 0 ? `
                    <div class="bg-gradient-to-r from-red-200 to-pink-200 rounded-2xl p-8 shadow-xl border-4 border-red-500">
                        <h3 class="text-3xl font-bold text-center mb-4 text-red-700">💔 BOTTOM TWO 💔</h3>
                        <div class="flex flex-wrap gap-4 justify-center">
                            ${btmQueens.map(q => `
                                <div class="flex items-center gap-3 bg-white rounded-xl p-4 shadow-lg">
                                    <img src="${q.image}" alt="${q.name}" class="w-16 h-16 object-contain sprite-pixel">
                                    <span class="text-xl font-bold">${q.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            ${renderTrackRecordTable()}

            <div class="flex justify-center mt-8">
                <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="nextPhase()">LIP SYNC FOR YOUR LIFE 💋</button>
            </div>
        </div>
    `;
}

function renderLipsync() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];
    const btmQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'BTM2');

    if (btmQueens.length !== 2) {
        return '<p class="text-center text-red-500">Error: Expected 2 queens in bottom</p>';
    }

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8 text-drag-pink">💋 Lip Sync For Your Life 💋</h2>
            <div class="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl mb-8">
                <div class="bg-white rounded-xl p-6 mb-6">
                    <p class="text-xl text-center italic text-gray-700">
                        ${randomChoice(LIPSYNC_DESCRIPTIONS)}
                    </p>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-around gap-8 mb-8">
                    <div class="text-center">
                        <div class="bg-white rounded-2xl p-6 shadow-lg">
                            <img src="${btmQueens[0].image}" alt="${btmQueens[0].name}" class="w-32 h-32 object-contain mx-auto sprite-pixel">
                            <h3 class="font-bold text-xl mt-4">${btmQueens[0].name}</h3>
                            <p class="text-sm text-gray-600 mt-2">Lipsync Skill: ${btmQueens[0].stats.lipsync}/10</p>
                        </div>
                    </div>

                    <div class="text-6xl font-bold text-drag-pink">VS</div>

                    <div class="text-center">
                        <div class="bg-white rounded-2xl p-6 shadow-lg">
                            <img src="${btmQueens[1].image}" alt="${btmQueens[1].name}" class="w-32 h-32 object-contain mx-auto sprite-pixel">
                            <h3 class="font-bold text-xl mt-4">${btmQueens[1].name}</h3>
                            <p class="text-sm text-gray-600 mt-2">Lipsync Skill: ${btmQueens[1].stats.lipsync}/10</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-2xl font-bold text-center mb-4">Who stays?</h3>
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <button class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg" onclick="eliminateQueen(${btmQueens[1].id})">${btmQueens[0].name} SHANTAY YOU STAY</button>
                    <button class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg" onclick="eliminateQueen(${btmQueens[0].id})">${btmQueens[1].name} SHANTAY YOU STAY</button>
                </div>
            </div>

            ${renderTrackRecordTable()}
        </div>
    `;
}

function renderElimination() {
    const eliminatedQueen = AppState.eliminated[AppState.eliminated.length - 1];

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8 text-gray-700">😢 Elimination 😢</h2>
            <div class="bg-white rounded-2xl p-8 shadow-xl mb-8 text-center">
                <img src="${eliminatedQueen.image}" class="w-48 h-48 mx-auto object-contain sprite-pixel opacity-60" alt="${eliminatedQueen.name}">
                <h3 class="text-3xl font-bold mt-6 text-gray-600">${eliminatedQueen.name}</h3>
                <p class="text-2xl italic mt-4 text-gray-500">"Now, sashay away..."</p>
                <p class="text-lg mt-4 text-gray-600">Eliminated in Episode ${AppState.currentEpisode}</p>
                <div class="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 rounded-lg p-6 mt-6 max-w-2xl mx-auto">
                    <p class="italic text-gray-700">
                        "${eliminatedQueen.name}'s journey may end here, but their legacy in this competition will not be forgotten. From their stunning entrance to their final performance, they've given us moments we'll remember forever."
                    </p>
                </div>
            </div>

            ${renderTrackRecordTable()}
            ${renderSeasonStats()}

            <div class="flex justify-center mt-8">
                ${AppState.cast.length === 4 ?
                    '<button class="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg animate-pulse-slow" onclick="nextPhase()">✨ GRAND FINALE ✨</button>' :
                    '<button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="nextPhase()">NEXT EPISODE ▶️</button>'
                }
            </div>
        </div>
    `;
}

function renderFinale() {
    return `
        <div class="max-w-6xl mx-auto">
            <div class="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-12 shadow-2xl text-white text-center mb-8">
                <h2 class="text-5xl font-bold mb-4">✨ GRAND FINALE ✨</h2>
                <p class="text-2xl">Our final four queens compete in the ultimate Rumix challenge!</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                ${AppState.cast.map(queen => `
                    <div class="bg-white rounded-2xl p-6 shadow-xl">
                        <img src="${queen.image}" class="w-full h-40 object-contain sprite-pixel" alt="${queen.name}">
                        <h3 class="font-bold text-xl text-center mt-4">${queen.name}</h3>
                        <div class="mt-4 space-y-2 text-sm">
                            ${Object.entries(AppState.trackRecords[queen.id] || {})
                                .filter(([k]) => k !== 'SAFE' && k !== 'ELIM')
                                .map(([placement, count]) => `
                                    <div class="flex justify-between items-center">
                                        <span class="px-2 py-1 rounded text-xs font-bold ${
                                            placement === 'WIN' ? 'bg-win text-black' :
                                            placement === 'HIGH' ? 'bg-high text-black' :
                                            placement === 'LOW' ? 'bg-low text-black' :
                                            placement === 'BTM2' ? 'bg-btm text-white' :
                                            'bg-gray-200 text-black'
                                        }">${placement}</span>
                                        <span class="font-bold">×${count}</span>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>

            ${renderTrackRecordTable()}
            ${renderSeasonStats()}

            <div class="bg-white rounded-2xl p-8 shadow-xl mb-8">
                <h3 class="text-3xl font-bold text-center mb-6 text-drag-pink">👑 Who should win? 👑</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${AppState.cast.map(queen => `
                        <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-6 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center gap-4"
                                onclick="crownWinner(${queen.id})">
                            <img src="${queen.image}" class="w-16 h-16 object-contain sprite-pixel" alt="${queen.name}">
                            <span class="flex-1">${queen.name}</span>
                            <span class="text-2xl">👑</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderWinner() {
    const winner = AppState.cast[0];

    return `
        <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-12 shadow-2xl text-white text-center mb-8">
                <div class="text-8xl mb-4 animate-bounce-slow">👑</div>
                <h2 class="text-5xl font-bold mb-8">AMERICA'S NEXT DRAG SUPERSTAR</h2>
                <img src="${winner.image}" class="w-64 h-64 mx-auto object-contain sprite-pixel" alt="${winner.name}">
                <h3 class="text-6xl font-bold mt-8 mb-4">${winner.name}</h3>
                <p class="text-3xl">Congratulations, you're a WINNER baby!</p>
            </div>

            ${renderTrackRecordTable()}
            ${renderSeasonStats()}

            <div class="flex justify-center mt-8">
                <button class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg" onclick="location.reload()">🌟 START NEW SEASON 🌟</button>
            </div>
        </div>
    `;
}

function renderTrackRecordTable() {
    if (AppState.episodeData.length === 0) {
        return '';
    }

    // Get all queens (current + eliminated) sorted correctly
    const activeQueens = [...AppState.cast].sort((a, b) => {
        const aWins = (AppState.trackRecords[a.id]?.WIN || 0);
        const bWins = (AppState.trackRecords[b.id]?.WIN || 0);
        if (aWins !== bWins) return bWins - aWins;

        const aHighs = (AppState.trackRecords[a.id]?.HIGH || 0);
        const bHighs = (AppState.trackRecords[b.id]?.HIGH || 0);
        return bHighs - aHighs;
    });

    const sortedQueens = [
        ...activeQueens,
        ...[...AppState.eliminated].reverse()
    ];

    return `
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <h3 class="bg-gradient-to-r from-drag-pink to-drag-pink-dark text-white text-2xl font-bold p-4 text-center">📊 Track Record</h3>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="bg-gradient-to-r from-pink-100 to-purple-100">
                            <th class="p-3 text-left font-bold">Queen</th>
                            ${AppState.episodeData.map((ep, i) => `<th class="p-3 text-center font-bold text-sm">E${i + 1}</th>`).join('')}
                            <th class="p-3 text-center font-bold">Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sortedQueens.map(queen => {
                            const isEliminated = AppState.eliminated.includes(queen);
                            return `
                                <tr class="border-b hover:bg-pink-50 ${isEliminated ? 'opacity-60' : ''}">
                                    <td class="p-3">
                                        <div class="flex items-center gap-2">
                                            <img src="${queen.image}" class="w-8 h-8 object-contain sprite-pixel" alt="${queen.name}">
                                            <span class="font-bold">${queen.name}</span>
                                        </div>
                                    </td>
                                    ${AppState.episodeData.map(ep => {
                                        const placement = ep.placements[queen.id] || '';
                                        if (!placement) return '<td class="p-3"></td>';
                                        return `<td class="p-3 text-center">
                                            <span class="px-2 py-1 rounded text-xs font-bold inline-block ${
                                                placement === 'WIN' ? 'bg-win text-black' :
                                                placement === 'HIGH' ? 'bg-high text-black' :
                                                placement === 'SAFE' ? 'bg-safe text-black' :
                                                placement === 'LOW' ? 'bg-low text-black' :
                                                placement === 'BTM2' ? 'bg-btm text-white' :
                                                placement === 'ELIM' ? 'bg-elim text-white' :
                                                placement === 'RUNNER' ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-black' :
                                                placement === 'WINNER' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black' :
                                                'bg-gray-200 text-black'
                                            }">${placement}</span>
                                        </td>`;
                                    }).join('')}
                                    <td class="p-3 text-xs text-center">
                                        ${Object.entries(AppState.trackRecords[queen.id] || {})
                                            .filter(([k]) => k !== 'SAFE')
                                            .map(([k, v]) => `${k}:${v}`)
                                            .join(' ') || '-'}
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderSeasonStats() {
    const totalEpisodes = AppState.episodeData.length;
    const queensRemaining = AppState.cast.length;
    const queensEliminated = AppState.eliminated.length;
    const dramaCount = AppState.seasonDrama.length;

    return `
        <div class="bg-white rounded-2xl p-6 shadow-xl mb-8">
            <h3 class="text-2xl font-bold mb-6 text-center text-drag-pink">📈 Season Statistics</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 text-center">
                    <div class="text-4xl font-bold text-drag-pink">${totalEpisodes}</div>
                    <div class="text-sm text-gray-600 mt-1">Episodes</div>
                </div>
                <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 text-center">
                    <div class="text-4xl font-bold text-drag-pink">${queensRemaining}</div>
                    <div class="text-sm text-gray-600 mt-1">Remaining</div>
                </div>
                <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 text-center">
                    <div class="text-4xl font-bold text-drag-pink">${queensEliminated}</div>
                    <div class="text-sm text-gray-600 mt-1">Eliminated</div>
                </div>
                <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 text-center">
                    <div class="text-4xl font-bold text-drag-pink">${dramaCount}</div>
                    <div class="text-sm text-gray-600 mt-1">Drama Moments</div>
                </div>
            </div>

            ${AppState.seasonDrama.length > 0 ? `
                <div class="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 rounded-lg p-6">
                    <h4 class="text-xl font-bold mb-4">☕ Season Tea ☕</h4>
                    ${AppState.seasonDrama.slice(-5).reverse().map(drama => `
                        <p class="italic mb-2 text-gray-700">🗣️ ${drama}</p>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// ========================================
// EVENT HANDLERS
// ========================================

function toggleQueenSelection(queenId) {
    const index = AppState.selectedQueens.indexOf(queenId);

    if (index > -1) {
        AppState.selectedQueens.splice(index, 1);
    } else {
        if (AppState.selectedQueens.length < 14) {
            AppState.selectedQueens.push(queenId);
        }
    }

    render();
}

function startCompetition() {
    if (AppState.selectedQueens.length < 10) {
        alert('Please select at least 10 queens!');
        return;
    }

    // Initialize cast
    AppState.cast = AppState.selectedQueens.map(id => {
        const pokemon = POKEMON_DATABASE.find(p => p.id === id);
        return { ...pokemon, relationships: {} };
    });

    // Shuffle cast for random entrance order
    AppState.cast = shuffle(AppState.cast);

    // Initialize track records
    AppState.cast.forEach(queen => {
        AppState.trackRecords[queen.id] = {};
    });

    AppState.currentPhase = 'ENTRANCES';
    render();
}

function nextPhase() {
    const phaseOrder = [
        'ENTRANCES',
        'PROMO',
        'CHALLENGE_SELECT',
        'PRODUCER_ROOM',
        'CHALLENGE_ANNOUNCE',
        'PERFORMANCES',
        'RESULTS',
        'LIPSYNC',
        'ELIMINATION',
        'FINALE',
        'WINNER'
    ];

    const currentIndex = phaseOrder.indexOf(AppState.currentPhase);

    if (currentIndex === -1) return;

    // Special handling
    if (AppState.currentPhase === 'ELIMINATION') {
        if (AppState.cast.length === 4) {
            AppState.currentPhase = 'FINALE';
        } else {
            AppState.currentPhase = 'CHALLENGE_SELECT';
        }
    } else if (AppState.currentPhase === 'FINALE') {
        return;
    } else {
        AppState.currentPhase = phaseOrder[currentIndex + 1];
    }

    render();
}

function selectChallenge(challengeType, challengeName, emoji) {
    // Store challenge info and go to producer room
    AppState.pendingChallenge = {
        type: challengeType,
        name: challengeName,
        emoji: emoji
    };

    AppState.currentPhase = 'PRODUCER_ROOM';
    render();
}

function applyProducerOverrides() {
    // Get producer overrides if any
    const overrides = {};

    const winOverride = document.getElementById('override-win')?.value;
    if (winOverride) overrides.WIN = parseInt(winOverride);

    const high1 = document.getElementById('override-high1')?.value;
    const high2 = document.getElementById('override-high2')?.value;
    const highs = [high1, high2].filter(v => v).map(v => parseInt(v));
    if (highs.length > 0) overrides.HIGH = highs;

    const lowOverride = document.getElementById('override-low')?.value;
    if (lowOverride) overrides.LOW = parseInt(lowOverride);

    const btm1 = document.getElementById('override-btm1')?.value;
    const btm2 = document.getElementById('override-btm2')?.value;
    const btms = [btm1, btm2].filter(v => v).map(v => parseInt(v));
    if (btms.length > 0) overrides.BTM2 = btms;

    const challenge = AppState.pendingChallenge;

    // Calculate placements
    const { placements, performances } = assignPlacements(AppState.cast, challenge.type, overrides);

    // Create episode data
    AppState.currentEpisode++;
    const episodeData = {
        episode: AppState.currentEpisode,
        challengeName: challenge.name,
        challengeType: challenge.type,
        emoji: challenge.emoji,
        placements,
        performances
    };

    AppState.episodeData.push(episodeData);

    // Update track records - ONLY for current cast members
    Object.entries(placements).forEach(([queenId, placement]) => {
        const id = parseInt(queenId);
        const queen = AppState.cast.find(q => q.id === id);

        // Only update track record if queen is still in competition
        if (queen) {
            if (!AppState.trackRecords[id]) {
                AppState.trackRecords[id] = {};
            }
            AppState.trackRecords[id][placement] = (AppState.trackRecords[id][placement] || 0) + 1;
        }
    });

    // Generate drama
    const drama = generateDrama();
    if (drama) {
        AppState.seasonDrama.push(drama);
    }

    AppState.pendingChallenge = null;
    AppState.currentPhase = 'CHALLENGE_ANNOUNCE';
    render();
}

function eliminateQueen(queenId) {
    const queenIndex = AppState.cast.findIndex(q => q.id === queenId);
    if (queenIndex === -1) return;

    const [eliminated] = AppState.cast.splice(queenIndex, 1);
    AppState.eliminated.push(eliminated);

    // Update current episode with elimination
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];
    currentEp.eliminated = eliminated;
    currentEp.placements[eliminated.id] = 'ELIM';

    // Update track record
    AppState.trackRecords[eliminated.id].ELIM = 1;

    // Generate elimination drama
    AppState.seasonDrama.push(`${eliminated.name} was eliminated in a shocking lip sync!`);

    AppState.currentPhase = 'ELIMINATION';
    render();
}

function crownWinner(winnerId) {
    // Set finale placements
    const finaleEpisode = {
        episode: AppState.currentEpisode + 1,
        challengeName: 'Grand Finale',
        challengeType: 'rumix',
        emoji: '👑',
        placements: {},
        performances: []
    };

    // Winner gets WINNER placement
    const winner = AppState.cast.find(q => q.id === winnerId);
    finaleEpisode.placements[winnerId] = 'WINNER';
    AppState.trackRecords[winnerId].WINNER = 1;

    // Others get RUNNER
    AppState.cast.filter(q => q.id !== winnerId).forEach(queen => {
        finaleEpisode.placements[queen.id] = 'RUNNER';
        AppState.trackRecords[queen.id].RUNNER = 1;
        AppState.eliminated.push(queen);
    });

    AppState.episodeData.push(finaleEpisode);

    // Keep only winner in cast
    AppState.cast = [winner];

    AppState.currentPhase = 'WINNER';
    render();
}

// ========================================
// INITIALIZE
// ========================================

render();
