class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const memoryS = new Map<string, number>();
        const memoryT = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            const letterSCount = memoryS.get(s[i]) || 0;
            memoryS.set(s[i], letterSCount + 1);

            const letterTCount = memoryT.get(t[i]) || 0;
            memoryT.set(t[i], letterTCount + 1);
        }

        for (const [letter, count] of memoryS.entries()) {
            if(!memoryT.has(letter) || memoryT.get(letter) !== count) {
                return false;
            }
        }

        return true;
    }
}
