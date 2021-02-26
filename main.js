// 10 words for each random array below.
const noun = ['hammer', 'skeleton', 'food', 'friend', 'mother', 'Aladdin', 'man', 'girlfriend', 'park', 'government'];
const adj = ['tasty', 'fluffy', 'slick', 'filthy', 'uneven', 'warm', 'faint', 'melodic', 'flat', 'round'];
const verb = ['cling', 'awaken', 'grow', 'run', 'froze', 'paid', 'shook', 'flew', 'fell', 'drown'];
const adverb = ['highly', 'honestly', 'nearly', 'roughly', 'rudely', 'scarcely', 'madly', 'adversely', 'rightfully', 'jealously'];

// function to determine 3 random nouns
function assignNoun() {
    let randNoun = [];
    for (i = 0; i < 3; i++) {
        randNoun.push(noun.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randNoun
}

// function to determine 4 random adjectives
function assignAdj() {
    let randAdj = [];
    for (i = 0; i < 4; i++) {
        randAdj.push(adj.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randAdj
}

// function to determine 3 random verbs
function assignVerb() {
    let randVerb = [];
    for (i = 0; i < 3; i++) {
        randVerb.push(verb.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randVerb
}

// function to determine 2 random adverbs
function assignAdverb() {
    let randAdverb = [];
    for (i = 0; i < 2; i++) {
        randAdverb.push(adverb.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randAdverb
}

let selectNoun = assignNoun() 
let selectAdj = assignAdj()
let selectVerb = assignVerb()
let selectAdverb = assignAdverb()

// Console log tests to see the random array
console.log(selectNoun)
console.log(selectAdj)
console.log(selectVerb)
console.log(selectAdverb)

// Console log message to be inserted in function to randomize words.
    console.log(`Today I went to the zoo. I saw a(n) ${selectAdj[0]} ${selectNoun[0]} jumping up and down in its tree. He ${selectVerb[0]} ${selectAdverb[0]} through the large tunnel that led to its ${selectAdj[1]} ${selectNoun[1]}. I got some peanuts and passed them through the cage to a gigantic gray ${selectNoun[2]} towering above my head. Feeding that animal made me hungry. I went to get a ${selectAdj[2]} scoop of ice cream. It filled my stomach. Afterwards I had to ${selectVerb[1]} ${selectAdverb[1]} to catch our bus. When I got home I ${selectVerb[2]} my mom for a ${selectAdj[3]} day at the zoo. `); 
