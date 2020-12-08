var o = {
    a: null,
    b: 1,
    c: function () {
        console.log(123)
    },
    aaa: {
        g: 1,
        c: undefined
    }
}
var arr = [1, 2, 3, 4, 5]

/**
 * 实现功能*/
function deepcopy(obj) {
    var deepobj = obj instanceof Array ? []:{}
    for(let key in obj){
        typeof obj[key] === "object" ? deepobj[key] = deepcopy(obj[key]): deepobj[key] = obj[key]
    }
    console.log(deepobj)
    return deepobj
}

/**
 * 优化*/
function deepcopy1(obj) {
    if(typeof obj !== 'object') return obj
    var deepobj = obj instanceof Array ? []:{}
    for(let key in obj){
        // 判断是否为自身属性而非继承属性
        if (obj.hasOwnProperty(key)) {
            typeof obj[key] === "object" ? deepobj[key] = deepcopy(obj[key]): deepobj[key] = obj[key]
        }

    }
    console.log(deepobj)
    return deepobj
}
var obj = {};
obj.aaa = obj;
deepcopy(o);
deepcopy1(obj);