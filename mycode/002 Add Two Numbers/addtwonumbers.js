// There seems to be sth wrong with what i understand.
// 我似乎没有理解题意？

// var addTwoNumbers = function (l1, l2) {
//     var result = [],
//         args = [].slice.call(arguments).sort(function (arr1, arr2) {
//             return arr1.length - arr2.length;
//         }),
//         maxArr = args.splice(-1, 1)[0],  //最长数组
//         minArr = args.splice(-1, 1)[0];  //较短数组


//     for (var i = 0, len = maxArr.length; i < len; i++) {
//         var max = maxArr[i] || 0,
//             min = minArr[i] || 0,
//             sum = max + min,
//             yu = sum % 10,               //余数
//             jin = ~~(sum / 10);          //进位
//         result[i] = (result[i] || 0) + yu;
//         if (i < len - 1 || jin)
//             result[i + 1] = jin;
//     }
//     return result;
// };



var addTwoNumbers = function (l1, l2) {
    var result = [];
    var yu = 0,
        jin = 0;

    for (var i = 0, len = l1.length; i < len; i++) {
        var item = l1[i] + l2[i];

        yu = item % 10;
        jin = ~~(item / 10);

        if (jin > 0) {
            result[i + 1] = jin;
        }

        result[i] = (result[i] || 0) + yu;
    }
    return result;
};
