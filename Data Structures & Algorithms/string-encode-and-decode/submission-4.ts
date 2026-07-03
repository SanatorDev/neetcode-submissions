class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.reduce((prev, curr) => curr === '' ? prev + 'empty|||' : prev + curr + '|||', '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const newA = str.split('|||').map(s => s === 'empty' ? '' : s);
        newA.pop()

        return newA;
    }
}
