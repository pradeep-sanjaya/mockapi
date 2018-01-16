var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var query = parsedUrl.query;
    if (query.status != undefined) {
        console.log(query.status);
    }
    res.write(Date.now().toString());
    res.end();
}).listen(8080);
