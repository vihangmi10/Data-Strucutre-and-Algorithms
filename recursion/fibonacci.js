 // Fibonacci sequence upto the given number

 function fib(num, res = 1, prevResult = 1){
     // add whatever parameters you deem necessary - good luck!
     if(num === 2){
         return res;
     }
     res += prevResult;
     prevResult = res - prevResult;

     return fib(--num, res, prevResult);

 }
 console.log(fib(6));