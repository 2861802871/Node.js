const fs = require('fs')
// 会以执行node时所在的目录自动拼接路径，原因提供了./,../相对路径,解决方法提供完整的绝对路径即可
//那么问题来了，完整路径不利于维护，移植性差
fs.readFile(__dirname + '/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败');
    }
    console.log('读取文件成功！');
    console.log(dataStr);
})
// 完美解决路径__dirname当前文件所处的目录
console.log(__dirname);