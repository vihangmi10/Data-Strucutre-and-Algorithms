function collectOddValues(arr) {
    let result = [];
    function oddValue(array) {
        if(array.length === 0) return;
        if(array[0] % 2 !== 0) result.push(array[0]);
        oddValue(array.splice(1));
    }
    oddValue(arr);
    return result;
}
//console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

// Without helper function pure recursion
function findOddValues(arr) {
    let newArr = [];
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) newArr.push(arr[0]);

    return newArr.concat(findOddValues(arr.slice(1)));

}
console.log(findOddValues([1,2,3,4,5,6,7,8,9]));