// const fs = require('fs').promises;
// const http = require('http');
// const url = require('url');

// const server = http.createServer(async (req, res) => {
//     if (req.method === 'POST' && req.url === '/file') {
//         let body = ''; 
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', async () => {
//             const { filePath } = JSON.parse(body);
//             try {
//                 const data = await fs.readFile(filePath, 'utf8');
//                 await fs.writeFile('copy.txt', data);
//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.end(data);
//             } catch (error) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Error reading or copying file');
//             }
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });

// // Client code
// const clientRequest = async (filePath) => {
//     const options = {
//         hostname: 'localhost',
//         port: 3000,
//         path: '/file',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const req = http.request(options, (res) => {
//         let data = '';
//         res.on('data', (chunk) => {
//             data += chunk;
//         });
//         res.on('end', () => {
//             console.log('File received from server:', data);
//         });
//     });

//     req.on('error', (error) => {
//         console.error('Error with the request:', error);
//     });

//     req.write(JSON.stringify({ filePath }));
//     req.end();
// };

// // Simulate client doing other activities
// setTimeout(() => {
//     console.log('Client is doing other activities...');
//     clientRequest('original.txt');
// }, 1000);


var http = require('http');
var dt=require('module.js');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
});