var lengthOfLongestSubstring = function (s) {
    var result = [];
    for (var i = 0, len1 = s.length; i < len1; i++) {
        for (var m = 1, len2 = len1 - i; m <= len2; m++) {
            var str = s.substr(i, m);
            var ifRepeat = str.split('').some(function (item, index) {
                return str.indexOf(item) != index;
            });

            !ifRepeat && (result.push(str.length));
        }
    }

    result.sort();
    return result[result.length - 1];
};

console.log(lengthOfLongestSubstring('abcabcbb'));

