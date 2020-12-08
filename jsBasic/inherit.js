// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    this.share = [123];
    // 实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }

    var vm = this
    console.log(vm.constructor)
    f(vm)
}
// 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};
// console.log('');

function f(vm) {
    // console.log(vm)
    // console.log(vm.constructor.sleep)
}

var animal = new Animal('chj')




/** 1.构造函数模式*/
function Dog(name) {
    Animal.call(this, name)
}

var dog = new Dog('qiyue');
console.log(dog.name);
console.log(dog.share);

//  缺点：Animal里面的sleep方法每创建一次实例就会被创建一次
console.log('-------------------------');




/** 2.原型链继承*/
function Cat(name) {
    this.name = name;
}

Cat.prototype = new Animal(); //  这样的一个弊端造成 Animal 里引用类属性share被共享
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true

console.log('-------------------------');



/** 3.组合继承，即原型链和构造函数组合*/
Animal.prototype.sayName = function () {
    console.log("I'm a person")
}
function Person(age) {
    Animal.call(this)
    this.age = age
}
Person.prototype = new Animal()
Person.prototype.constructor = Person; //    Person.prototype重新赋值后constructor会丢失

var person = new Person(18)

console.log(person.name)
console.log(person.age)
person.sayName()
//  调用了两次父构造函数
console.log('-------------------------')


/** 4.Object.create的原理继承*/
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

var obj = createObj(new Animal())
console.log(obj.name)
console.log('-------------------------')



/** 5.寄生式继承 :
 * 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象*/
function jisheng (o) {
    var clone = createObj(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}

console.log('-------------------------')
/** 6.寄生组合继承：
 * 只调用了一次 Animal 构造函数，避免了在 Animal.prototype 上面创建不必要的、多余的属性。
 * 与此同时，原型链还能保持不变；
 * 因此，还能够正常使用 instanceof 和 isPrototypeOf。
 * 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。*/
function Duck(name, age) {
    Animal.call(this, name)
    this.age =  age
}
Duck.prototype = createObj(Animal.prototype)
/**  执行了以下三步
 *  var F = function () {};
 *  F.prototype = Animal.prototype;
 *  Duck.prototype = new F();
 */

var duck = new Duck('duck')
console.log(duck.name)