/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let values = [];
    
    if (!root) {
        return values;
    }
    
    const dfs = (node) => {
        if (node.val === null) {
            return;
        }
        values.push(node.val);
        
        if (!node.children) {
            return;
        }
        for (const child of node.children) {
            dfs(child);
        }
    };
    dfs(root);
    
    return values;
};

/*
I: a tree
O: an array of preorder traversal of the tree's nodes' values
C: none
E: empty tree

if val exists, add to values array
if children exists, start with the first children and its children, then move to the next..
recursion ?
*/