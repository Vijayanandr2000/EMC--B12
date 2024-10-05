/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let ans = []

    nums.reduce((sum, ele) => {
        sum += ele;
        ans.push(sum)
        return sum;
    }, 0)

    return ans
};