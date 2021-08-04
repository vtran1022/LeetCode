/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    // edge cases
    // iterate over string and add chars + count in a tracker
    // if odd # of chars is greater than integer k, return false (each palindrome can only have 1 odd # char)
    // else true! 
    if (s.length === 0 || k > s.length) {
        return false;
    }
    let chars = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (!chars.has(s[i])) {
            chars.set(s[i], 1);
        } else {
            chars.set(s[i], chars.get(s[i]) + 1);
        }
    }
    
    let isOdd = [];
    
    chars.forEach(value => {
        if (value % 2 === 1) {
            isOdd.push(value);
        }
    });

    if (isOdd.length > k) {
        return false;
    }
    
    return true;
    
    
};