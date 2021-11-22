//包的入口文件

const escape = require('./src/htmlEscape')
const date = require('./src/dateFormat')

module.exports = {//...展开运算符将对象的属性展开交给其他对象
    ...escape,
    ...date
}