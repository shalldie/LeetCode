var fs = require('fs');
var path = require('path');

var num = /^001/;  // 要进行测试的文件编号

var name = fs.readdirSync('./mycode').filter(n => num.test(n))[0];

var filePath = path.join('./mycode', name, 'app.js');

require(filePath);