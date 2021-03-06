/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    ops.forEach(op => {
        m = Math.min(m, op[0]);
        n = Math.min(n, op[1]);
    })
    
    return m * n;
};

/*
I: 
integer: m & n
an array of arrays: ops
O: integer
C: none
E: no ops
*/