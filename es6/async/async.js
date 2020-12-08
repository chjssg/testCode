async function foo() {
    await test2()
    await test()
    console.log('two')
}
function test() {
    console.log('------------')
}
function test2() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve()
            console.log('one')
        }, 1000);
    });
}
foo()

// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
//
// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint('hello world', 1050);

function *f111(aaa) {
    yield new Promise((resolve, reject) => {
        return setTimeout(function () {
            console.log(123)
            resolve(123)
        }, 1000)
    })
    yield '234';
}
let fff = f111();
console.log(fff.next(234));
console.log(fff.next(234));

