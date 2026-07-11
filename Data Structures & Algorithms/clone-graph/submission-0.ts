/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) return null;

        const graphMemory = new Map<number, Node>();

        function dfs(node) {
            if(graphMemory.has(node.val)) return graphMemory.get(node.val);
            const copy = new Node(node.val);
            graphMemory.set(node.val, copy);

            for (const neighbor of node.neighbors){
                copy.neighbors.push(dfs(neighbor))
            }

            return copy;
        }

        const copyNode = dfs(node);

        
        return copyNode;
    }
}
