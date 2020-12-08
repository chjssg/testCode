// var foo = 1
// console.log(foo)
// function foo(){
//     console.log("foo");
// }
//
// console.log(foo)


/**
 * this指向*/
console.log('---------------------------------')
var value = 1;

var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
}

//示例1
console.log(foo.bar());
//示例2
console.log((foo.bar)());
//示例3
console.log((foo.bar = foo.bar)());
//示例4
console.log((false || foo.bar)());
//示例5
console.log((foo.bar, foo.bar)());

