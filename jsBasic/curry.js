function curry(fn) {
    function inner() {
        let arr = [...arguments];
        fn.apply(this, arr);
        return inner
    }
    return inner
}

var fn = curry(function (a, b) {
    console.log(a + b)
    return a + b
});
console.log(fn(1, 2)(3,4))