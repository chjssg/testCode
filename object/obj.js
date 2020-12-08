var obj = {
    a: 111,
    init: {
        test: 'ceshi'
    }
};

function initfunc(obj) {
    return obj.init;
}

var aaa = initfunc(obj);
console.log(aaa.__proto__);

console.log(this.obj)