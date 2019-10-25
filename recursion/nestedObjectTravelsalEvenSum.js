// Given a nested object
// Return the sum of all even values in the object

// Recursion

function sumEvenNum(obj) {
    let sum = 0;
    const keys = Object.keys(obj);
    keys.forEach((el) => {
        if(typeof obj[el] === 'number' && obj[el] % 2 === 0) sum += obj[el];
        if(typeof obj[el] === 'object') return sum += sumEvenNum(obj[el]);
    });
    return sum;
}

const obj = {
    a: 2,
    b: {
        c: 4,
        d: {
            e: 3,
            f:{
                g:{
                    h: 6
                }
            }
        }
    }
};

console.log(sumEvenNum(obj));