//用户信息系处理函数
const db = require('../db/index')

// 获取用户登录信息
exports.getUserinfo = (req, res) => {
    const sql = 'select id,username,nickname,email,user_pic from event_user where id=?'

    db.query(sql, req.user.id, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.lenght < 1) { return res.cc('获取用户信息失败') }
        res.send({ status: 0, msg: '获取用户信息成功！', data: results[0] })
    })
}

//修改用户信息
exports.updataUserinfo = (req, res) => {

    // 在接口处验证
    const user = req.body
    // 验证通过后写入数据库
    const sql = 'update event_user set ? where id=?'
    db.query(sql, [user, user.id], (err, results) => {
        if (err) { return res.cc('错误：' + err) }
        if (results.affectedRows !== 1) { return res.cc('修改用户基本信息失败') }
        res.send({
            status: 0,
            msg: '修改用户基本信息成功！'
        })

    })

}


//修改密码处理函数
exports.updatepwd = (req, res) => {
    //数据合法性验证通过后
    const sql = 'select * from event_user where id =?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) { return res.cc('错误：' + err) }
        if (results.length !== 1) { return res.cc('用户不存在！') }
        // 判断原密码是否正确
        const bcrypt = require('bcryptjs')//导入加密密码的包
        // if (results[0].password !== req.body.oldPwd) { return res.cc('原密码错误！') }//不要直接对比//(可用于未加密密码判断)
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) { return res.cc('原密码错误！') }
        const sql = `update event_user set password =? where id =?`
        // 加密新密码
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) { return res.cc('错误：' + err) }
            if (results.affectedRows !== 1) { return res.cc('服务器繁忙，更改密码失败！') }
            res.cc('更改密码成功', 0)
        })
    })
}

// 更换头像处理函数
exports.updateAvatar = (req, res) => {
    res.send('ok')
}