class Solution {
    scheduleMap = new Map<number, number[]>();
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        for (const [course, prerequisite] of prerequisites) {
            if (this.scheduleMap.has(course)) {
                const coursePres = this.scheduleMap.get(course);

                coursePres.push(prerequisite);
            } else {
                this.scheduleMap.set(course, [prerequisite])
            }
        }

        for (let course = 0; course < numCourses; course++) {
            const coursesSet = new Set<number>();

            if(!this.dfs(coursesSet, course, this.scheduleMap.get(course))) {
                return false;
            }
        }

        return true;
    }

    dfs(coursesSet: Set<number>, course: number, prerequisites: number[] = []) {
        if (coursesSet.has(course)) return false;

        coursesSet.add(course);

        for (const prerequisite of prerequisites) {
            const prerequisiteList = this.scheduleMap.get(prerequisite);
            if (!this.dfs(coursesSet, prerequisite, prerequisiteList)) {
                return false;
            }
        }

        coursesSet.delete(course);

        return true;
    }
}
