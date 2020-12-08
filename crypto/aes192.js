const crypto = require('crypto');

//AES对称加密

//唯一（公共）秘钥
var secretkey = 'password';


function encrypt(content) {
    //使用aes192加密
    var cipher = crypto.createCipher('aes192', secretkey);
    //编码方式从utf-8转为hex;
    var enc = cipher.update(content, 'utf8', 'hex');
    //编码方式转为hex;
    return (enc += cipher.final('hex'));
}

var sign = encrypt('花样百出');
console.log(sign)

function decrypt(sign) {
    let enc = sign
    //AES对称解密
    var decipher = crypto.createDecipher('aes192', secretkey);
    var dec = decipher.update(enc, 'hex', 'utf8');
    dec += decipher.final('utf8');
    console.log('AES对称解密结果：' + dec);
}
decrypt(sign);