const http = require('http')
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
    res.writeHead(200, {'Content-Type': 'text/plain'}); // the first if allows to have a path = /hello and a name = James
    if (path == '/hello' && params['name'] =='James') {
        res.write(' Hello Im James, a student at ECE PARIS');
        res.write('\n I am learning the node.js');
    }
    else if (path === '/hello' && 'name' in params) { // this if allows to have a path = /hello and no matter the name
        res.write('Hello ' + params['name'])
        // http://localhost:8088/hello?name=randomName
    }
    else{                                              // here, it corresponds to a invalid path 
        res.writeHead(404);
    }
    res.end();
}
const server = http.createServer(serverHandle);
server.listen(8088);

