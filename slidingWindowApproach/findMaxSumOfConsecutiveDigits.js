// Given an array and given a number
// Find the maximum of sum of consecutive digits of number and return the maximum sum
// [3,1,4,5,6,2,7,3,5] {3} => n // 15 sum of consecutive 3 digits is 15

// Find the sum of first n digits
// store it in tempSum
// then start a loop from n till end of array
// substract i - n element and add i element

function findLargestSum(arr, n) {
    let tempSum = 0;
    let maxSum = 0;
    for(let i = 0; i < n ; i++){
        tempSum += arr[i];
    }
    console.log('Temp sum is --- ', tempSum);
    maxSum = tempSum;

    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(findLargestSum([3,1,4,5,6,2,7,3,5], 3));
