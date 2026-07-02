class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const memory = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            if(memory.has(nums[i])) {
                return true;
            }

            memory.set(nums[i], i)
        }

        return false;
    }
}
