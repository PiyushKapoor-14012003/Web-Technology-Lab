var fs = require('fs');

console.log("File proccesing using Blocking")
console.log('Start')
const data = fs.readFileSync('./AsyncRead.txt', 'utf-8')
console.log('data : '+ data);
console.log('end');