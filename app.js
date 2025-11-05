// ========================================
// PROFESSIONAL DESIGN SYSTEM
// ========================================

// Challenge-specific visual themes with professional styling
const CHALLENGE_THEMES = {
    'acting': {
        name: '🎭 Acting Challenge',
        gradient: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)',
        emoji: '🎭',
        confettiColors: ['#9C27B0', '#E91E63', '#F06292']
    },
    'improv': {
        name: '🃏 Snatch Game',
        gradient: 'linear-gradient(135deg, #FF6F00 0%, #FFC107 100%)',
        emoji: '🃏',
        confettiColors: ['#FF6F00', '#FFC107', '#FFD54F']
    },
    'comedy': {
        name: '😂 Stand-Up Comedy',
        gradient: 'linear-gradient(135deg, #00BCD4 0%, #03A9F4 100%)',
        emoji: '😂',
        confettiColors: ['#00BCD4', '#03A9F4', '#4FC3F7']
    },
    'dance': {
        name: '💃 Choreography Challenge',
        gradient: 'linear-gradient(135deg, #FF1744 0%, #F50057 100%)',
        emoji: '💃',
        confettiColors: ['#FF1744', '#F50057', '#FF4081']
    },
    'design': {
        name: '✂️ Design Challenge',
        gradient: 'linear-gradient(135deg, #7B1FA2 0%, #9C27B0 100%)',
        emoji: '✂️',
        confettiColors: ['#7B1FA2', '#9C27B0', '#BA68C8']
    },
    'runway': {
        name: '👗 Runway Extravaganza',
        gradient: 'linear-gradient(135deg, #C2185B 0%, #E91E63 100%)',
        emoji: '👗',
        confettiColors: ['#C2185B', '#E91E63', '#F06292']
    },
    'makeover': {
        name: '💄 Makeover Challenge',
        gradient: 'linear-gradient(135deg, #D81B60 0%, #F06292 100%)',
        emoji: '💄',
        confettiColors: ['#D81B60', '#F06292', '#F48FB1']
    },
    'rusical': {
        name: '🎤 Rusical',
        gradient: 'linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%)',
        emoji: '🎤',
        confettiColors: ['#6A1B9A', '#8E24AA', '#AB47BC']
    },
    'rumix': {
        name: '🎵 Girl Groups',
        gradient: 'linear-gradient(135deg, #AD1457 0%, #C2185B 100%)',
        emoji: '🎵',
        confettiColors: ['#AD1457', '#C2185B', '#E91E63']
    },
    'lipsync': {
        name: '💋 Lip Sync',
        gradient: 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 100%)',
        emoji: '💋',
        confettiColors: ['#B71C1C', '#D32F2F', '#E57373']
    },
    // NEW CHALLENGE TYPES! MORE VARIETY!
    'roast': {
        name: '🔥 Roast',
        gradient: 'linear-gradient(135deg, #FF5722 0%, #FF9800 100%)',
        emoji: '🔥',
        confettiColors: ['#FF5722', '#FF9800', '#FFB74D']
    },
    'ball': {
        name: '✨ Ball Challenge',
        gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        emoji: '✨',
        confettiColors: ['#FFD700', '#FFA500', '#FFD54F']
    },
    'branding': {
        name: '📱 Branding Challenge',
        gradient: 'linear-gradient(135deg, #3F51B5 0%, #2196F3 100%)',
        emoji: '📱',
        confettiColors: ['#3F51B5', '#2196F3', '#64B5F6']
    },
    'singing': {
        name: '🎙️ Singing Challenge',
        gradient: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
        emoji: '🎙️',
        confettiColors: ['#E91E63', '#9C27B0', '#BA68C8']
    },
    'hosting': {
        name: '🎬 Talk Show Challenge',
        gradient: 'linear-gradient(135deg, #00897B 0%, #00BCD4 100%)',
        emoji: '🎬',
        confettiColors: ['#00897B', '#00BCD4', '#4DD0E1']
    },
    'commercial': {
        name: '📺 Commercial Challenge',
        gradient: 'linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%)',
        emoji: '📺',
        confettiColors: ['#5E35B1', '#7E57C2', '#9575CD']
    },
    'talent': {
        name: '⭐ Talent Show',
        gradient: 'linear-gradient(135deg, #F50057 0%, #FF4081 100%)',
        emoji: '⭐',
        confettiColors: ['#F50057', '#FF4081', '#FF80AB']
    },
    'wrestling': {
        name: '🤼 Wrestling Challenge',
        gradient: 'linear-gradient(135deg, #D32F2F 0%, #F44336 100%)',
        emoji: '🤼',
        confettiColors: ['#D32F2F', '#F44336', '#E57373']
    }
};

