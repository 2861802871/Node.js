const fs = require('fs')
// 写文件
var data = '写入内容12345'
fs.writeFile('./file.txt', data, 'utf-8', function (err) {
    if (err) {
        return console.log('写入失败！');
    }
    console.log('写入成功！');
})
// 读文件
fs.readFile('./file.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败！');
    }
    console.log(dataStr);

})

