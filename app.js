var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write(Date.now().toString());
    res.end();
}).listen(8080);
