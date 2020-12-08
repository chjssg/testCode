function test(param) {
    console.log(param)

}
// test(null)

function foo(a, [b, c, e], d) {
    console.log('a:' + a);
    console.log('b:' + b);
    if (c) {
        console.log('c:' + c);
    }
    if (e) {
        console.log('e:' + e);
    }
    console.log('d:' + d);
}

// foo('a', 'b', 'd');

function aaa(a) {
    console.log(a)
    console.log(bbb('b'))
}
function bbb(b) {
    console.log(b)
    console.log(aaa('a'))
}

aaa('a')