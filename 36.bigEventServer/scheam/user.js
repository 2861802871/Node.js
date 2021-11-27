/***********定义验证规则*************/
const joi = require('@hapi/joi')

//定义用户名和密码验证规则
const username = joi.string().alphanum().min(1).max(10).required()//字符串，a-zA-Z0-9,最小长度1，最大长度10，必填项
const password = joi.string().pattern(/^[\s]{6,12}$/)//6-12位字符串

// 定义验证规则对象
exports.reg_login_schema = {
    body: {
        username,
        password
    }
}



