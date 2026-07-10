class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const result: string[][] = [];
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++){
                const island: string[] = [];
                this.checkTerritory(grid, r, c, island);

                if (island.length > 0) {
                    result.push(island);
                }
            }
        }

        return result.length;
    }

    checkTerritory(grid: string[][], r: number, c: number, island: string[]): undefined {
        if (grid[r]?.[c] === '1') {
            grid[r][c] = '0';
            island.push(`${r},${c}`);
            //check the left
            this.checkTerritory(grid, r, c-1, island)
            //check the right
            this.checkTerritory(grid, r, c+1, island)
            //check the bottom
            this.checkTerritory(grid, r+1, c, island)
            //chec the top
            this.checkTerritory(grid, r-1, c, island)
        }
    }
}
