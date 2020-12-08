
let c = 5, d;
// //  多个return如何处理
// var a = 1;
// function hello() {
//     var a = 1;
//     if(c < 5) {
//         console.log('bad world');
//         return 123
//     }else if (c = 5){
//         console.log('hello world');
//         return 456
//     } else {
//         return 567
//     }
// }
//
// global.a = 1;
// // hello()
//
// var obj = {
//     func: function () {
//         console.log('对象内的函数');
//         return '对象内的函数'
//     },
//     a: 1
// };
//
// obj.func();
//
// var funcc = (para) => { console.log(para) };
//
// funcc('箭头函数')
//
//
// function hello11(obj, jhg) {
//     function test() {
//         console.log(obj, '函数嵌套')
//     }
//     test();
//     return "测试"
// }
//
//
// // hello11(345, 111)
//
var foo = function(flag) {
    console.log(flag, '变量声明函数')
};
//
//
// foo();
// foo = 1;
//
// // foo('foo');
//
// module.exports = {foo}
//
//
//
// var f1 = new Promise(function(resolve, reject) {
//     resolve('resolve')
// });
// f1.then(res => {
//     console.log(res)
// });
// var f2 = new Promise(function(resolve, reject) {
//     resolve(456)
//     // setTimeout(() => resolve(456), 1000)
// });
// Promise.race([f1, f2]).then(([a, b]) => {
//     console.log(a, b)
// }).catch(err => {
//     console.log(err)
// });
//
//
// (function (param) {
//     console.log(param)
// })(123);
//
// (function nimiing2(param) {
//     console.log(param)
// }(123));
//
// (function() {
//    console.log('匿名函数');
//     function ninnimingming() {
//         return '匿名的匿名'
//     }
// })();
// function* helloWorldGenerator() {
//     console.log(231231231)
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
//
// var hw = helloWorldGenerator();
//
// var date = new Date();
// date.getFullYear();
//
// const fs = require('fs');
//
// const test_code = fs.readFileSync( './test.js', 'utf8' );
//
//
// async function asyn() {
//     await console.log(123)
// }
// asyn()
//
//
// class Class {
//     constructor(a) {
//         this.a = a
//     }
//     toStrinng() {
//         console.log(a)
//     }
// }

// function hahaha(a = null, b) {
//     let aNumber = 123;
//     aNumber += 10;
//
//     let str, ssdff;
//     str = 'sssssss';

    // let strr = 'asdfad';
    // strr = 'cjkasndc';
    //
    // var foo = function(flag) {
    //     console.log(flag, '变量声明函数')
    // };


    // for (let i = 0; i < 10; i++) {
    //     console.log(i)
    // }
    // function fooo() {
    //     return 'hahahaha'
    // }
    // var f1 = new Promise(function(resolve, reject) {
    //     resolve('resolve')
    // });
    // f1.then(res => {
    //     console.log(res)
    // });
    // fooo('123')
    // let arr = [1,2,3];
    // let aNull = null;
    // let aUndefind = undefined;
    // let aBool = true;
    // let Symbol = Symbol(123);
    // let obj = {
    //     a: 123,
    //     foo: function () {
    //         console.log(123)
    //         return 13
    //     }
    // };
    // obj.b = 90;
    // var vvv = obj.foo();
    //
    // let objj;
    // objj = {};
    // objj.a = 1;
    // console.log(str);
    // console.log(strr, aNumber);
//     let c = 5;
//     if(c < 5) {
//         if (c < 0) {
//             return 8888
//         }
//         console.log('bad world');
//         return 123
//     } else if (c == 5){
//         console.log('hello world');
//         return 456
//     } else if(c > 5) {
//         return 567
//     } else {
//         return  111
//     }
//
//     // if (aNumber == 5) {
//     //     return 1235
//     // } else {
//     //     return
//     // }
//
//     if (aNumber > 5) {
//         let ccc = 1111
//         return 1234
//     } else {
//         return 678
//     }
//     // hello();
//     // return 123
//     // return ;
//     // return 890
//
//     try {
//         console.log(123)
//     } catch (e) {
//         return e
//     }
// }
//
// hahaha(1, 3);

    app.get('/a', function(req, res) {
        console.log(connection.escape(req.query.name));
        var sqllll = 'SELECT * from person where name= '+ connection.escape(req.query.name) + ';';
        console.log(sqllll);
        connection.query(sqllll, function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            res.send(results);
        });
    });
function f() {
    let str, hhhh
    str = 1 + 1

}