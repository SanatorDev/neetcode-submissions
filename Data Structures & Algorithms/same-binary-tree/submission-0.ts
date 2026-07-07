/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) return true;

        const isSameValue = p?.val === q?.val
        const isSameLeft = this.isSameTree(p?.left, q?.left);
        const isSameRight = this.isSameTree(p?.right, q?.right);

        return isSameValue && isSameLeft && isSameRight;
    }
}
