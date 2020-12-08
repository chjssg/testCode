//  BASE64编解码
//  编码
var bc = new Buffer("Base64编解码内容");
var bec = bc.toString("base64");
console.log("Base64编码后结果： %s",bec);
//  log打印:Base64编码后结果： QmFzZTY057yW6Kej56CB5YaF5a65
//  解码
var bdc = new Buffer(bec, "base64");
var bdcs = bdc.toString();
console.log("Base64解码后结果： %s",bdcs);
//  log打印:Base64解码后结果： Base64编解码内容

//  原理：https://baijiahao.baidu.com/s?id=1644892102150918183&wfr=spider&for=pc