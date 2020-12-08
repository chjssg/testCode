const idAdd = require('./index').idAdd();
global.nodeTypes = [];
const { foo} = require('./test');
const { foo1} = require('./test1');

foo(idAdd);
foo1(idAdd);
foo(idAdd);
console.log(global.aaa)
console.log(idAdd());
console.log(nodeTypes);