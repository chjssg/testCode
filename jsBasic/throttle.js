/**
 * 在固定n秒内只触发一次事件
 * 两种实现方法：
 * 1.事件戳
 * 2.定时器*/


/** 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件*/
function timestamp(func, waitTime) {
    var previous = 0
    var now
    return function () {
        now = +new Date();
        var that = this
        if(now - previous > waitTime) {
            func.apply(that, arguments)
            previous = now
        }
    }

}

function timer(func, waitTime) {
    var timeout;
    var previous = 0;

    return function() {
        var that = this;
        var args = arguments;
        if (!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(that, args)
            }, waitTime)
        }

    }
}

/** 适用场景
 * 1.鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 2.监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断*/