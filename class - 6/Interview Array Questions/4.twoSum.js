/**
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            if (sum === target) {
                ans.push(i, j)
                break;
            }
        }
    }

    return ans
};

// [3,3,2,4]

// 0, 1
// 2, 3