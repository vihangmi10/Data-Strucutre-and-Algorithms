function factoria(num){
    if(num === 0) {
        return 1;
    }
    return num * factoria(num - 1);
}
console.log(factoria(5));