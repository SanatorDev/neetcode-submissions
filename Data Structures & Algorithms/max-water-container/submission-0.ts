class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length;
        let area = 0;

        while (left < right) {
            const newArea = (right - left) * Math.min(heights[left], heights[right]);

            if (newArea > area){
                area = newArea;
            }

            if(heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return area;
    }
}
