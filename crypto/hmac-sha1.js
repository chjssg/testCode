var crypto = require('crypto');

var content = 'password';//加密的明文；
var token1 = 'miyue';//加密的密钥；
function sha1() {
    var buf = crypto.randomBytes(16);

    //  密钥加密；
    token1 = buf.toString('hex');
    console.log("生成的token(用于加密的密钥):" + token1);

    //  秘钥；
    var SecrectKey = token1;
    //  定义加密方式
    var Signture = crypto.createHmac('sha1', SecrectKey);

    Signture.update(content);
    //  生成的密文后将再次作为明文再通过pbkdf2算法迭代加密；
    // var miwen=Signture.digest().toString('base64');
    var miwen=Signture.digest('hex')
    console.log("加密的结果f：" + miwen);

    return miwen
}
sha1()


function sha11() {
    //SHA1-产生160位的加密结果【不可逆】
    var hash_sha1 = crypto.createHash("sha1");
    hash_sha1.update(content);
    var sha1c = hash_sha1.digest("hex");//显示为16进制
    console.log("SHA1加密后结果：%s",sha1c);
}
// sha11()
