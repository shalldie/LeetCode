var addTwoNumbers = function (l1, l2) {
    var result = [],
        args = [].slice.call(arguments).sort(function (arr1, arr2) {
            return arr1.length - arr2.length;
        }),
        maxArr = args.splice(-1, 1)[0],
        minArr = args.splice(-1, 1)[0];


    for (var i = 0, len = maxArr.length; i < len; i++) {
        var max = maxArr[i] || 0,
            min = minArr[i] || 0,
            sum = max + min,
            yu = sum % 10,
            jin = ~~(sum / 10);
        result[i] = (result[i] || 0) + yu;
        if (i < len - 1 || jin)
            result[i + 1] = jin;
    }
    return result;
};

var r = addTwoNumbers([2,4,3,5,1,3,4,6],[5,6,4,5,1,2]);
console.log(r);