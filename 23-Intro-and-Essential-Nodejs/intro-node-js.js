var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    if (req.url === "/about") {
      res.writeHead(900, { "Content-Type": "text/html" });
      res.write("Welcome to about us page"); //write a response to the client
      res.end(); //end the response
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Welcome to contact us page");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Hello World!");
      res.end();
    }
  })
  .listen(8000); //the server object listens on port 8080
