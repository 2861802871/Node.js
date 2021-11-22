const querystring = require('querystring')
function bodyparser(req, res, next) {
    // 定义中间件的具体业务逻辑
    let str = ''
    // 接收数据
    req.on('data', (chunk) => {
        str += chunk
    })
    // 数据接收完毕触发end事件
    req.on('end', () => {
        // 对收到的数据进行解析querystring.parse()
        const body = querystring.parse(str)
        // req挂载body数据
        req.body = body
        next()
    })

}

module.exports = bodyparser