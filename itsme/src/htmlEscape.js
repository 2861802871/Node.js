// 转义HTML
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (math) => {//g全局匹配把所有符号都匹配一遍
        switch (math) {
            case '<': return '&lt'
            case '>': return '&gt'
            case '"': return '&quot'
            case '&': return '&amp'
        }
    })
}

//还原HTML
function htmlUnEscape(htmlStr) {
    return htmlStr.replace(/&lt|&gt|&quot|&amp/g, (math) => {//g全局匹配把所有符号都匹配一遍
        switch (math) {
            case '&lt': return '<'
            case '&gt': return '>'
            case '&quot': return '"'
            case '&amp': return '&'
        }
    })
}


module.exports = {
    htmlEscape,
    htmlUnEscape
}