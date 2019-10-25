// Given an array find the first three pair of numbers within the array that sum up to be 0
// [-4,-5,-3,-6,2,4] // -6, 2, 4

// given an array first sort the array
// use a for loop to start from the beginning of the array
// Use two pointers : First pointer starts at loop pointer + 1 and second pointer starts at the end of the array
// Move the pointers based on the sum values :
// if value > 0 decrement second pointer
// if the value < 0 increment  first pointer
// if the value == 0 get the values of loop index first pointer and second pointer

function findTriplet (arr) {
    const sortedArray  = arr.sort((a, b) => a - b);
    console.log('Sorted Array is --- ', sortedArray);
    for(let i = 0; i < sortedArray.length - 2 ; i ++) {
        let j = i+1;
        let k = sortedArray.length -1;
        while(j < k) {
            if(sortedArray[i] + sortedArray[j] + sortedArray[k] === 0) return `The triplet is ${sortedArray[i]}, ${sortedArray[j]} and ${sortedArray[k]}`;
            if(sortedArray[i] + sortedArray[j] + sortedArray[k] > 0) k--;
            if(sortedArray[i] + sortedArray[j] + sortedArray[k] < 0) j++;
        }
    }
    return `No triplet found`;
}

console.log(findTriplet([-4,-5,-3,-6,2,4]));
