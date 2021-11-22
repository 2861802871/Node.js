// 导入自己的模块
// 格式化时间测试
const itsme = require('../itsme')
const dt = new Date()
const newdate = itsme.dateFormat(dt)
console.log('格式化时间:' + newdate);

// 转义HTML测试
const htmlStr = '<h1>测试</h1>'
const newStr1 = itsme.htmlEscape(htmlStr)
console.log('转义HTML:' + newStr1);

//还原HTML 
const newStr2 = itsme.htmlUnEscape(newStr1)
console.log('还原HTML:' + newStr2);