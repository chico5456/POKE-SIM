// ========================================
// POKEMON DATA
// ========================================

const POKEMON_DATABASE = [
    {
        id: 1,
        name: "Gardevoir",
        dexNumber: 282,
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
        dexNumber: 428,
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
        dexNumber: 350,
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
        dexNumber: 763,
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
        dexNumber: 730,
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
        dexNumber: 416,
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
        dexNumber: 671,
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
        dexNumber: 655,
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
        dexNumber: 758,
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
        dexNumber: 115,
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
        dexNumber: 31,
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
        dexNumber: 549,
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
        dexNumber: 576,
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
        dexNumber: 478,
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
        dexNumber: 573,
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
        dexNumber: 429,
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
        dexNumber: 488,
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
        dexNumber: 182,
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
        dexNumber: 38,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
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
        dexNumber: 648,
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
    { name: "Acting Challenge", type: "acting", description: "Show us your dramatic chops!" },
    { name: "Snatch Game", type: "improv", description: "Impersonate a celebrity!" },
    { name: "Stand-Up Comedy", type: "comedy", description: "Make Ru laugh!" },
    { name: "Choreography Challenge", type: "dance", description: "Dance for your life!" },
    { name: "Design Challenge", type: "design", description: "Create a look from scratch!" },
    { name: "Runway Extravaganza", type: "runway", description: "Serve looks!" },
    { name: "Makeover Challenge", type: "makeover", description: "Transform someone else!" },
    { name: "Rusical", type: "rusical", description: "Sing and dance in a musical!" },
    { name: "Girl Groups", type: "rumix", description: "Perform in a girl group!" }
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
    producerOverrides: {}
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

function determineWinner(queen1, queen2, challengeType = 'lipsync') {
    const score1 = calculatePerformance(queen1, challengeType);
    const score2 = calculatePerformance(queen2, challengeType);

    // Add some randomness for drama
    const luck1 = Math.random() * 2;
    const luck2 = Math.random() * 2;

    return (score1 + luck1) > (score2 + luck2) ? queen1 : queen2;
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
        highQueens.forEach(id => placements[id] = 'HIGH');
        assigned += highQueens.length;
    } else {
        for (let i = 0; i < numHigh && assigned < numQueens - numBtm; i++) {
            if (!placements[performances[assigned].queen.id]) {
                placements[performances[assigned].queen.id] = 'HIGH';
            }
            assigned++;
        }
    }

    // BTM2
    const btmQueens = overrides.BTM2 || [];
    if (btmQueens.length > 0) {
        btmQueens.forEach(id => placements[id] = 'BTM2');
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
        <h2>Select Your Cast (Choose 10-14 Queens)</h2>
        <p style="margin: 1rem 0;">Selected: ${selectedCount}/14</p>

        ${selectedCount < 10 ? '<p class="error-message">⚠️ Please select at least 10 queens to continue</p>' : ''}

        <div class="cast-selection">
            ${POKEMON_DATABASE.map(pokemon => `
                <div class="pokemon-card ${AppState.selectedQueens.includes(pokemon.id) ? 'selected' : ''}"
                     onclick="toggleQueenSelection(${pokemon.id})">
                    <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image">
                    <div class="pokemon-name">${pokemon.name}</div>
                    <div class="stats">
                        <div class="stat-row"><span>Acting:</span> <span>${pokemon.stats.acting}</span></div>
                        <div class="stat-row"><span>Comedy:</span> <span>${pokemon.stats.comedy}</span></div>
                        <div class="stat-row"><span>Dance:</span> <span>${pokemon.stats.dance}</span></div>
                        <div class="stat-row"><span>Design:</span> <span>${pokemon.stats.design}</span></div>
                        <div class="stat-row"><span>Runway:</span> <span>${pokemon.stats.runway}</span></div>
                        <div class="stat-row"><span>Lipsync:</span> <span>${pokemon.stats.lipsync}</span></div>
                    </div>
                    ${AppState.selectedQueens.includes(pokemon.id) ? '<p style="margin-top: 0.5rem; color: var(--accent-color); font-weight: 700;">✓ SELECTED</p>' : ''}
                </div>
            `).join('')}
        </div>

        <div class="nav-buttons">
            ${selectedCount >= 10 ? '<button class="button" onclick="startCompetition()">START COMPETITION</button>' : ''}
        </div>

        ${selectedCount > 0 ? `<div class="selection-count">${selectedCount} Queens Selected</div>` : ''}
    `;
}

function renderEntrances() {
    return `
        <h2>🌟 Queen Entrances 🌟</h2>
        <div class="phase-container">
            <div class="entrance-sequence">
                ${AppState.cast.map((queen, index) => `
                    <div class="entrance-item" style="animation-delay: ${index * 0.1}s;">
                        <img src="${queen.image}" alt="${queen.name}" class="entrance-image">
                        <div>
                            <div class="pokemon-name">${queen.name}</div>
                            <div class="entrance-quote">"${queen.entranceQuote}"</div>
                            ${queen.storylines.map(s => `<span class="storyline-tag">${s}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="nav-buttons">
            <button class="button" onclick="nextPhase()">CONTINUE TO PROMO</button>
        </div>
    `;
}

function renderPromo() {
    return `
        <h2>📸 Meet the Queens 📸</h2>
        <div class="phase-container">
            <div class="promo-grid">
                ${AppState.cast.map(queen => `
                    <div class="promo-card">
                        <img src="${queen.image}" alt="${queen.name}">
                        <h3>${queen.name}</h3>
                        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${queen.personality}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        ${renderTrackRecordTable()}
        ${renderSeasonStats()}

        <div class="nav-buttons">
            <button class="button" onclick="nextPhase()">START EPISODE 1</button>
        </div>
    `;
}

function renderChallengeSelect() {
    const episode = AppState.currentEpisode;
    const queensLeft = AppState.cast.length;

    return `
        <h2>🎬 Episode ${episode} 🎬</h2>
        <p style="text-align: center; font-size: 1.2rem; margin: 1rem 0;">
            ${queensLeft} Queens Remain
        </p>

        <div class="phase-container">
            <h3>Select This Week's Challenge:</h3>
            <div class="challenge-selector">
                ${CHALLENGES.map(challenge => `
                    <div class="challenge-card" onclick="selectChallenge('${challenge.type}', '${challenge.name}')">
                        <h3>${challenge.name}</h3>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem;">${challenge.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        ${renderProducerRoom()}
        ${renderTrackRecordTable()}
        ${renderSeasonStats()}
    `;
}

function renderChallengeAnnounce() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    return `
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">🎬 Episode ${AppState.currentEpisode} 🎬</h2>

        <!-- Challenge Banner -->
        <div style="background: linear-gradient(135deg, #FF69B4 0%, #FF1493 50%, #C71585 100%); padding: 3rem 2rem; border-radius: 16px; text-align: center; box-shadow: 0 8px 20px rgba(255, 20, 147, 0.4); margin-bottom: 2rem; border: 3px solid rgba(255, 255, 255, 0.3);">
            <div style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); padding: 2rem; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.2);">
                <h3 style="font-size: 2.5rem; color: white; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4); margin-bottom: 1rem; letter-spacing: 2px;">
                    ✨ ${currentEp.challengeName} ✨
                </h3>
                <p style="font-size: 1.3rem; color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); opacity: 0.95;">
                    This week's ${currentEp.challengeType} challenge will test the queens' skills!
                </p>
            </div>
        </div>

        <!-- Competing Queens -->
        <div class="phase-container">
            <h3 style="text-align: center; font-size: 1.5rem; margin-bottom: 1.5rem;">👑 Competing Queens 👑</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                ${AppState.cast.map(q => `
                    <div style="text-align: center; padding: 1rem; background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 20, 147, 0.1) 100%); border-radius: 12px; border: 3px solid rgba(255, 105, 180, 0.3); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px) scale(1.05)'; this.style.boxShadow='0 8px 16px rgba(255, 105, 180, 0.4)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
                        <img src="${q.image}" alt="${q.name}" style="width: 96px; height: 96px; object-fit: contain; image-rendering: pixelated; margin: 0 auto; filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));">
                        <div style="font-weight: 700; font-size: 0.95rem; margin-top: 0.75rem; color: #FF1493;">${q.name}</div>
                        <div style="font-size: 0.75rem; opacity: 0.7; margin-top: 0.25rem;">${currentEp.challengeType}: ${q.stats[currentEp.challengeType]}/10</div>
                    </div>
                `).join('')}
            </div>

            ${AppState.seasonDrama.length > 0 ? `
                <div style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 200, 0, 0.15) 100%); padding: 2rem; border-radius: 12px; margin-top: 2rem; border-left: 5px solid gold; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 2rem;">☕</span> Workroom Tea
                    </h3>
                    ${AppState.seasonDrama.slice(-3).map(drama => `
                        <div style="padding: 1rem; margin: 0.75rem 0; background: rgba(255, 255, 255, 0.6); border-radius: 8px; border-left: 3px solid gold; font-style: italic;">
                            <span style="font-size: 1.2rem; margin-right: 0.5rem;">🗣️</span>${drama}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <div class="nav-buttons">
            <button class="button" onclick="nextPhase()" style="font-size: 1.2rem; padding: 1rem 2rem; background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%); box-shadow: 0 4px 12px rgba(255, 20, 147, 0.4); transform: scale(1.05);">
                🎭 SEE PERFORMANCES 🎭
            </button>
        </div>
    `;
}

function renderPerformances() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    return `
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">🎭 ${currentEp.challengeName} Performances 🎭</h2>

        <div class="phase-container">
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                ${currentEp.performances.map((perf, index) => {
                    const scoreLevel = perf.score >= 7 ? 'high' : perf.score >= 5 ? 'mid' : 'low';
                    const bgColor = scoreLevel === 'high' ? 'rgba(144, 238, 144, 0.15)' : scoreLevel === 'mid' ? 'rgba(200, 200, 200, 0.15)' : 'rgba(255, 100, 100, 0.15)';
                    const borderColor = scoreLevel === 'high' ? 'lightgreen' : scoreLevel === 'mid' ? '#ccc' : 'salmon';
                    const emoji = scoreLevel === 'high' ? '⭐' : scoreLevel === 'mid' ? '👍' : '😬';

                    return `
                        <div style="display: flex; gap: 1.5rem; padding: 1.5rem; background: ${bgColor}; border-radius: 12px; border-left: 5px solid ${borderColor}; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); align-items: center; animation: slideIn 0.5s ease ${index * 0.1}s both;">
                            <div style="flex-shrink: 0;">
                                <img src="${perf.queen.image}" alt="${perf.queen.name}" style="width: 100px; height: 100px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)); border-radius: 12px; background: white; padding: 0.5rem;">
                            </div>
                            <div style="flex: 1;">
                                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                                    <h3 style="font-size: 1.4rem; color: var(--accent-color); margin: 0;">${perf.queen.name}</h3>
                                    <span style="font-size: 1.5rem;">${emoji}</span>
                                </div>
                                <p style="font-size: 1rem; line-height: 1.6; margin: 0;">${perf.description}</p>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="nav-buttons">
            <button class="button" onclick="nextPhase()" style="font-size: 1.2rem; padding: 1rem 2rem; background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%); box-shadow: 0 4px 12px rgba(255, 20, 147, 0.4);">
                👑 JUDGING & RESULTS 👑
            </button>
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
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">👑 Episode ${AppState.currentEpisode} Results 👑</h2>

        <div class="phase-container">
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                ${winQueen ? `
                    <div style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 200, 0, 0.2) 100%); padding: 2.5rem; border-radius: 16px; border: 4px solid gold; box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4); animation: pulse 2s infinite;">
                        <h3 style="text-align: center; font-size: 2rem; color: goldenrod; margin-bottom: 1.5rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">
                            🏆 CHALLENGE WINNER 🏆
                        </h3>
                        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap;">
                            <div style="text-align: center; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); border: 3px solid gold;">
                                <img src="${winQueen.image}" alt="${winQueen.name}" style="width: 150px; height: 150px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 6px 12px rgba(255, 215, 0, 0.5)); margin-bottom: 1rem;">
                                <div style="font-size: 1.8rem; font-weight: 700; color: goldenrod;">${winQueen.name}</div>
                                <div style="font-size: 1.2rem; margin-top: 0.5rem;">🏆 Condragulations! 🏆</div>
                            </div>
                        </div>
                    </div>
                ` : ''}

                ${highQueens.length > 0 ? `
                    <div style="background: rgba(144, 238, 144, 0.15); padding: 2rem; border-radius: 16px; border: 3px solid lightgreen; box-shadow: 0 4px 16px rgba(144, 238, 144, 0.3);">
                        <h3 style="text-align: center; font-size: 1.8rem; color: green; margin-bottom: 1.5rem;">⭐ TOP QUEENS ⭐</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
                            ${highQueens.map(q => `
                                <div style="text-align: center; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border: 2px solid lightgreen;">
                                    <img src="${q.image}" alt="${q.name}" style="width: 120px; height: 120px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 4px 8px rgba(144, 238, 144, 0.5)); margin-bottom: 1rem;">
                                    <div style="font-size: 1.3rem; font-weight: 700; color: green;">${q.name}</div>
                                    <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.8;">Great work!</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${safeQueens.length > 0 ? `
                    <div style="background: rgba(200, 200, 200, 0.1); padding: 2rem; border-radius: 16px; border: 2px solid #ccc;">
                        <h3 style="text-align: center; font-size: 1.5rem; margin-bottom: 1.5rem;">✓ SAFE</h3>
                        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                            ${safeQueens.map(q => `
                                <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1.25rem; background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); border: 2px solid #ddd;">
                                    <img src="${q.image}" alt="${q.name}" style="width: 50px; height: 50px; object-fit: contain; image-rendering: pixelated;">
                                    <span style="font-weight: 700; font-size: 1rem;">${q.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${lowQueens.length > 0 ? `
                    <div style="background: rgba(255, 200, 100, 0.15); padding: 2rem; border-radius: 16px; border: 3px solid orange; box-shadow: 0 4px 16px rgba(255, 165, 0, 0.3);">
                        <h3 style="text-align: center; font-size: 1.8rem; color: darkorange; margin-bottom: 1.5rem;">⚠️ LOW ⚠️</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
                            ${lowQueens.map(q => `
                                <div style="text-align: center; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border: 2px solid orange;">
                                    <img src="${q.image}" alt="${q.name}" style="width: 120px; height: 120px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 4px 8px rgba(255, 165, 0, 0.5)); margin-bottom: 1rem; opacity: 0.85;">
                                    <div style="font-size: 1.3rem; font-weight: 700; color: darkorange;">${q.name}</div>
                                    <div style="font-size: 0.95rem; margin-top: 0.5rem; opacity: 0.7;">Safe... for now</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${btmQueens.length > 0 ? `
                    <div style="background: rgba(255, 100, 100, 0.15); padding: 2.5rem; border-radius: 16px; border: 4px solid darkred; box-shadow: 0 8px 24px rgba(139, 0, 0, 0.4);">
                        <h3 style="text-align: center; font-size: 2rem; color: darkred; margin-bottom: 1.5rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">
                            💔 BOTTOM TWO 💔
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                            ${btmQueens.map(q => `
                                <div style="text-align: center; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); border: 3px solid darkred;">
                                    <img src="${q.image}" alt="${q.name}" style="width: 140px; height: 140px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 6px 12px rgba(139, 0, 0, 0.5)); margin-bottom: 1rem;">
                                    <div style="font-size: 1.5rem; font-weight: 700; color: darkred;">${q.name}</div>
                                    <div style="font-size: 1.1rem; margin-top: 0.5rem; font-style: italic; opacity: 0.8;">Lip sync for your life!</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>

        ${renderTrackRecordTable()}

        <div class="nav-buttons">
            <button class="button" onclick="nextPhase()" style="font-size: 1.2rem; padding: 1rem 2rem; background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%); box-shadow: 0 4px 12px rgba(139, 0, 0, 0.4);">
                💋 LIP SYNC FOR YOUR LIFE 💋
            </button>
        </div>

        <style>
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
        </style>
    `;
}

function renderLipsync() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];
    const btmQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'BTM2');

    if (btmQueens.length !== 2) {
        return '<p>Error: Expected 2 queens in bottom</p>';
    }

    return `
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">💋 Lip Sync For Your Life 💋</h2>

        <div style="background: linear-gradient(135deg, rgba(255, 20, 147, 0.15) 0%, rgba(199, 21, 133, 0.15) 100%); padding: 3rem 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(255, 20, 147, 0.3); border: 3px solid rgba(255, 20, 147, 0.3); margin-bottom: 2rem;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; font-style: italic; color: #C71585; margin-bottom: 1rem;">
                    "${randomChoice(LIPSYNC_DESCRIPTIONS)}"
                </h3>
            </div>

            <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 2rem; align-items: center; margin-bottom: 3rem;">
                <!-- Queen 1 -->
                <div style="text-align: center; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); border: 3px solid #FF1493; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    <img src="${btmQueens[0].image}" alt="${btmQueens[0].name}" style="width: 160px; height: 160px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 8px 16px rgba(255, 20, 147, 0.5)); margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.8rem; font-weight: 700; color: #FF1493; margin-bottom: 0.75rem;">${btmQueens[0].name}</h3>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; background: linear-gradient(135deg, rgba(255, 20, 147, 0.1) 0%, rgba(255, 105, 180, 0.1) 100%); border-radius: 8px;">
                        <span style="font-weight: 700; font-size: 1.1rem;">Lip Sync:</span>
                        <div style="display: flex; gap: 0.25rem;">
                            ${Array(10).fill(0).map((_, i) => `
                                <span style="font-size: 1.2rem;">${i < btmQueens[0].stats.lipsync ? '⭐' : '☆'}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- VS -->
                <div style="font-size: 3.5rem; font-weight: 700; color: #FF1493; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); transform: rotate(-5deg); animation: shake 0.5s infinite;">
                    VS
                </div>

                <!-- Queen 2 -->
                <div style="text-align: center; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); border: 3px solid #FF1493; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    <img src="${btmQueens[1].image}" alt="${btmQueens[1].name}" style="width: 160px; height: 160px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 8px 16px rgba(255, 20, 147, 0.5)); margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.8rem; font-weight: 700; color: #FF1493; margin-bottom: 0.75rem;">${btmQueens[1].name}</h3>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; background: linear-gradient(135deg, rgba(255, 20, 147, 0.1) 0%, rgba(255, 105, 180, 0.1) 100%); border-radius: 8px;">
                        <span style="font-weight: 700; font-size: 1.1rem;">Lip Sync:</span>
                        <div style="display: flex; gap: 0.25rem;">
                            ${Array(10).fill(0).map((_, i) => `
                                <span style="font-size: 1.2rem;">${i < btmQueens[1].stats.lipsync ? '⭐' : '☆'}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div style="text-align: center; padding: 2rem; background: rgba(139, 0, 0, 0.1); border-radius: 12px; border: 2px solid darkred;">
                <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: darkred;">👑 Who Should Stay? 👑</h3>
                <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
                    <button class="button" onclick="eliminateQueen(${btmQueens[1].id})" style="font-size: 1.2rem; padding: 1.25rem 2.5rem; background: linear-gradient(135deg, #32CD32 0%, #228B22 100%); box-shadow: 0 4px 16px rgba(50, 205, 50, 0.4); border: 3px solid white;">
                        ✅ ${btmQueens[0].name.toUpperCase()} SHANTAY YOU STAY
                    </button>
                    <button class="button" onclick="eliminateQueen(${btmQueens[0].id})" style="font-size: 1.2rem; padding: 1.25rem 2.5rem; background: linear-gradient(135deg, #32CD32 0%, #228B22 100%); box-shadow: 0 4px 16px rgba(50, 205, 50, 0.4); border: 3px solid white;">
                        ✅ ${btmQueens[1].name.toUpperCase()} SHANTAY YOU STAY
                    </button>
                </div>
            </div>
        </div>

        ${renderTrackRecordTable()}

        <style>
            @keyframes shake {
                0%, 100% { transform: rotate(-5deg); }
                50% { transform: rotate(5deg); }
            }
        </style>
    `;
}

function renderElimination() {
    const eliminatedQueen = AppState.eliminated[AppState.eliminated.length - 1];
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    return `
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">😢 Elimination 😢</h2>

        <div style="background: linear-gradient(135deg, rgba(50, 50, 50, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%); padding: 3rem 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); border: 3px solid rgba(50, 50, 50, 0.3); margin-bottom: 2rem;">
            <div style="text-align: center; padding: 2rem;">
                <div style="display: inline-block; padding: 2rem; background: white; border-radius: 20px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); border: 4px solid #555; margin-bottom: 2rem; filter: grayscale(50%);">
                    <img src="${eliminatedQueen.image}" style="width: 200px; height: 200px; object-fit: contain; image-rendering: pixelated; filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5));" alt="${eliminatedQueen.name}">
                </div>
                <h3 style="font-size: 2.5rem; margin: 1.5rem 0; color: #555; font-weight: 700;">
                    ${eliminatedQueen.name}
                </h3>
                <p style="font-size: 1.8rem; font-style: italic; margin: 1.5rem 0; color: #FF1493; font-weight: 700;">
                    "Now, sashay away..."
                </p>
                <p style="font-size: 1.2rem; margin: 1rem 0; opacity: 0.8;">
                    Eliminated in Episode ${AppState.currentEpisode}
                </p>
                <div style="background: rgba(255, 215, 0, 0.1); padding: 2rem; border-radius: 12px; margin: 2rem auto; max-width: 700px; border-left: 4px solid gold;">
                    <p style="font-style: italic; font-size: 1.1rem; line-height: 1.6;">
                        "${eliminatedQueen.name} gave us ${currentEp.challengeName} that we won't forget.
                        Their journey ends here, but their legacy continues. You'll always be our queen! 👑"
                    </p>
                </div>
            </div>
        </div>

        ${renderTrackRecordTable()}
        ${renderSeasonStats()}

        <div class="nav-buttons">
            ${AppState.cast.length === 4 ?
                '<button class="button" onclick="nextPhase()" style="font-size: 1.3rem; padding: 1.25rem 2.5rem; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); box-shadow: 0 4px 16px rgba(255, 215, 0, 0.5);">✨ GRAND FINALE ✨</button>' :
                '<button class="button" onclick="nextPhase()" style="font-size: 1.2rem; padding: 1rem 2rem;">NEXT EPISODE</button>'
            }
        </div>
    `;
}

function renderFinale() {
    return `
        <h2>✨ GRAND FINALE ✨</h2>
        <div class="finale-stage">
            <h3 style="font-size: 2.5rem; margin-bottom: 2rem;">Top 4 Final Performances!</h3>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                Our final four queens compete in the ultimate Rumix challenge!
            </p>
        </div>

        <div class="phase-container">
            <div class="top4-grid">
                ${AppState.cast.map(queen => `
                    <div class="finalist-card">
                        <img src="${queen.image}" style="width: 100%; height: 150px; object-fit: contain;">
                        <h3 style="margin: 1rem 0;">${queen.name}</h3>
                        <div class="stats">
                            ${Object.entries(AppState.trackRecords[queen.id] || {})
                                .filter(([k]) => k !== 'SAFE')
                                .map(([placement, count]) => `
                                    <div class="stat-row">
                                        <span class="placement-badge ${placement}">${placement}</span>
                                        <span>×${count}</span>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        ${renderTrackRecordTable()}
        ${renderSeasonStats()}

        <div class="nav-buttons">
            <h3>Who should win?</h3>
            ${AppState.cast.map(queen => `
                <button class="button" onclick="crownWinner(${queen.id})">${queen.name}</button>
            `).join('')}
        </div>
    `;
}

function renderWinner() {
    const winner = AppState.cast[0]; // Winner is the only one left

    return `
        <h2>👑 AMERICA'S NEXT DRAG SUPERSTAR 👑</h2>
        <div class="finale-stage">
            <div class="crown-icon">👑</div>
            <img src="${winner.image}" style="width: 300px; height: 300px; object-fit: contain; margin: 2rem auto;">
            <h3 style="font-size: 3rem; margin: 2rem 0;">
                ${winner.name}
            </h3>
            <p style="font-size: 1.5rem;">
                Congratulations, you're a WINNER baby!
            </p>
        </div>

        ${renderTrackRecordTable()}
        ${renderSeasonStats()}

        <div class="nav-buttons">
            <button class="button" onclick="location.reload()">START NEW SEASON</button>
        </div>
    `;
}

function renderTrackRecordTable() {
    if (AppState.episodeData.length === 0) {
        return '';
    }

    // Get all queens (current + eliminated) sorted by placement
    const allQueens = [...AppState.cast, ...AppState.eliminated];

    // Sort: current queens by track record, then eliminated in reverse order of elimination
    const sortedQueens = [
        ...AppState.cast.sort((a, b) => {
            const aWins = (AppState.trackRecords[a.id]?.WIN || 0);
            const bWins = (AppState.trackRecords[b.id]?.WIN || 0);
            if (aWins !== bWins) return bWins - aWins;

            const aHighs = (AppState.trackRecords[a.id]?.HIGH || 0);
            const bHighs = (AppState.trackRecords[b.id]?.HIGH || 0);
            return bHighs - aHighs;
        }),
        ...[...AppState.eliminated].reverse()
    ];

    return `
        <div class="track-record-table">
            <h3 style="padding: 1rem; background: white;">📊 Track Record</h3>
            <table>
                <thead>
                    <tr>
                        <th>Queen</th>
                        ${AppState.episodeData.map((ep, i) => `<th>E${i + 1}</th>`).join('')}
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedQueens.map(queen => {
                        const isEliminated = AppState.eliminated.includes(queen);
                        return `
                            <tr style="${isEliminated ? 'opacity: 0.6;' : ''}">
                                <td><strong>${queen.name}</strong></td>
                                ${AppState.episodeData.map(ep => {
                                    const placement = ep.placements[queen.id];
                                    if (!placement) {
                                        // Queen was already eliminated - show blank
                                        return `<td style="background: #f5f5f5;"></td>`;
                                    }
                                    return `<td><span class="placement-badge ${placement}">${placement}</span></td>`;
                                }).join('')}
                                <td style="font-size: 0.75rem;">
                                    ${Object.entries(AppState.trackRecords[queen.id] || {})
                                        .filter(([k]) => k !== 'SAFE')
                                        .map(([k, v]) => `${k}:${v}`)
                                        .join(' | ') || 'No data'}
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderSeasonStats() {
    const totalEpisodes = AppState.episodeData.length;
    const queensRemaining = AppState.cast.length;
    const queensEliminated = AppState.eliminated.length;
    const dramaCount = AppState.seasonDrama.length;

    return `
        <div class="season-stats">
            <h3>📈 Season Statistics</h3>
            <div class="stat-grid">
                <div class="stat-card">
                    <div class="stat-value">${totalEpisodes}</div>
                    <div class="stat-label">Episodes</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${queensRemaining}</div>
                    <div class="stat-label">Queens Remaining</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${queensEliminated}</div>
                    <div class="stat-label">Eliminated</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${dramaCount}</div>
                    <div class="stat-label">Drama Moments</div>
                </div>
            </div>

            ${AppState.seasonDrama.length > 0 ? `
                <div class="drama-box" style="margin-top: 2rem;">
                    <h3>☕ Season Tea ☕</h3>
                    ${AppState.seasonDrama.slice(-5).reverse().map(drama => `
                        <p class="tea-spill">🗣️ ${drama}</p>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function renderProducerRoom() {
    const currentEp = AppState.currentEpisode;
    const queensInComp = AppState.cast;

    return `
        <div class="producer-room" style="background: linear-gradient(135deg, rgba(147, 112, 219, 0.15) 0%, rgba(138, 43, 226, 0.15) 100%); padding: 2rem; border-radius: 16px; margin: 3rem 0; border: 3px solid rgba(147, 112, 219, 0.3);">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">🎬 Producer's Room 🎬</h3>
                <p style="font-size: 1rem; opacity: 0.9;">Override placements for Episode ${currentEp + 1} before selecting the challenge</p>
                <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">(Leave selections on "Auto" for randomized results)</p>
            </div>

            <div class="episode-override" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <!-- WIN -->
                <div style="margin-bottom: 2rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 200, 0, 0.1) 100%); border-radius: 10px; border-left: 5px solid gold;">
                    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                        <span style="font-size: 2rem; margin-right: 1rem;">🏆</span>
                        <div>
                            <label style="font-weight: 700; font-size: 1.2rem; color: goldenrod;">CHALLENGE WINNER</label>
                            <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.2rem;">Who should win this episode?</p>
                        </div>
                    </div>
                    <select class="placement-select" id="override-win" style="width: 100%; padding: 0.75rem; font-size: 1rem; border: 2px solid gold; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                        <option value="">⚡ Auto (Based on Stats)</option>
                        ${queensInComp.map(q => `<option value="${q.id}">🏆 ${q.name}</option>`).join('')}
                    </select>
                </div>

                <!-- HIGH -->
                <div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(144, 238, 144, 0.1); border-radius: 10px; border-left: 5px solid lightgreen;">
                    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                        <span style="font-size: 2rem; margin-right: 1rem;">⭐</span>
                        <div>
                            <label style="font-weight: 700; font-size: 1.2rem; color: green;">TOP QUEENS</label>
                            <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.2rem;">Who should be in the top (safe and praised)?</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <select class="placement-select" id="override-high1" style="padding: 0.75rem; font-size: 1rem; border: 2px solid lightgreen; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">⭐ ${q.name}</option>`).join('')}
                        </select>
                        <select class="placement-select" id="override-high2" style="padding: 0.75rem; font-size: 1rem; border: 2px solid lightgreen; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">⭐ ${q.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                ${queensInComp.length > 5 ? `
                    <!-- LOW -->
                    <div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255, 200, 100, 0.1); border-radius: 10px; border-left: 5px solid orange;">
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <span style="font-size: 2rem; margin-right: 1rem;">⚠️</span>
                            <div>
                                <label style="font-weight: 700; font-size: 1.2rem; color: darkorange;">LOW PLACEMENT</label>
                                <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.2rem;">Safe but critiqued by judges</p>
                            </div>
                        </div>
                        <select class="placement-select" id="override-low" style="width: 100%; padding: 0.75rem; font-size: 1rem; border: 2px solid orange; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">⚠️ ${q.name}</option>`).join('')}
                        </select>
                    </div>
                ` : ''}

                <!-- BTM2 -->
                <div style="margin-bottom: 0; padding: 1.5rem; background: rgba(255, 100, 100, 0.1); border-radius: 10px; border-left: 5px solid darkred;">
                    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                        <span style="font-size: 2rem; margin-right: 1rem;">💔</span>
                        <div>
                            <label style="font-weight: 700; font-size: 1.2rem; color: darkred;">BOTTOM TWO</label>
                            <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.2rem;">Who will lip sync for their life?</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <select class="placement-select" id="override-btm1" style="padding: 0.75rem; font-size: 1rem; border: 2px solid darkred; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">💔 ${q.name}</option>`).join('')}
                        </select>
                        <select class="placement-select" id="override-btm2" style="padding: 0.75rem; font-size: 1rem; border: 2px solid darkred; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">💔 ${q.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <!-- Queens Reference -->
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #eee;">
                    <h4 style="font-size: 1.1rem; margin-bottom: 1rem; text-align: center; font-weight: 700;">👑 Queens Competing This Week</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;">
                        ${queensInComp.map(q => `
                            <div style="text-align: center; padding: 0.75rem; background: linear-gradient(135deg, rgba(255, 105, 180, 0.05) 0%, rgba(255, 20, 147, 0.05) 100%); border-radius: 8px; border: 2px solid rgba(255, 105, 180, 0.2);">
                                <img src="${q.image}" alt="${q.name}" style="width: 80px; height: 80px; object-fit: contain; image-rendering: pixelated; margin: 0 auto;">
                                <div style="font-weight: 700; font-size: 0.85rem; margin-top: 0.5rem;">${q.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
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
        // Don't auto-advance, wait for winner selection
        return;
    } else {
        AppState.currentPhase = phaseOrder[currentIndex + 1];
    }

    render();
}

function selectChallenge(challengeType, challengeName) {
    // Get producer overrides if any
    const overrides = {};

    const winOverride = document.getElementById('override-win')?.value;
    if (winOverride) overrides.WIN = parseInt(winOverride);

    const high1 = document.getElementById('override-high1')?.value;
    const high2 = document.getElementById('override-high2')?.value;
    if (high1 || high2) {
        overrides.HIGH = [high1, high2].filter(v => v).map(v => parseInt(v));
    }

    const lowOverride = document.getElementById('override-low')?.value;
    if (lowOverride) overrides.LOW = parseInt(lowOverride);

    const btm1 = document.getElementById('override-btm1')?.value;
    const btm2 = document.getElementById('override-btm2')?.value;
    if (btm1 || btm2) {
        overrides.BTM2 = [btm1, btm2].filter(v => v).map(v => parseInt(v));
    }

    // Calculate placements
    const { placements, performances } = assignPlacements(AppState.cast, challengeType, overrides);

    // Create episode data
    AppState.currentEpisode++;
    const episodeData = {
        episode: AppState.currentEpisode,
        challengeName,
        challengeType,
        placements,
        performances
    };

    AppState.episodeData.push(episodeData);

    // Update track records
    Object.entries(placements).forEach(([queenId, placement]) => {
        const id = parseInt(queenId);
        if (!AppState.trackRecords[id]) {
            AppState.trackRecords[id] = {};
        }
        AppState.trackRecords[id][placement] = (AppState.trackRecords[id][placement] || 0) + 1;
    });

    // Generate drama
    const drama = generateDrama();
    if (drama) {
        AppState.seasonDrama.push(drama);
    }

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
