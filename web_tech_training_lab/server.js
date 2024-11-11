var http=require('http')
var dt=require('./module.js')
http.createServer(function (req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("Current Date and Time"+ dt.myDateT());
    var fs= require('fs')
    const data=fs.readFileSync('web_tech_training_lab/b.txt','utf-8');
    res.end(data)
}).listen(8090);