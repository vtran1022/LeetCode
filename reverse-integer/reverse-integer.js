/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let range = [Math.pow(-2, 31), Math.pow(2, 31) - 1];
    let numRev;
    let str;
    
    if (x < 0) {
        let positiveVal = x * -1;
        str = positiveVal.toString();
        numRev = Number(str.split('').reverse().join('')) * -1;
    } else {
        str = x.toString();
        numRev = Number(str.split('').reverse().join(''));
    }

    if (numRev < range[0] || numRev > range[1]) {
        return 0;
    } else {
        return numRev;
    }
};