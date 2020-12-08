function* helloWorldGenerator() {
    console.log(231231231)
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
// console.log(hw.next())



// function* demo() {
//
//     console.log('Hello' + (yield)); // OK
//     console.log('Hello' + (yield 123)); // OK
// }
// console.log(demo().next());


let obj = {
    data: [ 'hello', 'world', {aa :2} ],
    a:1,
    b:2,
    c:3,
    [Symbol.iterator]() {
        const self = this;

        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};


// console.log(obj)

for (let a of obj) {
    console.log(a)
}

function Foo(aa) {
    this.aa = aa
}
Function.prototype.method = function (name, func) {
    this.prototype[name] = func
    // return this
}
var foo = new Foo('chj')
Foo.method('console', function () {
    console.log(123)
})
foo.console()

console.log('-----------------------------------------------------')
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
    if (t) {
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

// 下面生成二叉树
function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
    result.push(node);
}

console.log(result);
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log('--------------------------------------------------')
function* F() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

// var f = new F()

var objj = {}
// objj.__proto__ = F.prototype
var f = F.call(F.prototype)
console.log(f.next())
console.log(f.next())
console.log(f.a);





