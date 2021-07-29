/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let firstValue = nums[i];
        for (let j = 1 + i; j < nums.length; j++) {
            let secondValue = nums[j];
            if (firstValue + secondValue === target) {
                result = [i, j];
                return result;
            }
        }
    }
};