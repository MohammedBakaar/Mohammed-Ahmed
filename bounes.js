/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (strs.length === 0) return "";
    
    let minlength = strs[0].length;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minlength) {
            minlength = strs[i].length;
        }
    }
    
    let result = "";
    for (let i = 0; i < minlength; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return result;
            }
        }
        result += char;
    }
    
    return result;
};
