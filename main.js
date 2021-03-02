// 10 words for each random array below.
const noun = ['hammer', 'skeleton', 'food', 'friend', 'mother', 'Aladdin', 'man', 'girlfriend', 'park', 'government'];
const adj = ['tasty', 'fluffy', 'slick', 'filthy', 'uneven', 'warm', 'faint', 'melodic', 'flat', 'round'];
const verb = ['cling', 'awaken', 'grow', 'run', 'froze', 'paid', 'shook', 'flew', 'fell', 'drown'];
const adverb = ['highly', 'honestly', 'nearly', 'roughly', 'rudely', 'scarcely', 'madly', 'adversely', 'rightfully', 'jealously'];

// function to randomize array
const shuffle = (array, n) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Create an array based on classes of the text
const classes = ['adj', 'noun', 'adverb', 'verb'];

let writeText = () => {
    
    for (let j = 0; j < classes.length; j++) {
        let elements = document.getElementsByClassName(classes[j]);

        if (classes[j] === 'adj') {

            let selectAdj = shuffle(adj, (elements.length)); 

            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectAdj[y];
            }              
        } else if (classes[j] === 'noun') {
            
            let selectNoun = shuffle(noun, (elements.length)); 

            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectNoun[y];
            }  
        } else if (classes[j] === 'adverb') {

            let selectAdverb = shuffle(adverb, (elements.length)); 

            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectAdverb[y];
            }  
        } else if (classes[j] === 'verb'){
            
            let selectVerb = shuffle(verb, (elements.length)); 
            
            for(let y=0; y<elements.length; y++) {
                elements[y].innerHTML = selectVerb[y];
                
            }  
        }
    }        
}

document.getElementById("generate").addEventListener('click', writeText);

