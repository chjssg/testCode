const esprima = require('esprima');
const estraverse = require('estraverse');
const Styx = require('Styx');

const fs = require('fs');


const test_code = fs.readFileSync('./test.js', 'utf8');

global.nodeTypes = [];

const options = {
    loc: true,  //  位置信息
    range: true,    //  位置信息
    jsx: true,  //  支持jsx语法
    tolerant: true,
    tokens: true,
    comment: true
};

const ast = esprima.parse(test_code, options);

let nodeFunction = [];


const flowProgram = Styx.parse(ast);
// var flowNode = Styx.FlowNode()






var json = '';
nodeTypes.forEach(item => {
    json += JSON.stringify(item) + '\r\n'
});
fs.writeFile('data.json', json, function(err){
    if (err) {
        return console.error(err);
    }
});

// function writeDataToJSON(json) {
// }


console.log('-----------------------------------');
console.log(json);