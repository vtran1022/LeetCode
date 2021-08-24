/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const binarySearch = (start, end) => {
        // base case
        if (start === end) {
            return nums[start];
        }
        
        // mid index
        const mid = Math.floor((start + end) / 2);
        console.log(start, end, mid)
        
        // unique mid
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }
        
        // get left and right arrays
        let left;
        let right;
        
        if (nums[mid] === nums[mid - 1]) {
            left = mid - start - 1; // -1 is removing the pair 
            right = end - mid;
        } else {
            left = mid - start;
            right - end - mid - 1;
        }
        
        if (left % 2 !== 0) {
            if (nums[mid] === nums[mid - 1]) {
                return binarySearch(start, mid - 2);
            } else {
                return binarySearch(start, mid - 1);
            }
        } else {
            if (nums[mid] === nums[mid + 1]) {
                return binarySearch(mid + 2, end)
            } else {
                return binarySearch(mid + 1, end);
            }
        }
    }
    
    return binarySearch(0, nums.length - 1);
};