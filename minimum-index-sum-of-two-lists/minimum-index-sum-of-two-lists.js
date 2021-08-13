/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let commonShop = [];
    let shopTracker = new Map();
    list1.forEach((restaurant, i) => {
        list2.forEach((shop, j) => {
            if (restaurant === shop) {
                shopTracker.set(shop, i + j);
            }
        })
    })
    
    let min = Math.min(...shopTracker.values());
    for (let [key, value] of shopTracker.entries()) {
        if (value === min) {
            commonShop.push(key);
        }
    }
    return commonShop;
};

/*
I: two lists - arrays of restaurants
O: An array w/ common interest with the least list index sum
C: 
- if there is a tie, output all in no order requirement
- There's always an answer
E: none

Iterate over both lists
when there's a common element, add that to the tracker along with the sum of the indexes
return the key where the sum is the lowest or all of them if there's a tie
*/