class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const prerequisitesMap = new Map<number, number[]>();
        const visited = new Set<number>();

        for (let i = 0; i < numCourses; i++) {
            prerequisitesMap.set(i, []);
        }

        for (let [crs, pre] of prerequisites) {
            prerequisitesMap.get(crs).push(pre);
        }

        const dfs = (courseNumber) => {
            if (visited.has(courseNumber)) return false;
            const coursePrerequisites = prerequisitesMap.get(courseNumber);
            if (coursePrerequisites.length === 0) return true;
            visited.add(courseNumber);

            for (const coursePre of coursePrerequisites) {
                const isValid = dfs(coursePre);

                if (!isValid) {
                    return false;
                }
            }

            visited.delete(courseNumber);
            prerequisitesMap.set(courseNumber, []);
            return true;
        }

        for (let i = 0; i < numCourses-1; i++) {
            const isValid = dfs(i);

            if (!isValid) {
                return false;
            }
        }

        return true;
    }
}
