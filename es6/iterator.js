const arr = ['red', 'green', 'blue'];

for(let v of arr) {
    console.log(v); // red green blue
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

console.log(JSON.stringify(obj))
for(let v of obj) {
    console.log(v); // red green blue
}

for (let pair of arr.entries()) {
    console.log(pair);
}