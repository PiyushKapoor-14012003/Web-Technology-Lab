var http = require('http');

var countReferesh = 0;

http.createServer(function (req, res){
    res.writeHead(200, {'content-Type' : 'text/html'});
    countReferesh++;
    console.log(countReferesh);
    res.end("Referesh count "+countReferesh);
}).listen(3001)