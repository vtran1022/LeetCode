/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let traversed = [];
    
    if (root === null) {
        return traversed;
    }
    
    const subTraversal = (node, list) => {
        if (node) {
            if (node.left) {
                subTraversal(node.left, traversed);
            } 

            traversed.push(node.val);
            if (node.right !== null) {
                subTraversal(node.right, traversed);
            }
        }
        return;
    };
    subTraversal(root, traversed);
    
    return traversed;
};