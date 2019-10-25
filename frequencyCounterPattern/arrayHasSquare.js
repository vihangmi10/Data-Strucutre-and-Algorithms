// Given 2 arrays return true if second array has squared numbers of the first array
// [2,3,6] => [36,4,9] // true
// [-5,-3,8] => [9,64,25] // true

function addArrToObj (arr) {
    let obj = {};
    for(let element of arr) {
        obj[element] = (obj[element] || 0) + 1;
    }
    return obj;
}
function check(obj1, squareObj) {
    for(let key in obj1) {
        if(!(key ** 2) in squareObj) return false;
        if(squareObj[key ** 2] !== obj1[key]) return false;
    }
    return true;
}
const arr = [2,3,6,2,5,3,4,6];
const arr2 = [4,4,9,36,25,16,9,36];

const obj1 = addArrToObj(arr);
const squareObj = addArrToObj(arr2);


console.log(obj1);
console.log(squareObj);

console.log(check(obj1, squareObj));