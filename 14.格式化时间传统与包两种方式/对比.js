// 导入传统时间格式化自定义模块
const tradition = require('./传统方式格式化时间')
const dt = new Date()
const newdt = tradition.dateFormat(dt)
console.log('传统方式：' + newdt);

// 使用包的方式对时间进行格式化
// 导入包
const moment = require('moment')
const dat = moment().format('YYYY年MM月DD日 HH:mm:ss');
console.log('包的方式：' + dat);