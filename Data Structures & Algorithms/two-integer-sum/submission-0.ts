class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const memory = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (memory.has(complement)) {
                const complementIndex = memory.get(complement)

                return [complementIndex, i]
            }

            memory.set(nums[i], i)
        }
    }
}
