/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const result = [];
    
    nums.forEach((num, i) => {
        if (result.indexOf(num) === -1) {
            result.push(num);
        } else {
            result.splice(result.indexOf(num), 1);
        }
    })
    
    return result[0];
};