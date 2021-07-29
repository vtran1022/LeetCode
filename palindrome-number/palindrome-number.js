/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x > (Math.pow(2, 31) - 1)) {
        return false;
    }
    
    let str = x.toString();

    let left = str.substring(0, Math.round(str.length / 2));
    let right = str.substring(Math.floor(str.length / 2), str.length);
    let revRight = right.split('').reverse('').join('');

    if (left === revRight) {
        return true;
    } else {
        return false;
    }
};