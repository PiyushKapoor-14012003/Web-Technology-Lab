var http=require('http')
var {add,subtract}=require('./add_subtract.js')
http.createServer(function (req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    const a = 10;
    const b = 5;

    const sum = add(a, b);
    const difference = subtract(a, b);

    res.write(`Sum: ${sum}\n`);
    res.write(`Difference: ${difference}\n`);
    res.end();
}).listen(8090);