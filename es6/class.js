class Foo {
    constructor() {
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo);

var obj={
    a: 1,
    b: 2,
    set c(x) {
        console.log('c被赋值：', x);
        c = x;
    },
    get c() {
        console.log('c被取出: ', c);
        return c;
    }
};

obj.c = 3;  //c被赋值： 3
obj.c;  //c被取出:  3



class base {
    constructor() {}
    aaaa() {
        this.aaa = 234
        // console.log(234)
    }
}

class Class extends base {
    constructor() {
        super();
        this.aaa = 123
    }

    // aaaa() {
    //     this.aaa = 3455
    // }
}

var cla = new Class();
console.log(cla.aaa);
cla.aaaa();
console.log(cla.aaa);
