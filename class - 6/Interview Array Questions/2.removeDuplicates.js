/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let unique = []

    nums.forEach(num => {
        let lastEle = unique[unique.length - 1]

        if (lastEle === num) {

        } else {
            unique.push(num)
        }
    })

    for (let i = 0; i < unique.length; i++) nums[i] = unique[i]


    return unique.length
};


/**

0,0,1,1,1,2,2,3,3,4

0 1 2 3 4

lastEle = arr[arr.lent-1] 
[0, 1]

undefined === 0 ? f
 0 === 0 ? t
 0 === 1 ? f





 */
