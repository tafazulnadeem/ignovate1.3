var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var mimeTypes = {
           "html": "text/html",
           "jpeg": "image/jpeg",
           "jpg": "image/jpeg",
           "png": "image/png",
           "js": "text/javascript",
           "css": "text/css",
		   "ico":"image/x-icon"};
var databaseUrl = "test"; 
var collections = ["testData"]
var mongojs = require("mongojs");
/* var db=mongojs(databaseUrl, collections); */
var server = http.createServer(function onRequest(request, response) {
       var urlParts = url.parse(request.url);
	   var filePath=request.url;
	   console.log('filePath'+filePath);
	   var extname = path.extname(filePath);
	    console.log('extname'+extname);
	   
		var contentType = 'text/html';

		switch (extname) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
				
			case '.jpg':
				contentType = 'image/jpeg';
				break;
				
			case '.png':
				contentType = 'image/png';
				break;
				
			case '.svg':
				contentType = 'image/svg+xml';
				break;
				
			case '.woff':
				contentType = 'application/font-woff';
				break;
		}
			   
				if(extname!=".ico"){
			console.log('extname in if block '+extname);
			fs.readFile('./'+filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {                   
					response.writeHeader(200, { 'Content-Type': contentType });
					console.log('contentType in if block '+contentType);
					
					response.write(content); 
					response.end();
					/* response.write(content, 'utf-8');   */                
				}
			});
			
		}
			
	
    /* fs.exists(page, function fileExists(exists) {
              if (exists) {
                   response.writeHead(200, mimeType);
                   fs.createReadStream(page).pipe(response);
       
	 
	/* fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    /* http.createServer(function(request, response) {   */
        /* response.writeHeader(200, {"Content-Type": "text/html"});   */
		/*  response.writeHeader(200, {"Content-Type": mimeTypes});
        response.write(html);  
        response.end(); */  
   /*  }) */
/* }); */
	
	
	
}).listen(4400);
console.log('server is running on port 3300');