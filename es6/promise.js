/** promise 是一个构造函数生成promise实例，接受一个函数作为参数，，函数的参数为reslove和reject
 * 基础方法.then和.catch
 * .finally()指不管如何最后都会执行的方法
 * */
// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(100).then((value) => {
//     console.log(value);
// });

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
//
// p2.then(result => console.log(result)).catch(error => console.log(error));

// var foo = new Promise(function (resolve, reject) {
//     var a = 1+2
//     resolve(a)
//     // reject('errrrr')
//     console.log('1234')
// })
//
// foo.then(val => {
//     console.log(val + '------')
// }).catch(err => {
//     console.log(err)
// }).finally(aaa => {
//     console.log(aaa + '--------------')
// });

/**
 * promise.resolve('foo')方法等价于：
 * new Promise(function(reslove, reject) {reslove('foo')})
 *
 * 关于reslove的参数：
 * 1.如果是promise实例则不做修改
 * 2.如果是一个带有then方法的对象，如下所示。会将obj转为promise对象并立即执行then方法
 * 3.若参数为原始值，或对象不带有.then方法。会新创建promise对象，状态为reslove
 * */

// var obj = {
//     then: function(reslove, reject) {
//         reslove('done')
//         console.log(123)
//     }
// }
// Promise.resolve(obj).then(val => {
//     console.log(val)
// })
//
// // var testStr = {a:123}
// var testStr = ''
//
// Promise.resolve(testStr).then(val => {
//     console.log(val)
// })

/** Promise.all()方法是执行所有的promise对象，参数如果不是promise对象会调用Promise.reslove方法生成promise对象
 * all当所有promise对象变为fulfilled的时候会返回fulfilled,当有一个rejected的时候就返回rejected
 * race是当有一个promise对象状态变了就返回结果
 * */
// var f1 = new Promise(function(resolve, reject) {
//     resolve(123)
// })
// var f2 = new Promise(function(resolve, reject) {
//     // resolve(456)
//     setTimeout(() => resolve(456), 1000)
//     // setTimeout(() => reject(new Error('fail')), 3000)
// })
// Promise.race([f1, f2]).then((a) => {
//     console.log(a)
// }).catch(err => {
//     console.log(err)
// })

/**
 * Promise.allSettled()所有promise对象都执行完了才会返回结果，结果状态为fulfilled，收到的参数是一个数组对应传入的promise对象执行结果
 * Promise.any()是只要一个状态变为fulfilled就会返回，如果都为rejected则会报错
 * */

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
// Promise.allSettled([p1,,p2]).then(val => {
//     console.log(val)
// })



/** 提案中，还未实现
 * Promise.try()模拟try代码块，如果是同步函数则执行
 * */

// const f = () => console.log('now');
// Promise.try(f);
// console.log('next');


/**
 * 红绿灯问题：
 *  红灯三秒亮一次，
 *  绿灯一秒亮一次，
 *  黄灯2秒亮一次；
 *  如何让三个灯不断交替重复亮灯？
 *  （用 Promse 实现）
 * */


function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

function lightfy(callback, time) {
    return new Promise(resolve => {
        setTimeout(function () {
            callback()
            resolve()
        }, time)
    })
}

function start() {
    Promise.resolve().then(resolve => {
        return lightfy(red, 1000)
    }).then(resolve => {
         return lightfy(green, 2000)
    }).then(resolve => {
        return lightfy(yellow, 2000)
    }).then(res => {
       return  start()
    })
}
// start()





/**
 * 将带有callback的函数改造成promise
 * */

function doSomething(msg, cb) {
    console.log(arguments[1])
    console.log(msg)
    cb(null, msg, '123')
    return msg
}
doSomething('hahaha', function(err, data) {
    // console.log(arguments)
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


function promisefy1(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            func(...args, function(err, ...values) {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(values)
                }
            })
        })
    }
}

function promisefy(func) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            function callback(err, ...values) {
                if(err) {
                    return reject(err)
                } else {
                    return resolve(values)
                }

            }
            args.push(callback);
            func.call(null, ...args)
        })
    }
}
// promisefyy(doSomething)().then

