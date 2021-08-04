/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length;
    }
    let map = new Map();
    let maxLen = 0;
    let currLen = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map.has(char)) {
            currLen = Math.max(map.get(char), currLen);
        }
        maxLen = Math.max(maxLen, i - currLen + 1);
        map.set(char, i + 1);
    }

    return maxLen;
};