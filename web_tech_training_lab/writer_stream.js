const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream('2213057.jpg');
const request = http.get('http://erp.psit.ac.in/assets/img/Simages/2213057.jpg', function(response) {
    response.pipe(file);
});
