class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSub = nums[0];
        let total = 0;
        for (const num of nums){
            if (total < 0) {
                total = 0;
            }
            total += num;

            maxSub = Math.max(maxSub, total);
        }

        return maxSub;
    }
}
