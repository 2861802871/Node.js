function dateFormat(dtStr) {
    const dt = new Date()

    function format(data) {
        return data < 10 ? '0' + data : data
    }

    const y = dt.getFullYear()
    const m = format(dt.getMonth() + 1)
    const d = format(dt.getDate())

    const hh = format(dt.getHours())
    const mm = format(dt.getMinutes())
    const ss = format(dt.getSeconds())
    const ne = y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    return ne
}

module.exports = {
    dateFormat
}