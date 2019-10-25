// Given an array find maximum sum of the subarray
// subarray length provided in the function
// [100,200,300,400,500] {3} // 1200

// Get the sum of the first n digits in the array where n being the length of the subarray
// then start a loop from n till end of array
// substract i - n th element and add nth element to the tempSum and compare with with maxsum
// choose the maximum of the 2

function maxSumSubarray (arr, n) {
    let tempSum = 0;
    let maxSum = 0;
    for(let i = 0; i< n; i++){
        tempSum += arr[i];
    }
    console.log('Temp sum for first ', +n + ' is ', tempSum);
    maxSum = tempSum;
    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i -n] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
        console.log('Tempsum - '+tempSum+ ' maxsum - ', maxSum);
    }
    console.log('Maximum sum is --- ', maxSum);
    return maxSum;
}

maxSumSubarray([100,200,300,400,500,600,450,325], 3);