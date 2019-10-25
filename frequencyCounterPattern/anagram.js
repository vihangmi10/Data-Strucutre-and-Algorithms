// Given a word find if a word is anagram of another the word
// ice and cei // true
// mice and nice // false

function convertCharaToObj(word) {
    let obj = {};
    for(let char of word) {
        obj[char] = (obj[char] || 0 ) + 1;
    }
    return obj;
}

function isAnagram(originalWord, anagramWord, originalWordObj) {
    if(originalWord.length !== anagramWord.length) return false;
    for(let char of anagramWord) {
        if(!(originalWordObj[char])) return false;
        originalWordObj[char] -= 1;
    }
    return true;
}

const word = 'micee';
const anagramWord = 'icem';
const wordObj = convertCharaToObj(word);
console.log(wordObj);
console.log(isAnagram(word, anagramWord, wordObj));
