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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root || !subRoot) {
        return false;
    }
    
    const dfs = (node) => {
        if (!node) {
            return false;
        }
        if (isSame(node, subRoot)) {
            return true;
        }
        return dfs(node.left) || dfs(node.right);
    }
    
    const isSame = (node1, node2) => {
        if (!node1 && !node2) {
            return true;
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }
    
    return dfs(root);
};