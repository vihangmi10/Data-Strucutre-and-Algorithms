// Given variable number of arguments find if there are any duplicates in the arguments
// function areThereDuplicates(1,2,3) // false
// function areThereDuplicates(1,2,2) // true
// function areThereDuplicates(1,2,1,3) // true

// convert the arguments into array
// try and add each element in an object with value as 1
// check if any element has value greater than 1 and return true
// else return false

function areThereDuplicates(...args) {
    const argumentArray = Array.from(arguments);
    console.log('Argument array is --- ', argumentArray);
    const obj = {};
    for(let arg of argumentArray) {
        console.log('Arg --- ', arg);
        if(obj[arg]) return true;
        obj[arg] = 1
    }
    return false;
}

console.log(areThereDuplicates(1,2,3));
