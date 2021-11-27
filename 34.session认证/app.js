// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')

app.use(session({
  secret: 'xiaobing',//任意字符用于加密
  resave: false,
  saveUninitialized: true
}))


// 托管静态页面
app.use(express.static('./34.session认证/pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 账号密码验证号
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败！账号或密码错误' })
  }
  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
  req.session.user = req.body//将用户信息存储起来
  req.session.islogin = true//登录状态标记
  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: '未登录，查询用户失败' })
  }
  res.send({ status: 0, msg: '获取用户名成功', username: req.session.user.username })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.send({ status: 0, msg: '清除登录状态成功！' })

})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})
