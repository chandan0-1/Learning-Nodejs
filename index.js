const http = require("http");
const port = 8000;
const fs = require("fs");

function requestHandler(req,res){
	console.log(req.url);//Printing the requested url by browser

	res.writeHead(200,{"content-type" : "text/html"});

	fs.readFile("index.html",function(err,data){
		if (err){
			console.log("Got error =>",err);
			return res.end("<h2> Error Found!</h2>");
		}
		return res.end(data);
	})


	// res.end("<h1>Hello, from Server !!</h1>");//returning response to browser
}


const server = http.createServer(requestHandler);

server.listen(port,function(err){
	if (err){
		console.log(err);
		return;
	}
	else{
		console.log("Server is Up and running on port",port);
	}
})