/**
 * 实现js的 call,apply,bind等功能*/

var obj = {
    value: 'chjssg'
};
function foo(param1, param2) {
    console.log(param1, param2)
    console.log(this)
}
this.value = '123123123'

console.log('--------------原生call函数------------------')
foo.call(this, 'aaa', 'bbb') //    chjssg

// foo()   // undefind
console.log('---------------自实现call函数------------------')
/** 实现思路：将方法绑定在被改变的对象下--->调用函数--->删除对象下的函数*/
Function.prototype.call2 = function (context) {
    // context = context || window || {}
    context = context || {}
    console.log(this);
    var arr = Array.from(arguments)
    arr.shift()
    context.fn = this;
    context.fn(...arr);
    delete context.fn
};

foo.call2(obj, 'param1', 'param2');

console.log('------------以下关于apply--------------')
console.log('------------原生--------------')


function fooo(name, sex) {
    console.log(name,sex)
    console.log(this.age)
}
var person = {
    age: 18
}

fooo.apply(person, ["chj", "man"]);

console.log('---------------自实现apply函数------------------')
Function.prototype.apply2 = function (context) {
    // context = context || window || {}
    context = context || {}
    var arr = arguments[1]
    context.fn = this;
    context.fn(...arr);
    delete context.fn
};

fooo.apply2(person, ['chj', 'chinese-man'])



console.log('------------以下关于bind函数--------------')
/** bind() 方法会创建一个新函数。当这个新函数被调用时，
 * bind() 的第一个参数将作为它运行时的 this，
 * 之后的一序列参数将会在传递的实参前传入作为它的参数*/
console.log('------------原生--------------')


function foooo(param1, param2) {
    console.log(param1, param2)
    console.log(this.value)
    return this.value
}
var obj1 = {
    value: 'chjssgssg'
}
foooo.prototype.aaa = 'myfriend';

var fn = foooo.bind(obj1, 'wewe');

fn('aaa')
console.log('-----'+fn.aaa);
var newFn = new fn('aaa');
console.log(newFn.aaa);
// console.log(newFn)
// newFn('aaa', 'bbb')

console.log('---------------自实现bind函数------------------')


Function.prototype.bind1 = function(context) {
    context = context || {};
    let arr = Array.from(arguments);
    arr.shift();
    context.fn = this;
    return function () {
        let arr1 = Array.from(arguments);
        return context.fn(...arr, ...arr1)
    }
}
Function.prototype.bind2 = function (context) {
    var self = this;
    var paramArr = Array.from(arguments);
    paramArr.shift();
    // if(paramArr.length==0) paramArr = null
    return function() {
        var param = [...paramArr ,...Array.from(arguments)];
        console.log(param);
        context = context || {};
        return  self.call(context, ...param)
    }
};

var fn1 = foooo.bind2(obj1);
var result = fn1('chj', 'chj');
console.log(result);
