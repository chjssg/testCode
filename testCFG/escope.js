var escope = require('escope');
var esprima = require('esprima');
var estraverse = require('estraverse');

const options = {
    loc: true,  //  位置信息
    range: true,    //  位置信息
    jsx: true,  //  支持jsx语法
    tolerant: true,
    tokens: true,
    comment: true
};
const fs = require('fs');


const test_code = fs.readFileSync('./test.js', 'utf8');
var ast = esprima.parse(test_code, options);
var scopeManager = escope.analyze(ast);

var currentScope = scopeManager.acquire(ast);   // global scope

estraverse.traverse(ast, {
    enter: function(node, parent) {
        // do stuff

        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
        }
    },
    leave: function(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }

        // do stuff
    }
});