// Write a some recursive function that accepts a array and a callback function.
// return true if any element in array results in truthy value from the callback function
// else return false

function someRecursive(arr, cb) {
    if(arr.length === 0) return false;
    return cb(arr[0]) === true ? true : someRecursive(arr.slice(1), cb);
}

const isOdd =  element => element % 2 !== 0;
const greaterThan10 = el => el > 10;

console.log(someRecursive([2,6,8,9,13], greaterThan10));

