/**
 ** @author <Rishabh Anand>
 ** @email <ranand16@gmail.com>
**/

var express = require('express');
var app = express();
var routes = require('./server/routes');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// this route will load an angular 6 application which is just for testing purpose.
// the full code for this minified/distribution code can be found at 
// https://github.com/ranand16/todoV2-angular6-application
app.all('*', function(req, res){
  res.status(200).sendFile('index.html', {root: __dirname });
});
   
app.listen(PORT, function(){
  console.log("Its running !! @ localhost:"+PORT);
});
