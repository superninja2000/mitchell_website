const http = require("http")
const server = http.createServer(function (req, res) {
  console.log("Someone joined")
    // do a 302 redirect
    res.writeHead(302, {
      location: "https://swordbattle.io"
    });
  
    res.end();
  
}).listen(8080);
