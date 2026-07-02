class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const memory = new Map<string, string[]>;

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const count = Array.from({length: 26}, () => 0);
            const splittedWord = word.split('');

            for (let charIndex = 0; charIndex < splittedWord.length; charIndex++) {
                count[splittedWord[charIndex].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const wordsInMemory = memory.has(count.join(',')) ? memory.get(count.join(',')) : []
            memory.set(count.join(','), [...wordsInMemory, word])
        }

        return [...memory.values()];
    }
}
