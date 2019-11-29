var express = require('express')
var metrics = require('./metrics')
var app = express()

app.set('port', 1337)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app.get('/', function(req: any, res: any) {  // it is the home page 
  res.setHeader('Content-Type', 'text/plain');
  res.send('You are at the Home page.\n\n\nwe will learn expresJs in this part !\n\n\n\n  Lets GOooo !!!\n\ntry http://localhost:1337/hello/my friend \n\nin order to go in the hello page and test the button which use AJAX metric request');
});
app.get(  // it is the hello page with the button and AJAX metric request
  '/hello/:name', 
  (req: any, res: any) => res.render('hello.ejs', {name: req.params.name})
)
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/metrics.json', (req: any, res: any) => {
    metrics.get((err: any, data: any) => {
      if(err) throw err
      res.status(200).json(data)
    })
  })

app.put('/', function (req: any, res: any) {
    // PUT
})
.delete('/', (req: any, res: any) => {
    // DELETE
})