// ========================================
// POKEMON DATA
// ========================================

const POKEMON_DATABASE = [
    {
        id: 1,
        name: "Gardevoir",
        dexNumber: 282,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png",
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
    },
    // NEW QUEENS - EXPANDING THE ROSTER!
    {
        id: 21,
        name: "Hatterene",
        dexNumber: 858,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png",
        stats: {
            acting: 9,
            improv: 7,
            comedy: 6,
            dance: 8,
            design: 10,
            runway: 10,
            lipsync: 8,
            makeover: 9,
            rusical: 8,
            rumix: 7
        },
        personality: "High fashion diva, avant-garde designer",
        entranceQuote: "Silence! The fashion has arrived!",
        storylines: ["Avant-Garde", "Diva Behavior"],
        relationships: {}
    },
    {
        id: 22,
        name: "Roserade",
        dexNumber: 407,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png",
        stats: {
            acting: 8,
            improv: 9,
            comedy: 7,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Elegant and deadly, master manipulator",
        entranceQuote: "Beauty AND thorns, darling!",
        storylines: ["Villain Edit", "Strategic Genius"],
        relationships: {}
    },
    {
        id: 23,
        name: "Sylveon",
        dexNumber: 700,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
        stats: {
            acting: 7,
            improv: 8,
            comedy: 8,
            dance: 9,
            design: 8,
            runway: 9,
            lipsync: 9,
            makeover: 9,
            rusical: 9,
            rumix: 9
        },
        personality: "Sweet and charming, secretly competitive",
        entranceQuote: "Ribbons, bows, and ready to slay the competition!",
        storylines: ["Sweetheart", "Secretly Cutthroat"],
        relationships: {}
    },
    {
        id: 24,
        name: "Lurantis",
        dexNumber: 754,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 6,
            dance: 8,
            design: 9,
            runway: 10,
            lipsync: 7,
            makeover: 9,
            rusical: 7,
            rumix: 8
        },
        personality: "Fashion forward, runway specialist",
        entranceQuote: "I'm not a bug, I'm a LOOK!",
        storylines: ["Look Queen", "Misunderstood"],
        relationships: {}
    },
    {
        id: 25,
        name: "Jynx",
        dexNumber: 124,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
        stats: {
            acting: 10,
            improv: 10,
            comedy: 9,
            dance: 9,
            design: 7,
            runway: 8,
            lipsync: 10,
            makeover: 8,
            rusical: 10,
            rumix: 9
        },
        personality: "Old school diva, veteran performer",
        entranceQuote: "Honey, I've been doing this since Gen 1!",
        storylines: ["Legendary Diva", "Old School"],
        relationships: {}
    },
    {
        id: 26,
        name: "Alcremie",
        dexNumber: 869,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png",
        stats: {
            acting: 7,
            improv: 8,
            comedy: 9,
            dance: 8,
            design: 9,
            runway: 8,
            lipsync: 7,
            makeover: 10,
            rusical: 8,
            rumix: 8
        },
        personality: "Sweet and creative, design specialist",
        entranceQuote: "Life is sweet, and so am I!",
        storylines: ["Design Star", "Sweetness & Light"],
        relationships: {}
    },
    {
        id: 27,
        name: "Goodra",
        dexNumber: 706,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 8,
            dance: 7,
            design: 7,
            runway: 7,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Big heart, emotional journey",
        entranceQuote: "I'm soft on the outside, fierce on the inside!",
        storylines: ["Emotional Journey", "Underdog"],
        relationships: {}
    },
    {
        id: 28,
        name: "Braixen",
        dexNumber: 654,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png",
        stats: {
            acting: 7,
            improv: 8,
            comedy: 7,
            dance: 9,
            design: 7,
            runway: 8,
            lipsync: 9,
            makeover: 7,
            rusical: 8,
            rumix: 9
        },
        personality: "Young and hungry, fierce competitor",
        entranceQuote: "Setting the competition on FIRE!",
        storylines: ["Young Queen", "Fierce"],
        relationships: {}
    },
    {
        id: 29,
        name: "Mawile",
        dexNumber: 303,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
        stats: {
            acting: 9,
            improv: 9,
            comedy: 8,
            dance: 7,
            design: 8,
            runway: 9,
            lipsync: 8,
            makeover: 7,
            rusical: 8,
            rumix: 8
        },
        personality: "Two-faced strategist, cunning competitor",
        entranceQuote: "Two faces, twice the talent!",
        storylines: ["Two-Faced", "Strategic"],
        relationships: {}
    },
    {
        id: 30,
        name: "Rapidash (Galar)",
        dexNumber: 78,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 7,
            dance: 9,
            design: 8,
            runway: 10,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 9
        },
        personality: "Majestic and mystical, runway queen",
        entranceQuote: "Galloping to victory in style!",
        storylines: ["Majestic", "Runway Star"],
        relationships: {}
    },
    {
        id: 31,
        name: "Ribombee",
        dexNumber: 743,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png",
        stats: {
            acting: 7,
            improv: 9,
            comedy: 10,
            dance: 9,
            design: 7,
            runway: 7,
            lipsync: 8,
            makeover: 7,
            rusical: 9,
            rumix: 9
        },
        personality: "Tiny but mighty, comedy powerhouse",
        entranceQuote: "Small package, BIG personality!",
        storylines: ["Comedy Queen", "Size Doesn't Matter"],
        relationships: {}
    },
    {
        id: 32,
        name: "Diancie",
        dexNumber: 719,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 6,
            dance: 8,
            design: 10,
            runway: 10,
            lipsync: 8,
            makeover: 10,
            rusical: 8,
            rumix: 8
        },
        personality: "Glamorous and luxurious, jewelry queen",
        entranceQuote: "Diamonds are forever, and so is this crown!",
        storylines: ["Glamazon", "Luxury Queen"],
        relationships: {}
    },
    {
        id: 33,
        name: "Wigglytuff",
        dexNumber: 40,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
        stats: {
            acting: 7,
            improv: 9,
            comedy: 10,
            dance: 8,
            design: 7,
            runway: 7,
            lipsync: 8,
            makeover: 8,
            rusical: 9,
            rumix: 8
        },
        personality: "Bubbly comedian, camp queen",
        entranceQuote: "I'm not just cute, I'm HILARIOUS!",
        storylines: ["Camp Icon", "Comedian"],
        relationships: {}
    },
    {
        id: 34,
        name: "Aromatisse",
        dexNumber: 683,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 7,
            dance: 7,
            design: 9,
            runway: 8,
            lipsync: 7,
            makeover: 9,
            rusical: 8,
            rumix: 7
        },
        personality: "Quirky and unique, polarizing performer",
        entranceQuote: "Some call it weird, I call it FASHION!",
        storylines: ["Polarizing", "Unique"],
        relationships: {}
    },
    {
        id: 35,
        name: "Pheromosa",
        dexNumber: 795,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 7,
            dance: 10,
            design: 9,
            runway: 10,
            lipsync: 10,
            makeover: 8,
            rusical: 9,
            rumix: 10
        },
        personality: "Supermodel energy, untouchable",
        entranceQuote: "Too beautiful, too fast, too good!",
        storylines: ["Supermodel", "Untouchable"],
        relationships: {}
    },
    {
        id: 36,
        name: "Bounsweet",
        dexNumber: 761,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png",
        stats: {
            acting: 6,
            improv: 7,
            comedy: 8,
            dance: 8,
            design: 7,
            runway: 7,
            lipsync: 7,
            makeover: 7,
            rusical: 8,
            rumix: 7
        },
        personality: "Baby queen, learning and growing",
        entranceQuote: "Sweet, fresh, and ready to serve!",
        storylines: ["Baby Queen", "Growth Arc"],
        relationships: {}
    },
    {
        id: 37,
        name: "Espeon",
        dexNumber: 196,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 7,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Psychic and strategic, calculated moves",
        entranceQuote: "I predicted I'd win... and here I am!",
        storylines: ["Strategic Mind", "Calculated"],
        relationships: {}
    },
    {
        id: 38,
        name: "Medicham",
        dexNumber: 308,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 7,
            dance: 10,
            design: 7,
            runway: 8,
            lipsync: 9,
            makeover: 7,
            rusical: 9,
            rumix: 9
        },
        personality: "Spiritual dancer, zen competitor",
        entranceQuote: "Find your center... and SERVE!",
        storylines: ["Spiritual Journey", "Dance Specialist"],
        relationships: {}
    },
    {
        id: 39,
        name: "Butterfree",
        dexNumber: 12,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        stats: {
            acting: 7,
            improv: 7,
            comedy: 7,
            dance: 8,
            design: 8,
            runway: 8,
            lipsync: 7,
            makeover: 9,
            rusical: 8,
            rumix: 8
        },
        personality: "Transformation story, inspirational",
        entranceQuote: "From caterpillar to BUTTERFLY!",
        storylines: ["Transformation", "Inspirational"],
        relationships: {}
    },
    {
        id: 40,
        name: "Oricorio (Pom-Pom)",
        dexNumber: 741,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png",
        stats: {
            acting: 7,
            improv: 8,
            comedy: 9,
            dance: 10,
            design: 7,
            runway: 8,
            lipsync: 9,
            makeover: 7,
            rusical: 10,
            rumix: 10
        },
        personality: "Cheerful dancer, infectious energy",
        entranceQuote: "Let me dance my way into your hearts!",
        storylines: ["Cheerleader", "Infectious Energy"],
        relationships: {}
    },
    {
        id: 41,
        name: "Liepard",
        dexNumber: 510,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
        stats: {
            acting: 9,
            improv: 9,
            comedy: 8,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 9,
            makeover: 7,
            rusical: 8,
            rumix: 8
        },
        personality: "Sly and cunning, master of shade",
        entranceQuote: "Claws out, crown secured!",
        storylines: ["Shady Queen", "Strategic Player"],
        relationships: {}
    },
    {
        id: 42,
        name: "Mega Audino",
        dexNumber: 531,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 8,
            dance: 7,
            design: 9,
            runway: 9,
            lipsync: 8,
            makeover: 10,
            rusical: 8,
            rumix: 8
        },
        personality: "Caring nurse, makeover specialist",
        entranceQuote: "I'll heal your looks AND the competition!",
        storylines: ["Makeover Queen", "Healer"],
        relationships: {}
    },
    {
        id: 43,
        name: "Beautifly",
        dexNumber: 267,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png",
        stats: {
            acting: 7,
            improv: 7,
            comedy: 7,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 7,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Graceful and delicate, beauty queen",
        entranceQuote: "Watch me flutter to the top!",
        storylines: ["Beauty Queen", "Graceful"],
        relationships: {}
    },
    {
        id: 44,
        name: "Glaceon",
        dexNumber: 471,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
        stats: {
            acting: 7,
            improv: 7,
            comedy: 6,
            dance: 7,
            design: 9,
            runway: 10,
            lipsync: 7,
            makeover: 9,
            rusical: 7,
            rumix: 7
        },
        personality: "Ice cold fashion, stoic competitor",
        entranceQuote: "Cool, calm, and serving LOOKS!",
        storylines: ["Ice Queen", "Stoic"],
        relationships: {}
    },
    {
        id: 45,
        name: "Shiinotic",
        dexNumber: 756,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 9,
            dance: 7,
            design: 9,
            runway: 8,
            lipsync: 7,
            makeover: 9,
            rusical: 8,
            rumix: 7
        },
        personality: "Quirky and weird, cult favorite",
        entranceQuote: "Let me SPORE you with my talent!",
        storylines: ["Cult Favorite", "Weird & Wonderful"],
        relationships: {}
    },
    {
        id: 46,
        name: "Meowstic (Female)",
        dexNumber: 678,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png",
        stats: {
            acting: 8,
            improv: 8,
            comedy: 7,
            dance: 8,
            design: 8,
            runway: 9,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Mysterious and elegant, psychic queen",
        entranceQuote: "I see your thoughts... and I'm judging!",
        storylines: ["Mysterious", "Elegant"],
        relationships: {}
    },
    {
        id: 47,
        name: "Gourgeist",
        dexNumber: 711,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png",
        stats: {
            acting: 9,
            improv: 9,
            comedy: 10,
            dance: 7,
            design: 8,
            runway: 8,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Spooky comedy queen, Halloween icon",
        entranceQuote: "Trick or treat? Either way, you're getting SERVED!",
        storylines: ["Spooky Camp", "Comedy Gold"],
        relationships: {}
    },
    {
        id: 48,
        name: "Florinia",
        dexNumber: 549,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 7,
            dance: 9,
            design: 9,
            runway: 9,
            lipsync: 8,
            makeover: 9,
            rusical: 9,
            rumix: 8
        },
        personality: "Flower power, natural beauty",
        entranceQuote: "Blossoming into greatness!",
        storylines: ["Natural Beauty", "Growth"],
        relationships: {}
    },
    {
        id: 49,
        name: "Kricketune",
        dexNumber: 402,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png",
        stats: {
            acting: 8,
            improv: 7,
            comedy: 7,
            dance: 8,
            design: 7,
            runway: 7,
            lipsync: 8,
            makeover: 7,
            rusical: 10,
            rumix: 10
        },
        personality: "Musical maestro, rusical specialist",
        entranceQuote: "Let me compose your DEMISE!",
        storylines: ["Musical Theater", "Underestimated"],
        relationships: {}
    },
    {
        id: 50,
        name: "Chandelure",
        dexNumber: 609,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
        stats: {
            acting: 9,
            improv: 8,
            comedy: 7,
            dance: 7,
            design: 9,
            runway: 10,
            lipsync: 8,
            makeover: 8,
            rusical: 8,
            rumix: 8
        },
        personality: "Gothic elegance, dramatic performer",
        entranceQuote: "I'm here to LIGHT UP this competition!",
        storylines: ["Gothic Queen", "Dramatic"],
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
    { name: "Girl Groups", type: "rumix", description: "Perform in a girl group!" },
    // NEW CHALLENGES - MORE VARIETY!
    { name: "Roast", type: "roast", description: "Roast your fellow queens!" },
    { name: "Ball Challenge - 3 Looks!", type: "ball", description: "Serve THREE legendary looks!" },
    { name: "Branding Challenge", type: "branding", description: "Create your brand!" },
    { name: "Singing Challenge", type: "singing", description: "Belt it out for the win!" },
    { name: "Talk Show Challenge", type: "hosting", description: "Host your own talk show!" },
    { name: "Commercial Challenge", type: "commercial", description: "Sell us something fabulous!" },
    { name: "Talent Show", type: "talent", description: "Show us your special talent!" },
    { name: "Wrestling Challenge", type: "wrestling", description: "Body slam the competition!" },
    { name: "Music Video Challenge", type: "rumix", description: "Film an epic music video!" },
    { name: "Improv Challenge", type: "improv", description: "Think on your feet!" },
    { name: "Horror Movie Challenge", type: "acting", description: "Scream queen realness!" }
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
    "{queen1} emerges as an unexpected frontrunner",
    // MORE DRAMA! MORE TWISTS!
    "{queen1} reveals they've been dealing with {emotion} all season",
    "{queen2} accuses {queen1} of copying their {topic}",
    "UNTUCKED EXPLOSION: {queen1} vs {queen2} goes OFF!",
    "{queen1} makes a shocking confession about {emotion}",
    "{queen2} questions {queen1}'s authenticity on {topic}",
    "The judges clock {queen1} for being {trait}",
    "{queen1} has a breakthrough moment and sheds tears",
    "{queen2} and {queen1} squash their beef and hug it out",
    "SHADY MOMENT: {queen2} throws subtle shade at {queen1}",
    "{queen1} stands up for {queen2} in an emotional moment",
    "RU STEPS IN: The queens are reminded to focus on {topic}",
    "{queen1} proves the haters wrong with an amazing {topic} performance",
    "Love triangle drama: {queen1} caught between {queen2} and another queen",
    "{queen2} reads {queen1} to filth in Untucked!",
    "GAGGER: {queen1} reveals their true feelings about {queen2}",
    "{queen1} struggles with {emotion} but pushes through",
    "The workroom gasps as {queen2} calls out {queen1}!",
    "{queen1} and {queen2} become an unstoppable power duo",
    "VILLAIN ARC: {queen1} is getting a villain edit for being {trait}",
    "{queen2} apologizes to {queen1} for being {trait}",
    "EMOTIONAL: {queen1} dedicates their performance to overcoming {emotion}",
    "The queens rally around {queen1} during a vulnerable moment",
    "{queen2} throws a drink (just kidding... or?)",
    "{queen1} gives an inspirational speech about {emotion}",
    "RIVALRY: {queen1} and {queen2} are competing for top spot",
    "The entire cast sides with {queen1} against {queen2}",
    "{queen1} has a panic attack about {emotion} but recovers",
    "REDEMPTION: {queen1} proves they're more than {trait}",
    "{queen2} encourages {queen1} to be confident",
    "Surprising friendship: {queen1} and {queen2} become besties"
];

const TOPICS = ["the challenge", "runway looks", "strategy", "favoritism", "talent", "screen time", "judging", "their storyline", "runway presentation", "performance style", "aesthetic", "attitude"];
const EMOTIONS = ["pressure", "homesickness", "self-doubt", "competition stress", "impostor syndrome", "anxiety", "family issues", "past trauma", "burnout", "overwhelming expectations"];
const TRAITS = ["fake", "arrogant", "safe", "trying too hard", "not trying enough", "messy", "shady", "too perfect", "rehearsed", "inauthentic", "competitive", "intimidating"];

const LIPSYNC_DESCRIPTIONS = [
    "An electrifying performance with high energy and fierce moves!",
    "Both queens serve emotion and vulnerability in a powerful battle!",
    "Death drops, splits, and pure charisma fill the stage!",
    "A close battle where both queens give it their all!",
    "One queen clearly dominates with flawless execution!",
    "Hair flips, reveals, and stunning choreography!",
    "An emotional journey told through dance and expression!",
    "Camp, comedy, and character - this lipsync has it all!",
    // MORE LIPSYNC VARIETY!
    "A LEGENDARY lip sync for the ages! Both queens are giving EVERYTHING!",
    "Wig reveals, costume reveals - REVEALS ON REVEALS!",
    "One queen is serving face while the other serves PERFORMANCE!",
    "The splits! The dips! The DRAMA! This is ICONIC!",
    "A slow burn that builds to an explosive climax!",
    "Comedy gold! Both queens are making this song HILARIOUS!",
    "Pure EMOTION - not a dry eye in the house!",
    "Acrobatic excellence! These queens are ATHLETIC!",
    "The stage is on FIRE with this performance!",
    "One queen is pulling out all the stops with tricks and stunts!",
    "A masterclass in facial expressions and lip sync precision!",
    "The energy is UNMATCHED - this is what drag is about!",
    "Sensual, sexy, and absolutely CAPTIVATING!",
    "Both queens are telling a STORY through this performance!",
    "The crowd is going WILD - this is a showstopper!",
    "One queen has a SECRET WEAPON up their sleeve!"
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

    // WIN (supports single winner OR double win!)
    if (overrides.WIN) {
        if (Array.isArray(overrides.WIN)) {
            // DOUBLE WIN! 🏆🏆
            overrides.WIN.forEach(id => {
                placements[id] = 'WIN';
                assigned++;
            });
        } else {
            // Single winner
            placements[overrides.WIN] = 'WIN';
            assigned++;
        }
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
        case 'DOUBLE_SHANTAY':
            app.innerHTML = renderDoubleShantay();
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
    const theme = CHALLENGE_THEMES[currentEp.challengeType] || CHALLENGE_THEMES['acting'];

    return `
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">🎬 Episode ${AppState.currentEpisode} 🎬</h2>

        <!-- Challenge Banner with THEMED colors! -->
        <div onclick="" style="cursor: pointer; background: ${theme.gradient}; padding: 3rem 2rem; border-radius: 16px; text-align: center; box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); margin-bottom: 2rem; border: 3px solid rgba(255, 255, 255, 0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
            <div style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); padding: 2rem; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.2);">
                <h3 style="font-size: 3rem; color: white; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); margin-bottom: 1rem; letter-spacing: 3px; text-shadow: 0 0 20px rgba(255,255,255,0.5);">
                    ${theme.emoji} ${currentEp.challengeName} ${theme.emoji}
                </h3>
                <p style="font-size: 1.3rem; color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); opacity: 0.95;">
                    Click me for sparkles! ✨
                </p>
            </div>
        </div>

        <!-- Competing Queens -->
        <div class="phase-container">
            <h3 style="text-align: center; font-size: 1.5rem; margin-bottom: 1.5rem;">👑 Competing Queens 👑</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                ${AppState.cast.map(q => `
                    <div style="text-align: center; padding: 1rem; background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 20, 147, 0.1) 100%); border-radius: 12px; border: 3px solid rgba(255, 105, 180, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-5px) scale(1.05) rotate(2deg)'; this.style.boxShadow='0 8px 16px rgba(255, 105, 180, 0.6)'; this.style.borderColor='#FF1493'" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='rgba(255, 105, 180, 0.3)'">
                        <img src="${q.image}" alt="${q.name}" style="width: 96px; height: 96px; object-fit: contain; margin: 0 auto; filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));">
                        <div style="font-weight: 700; font-size: 0.95rem; margin-top: 0.75rem; color: #FF1493;">${q.name}</div>
                        <div style="font-size: 0.75rem; opacity: 0.7; margin-top: 0.25rem;">${currentEp.challengeType}: ${q.stats[currentEp.challengeType]}/10</div>
                    </div>
                `).join('')}
            </div>

            ${AppState.seasonDrama.length > 0 ? `
                <div onclick="" style="cursor: pointer; background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 200, 0, 0.15) 100%); padding: 2rem; border-radius: 12px; margin-top: 2rem; border-left: 5px solid gold; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 2rem; animation: bounce 1s infinite;">☕</span> Workroom Tea (Click for hearts!)
                    </h3>
                    ${AppState.seasonDrama.slice(-3).map(drama => `
                        <div style="padding: 1rem; margin: 0.75rem 0; background: rgba(255, 255, 255, 0.6); border-radius: 8px; border-left: 3px solid gold; font-style: italic; animation: slideIn 0.5s;">
                            <span style="font-size: 1.2rem; margin-right: 0.5rem;">🗣️</span>${drama}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <div class="nav-buttons">
            <button class="button" onclick="nextPhase(); " style="font-size: 1.2rem; padding: 1rem 2rem; background: ${theme.gradient}; box-shadow: 0 4px 12px rgba(255, 20, 147, 0.4); transform: scale(1.05); transition: transform 0.2s;">
                🎭 SEE PERFORMANCES 🎭
            </button>
        </div>

        <style>
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        </style>
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

    const winQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'WIN');
    const highQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'HIGH');
    const safeQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'SAFE');
    const lowQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'LOW');
    const btmQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'BTM2');

    return `
        <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">👑 Episode ${AppState.currentEpisode} Results 👑</h2>

        <div class="phase-container">
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                ${winQueens.length > 0 ? `
                    <div onclick="" style="cursor: pointer; background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 200, 0, 0.2) 100%); padding: 2.5rem; border-radius: 16px; border: 4px solid gold; box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                        <h3 style="text-align: center; font-size: 2rem; color: goldenrod; margin-bottom: 1.5rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); text-shadow: 0 0 20px rgba(255,255,255,0.5);">
                            🏆 ${winQueens.length > 1 ? 'DOUBLE WIN! CONDRAGULATIONS!' : 'CHALLENGE WINNER'} 🏆
                        </h3>
                        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap;">
                            ${winQueens.map(q => `
                                <div style="text-align: center; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); border: 4px solid gold; transition: transform 0.2s;">
                                    <img src="${q.image}" alt="${q.name}" style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 8px 16px rgba(255, 215, 0, 0.7)); margin-bottom: 1rem;">
                                    <div style="font-size: 1.8rem; font-weight: 700; color: goldenrod;">${q.name}</div>
                                    <div style="font-size: 1.2rem; margin-top: 0.5rem;">🏆 Condragulations! 🏆</div>
                                </div>
                            `).join('')}
                        </div>
                        <p style="text-align: center; margin-top: 1rem; font-size: 0.9rem; opacity: 0.7;">(Click for more confetti!)</p>
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
                <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                    <button class="button" onclick="eliminateQueen(${btmQueens[1].id})" style="font-size: 1.2rem; padding: 1.25rem 2.5rem; background: linear-gradient(135deg, #32CD32 0%, #228B22 100%); box-shadow: 0 4px 16px rgba(50, 205, 50, 0.4); border: 3px solid white;">
                        ✅ ${btmQueens[0].name.toUpperCase()} SHANTAY YOU STAY
                    </button>
                    <button class="button" onclick="eliminateQueen(${btmQueens[0].id})" style="font-size: 1.2rem; padding: 1.25rem 2.5rem; background: linear-gradient(135deg, #32CD32 0%, #228B22 100%); box-shadow: 0 4px 16px rgba(50, 205, 50, 0.4); border: 3px solid white;">
                        ✅ ${btmQueens[1].name.toUpperCase()} SHANTAY YOU STAY
                    </button>
                </div>
                <div style="text-align: center;">
                    <button class="button" onclick="doubleShantay()" style="font-size: 1.3rem; padding: 1.5rem 3rem; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6); border: 4px solid white; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                        ✨✨ DOUBLE SHANTAY YOU BOTH STAY ✨✨
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

function renderDoubleShantay() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];
    const btmQueens = AppState.cast.filter(q => currentEp.placements[q.id] === 'BTM2');

    return `
        <h2 style="text-align: center; font-size: 3rem; margin-bottom: 2rem; text-shadow: 0 0 20px rgba(255,255,255,0.5);">✨ DOUBLE SHANTAY! ✨</h2>

        <div onclick="" style="cursor: pointer; background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 105, 180, 0.2) 50%, rgba(138, 43, 226, 0.2) 100%); padding: 3rem 2rem; border-radius: 16px; box-shadow: 0 12px 32px rgba(255, 20, 147, 0.5); margin-bottom: 2rem; border: 4px solid gold; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
            <div style="text-align: center; padding: 2rem;">
                <h3 style="font-size: 2.5rem; margin-bottom: 2rem; color: goldenrod; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); transition: transform 0.2s;">
                    🎉 YOU BOTH STAY! 🎉
                </h3>
                <p style="font-size: 1.5rem; margin-bottom: 2rem; font-style: italic; color: #FF1493;">
                    "I'm not ready to send either of you home tonight..."
                </p>

                <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; margin: 2rem 0;">
                    ${btmQueens.map(q => `
                        <div style="text-align: center; padding: 2rem; background: white; border-radius: 20px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); border: 4px solid gold; animation: bounce 2s infinite;">
                            <img src="${q.image}" alt="${q.name}" style="width: 180px; height: 180px; object-fit: contain; filter: drop-shadow(0 8px 20px rgba(255, 215, 0, 0.8)); margin-bottom: 1.5rem;">
                            <h3 style="font-size: 2rem; font-weight: 700; color: goldenrod; margin-bottom: 0.5rem;">${q.name}</h3>
                            <p style="font-size: 1.3rem; color: #FF1493; font-weight: 700;">SHANTAY YOU STAY!</p>
                        </div>
                    `).join('')}
                </div>

                <div style="background: rgba(255, 255, 255, 0.8); padding: 2rem; border-radius: 12px; margin: 2rem auto; max-width: 800px; border: 3px solid gold;">
                    <p style="font-size: 1.3rem; font-style: italic; line-height: 1.8; color: #333;">
                        "In a SHOCKING twist that has NEVER happened before, BOTH queens get to stay!
                        This season just got even more INTENSE! Who will survive to see the crown? 👑"
                    </p>
                </div>

                <p style="font-size: 1rem; margin-top: 2rem; opacity: 0.8;">(Click anywhere for more confetti!)</p>
            </div>
        </div>

        ${renderTrackRecordTable()}
        ${renderSeasonStats()}

        <div class="nav-buttons">
            ${AppState.cast.length === 4 ?
                '<button class="button" onclick="nextPhase()" style="font-size: 1.3rem; padding: 1.25rem 2.5rem; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); box-shadow: 0 4px 16px rgba(255, 215, 0, 0.5);">✨ GRAND FINALE ✨</button>' :
                '<button class="button" onclick="nextPhase(); " style="font-size: 1.2rem; padding: 1rem 2rem; background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%);">NEXT EPISODE</button>'
            }
        </div>

        <style>
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
        </style>
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
                            <label style="font-weight: 700; font-size: 1.2rem; color: goldenrod;">CHALLENGE WINNER(S)</label>
                            <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.2rem;">Select one winner OR create a DOUBLE WIN! 💅</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <select class="placement-select" id="override-win1" style="padding: 0.75rem; font-size: 1rem; border: 2px solid gold; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto</option>
                            ${queensInComp.map(q => `<option value="${q.id}">🏆 ${q.name}</option>`).join('')}
                        </select>
                        <select class="placement-select" id="override-win2" style="padding: 0.75rem; font-size: 1rem; border: 2px solid gold; border-radius: 8px; background: white; font-family: 'Space Mono', monospace;">
                            <option value="">⚡ Auto / Leave Empty</option>
                            ${queensInComp.map(q => `<option value="${q.id}">🏆 ${q.name}</option>`).join('')}
                        </select>
                    </div>
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

    // Support DOUBLE WINS! 🏆🏆
    const win1 = document.getElementById('override-win1')?.value;
    const win2 = document.getElementById('override-win2')?.value;
    if (win1 || win2) {
        const winners = [win1, win2].filter(v => v).map(v => parseInt(v));
        if (winners.length === 1) {
            overrides.WIN = winners[0];
        } else if (winners.length === 2) {
            overrides.WIN = winners; // DOUBLE WIN!
        }
    }

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

// DOUBLE SHANTAY! Save both queens! 💅✨
function doubleShantay() {
    const currentEp = AppState.episodeData[AppState.episodeData.length - 1];

    // NO ONE GOES HOME!
    currentEp.eliminated = null;

    // Generate ICONIC drama
    AppState.seasonDrama.push(`🎉 SHOCKING TWIST! DOUBLE SHANTAY! Both queens get to stay! 🎉`);

    AppState.currentPhase = 'DOUBLE_SHANTAY';
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
