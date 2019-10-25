// Given an array find the number of unique values in the array.
// [1,2,2,2,2,3] // 3 unique values
// [1,1,1,1,1,1,1,1,1,4] // 2

// take the array
// sort the array
// run two pointers one at index 0 and one at index 0+1
// move the second index till the first index value and second index value is the same
// Once they are different increment the counter jump the first pointer to equal the second pointer

function findUniqueValues(arr) {
    const sortedArray = arr.sort((a,b) => a - b);
    console.log(sortedArray);
    let counter = 1;
    let i = 0;
    let j = 1;

    while(j < arr.length) {
        if(arr[i] === arr[j]) j++;
        else {
            counter++;
            i = j;
        }
    }
    console.log('The unique values are --- ', counter);
}
findUniqueValues([1,1,2,3,1,1,4,5,1,1,4,4,4,3,2,3,7,8,9]);