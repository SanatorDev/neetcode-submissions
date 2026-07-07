class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const sMem = new Set();
        let max = 0;
        let window = 0;
        let left = 0;

        for (let i = 0; i < s.length; i++) {
            if (sMem.has(s[i])) {
                sMem.delete(s[left]);
                window--;
                left++;
                i--;
            } else {
                sMem.add(s[i]);
                window++;
            }

            if (window > max) {
                max = window;
            }
        }

        return max;
    }
}
