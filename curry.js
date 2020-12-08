/**
 * 函数科里化 参数复用*/


function curry(func, length) {
    var args = [].slice.call(arguments, 2);
    console.log(length)
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        if (length > 1) {
            return curry(func, length - 1, ...newArgs)
        } else {
            return func.apply(this, newArgs);
        }

    };
}

function add(a, b, c, d) {
    return a + b + c + d;
}

var hhh = curry(add, 2);
console.log(hhh(1, 2, 3)(2));