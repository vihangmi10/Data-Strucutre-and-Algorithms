// Given a string check if it is a palindrome and return true if it is else false using Recursion
function isPalindrome(str) {
    function reverseString(str) {
        if(str.length === 0) return '';
        return str[str.length - 1].concat(reverseString(str.slice(0, str.length - 1)));
    }
    return reverseString(str) === str;

}
console.log(isPalindrome('abca'));
