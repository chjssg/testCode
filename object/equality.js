function eq(a, b) {

    // === 结果为 true 的区别出 +0 和 -0
    if (a === b) return a !== 0 || 1 / a === 1 / b;

    // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
    if (a == null || b == null) return false;

    // 判断 NaN
    if (a !== a) return b !== b;

    // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;

    // 更复杂的对象使用 deepEq 函数进行深度比较
    return deepEq(a, b);
};

// 判断对象相等
function eqObj(objA, objB) {
    var keysA = Object.getOwnPropertyNames(objA)
    if(keysA.length !== Object.getOwnPropertyNames(objB).length) {
        return false
    }
    for (let i = 0; i < keysA.length; i++) {
        if (Object.prototype.toString.call(objA[keysA[i]]) === '[object Array]' || Object.prototype.toString.call(objA[keysA[i]]) === '[object Object]') {
            if(!eqObj(objA[keysA[i]], objB[keysA[i]])) {
                return false;
            }
        } else if (objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }
    return true
}

var obja = {a: 1,b: {c: 3}, d: []};
var objb = {a: 1,b:{c: 3}, d: [], e: 1};
obja.e = 1;
// obja.f = obja
// objb.f = objb
console.log(eqObj(obja, objb));