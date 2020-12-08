console.log('1');
//记作 setTime 1
async function async1(){
    console.log('async1 start');
    await async2();
    await test2();
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
function test2() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve();
            console.log('two')
        }, 0);
    });
}
async1();

setTimeout(function () {
    console.log('2');
    // set4
    setTimeout(function() {
        console.log('3');
    });
    // pro2
    new Promise(function (resolve) {
        console.log('4');
        setTimeout(function() {
            console.log('15');
            resolve();
        }, 0);


    }).then(function () {
        console.log('5')
    }).catch(val => {
        console.log(5)
    })
});

// 记作 pro1
var pro1 = new Promise(function (resolve) {
    console.log('6');
    resolve();
});
var pro2 = new Promise(function (resolve) {
    console.log('13');
    resolve();
});
Promise.all([pro1, pro2]).then(function () {
    console.log('7');
    // set3
    setTimeout(function() {
        console.log('8');
    });
});

// 记作 setInter2
setTimeout(function () {
    console.log('9');
    // 记作 pro3
    new Promise(function (resolve) {
        console.log('10');
        resolve();
    }).then(function () {
        console.log('11');
    })
});
console.log('12');
function* gen() {
    yield test2();
    yield console.log(14)
}
var generato = gen();
generato.next();
generato.next();


