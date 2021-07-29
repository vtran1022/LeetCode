/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    
    const brackets = {
        open: ["(", "[", "{"],
        closed: [")", "]", "}"]
    };
    
    let result;
    let holder = [];
    let char = s[0];
    let charIndex = brackets.open.indexOf(char);
    
    if (charIndex === -1) {
        return false;
    }
    
    const innerFunc = (i) => {
        if (i >= s.length) {
            return;
        }

//         debugger;
        
        charIndex = brackets.open.indexOf(char);
        let eleIndex = brackets.closed.indexOf(s[i]);
        
        if (eleIndex === -1) {
            holder.push(char);
            char = s[i];
            return innerFunc(i + 1);
        } else if (eleIndex === charIndex) {
            if (!s[i + 1] && holder.length === 0) {
                return result = true;
            } else if (!s[i + 1] && holder.length > 0) {
                return result = false;
            } else if (s[i + 1] && holder.length > 0) {
                char = holder.pop();
                return innerFunc(i + 1);
            } else {
                char = s[i + 1];
                return innerFunc(i + 2);
            } 
        }
        return result = false;
    };
    innerFunc(1);
    
    return result ? result : false;
};