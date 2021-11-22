const express = require('express')
const app = express()
app.use(express.static(__dirname + '/clock'))
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})