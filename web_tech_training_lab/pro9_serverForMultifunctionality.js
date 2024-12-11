var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    console.log('Server Started');
    fs.readFile('./AsyncRead.txt', 'utf-8',
         (err, data)=>{
            if(err) throw err;
            else{
                fs.writeFile('./A.txt', data+' Copied data', (err) => {
                    if (err) throw err;
                    console.log('Content written to A.txt successfully');
                });                
            }
         })
    fs.readFile('A.txt', 'utf-8',
        (err, data) => {
            if (err) throw err;
            else{
                console.log(data)
                res.writeHead(200, {'content-type':'text/html'});
                res.write(data);
                res.end();
            }
        }
    )
    

}).listen(8090)

