'use strict';

var http = require('http');
var url = require('url');
var currentTime = new Date(); 
var dateTime = "Server time: " + (currentTime.getMonth()+1) + "/"
                + currentTime.getDate() + "/" 
                + currentTime.getFullYear() + " @ "  
                + currentTime.getHours() + ":"  
                + currentTime.getMinutes() + ":" 
                + currentTime.getSeconds();

var server = http.createServer(function(req, res) {
	if(req.url === '/time') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify({msg: dateTime}));
		return res.end();
	}

	if(req.url === '/greet/' + name) {
		var name = req.url.toString().split('/')[2];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify({msg: 'hello ' + name}));
		return res.end();
	}

	res.writeHead(404, {'Content-Type': 'application/json'});
	res.write(JSON.stringify({msg: 'could not find page'}));
	res.end();

}).listen(3000, function() {
	console.log('server is running on localhost:3000');
});