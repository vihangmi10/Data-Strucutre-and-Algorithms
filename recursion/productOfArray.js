// Takes in array
// returns product of elements within the array

function product(arr) {
    function getProduct(array) {
        if(array.length === 0) return 1;
        return array[0] * getProduct(array.slice(1));
    }
    return getProduct(arr);
}

console.log(product([1,2,3,4,5]));