/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let char;
    let startingWord = strs.pop();
    let i = 0;
    
    while (startingWord && i <= startingWord.length) {
        char = startingWord[i] || '';
        for (const word of strs) {
            if (char !== word[i]) {
                return prefix
            }
        }
        
        prefix += char;
        i++;
    }
    
    return prefix;
};