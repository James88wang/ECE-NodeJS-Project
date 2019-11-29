"use strict";
var express = require('./express');
var metrics = require('./metrics');
var app = express();
app.set('port', 1337);
app.listen(app.get('port'), function () { return console.log("server listening on " + app.get('port')); });
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('You are at the Home page.\n\n\nwe will learn expresJs in this part !\n\n\n\n  Lets GOooo !!!\n\ntry http://localhost:1337/hello/my friend \n\nin order to go in the hello page and test the button which use AJAX metric request');
});
app.get(// it is the hello page with the button and AJAX metric request
'/hello/:name', function (req, res) { return res.render('hello.ejs', { name: req.params.name }); });
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/metrics.json', function (req, res) {
    metrics.get(function (err, data) {
        if (err)
            throw err;
        res.status(200).json(data);
    });
});
app.put('/', function (req, res) {
    // PUT
})
    .delete('/', function (req, res) {
    // DELETE
});
