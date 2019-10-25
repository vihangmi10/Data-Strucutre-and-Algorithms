// Function to flatten the array based on the levels to be flatten.

const flatten = function (num_of_levels_To_Be_Flatten) {
    let counter = 0;
    return this.reduce(function(firstPart, secondPart){
        if(Array.isArray(secondPart)){
            counter++;
        }
        return firstPart.concat(Array.isArray(secondPart) && (counter <= num_of_levels_To_Be_Flatten)? flatten.call(secondPart, num_of_levels_To_Be_Flatten) : secondPart);
    }, []);
};

Array.prototype.flatten = flatten;
const arrays = [1,[2,[3]],[4,5],[6,[7],8],[9],[5,[10,[11]]]];
console.log(arrays.flatten(1));

const flatten1 = function(arr) {
    if(!Array.isArray(arr)) return [arr];
    if(arr.length === 0) return [];
    return [...flatten1(arr[0]), ...flatten1(arr.slice(1))];
};

console.log('Flatten 1 ---- ', flatten1([[0],1,2,3,[4,5,[6],[7,[8,[9]]]]]));
