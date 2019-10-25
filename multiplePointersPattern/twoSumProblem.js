// Given an array find the first pair of numbers that sum up to 0
// [4,-3,6,1,-4] // 4 and -4

function sumZero(arr) {
    const sortedArray = arr.sort((a,b) => a - b);
    console.log('Sorted array is --- ',sortedArray);
    let i = 0;
    let j = sortedArray.length - 1;

    while(i < j) {
        if(sortedArray[i] + sortedArray[j] === 0) return `pair found and it is ${sortedArray[i]} and ${sortedArray[j]}`;
        else if (sortedArray[i] + sortedArray[j] > 0) j--;
        else if(sortedArray[i] + sortedArray[j] < 0) i++;
    }
    return `No such pair found`;
}

console.log(sumZero([-5,2,3,7,-8,6,4,9,-9]));