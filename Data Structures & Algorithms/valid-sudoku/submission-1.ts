class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const boardMemory = new Map<string, Set<string>>;
        const rowMemory = Array.from({length:9}, () => new Set<string>());
        const columnMemory = Array.from({length:9}, () => new Set<string>());

        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            const row = board[rowIndex];

            for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
                if (row[columnIndex] === '.') continue;

                if (rowMemory[rowIndex].has(row[columnIndex]) || columnMemory[columnIndex].has(row[columnIndex])) {
                    return false;
                }

                rowMemory[rowIndex].add(row[columnIndex]);
                columnMemory[columnIndex].add(row[columnIndex]);

                const boxIndexString = `${Math.floor(rowIndex / 3)},${Math.floor(columnIndex / 3)}`;

                if (!boardMemory.has(boxIndexString)) {
                    boardMemory.set(boxIndexString, new Set())
                }

                const box = boardMemory.get(boxIndexString);

                if (box.has(row[columnIndex])) {
                    return false;
                }

                box.add(row[columnIndex])
            }
        }

        return true;
    }
}
