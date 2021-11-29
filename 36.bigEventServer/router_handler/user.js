/*************用户注册和登录模块***************/

const db = require('../db/index')//数据库配置模块
const bcrypt = require('bcryptjs')//加密包
const jwt = require('jsonwebtoken')//token包

const config = require('../config')

/*--------------注册新用户处理函数-------------*/
exports.regUser = (req, res) => {
    const userinfo = req.body

    // console.log(userinfo);//测试是否接收到表单数据

    //检测是否合法||后期更改为第三方包验证
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不能为空')
    // }

    // 检测用户名是否被占用
    const sql = 'select * from event_user where username = ?'
    db.query(sql, [userinfo.username], (err, results) => {
        if (err) {
            return res.cc(err.message)
        }
        if (results.length > 0) {
            return res.cc('该用户名已被占用！请更换其他用户名.')
        }
        // 加密密码
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        // console.log(userinfo.password);//查看加密数据
        const sql = 'insert into event_user set ?'
        db.query(sql, [{ username: userinfo.username, password: userinfo.password }], (err, results) => {
            if (err) {
                return res.cc(err.message)
            }
            if (results.affectedRows !== 1) {
                return res.cc('注册失败')
            }
            res.send({ status: 0, msg: '注册成功' })
        })

    })

}

/*----------------用户登录处理函数--------------*/
exports.login = (req, res) => {
    const userinfo = req.body//获取合法验证用户登录信息
    const sql = 'select * from event_user where username  = ?'
    db.query(sql, [userinfo.username], (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登陆失败,用户不存在！')
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        // if (results[0].password !== userinfo.password) { return res.cc('验证不通过，密码错误！') }//不要直接对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) { return res.cc('验证不通过，密码错误！') }
        // 验证通过后
        //  剔除用户密码和头像//j将数据库中的对象展开并将密码和头像清空
        const user = { ...results[0], password: '', user_pic: '' }
        //生成加密token字符
        const tokenStr = jwt.sign(user, config.jwtSECretKey, { expiresIn: '10h' })
        // 'Bearer ' + tokenStr拼接好字符串前缀方便前端使用
        res.send({ status: 0, msg: 'Bearer ' + tokenStr })//将不包含密码和头像的token字符串发送给客户端
    })

}