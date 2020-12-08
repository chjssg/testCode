var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}!`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}!`);
        return Reflect.set(target, propKey, value, receiver);
    }
});
obj.a = 1;
obj.a++;

var proxy = {a:1,b:2};
var obj1 = new Proxy(proxy, {
    get(target, p, receiver) {
        console.log(target);
        console.log(p);
        console.log(receiver);
        if (p === 'a') {
            return 33;
        } else {
            return target[p]
        }
    }
});
console.log(obj1.a);
console.log(obj1.b);

console.log('------------------');
console.log(proxy.a);
console.log(proxy.b);
console.log('------------------');

var handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function(target, thisBinding, args) {
        console.log(target, thisBinding, args)
        return args[0];
    },

    construct: function(target, args) {
        return {value: args[1]};
    }
};

var fproxy = new Proxy(function(x, y) {
    this.aaa = 789;
    return x + y;
}, handler);

var foo = fproxy(1,2);
console.log(new fproxy(4,5))
console.log(foo);
console.log(fproxy.a);