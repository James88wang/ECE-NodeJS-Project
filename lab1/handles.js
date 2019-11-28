// ./handles.js
// Necessary imports
const url = require('url')
const qs = require('querystring')
module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('first module from HANDLES.JS');
  } 
}