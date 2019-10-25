// Given 2 positive integers find out if both integers have same frequency of digits
// 182 281 // true
// 22 222 // false
// 54321 12345 // true

// convert the numbers to string
// check if the length of both the strNumbers match if not return false
// iterate over string and add each number in an object with value being the number of occurrences
// Iterate over second strNumber and reduce the frequency on a match
// if the string contains a digit or a string is out of digit return false
// else return true

function converNumToStr(num) {
    return num.toString();
}
function createFrequencyCounter (strNum) {
    let obj = {};
    for(let digit of strNum) {
        obj[digit] = (obj[digit] || 0) + 1;
    }
    return obj;
}

function isSameFrequency(firstNum, secondNum) {
    const firstStrNum = converNumToStr(firstNum);
    console.log('firstStr Num --- ', typeof firstStrNum);
    const secondStrNum = converNumToStr(secondNum);
    if(firstStrNum.length !== secondStrNum.length) return false;
    const frequencyCounter = createFrequencyCounter(firstStrNum);
    console.log('Frequency counter --- ', frequencyCounter);
    for(let digit of secondStrNum) {
        if(!(frequencyCounter[digit])) return false;
        frequencyCounter[digit] -= 1;
    }
    return true;
}
console.log(isSameFrequency(54321, 12845));

