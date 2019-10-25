// Given an array and an average find a pair that matches the average
// [1,2,3] {2.5} // true
//[5,3,2,6,7,1,5,9,2,8]{8.5} // true

// given an array
// sort the array
// multiply the average by 2 to get total
// use 2 pointers one at start and one and end and compare the sum with total
// if sum < total increment first pointer
// if sum > total decrement second pointer
// till first pointer does not exceed second pointer

function findAverga (arr, avg) {
    const sortedArray = arr.sort((a,b) => a - b);
    const total = avg * 2 ;
    let i = 0;
    let j = arr.length -1;
    while( i < j) {
        if(sortedArray[i] + sortedArray[j] === total) return `the average of ${sortedArray[i]} and ${sortedArray[j]} will get average ${avg}`;
        if(sortedArray[i] + sortedArray[j] > total) j--;
        if(sortedArray[i] + sortedArray[j] < total) i++;
    }
    return `No such pair found that will average out to be ${avg}`;
}

console.log(findAverga([5,3,2,6,7,1,5,9,2,8], 8.5));
