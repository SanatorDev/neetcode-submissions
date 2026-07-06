class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a,b) => a-b);
        const output = new Map<string, number[]>();

        for (let i = 0; i < sortedNums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            const objective = -sortedNums[i];

            while (left < right) {
                const twoSum = sortedNums[left] + sortedNums[right];

                if (twoSum === objective) {
                    output.set(`${sortedNums[i]}${sortedNums[left]}${sortedNums[right]}`, [sortedNums[i], sortedNums[left], sortedNums[right]]);
                }

                if(twoSum > objective) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return [...output.values()];
    }
}
