class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const memory = new Map<number, number>();
        const frequency: number[][] = Array.from({length : nums.length + 1}, () => []);
        const result = [];

        for (const num of nums) {
            const numInMemory = memory.get(num) || 0;
            memory.set(num, numInMemory + 1);
        }

        for (const [num, count] of memory.entries()) {
            frequency[count].push(num);
        }

        for (let i = frequency.length - 1; i > 0; i--) {
            for (const num of frequency[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
