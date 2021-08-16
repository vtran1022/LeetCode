/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let result = 0;
    
    result = fib(n - 1) + fib(n - 2);
    
    return result;
};