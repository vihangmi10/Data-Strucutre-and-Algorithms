// Given 2 strings
// Find if first string is a subsequence of second string
// that is first string characters must be present in the same order in the second string

// sing , sting // true
function isSubsequence (str1, str2) {
    if (str1.length > str2.length) return false;
    let index1 = 0;
    let index2 = 0;
    while(index2 < str2.length) {
        if(str1[index1] === str2[index2] && index1 !== str1.length -1) {
            index1++;
            index2++;
        } else if (str1[index1] !== str2[index2]) index2++;
        else if (str1[index1] === str2[index2] && index1 === str1.length - 1) return true;
    }
    return false;
}
console.log(isSubsequence('bling', 'butterblingming'));