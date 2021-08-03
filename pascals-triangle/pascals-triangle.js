/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    
    let triangle = [[1]];
    
    const generateNextRow = (index, n) => {
        if (n === 1) {
            return;
        }
        
        let prevRow = triangle[index];
        let nextRow = [];
        
        nextRow.push(1);
        
        for (let i = 0; i < prevRow.length - 1; i++) {
            nextRow.push(prevRow[i] + prevRow[i + 1])
        }
        
        nextRow.push(1);
        
        triangle.push(nextRow);
        return generateNextRow(index + 1, n - 1);
        
    };
    generateNextRow(0, numRows)
    
    return triangle;
};