var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(function(connection){
	connection.on("text", function(msg){
		server.connections.forEach(function(con){
			con.sendText(msg);
			console.log(msg);
		});
	});
});
server.listen("9090");
console.log("Socket server listening on port 9090");