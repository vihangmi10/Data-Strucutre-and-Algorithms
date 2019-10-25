// Given a array of words
// return capitalized words

// using recursive function

function capitalizeWords(arr) {
    if(arr.length === 0) return [];
    return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

console.log(capitalizeWords(['hi', 'my', 'name' , 'is' , 'vihang', 'mirkhelkar']));