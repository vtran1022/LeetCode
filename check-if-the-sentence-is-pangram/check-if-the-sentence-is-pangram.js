/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let chars = new Map();
    
    for (let i = 0; i < sentence.length; i++) {
        let curr = sentence[i];
        if (!chars.has(curr)) {
            chars.set(curr, 1);
        }
    }
    
    return chars.size === 26;
};

/*
i: string
o: boolean
c: none
e: none, length at least 1

have a charTracker using map constructor 
iterate over the string
add each char + value to the tracker
if exists then continue

if the tracker's size is 26 then return true
else return false
*/