/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length;
    }
    const map = {};
    let maxLen = 0;
    let currLen = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char] !== undefined) {
            currLen = Math.max(map[char], currLen);
        }
        maxLen = Math.max(maxLen, i - currLen + 1);
        map[char] = i + 1;
    }

    return maxLen;
};