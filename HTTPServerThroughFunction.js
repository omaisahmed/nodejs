var http = require("http"); 
function onRequest(request, response) { 
console.log("Request received."); 
response.writeHead(200, {"Content-Type": "text/plain"}); 
 response.write("HTTP Server through Function start()"); 
 response.end(); 
}
  http.createServer(onRequest).listen(8087); 

