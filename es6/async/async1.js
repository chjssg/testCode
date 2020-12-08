/**
 * 判断执行顺序*/

async function async1() {
    console.log("async1 start");
    // await  async2();
    return new Promise(resolve => {
        resolve(async2())
    }).then(() => {
        console.log('async1 end')
    });
    console.log("async1 end");
}
// async function async2() {
//     console.log( 'async2');
// }
function async2(){
    console.log('async2');
    return Promise.resolve();
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
},0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end');




