// 定义正则表达式
const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScirpt = /<script>[\s\S]*<\/script>/
const regTitle = /<title>[\s\S]*<\/title>/

const pathData = __dirname
// 读取html文件
readhtml()
function readhtml() {
    fs.readFile(path.join(pathData, 'index.html'), 'utf-8', function (err, dataStr) {
        if (err) {
            return console.log('读取数据失败！');
        }
        resolovrCss(dataStr)
        resolovrJs(dataStr)
        resolovrJHtml(dataStr)

    })
}

// 处理css文件的函数
function resolovrCss(htmlStr) {
    // 匹配css样式部分
    const r1 = regStyle.exec(htmlStr)
    // 去掉style标签
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    // 写入css文件
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCss, function (err) {
        if (err) {
            return console.log('写入样式失败！' + err.message);
        }
        console.log('写入样式成功！')
    })
}


// 处理js文件的函数
function resolovrJs(htmlStr) {
    // 匹配css样式部分
    const r2 = regScirpt.exec(htmlStr)
    // 去掉style标签
    const newJs = r2[0].replace('<script>', '').replace('</script>', '')
    // 写入css文件
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJs, function (err) {
        if (err) {
            return console.log('写入js失败！' + err.message);
        }
        console.log('写入js成功！')
    })
}

// 处理html的函数
function resolovrJHtml(htmlStr) {
    // 将样式替换为link，js替换为script,以及标题内容改为时钟修改完成
    const newHtml = htmlStr
        .replace(regTitle, '<title>时钟修改为单文件</title>')
        .replace(regStyle, '<link rel="stylesheet" href="./index.css"></link>')
        .replace(regScirpt, '<script src="./index.js"></script>')

    // 写入HTML文件
    fs.writeFile(path.join(pathData, '/clock/index.html'), newHtml, function (err) {
        if (err) {
            console.log('写入HTML文件失败！' + err.message);
        }
        console.log('写入HTML文件成功！');
    })
}


