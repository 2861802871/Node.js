const fs = require('fs')
// 读取成绩
fs.readFile('./成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取数据失败！');
    }
    // 以空格为间隔把字符串转换为数组
    const arrOld = dataStr.split(' ')
    const arrNew = []

    console.log(arrOld);
    for (var i in arrOld) {
        arrNew.push(arrOld[i].replace('=', ':'))
    }

    // 方法二
    // arrOld.forEach(item => {
    //     arrNew.push(item.replace('=', ':'))
    // })

    console.log(arrNew);
    // 数组转字符
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    // 写入文件
    fs.writeFile('./成绩整理完成.txt', newStr, function (err) {
        if (err) {
            console.log('写入文件失败！' + err.message);
        }
        console.log('写入文件成功！');
    })
})