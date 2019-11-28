express = require('express')
metrics = require('./metrics')
app = express()

app.set('port', 1337)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app.get('/', function(req, res) {  // it is the home page 
  res.setHeader('Content-Type', 'text/plain');
  res.send('You are at the Home page.\n\n\nwe will learn expresJs in this part !\n\n\n\n  Lets GOooo !!!\n\ntry http://localhost:1337/hello/my friend \n\nin order to go in the hello page and test the button which use AJAX metric request');
});
app.get(  // it is the hello page with the button and AJAX metric request
  '/hello/:name', 
  (req, res) => res.render('hello.ejs', {name: req.params.name})
)
path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/metrics.json', (req, res) => {
    metrics.get((err, data) => {
      if(err) throw err
      res.status(200).json(data)
    })
  })

app.put('/', function (req, res) {
    // PUT
})
.delete('/', (req, res) => {
    // DELETE
})