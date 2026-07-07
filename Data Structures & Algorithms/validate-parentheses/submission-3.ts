class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parenthesesStack = [];
        const openBrackets = ['(', '{', '['];
        const closeBrackets = new Map<string, string>();
        closeBrackets.set(')', '(');
        closeBrackets.set('}', '{');
        closeBrackets.set(']', '[');

        for (let i = 0; i < s.length; i++) {
            if (openBrackets.includes(s[i])) {
                parenthesesStack.push(s[i]);
                continue;
            }

            const openBracket = closeBrackets.get(s[i])

            if (parenthesesStack.at(-1) === openBracket) {
                parenthesesStack.pop();
            } else {
                return false;
            }
        }

        return parenthesesStack.length === 0;
    }
}
