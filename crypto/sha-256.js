// 加载 crypto 模块
const crypto = require('crypto')
// 加载 fs 模块
const fs = require('fs')
// 读取私钥
const privateKey = fs.readFileSync('./private_key.pem').toString()
// 读取公钥
const publicKey = fs.readFileSync('./public_key.pem').toString()
// 验证的数据
const data = 'Hello World!'
// 签名算法
const Algorithm = 'SHA256'


// 创建签名
const sign = crypto.createSign(Algorithm)
// 使用 update 方法更新数据
sign.update(data)
// 生成签名 以 hex 格式输入数据
const sig = sign.sign(privateKey, 'hex')

// 验证签名
const verify = crypto.createVerify(Algorithm)
// 使用 updata 方法更新数据
verify.update(data)
// 验证签名的数据是否正确
const result = verify.verify(publicKey, sig, 'hex')
// 打印签名验证结果
console.log(result)