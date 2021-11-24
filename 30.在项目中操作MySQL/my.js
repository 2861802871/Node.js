const mysql = require('mysql')//导入mysql模块
// 建立数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址
    user: 'root',//登录数据库的账号
    password: 'xiaobing#123',//登录数据库的密码
    database: 'my_db_01'//指定要操作数据库的名字
})
// 查询数据
db.query('select * from users', (err, results) => {
    if (err) { return console.log(err.message); }
    console.log(results);

})
