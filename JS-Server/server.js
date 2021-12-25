var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {    //create web server
    if (req.url == '/') {   //check the URL of the current request
        
        // Set Response Header
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        
        // Set Response Content
        res.write('<html><body><p>This is HomeYe.</p></body></html>');

        //End Response
        res.end();

    }
    else if (req.url == "/student"){

        //Set Response header
        res.writeHead(200, { 'Content-Type' : 'text/html'});

        //Set Response Content
        res.write('<html><body><p>This is Student.</p></body></html>');

        //End Response
        res.end();

    }
    else if (req.url == "/admin") {

        //Set Response Header
        res.writeHead(200, {'Content-Type' : 'text/html'});

        //Set Response Content
        res.write('<html><body><p>This is admin Page.</p></body></html>');

        //End Response
        res.end();
    }
    else 
        res.end('Invalid Request! You B%tch');

    if (req.url == '/data') {   //check the URL of the current request
         
        //Set Response Header
        res.writeHead(200, { 'Content-Type' : 'application/json'});

        //Set Response Content
        res.write(JSON.stringify({ message: "Heyy YeAh"}));

        //End response
        res.end();
    }    

});

server.listen(8030);
console.log('Node.js web server at port 8030 is running..');