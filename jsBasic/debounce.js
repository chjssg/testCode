/**
 * 防抖：在触发事件后n秒后执行，
 *      如果在n秒内又触发事件，
 *      则以最新的事件为准，n秒后执行*/
function debounce(func, waitTime) {
    var timeout;
    return function () {
        var that = this
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            func.apply(that, arguments)
        }, waitTime)
    }
}

/**
 * 添加第一次点击立即执行的情况*/

function debounce2(func, waitTime, immediate) {
    var timeout;
    return function () {
        var that = this;
        var args = arguments;
        if (immediate) {
            var isExecute = !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(that, args)
            }, waitTime);
            if (isExecute) {
                func.apply(that, args)
            }
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(that, args)
            }, waitTime)
        }

    }
}
/** 适用情况：
 * 1.search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
 * 2.window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次*/

debounce(function() {
    console.log(213)
    return 123
}, 1000)