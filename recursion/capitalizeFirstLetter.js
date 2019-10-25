// Given an array of string
// Capitalize first letter of each word in the array

function captilaizeLetter(word) {
    return  word[0].toUpperCase().concat(word.slice(1));
}
function capitalize(arr) {
    if(arr.length === 0) return [];
    return [captilaizeLetter(arr[0])].concat(capitalize(arr.slice(1)));
    // or
    // return [captilaizeLetter(arr[0]), ...capitalize(arr.slice(1)];

}

console.log(capitalize(['vihang', 'mirkhelkar', 'sachin', 'tendulkar']));
