/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let values = [];
    
    if (!root) {
        return values;
    }
    
    const bottomUp = (node) => {
        if (node.val === null || !node.children) {
            return;
        }
        values.unshift(node.val);

        for (let i = node.children.length - 1; i >= 0; i--) {
            let child = node.children[i];
            bottomUp(child);
        }
    };
    bottomUp(root);
    
    return values;
};

/*
I: a tree
O: an array of postorder traversal of the tree's nodes' values
C: none
E: empty tree

if val exists, add to values array
if children exists, start with the last children and its children, then move to the next..
want the bottom left-most value first 
recursion
*/