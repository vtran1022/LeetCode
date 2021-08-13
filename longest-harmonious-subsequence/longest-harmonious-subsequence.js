/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let tracker = new Map();
    let length = 0;
    nums.forEach(num => {
      if (!tracker.has(num)) {
          tracker.set(num, 1);
      } else {
          tracker.set(num, (tracker.get(num) + 1));
      }

      if (tracker.has(num + 1)) {
        length = Math.max(length, tracker.get(num) + tracker.get(num + 1))
      }
      if (tracker.has(num - 1)) {
        length = Math.max(length, tracker.get(num) + tracker.get(num - 1))
      }
    })
    
    return length;
};

/*
I: an array of integers
O: length of longest harmonious subsequence among all its possible subsequences 
C: A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
E: empty array

iterate over the array and store the value and # of occurences in a map
during iteration, check if map has a key that's +1 or -1 of current key
if either, set length to the max of length or current value + (key -1 or key+1)'s value
*/