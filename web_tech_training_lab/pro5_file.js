var fs = require('fs');

console.log("File proccesing using asyncread")
console.log('start');

fs.readFile('./AsyncRead.txt', 'utf-8',
    (err,data) => {
        if (err) throw err;
        console.log('aSyncReads.txt data\n', data)
});

console.log('End')


