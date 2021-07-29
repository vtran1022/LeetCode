/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let tracker = nums.length;
    if (tracker === 0) {
        return 0;
    }
    
    nums.forEach((num, i) => {
        if (num === val) {
            nums.splice(i, 1);
            tracker--;
            return removeElement(nums, val);
        }
    })

    return tracker;
};