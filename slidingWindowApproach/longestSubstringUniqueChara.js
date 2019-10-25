// Given a string
// Find the longest substring of unique characters in the string
// 'helloprtsfghnuia'

// create an object and keep adding unique characters to the object
// if duplicate character found calculate the keys in object and get the maximum of counter and unique keys in object

function longestUniqueSubstring(str) {
    let frequencyObj = {};
    let startIndex = 0;
    let nextIndex = 0;
    let count = 0;

    while(startIndex < str.length) {
        if(!(frequencyObj[str[startIndex]])) {
            console.log('Unique character - ', str[startIndex]);
            frequencyObj[str[startIndex]] = true;
            startIndex++;
            console.log('Now the object is === ', frequencyObj);
        } else {
            console.log(' ----------------BREAK ----------------------- ');
            frequencyObj = {};
            nextIndex++;
            startIndex = nextIndex;
        }
        count = Math.max(count, Object.keys(frequencyObj).length);
        console.log('Now the count is --- ', count);
    }
    console.log('The maximum characters in substring are --- ', count);
}

longestUniqueSubstring('abcabredftyq');