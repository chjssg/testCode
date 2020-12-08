(function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        // CommonJS、CMD规范检查
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD规范检查
        define(factory);
    } else {
        // 浏览器注册全局对象
        global.A = factory();
    }
})(this, (function () {
    function say() {
        console.log('hello hentai');
    }

    return {
        say: say
    }
}));