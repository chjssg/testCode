/** new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一 */
function Person (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
    console.log('HAHAHAHA');
    return 'return value'
}

Person.prototype.strength = 60;

Person.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
};

var person = new Person('Kevin', '18');

console.log(person);
console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60

person.sayYourName(); // I am Kevin

console.log('---------------new实现-----------------------');

/** 实现new
 * new特点：
 * 1.返回一个对象
 * 2.继承构造函数Person的属性
 * 3.this指向返回的对象*/
function aNew(_function) {
    var args = Array.from(arguments);
    args.shift();

    var obj  = {};
    obj.__proto__ = _function.prototype;
    _function.call(obj, ...args);
    return obj
}

var own_person = aNew(Person, 'chj', 18);

console.log(own_person.name);
console.log(own_person.habit);
console.log(own_person.strength);


console.log('-------------------Object.create()----------------------')

var obj = {
    name: 'ashldfk'
}
var aObj = Object.create(obj, {age: {value: 12}})
console.log(aObj)
console.log(aObj.name)
console.log(aObj.age)
console.log(aObj.__proto__)
console.log('=========================');

/** Object.create(obj)都做了什么
 * 1.创建了一个对象
 * 2.创建的对象继承于obj
 * */
function create(obj) {
    function F() {}
    F.prototype = obj;
    return new F()
}

var own_aObj = create(obj);

console.log(own_aObj);
console.log(own_aObj.name);
console.log(own_aObj.__proto__);