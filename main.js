const allwords = {
    noun : ['hammer', 'skeleton', 'food', 'friend', 'mother', 'Aladdin', 'man', 'girlfriend', 'park', 'government'],
    adj : ['tasty', 'fluffy', 'slick', 'filthy', 'uneven', 'warm', 'faint', 'melodic', 'flat', 'round'],
    verb : ['cling', 'awaken', 'grow', 'run', 'froze', 'paid', 'shook', 'flew', 'fell', 'drown'],
    adverb : ['highly', 'honestly', 'nearly', 'roughly', 'rudely', 'scarcely', 'madly', 'adversely', 'rightfully', 'jealously'],
}

let getWords = (wordType, size) => {
let newA = [];
for (let i = 0; i < size; i++) {
    newA.push(allwords[wordType][Math.floor(Math.random() * allwords[wordType].length)])
}
return newA;
}

// Create an array based on classes of the text
const classes = ['adj', 'noun', 'adverb', 'verb'];

let writeText = () => {

for (let j = 0; j < classes.length; j++) {
    let elements = document.getElementsByClassName(classes[j]);

    let newAb = getWords(classes[j],elements.length);

    for(let y=0; y<elements.length; y++) {
        elements[y].innerHTML = newAb[y];
    }                  
}        
}

document.getElementById("generate").addEventListener('click', writeText);

