var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/HTML"});
response.write("Hello OMAIS");
response.end();
}).listen(8081);
