/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let container = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		let smallerHeight = Math.min(height[left], height[right]);
		let area = (right - left) * smallerHeight;

		if (area > container) {
            container = area;
        }

		if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
	}

	return container;
};

/*
I: height = an array of non-negative integers
O: an integer representing the max area of water 
C: n = height.length
E: height is empty

area = right index subtract left index then multiply by whichever is the smaller height 
compare the left height to the right height, move L/R pointer according depending which is smaller
if left height is less than right height, move left
else move right
if current area is bigger than container, container now equals current area
*/