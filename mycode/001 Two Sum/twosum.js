// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var item1, item2;
    for (var i = 0, len = nums.length; i < len; i++) {
        item1 = nums[i];
        item2 = target - item1;
        var index = nums.indexOf(item2);
        if (~index && index != i) {
            return [i, index];
        }
    }
    return [];
};