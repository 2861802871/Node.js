// 在外界使用require()导入一个自定义模块的时候，其实导入的是module.exports默认情况下为空
//得到的结果永远以module.exports指向的结果为准，即最新的值
const m = require('./自定义模块')
console.log(m);

