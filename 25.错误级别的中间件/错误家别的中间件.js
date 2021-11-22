const express = require('express')
const app = express()
app.get('/', (req, res) => {
    // 新建一个错误抛出一个错误
    throw new Error('服务器发生错误！')
    res.send('服务器正常')
})

app.use((err, req, res, next) => {
    console.log('发生了一个错误：' + err.message);
    res.send(err.message)
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})