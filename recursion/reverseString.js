// Given a string print the reverse of the string

function reverse(str) {
    if(str.length === 0) return '';
    return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)));
}
console.log(reverse('an'));

