const NodeRSA = require('node-rsa');
const fs = require('fs')

function encrypt() {
    fs.readFile('./private_key.pem', function (err, data) {
        var key = new NodeRSA(data);
        let cipherText = key.encryptPrivate('hello world', 'base64');
        console.log(cipherText);
        return cipherText
    });
}
encrypt();

function decrypt() {
    //  当前的 public_key 有问题
    fs.readFile('./public_key.pem', function (err, data) {
        var key = new NodeRSA(data);
        let cipherText = encrypt();
        let rawText = key.decryptPublic(cipherText, 'utf8');
        console.log(rawText);
    });
}
// decrypt();
