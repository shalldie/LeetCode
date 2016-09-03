

// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    var result = [];

    for (var i = 0, len1 = s.length; i < len1; i++) {
        for (var m = 1, len2 = len1 - i; m <= len2; m++) {
            var str = s.substr(i, m);
            var repeat = ifRepeat(str);
            if (repeat) {
                result.push(str.length - 1);
                break;
            }
        }
    }

    result.sort(function (item1, item2) {
        return item2 - item1;
    });
    return result[0];

    function ifRepeat(str) {
        return str.split('').some(function (item, index) {
            return str.indexOf(item) != index;
        });
    }
};