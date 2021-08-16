/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0;
    } 
    if (n === 1) {
        return 1;
    }
    
    let result = 0;
    
    result = fib(n - 1) + fib(n - 2);
    
    return result;
};