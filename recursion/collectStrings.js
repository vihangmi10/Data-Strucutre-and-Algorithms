// Given a nested object
// return an array of all the values that have typeof as string

function collectString(obj) {
    let arr = [];
    function helper (obj) {
        let keys = Object.keys(obj);
        keys.forEach((key) => {
            if(typeof obj[key] === 'string') arr.push(obj[key]);
            if(typeof obj[key] === 'object') helper(obj[key])
        })
    }
    helper(obj);
    return arr;
}

const obj = {
    a: 'vihang',
    b: {
        c: {
            d: 5,
            e: 8,
            f: {
                g: {
                    h: 'hello'
                }
            }

        }
    }
};

console.log(collectString(obj));