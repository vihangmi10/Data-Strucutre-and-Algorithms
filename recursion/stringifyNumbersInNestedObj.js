// Given a nested object
// find each value that is of data type number and convert it into string

function stringifyNumbers(obj) {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
        if(typeof obj[key] === 'number') obj[key] = obj[key] .toString();
        if(typeof obj[key] === 'object') return stringifyNumbers(obj[key]);
    });
    return obj;
}
const obj = {
    a: 'hello',
    b: 3,
    c: {
        d: {
            e: 8,
            f: 'hi',
            g: {
                h: 10
            }
        }
    }
};

console.log(stringifyNumbers(obj));