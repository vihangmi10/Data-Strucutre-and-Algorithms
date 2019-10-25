// Given a number find a sum of 0 to the specified number
// num => 6 // 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21

function recursiveRange(num) {
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));