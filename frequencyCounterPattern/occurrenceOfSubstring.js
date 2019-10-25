//Write a JavaScript function to count the occurrence of a substring in a string.
//
// Test Data:
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output:
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output:
// 1

// Split the string into words
// Add the words into object with key as the word and their occurrence as value
// Check if the given substring is present in the object
// if present return occurrence else return false

function splitStringIntoWords(str) {
    return str.split(/\s+/);
}
function addWordsToFrequencyCounter(wordsArr) {
    let obj = {};
    for(let word of wordsArr) {
        obj[word] = (obj[word] || 0) + 1;
    }
    console.log('The object is --- ', obj);
    return obj;
}
function occurrenceOfSubStr(str, substr) {
    const wordArray = splitStringIntoWords(str);
    const frequencyCounterObj = addWordsToFrequencyCounter(wordArray);
    if(substr in frequencyCounterObj) return frequencyCounterObj[substr];
    else return false;
}

const string = 'He whats up ? Hows is life there ?';
console.log(occurrenceOfSubStr(string, 'Hey'));