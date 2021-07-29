/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let tracker = nums.length;
    
    const checkNums = (i) => {
      if (i === nums.length - 1) {
          return;
      }
        if (nums[i] === nums[i + 1]) {
            let temp = nums.splice(i + 1, 1);
            nums.push(temp);
            tracker--;
            checkNums(i);
        } else if (nums[i] < nums[i + 1]) {
            checkNums(i + 1);
        }
    };
    checkNums(0);

    return tracker;
};