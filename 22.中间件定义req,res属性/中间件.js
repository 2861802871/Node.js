const express = require('express')
const app = express()
app.use((req, res, next) => {
    req.a = 1
    next()
})
app.use((req, res, next) => {
    console.log('a=' + req.a);
    res.send('a=' + req.a)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})