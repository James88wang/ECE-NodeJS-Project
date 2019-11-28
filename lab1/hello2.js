const http = require('http')

/*const serverHandle = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}*/

// Import Node url module
const url = require('url')
const qs = require('querystring')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World !</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname;
  console.log(path);

  const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}

const server = http.createServer(serverHandle);
server.listen(8084)