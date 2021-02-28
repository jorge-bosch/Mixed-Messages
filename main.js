// 10 words for each random array below.
const noun = ['hammer', 'skeleton', 'food', 'friend', 'mother', 'Aladdin', 'man', 'girlfriend', 'park', 'government'];
const adj = ['tasty', 'fluffy', 'slick', 'filthy', 'uneven', 'warm', 'faint', 'melodic', 'flat', 'round'];
const verb = ['cling', 'awaken', 'grow', 'run', 'froze', 'paid', 'shook', 'flew', 'fell', 'drown'];
const adverb = ['highly', 'honestly', 'nearly', 'roughly', 'rudely', 'scarcely', 'madly', 'adversely', 'rightfully', 'jealously'];

// function to determine 3 random nouns
function assignNoun(n) {
    let randNoun = [];
    for (let i = 0; i < n; i++) {
        randNoun.push(noun.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randNoun
}

// function to determine 4 random adjectives
function assignAdj(n) {
    let randAdj = [];
    for (let i = 0; i < n; i++) {
        randAdj.push(adj.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randAdj
}

// function to determine 3 random verbs
function assignVerb(n) {
    let randVerb = [];
    for (let i = 0; i < n; i++) {
        randVerb.push(verb.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randVerb
}

// function to determine 2 random adverbs
function assignAdverb(n) {
    let randAdverb = [];
    for (let i = 0; i < 2; i++) {
        randAdverb.push(adverb.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randAdverb
}

// Create an array based on classes of the text
const classes = ['adj', 'noun', 'adverb', 'verb'];

let writeText = () => {
    
    for (let j = 0; j < classes.length; j++) {
        let elements = document.getElementsByClassName(classes[j]);

        if (classes[j] === 'adj') {

            let selectAdj = assignAdj(elements.length); 

            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectAdj[y];
            }              
        } else if (classes[j] === 'noun') {
            
            let selectNoun = assignNoun(elements.length); 

            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectNoun[y];
            }  
        } else if (classes[j] === 'adverb') {

            let selectAdverb = assignAdverb(elements.length); 

            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectAdverb[y];
            }  
        } else if (classes[j] === 'verb'){
            
            let selectVerb = assignVerb(elements.length); 
            
            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectVerb[y];
                
            }  
        }
    }        
}

document.getElementById("generate").addEventListener('click', writeText);

