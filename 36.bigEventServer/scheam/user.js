/***********定义验证规则*************/
// const joi = require('@hapi/joi')//已弃用
const e = require('express')
const joi = require('joi')


//定义用户名和密码验证规则
const username = joi.string().alphanum().min(3).max(10).required()//字符串，a-zA-Z0-9,最小长度1，最大长度10，必填项
const password = joi.string().pattern(/^[\S]{6,12}$/)//6-12位字符串/^[\S]{6,12}$/

// 定义登录验证规则对象
exports.reg_login_schema = {
    body: {
        username,
        password
    },
}


//更新用户信息验证规则
const id = joi.number().integer().min(1).required()//id整型
const nickname = joi.string().required()//字符串，a-zA-Z0-9,最小长度1，最大长度10，必填项
const useremail = joi.string().email().required()//邮箱必填项


exports.updata_userinfor = {
    body: {
        id,
        nickname,
        email: useremail,//当表单和验证规则不一样时
    },
}



