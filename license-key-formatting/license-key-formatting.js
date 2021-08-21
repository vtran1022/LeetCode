/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    if (s.length === 1) {
        return s === "-" ? "" : s.toUpperCase();
    }
    
    s = s.toUpperCase().split('-').join('').split('').reverse().join('');
    
    let result = '';
    
    const subString = (string) => {
      if (string.length === k || string.length < k) {
          return result += string.substring(0);
      }
        result += `${string.substring(0, k)}-`;
        
        return subString(string.substring(k));
    };
    subString(s);
    
    return result.split('').reverse().join('');
    
};

/*
i:
 - s: a string
 - k: an integer 

o: a reformatted string
c: none
e: none, s.length guar at least 1 char

change string to uppercase
then split by dashes
then join by ''

if the length of the string is divisible by k
then we don't make the first group shorter than k
if it is not than we make the first group shorter than k

so two different possibilities
1) first group is one less than k
take substring of string w/ length of k-1
then take substrings w/ lengths of k

2) all substrings has length of k

Operations: 
A) use recursion 
if string's length is equal to k, then return final substring w/o dash behind it
else add substring of k length to result string w/ dash at the end
then recurse thru 
*/