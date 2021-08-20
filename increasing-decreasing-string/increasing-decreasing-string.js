/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let charTracker = new Map();
    const strArr = s.split('');
    strArr.sort();
    
    strArr.forEach(ele => {
        if (!charTracker.has(ele)) {
            charTracker.set(ele, 1);
        } else {
            charTracker.set(ele, (charTracker.get(ele) + 1));
        }
    });
    
    const fwd = [...charTracker.keys()];
    const bkwd = [...charTracker.keys()].reverse();
    const chars = fwd.concat(bkwd);
    let result = '';

    while (charTracker.size > 0) {
        for (const char of chars) {
            if (charTracker.get(char) === 0) {
                charTracker.delete(char);
            } else if (charTracker.get(char) > 0) {
                result += char;
                charTracker.set(char, (charTracker.get(char) - 1));
            }
        }
    }
    
    return result;
};

/*
i: string
o: a string ordered by proposed algorithm
c: lower-case letters
e: none, string guaranteed to have at least 1 character

create a map tracker to hold the char and # of each
split the string into an array
sort the array
iterate over the array 
add to the map tracker 

-- since we don't know how many of each, use while loop

iterate from smallest to largest character (asc) in map
add to result string
subtract 1 value from each char key
then iterate from largest to smallest (desc)
subtract 1 value from each char key
then repeat from top 
*/