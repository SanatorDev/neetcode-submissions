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
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const levelOrderAr : number[][] = [];
        const queue : TreeNode[] = [root];

        while (queue.length > 0) {
            const levelAr: number[] = [];
            const queueLength = queue.length;

            for (let i = 0; i < queueLength; i++) {
                const removedTree = queue.shift();

                if (removedTree) {
                    levelAr.push(removedTree.val);

                    queue.push(removedTree.left);
                    queue.push(removedTree.right);
                }
            }

            if (levelAr.length > 0) {
                levelOrderAr.push(levelAr);
            }
        }

        return levelOrderAr;
    }
}
