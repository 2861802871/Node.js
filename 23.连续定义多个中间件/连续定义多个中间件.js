const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log('第一个中间件！');
    next()
})

app.use((req, res, next) => {
    console.log('第二个中间件！');
    next()
})

app.use((req, res, next) => {
    console.log('第三个中间件！');
    res.send('第三个中间件！')
    next()
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})