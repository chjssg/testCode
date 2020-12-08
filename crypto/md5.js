var crypto = require('crypto');

var content = 'password';//加密的明文；

var md5 = crypto.createHash('md5');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
md5.update(content);

var d = md5.digest('hex');  //加密后的值d

// console.log("加密的结果：" + d);


// var md5 = require('md5')
// var result = md5('a')
// let rand = new Uint8Array(new Uint32Array([Math.floor(Math.random() * 4294967296)]).buffer)
// let rand1 = new Uint32Array([Math.floor(Math.random() * 4294967296)]).buffer
// // 输出：0cc175b9c0f1b6a831c399e269772661
// console.log(rand1);

console.log(encryption('luwenjing'));
function encryption(text) {
    let str = '';
    const alterText = [];
    const varCost = [];
    const TextLength = text.length;
    for (let i = 0; i < TextLength; i++) {
        const random = parseInt(Math.random() * 266);
        alterText[i] = text.charCodeAt(i) + random;
        varCost[i] = random;
    }
    for (let i = 0; i < TextLength; i++) {
        str += String.fromCharCode(alterText[i],varCost[i]);
    }
    return str;
}

function decrypt(text) {
    let str = '';
    const alterText1 = [];
    const varCost1 = [];
    let TextLength = text.length;
    for (let i = 0; i < TextLength; i++) {
        alterText1[i] = text.charCodeAt(i);
        varCost1[i] = text.charCodeAt(i + 1);
    }
    for (let i = 0; i < TextLength; i = i + 2) {
        str += String.fromCharCode(alterText1[i] - varCost1[i]);
    }
    return str;
}
console.log(decrypt(encryption('chenhaojun')))
console.log(decrypt('ņã¯Ge\u0000ŀÒ£;ëèyÉ_¼GÅW'))

