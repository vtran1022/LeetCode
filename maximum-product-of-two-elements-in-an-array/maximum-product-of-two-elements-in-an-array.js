/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 2) {
        return (nums[0] - 1) * (nums[1] - 1);
    }
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let nums2 = nums.map(num => num);
        nums2.splice(i, 1);
        
        for (let j = 0; j < nums2.length; j++) {
            let first = nums[i] - 1;
            let second = nums2[j] - 1;
            
            if ((first * second) > max) {
                max = first * second;
            }
        }
    }
    
    return max;
};