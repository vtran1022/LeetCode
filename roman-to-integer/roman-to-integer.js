/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length > 16 || s.length < 1) {
        return null;
    }
    
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    const romanArr = s.split('');
    const intArr = romanArr.map(char => roman[char]);
    let sum = 0;
    
    for (let i = 0; i < intArr.length; i++) {
        if (!intArr[i + 1]) {
            sum += intArr[i];
            break;
        } else if (intArr[i] === intArr[i + 1] || intArr[i] > intArr[i + 1]) {
            sum += intArr[i];
        } else if (intArr[i] < intArr[i + 1]) {
            sum -= intArr[i];
        }
    }
    
    return sum;
};