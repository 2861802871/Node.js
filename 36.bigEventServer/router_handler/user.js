/*************用户注册和登录模块***************/

const db = require('../db/index')
const bcrypt = require('bcryptjs')//加密包

/*--------------注册新用户处理函数-------------*/
exports.regUser = (req, res) => {
    const userinfo = req.body

    // console.log(userinfo);//测试是否接收到表单数据

    //检测是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.cc('用户名或密码不能为空')
    }

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
    res.send('login is ok!')
}