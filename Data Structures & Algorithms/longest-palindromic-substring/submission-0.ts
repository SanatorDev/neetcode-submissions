class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let leftIndex = 0;
        let palindromeLength = 0;
        for (let i = 0; i < s.length; i++) {
            let left = i;
            let right = i;

            while (left >= 0 && right < s.length && s[right] === s[left]) {
                const length = right - left + 1;
                if (length > palindromeLength) {
                    leftIndex = left;
                    palindromeLength = length;
                }
                left--;
                right++;
            }

            left = i;
            right = i + 1;

            while (left >= 0 && right < s.length && s[right] === s[left]) {
                const length = right - left + 1;
                if (length > palindromeLength) {
                    leftIndex = left;
                    palindromeLength = length;
                }
                left--;
                right++;
            }
        }

        return s.slice(leftIndex, leftIndex + palindromeLength);
    }
}