// promisefy(doSomething)('data123').then(val => {
//     console.log('reslove:' + val)
// }).catch(err => {
//     console.log('err: ' + err)
// })


// function foo(...args) {
//     console.log(args)
//     return function () {
//         console.log('second')
//         return new Promise(function (reslove, reject) {
//             console.log('third')
//         })
//     }
// }
//  var a = foo('first')
// a()

// let a = new Promise((resolve, reject) => {
//     console.log(123);
//     resolve(123)
// });
// console.log(a);
// a.then(resolve => {
//
//     console.log(resolve);
//
// });

//const scheduler = new Scheduler(2)

/**
 * 最多两个的并发其
 * */
class Scheduler {
    constructor() {
        this.tasks = [];
        this.stack = [];
    }
    start() {
        // let _this = this;
        // function step() {
        //     if (_this.tasks.length !== 0 && _this.stack.length < 2) {
        //         let promise = _this.tasks.shift()().then(res => {
        //             _this.stack.splice(_this.stack.indexOf(promise), 1)
        //             step()
        //         })
        //         _this.stack.push(promise)
        //         // return promise
        //     } else {
        //         return Promise.race(_this.stack).then((res) => {
        //             // const promise = _this.tasks.shift()().then(() => {
        //             //     step()
        //             // });
        //             // _this.stack.push(promise);
        //             step()
        //         })
        //     }
        // }
        // step()
        while (this.stack.length < 2 && this.tasks.length !== 0) {
            let promise = this.tasks.shift()().then(res => {
                this.stack.splice(this.stack.indexOf(promise), 1);
                this.start()
            })
            this.stack.push(promise)
        }
    }
    add(time, content) {
        return function () {
            return new Promise((resolve) => {
                setTimeout(resolve, time * 1000)
            }).then(() => {
                console.log(content)
            })
        }
    }
    addTask(time, content) {
        const promise = this.add(time, content);
        this.tasks.push(promise)
    }
}

// const scheduler = new Scheduler();
// scheduler.addTask(1, '1');   // 1s后输出’1'
// scheduler.addTask(2, '2');  // 2s后输出’2'
// scheduler.addTask(1, '3');  // 2s后输出’3'
// scheduler.addTask(1, '4');  // 3s后输出’4'
// scheduler.start();


/**
 * 输出123
 * */
// [1,2,3].reduce(function (promise, cur) {
//     return new Promise(resolve => (
//         promise.then(res => {
//             setTimeout(function () {
//                 console.log(cur)
//                 resolve()
//             }, 1000)
//         })
//     ))
// }, Promise.resolve())


/**
 * 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
 * */
const time = (timer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, timer)
    })
}
const ajax1 = () => time(2000).then(() => {
    console.log(1);
    return 1
})
const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
})
const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
})

function mergePromise (arr) {
    // 在这里写代码
    let data = []
    let promise = Promise.resolve()
    arr.forEach(item => {
        promise = promise.then(item).then(res => {
            // console.log(data)
            data.push(res)
            return data
        })
    })
    return promise
}

// mergePromise([ajax1, ajax2, ajax3]).then(data => {
//     console.log("done");
//     console.log(data); // data 为 [1, 2, 3]
// });

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]


/**
 * 限制异步操作的并发个数并尽可能快的完成全部
 *
 * 有8个图片资源的url，已经存储在数组urls中。
 * urls类似于['https://image1.png', 'https://image2.png', ....]
 * 而且已经有一个函数function loadImg，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。
 * 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。
 * 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。
 * */

var urls = [
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            console.log("一张图片加载完成");
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}

function limitLoad(urls, handler, limit) {
    let promises = urls.splice(0, limit).map((url, index) => {
        return handler(url).then(res => {
            return index;
        })
    });

    return urls.reduce(function (promise, cur) {
        return promise.then(res => {
            Promise.race(promises).then(index => {
                promises[index] = handler(url).then(res => {
                    return index;
                })
            })
        }).then(res => {
           return Promise.all(promises)
        })
    }, Promise.resolve())
}
limitLoad(urls, loadImg, 3);



