const http = require("http");
const port = 8000;

function requestHandler(req,res){
	console.log(req.url);//Printing the requested url by browser

	res.end("<h1>Hello, from Server !!</h1>");//returning response to browser
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