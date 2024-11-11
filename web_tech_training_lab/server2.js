const http = require('http');
const add_subtract = require('./add_subtract');

// Assuming add.js and subtract.js are in the same directory

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const a = 10;
    const b = 5;

    const sum = add(a, b);
    const difference = subtract(a, b);

    res.write(`Sum: ${sum}\n`);
    res.write(`Difference: ${difference}\n`);
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});