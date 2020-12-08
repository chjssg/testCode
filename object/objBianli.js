/**
 * 区分for in, Object.keys(), Object.getOwnpropertyNames区别*/


function Foo(age) {
    this.name = '123'
    this.age = age
    this.id = 0
}
Foo.prototype.ceshi = 1234
var objj = new Foo(17)

//修改objj对象id属性为只读，不可枚举，不可配置
Object.defineProperty(objj,"id",{
    writable:false, //  是否为可写，改为false，当前属性变为只读。
    configurable:false, //   是否为可配置的，改为false之后，不能删除修改（不可逆）
    enumerable:false    //  是否为可枚举，改为false，for in时不会被遍历，但使用 "."依然可访问。
})



let obj = {
    a: 1,
    b: true,
    c: 'ceshi',
    d: function () {}
}

console.log(objj)

/**
 * for in 循环会遍历对象的自有属性和 原型上的属性*/
for (let o in objj) {
    console.log(o)
}

/**
 * Object.keys 返回对象自有属性 */
console.log(Object.keys(objj))


/**
 * Object.getOwnPropertyames 顾名思义，只返回自有属性包括不可枚举*/
console.log(Object.getOwnPropertyNames(objj))