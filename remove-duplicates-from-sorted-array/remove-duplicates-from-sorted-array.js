/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let tracker = nums.length;
    if (tracker === 0) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (nums[i] === nums[j]) {
            nums.splice(j, 1);
            tracker--;
            return removeDuplicates(nums);
        }
    }
    
    return tracker;
};