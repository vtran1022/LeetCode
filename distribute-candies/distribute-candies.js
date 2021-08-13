/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candyTracker = new Map();
    let uniqueCandy = [];
    
    candyType.forEach((candy, index) => {
        if (!candyTracker.has(candy)) {
            candyTracker.set(candy, 1);
        } else {
            candyTracker.set(candy, candyTracker.get(candy) + 1);
        }
    })
    
    console.log(candyTracker.size);
    console.log(candyType.length / 2);
    
    return candyTracker.size > (candyType.length / 2) ? (candyType.length / 2) : candyTracker.size;
};

/*
I: an array of candyType
O: an integer of different candy types Alice can consume
C: n is array length & even
E: n is zero

Iterate over the array and keep track of the different candies( Map constructor ? )
Take the size of the tracker and divide by 2, rounding up
*/