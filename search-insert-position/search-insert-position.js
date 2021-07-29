/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target === 0 || target < nums[0]) {
        return 0;
    } else if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    
    let index = nums.indexOf(target);
    if (index !== -1) {
        return index;
    }
    
    let less = nums.indexOf(target - 1);
    let more = nums.indexOf(target + 1)
    if (more !== -1) {
        return more;
    } else if (less !== -1) {
        return less + 1;
    }
};