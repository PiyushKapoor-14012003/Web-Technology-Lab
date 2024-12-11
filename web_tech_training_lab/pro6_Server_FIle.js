var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log("start")
    fs.readFile('./AsyncRead.txt',
        (err, data) => {
            if (err) throw err;
            else{
                console.log(data);
                res.writeHead(200, {'content-Type' : 'text/html'});
                res.write(data);
                console.log('file responded');
                res.end()
            }
        }
    )
}).listen(8090);