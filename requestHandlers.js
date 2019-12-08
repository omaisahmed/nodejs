var http = require("http"); 
function start(){
function onRequest(request, response) { 
console.log("Request received."); 
response.writeHead(200, {"Content-Type": "text/plain"}); 
 response.write("HTTP Server through Function start()"); 
 response.end(); 
}


function sleep(milliSeconds) { 
    var startTime = new Date().getTime(); 
     while (new Date().getTime() < startTime + milliSeconds); 
     } 
     sleep(10000); 
     return "Hello Start"; 
      } 
       function upload() { 
           console.log("Request handler 'upload' was called."); 
            return "Hello Upload"; 
             } 

http.createServer(onRequest).listen(8090); 
console.log("Server has started.");

exports.start=start; 
exports.upload = upload;
 
 
 

               
