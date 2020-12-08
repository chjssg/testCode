
function Vue(options) {
    if ("development" !== 'production' && !(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}

Vue.prototype._init = function (options) { //初始化函数
    var vm = this;
    vm._isVue = true;
    console.log(vm)
    initInternalComponent(vm, options);
};
function initInternalComponent(vm, options) {
    // var opts = vm.$options = Object.create(vm.constructor.options); //vm的参数
    console.log('initInternalComponent：');
    console.log(vm.constructor);
    // var parentVnode = options._parentVnode;
    // opts.parent = options.parent; //组件的父节点
    // opts._parentVnode = parentVnode; //组件的 虚拟vonde 父节点
    // opts._parentElm = options._parentElm; //父节点的dom el
    // opts._refElm = options._refElm; //当前节点 el
    //
    // var vnodeComponentOptions = parentVnode.componentOptions; //组件参数
    // opts.propsData = vnodeComponentOptions.propsData; //组件数据
    // opts._parentListeners = vnodeComponentOptions.listeners;//组件 事件
    // opts._renderChildren = vnodeComponentOptions.children;  //组件子节点
    // opts._componentTag = vnodeComponentOptions.tag; //组件的标签
    //
    // if (options.render) { //渲染函数
    //     opts.render = options.render; //渲染函数
    //     opts.staticRenderFns = options.staticRenderFns; //静态渲染函数
    // }
}
new Vue({})