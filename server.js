var express = require('express');
var app = express();
var routes = require('./server/routes');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);

var PORT = process.env.PORT || 3000;
// var ip = process.env.IP || '0.0.0.0';
app.use(express.static('public'));
// to overcome the CORS error.
app.use(function (req, res, next) {
  // Website you wish to allow to connect // * for all the websites
  res.header('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);
  console.log('cors problem fixed');
  // Pass to next layer of middleware
  next();
});
app.all('/*',function(req,res){
  res.send('\
    <!doctype html>\
    <html>\
      <head>\
          <base href="/">\
          <title></title\
          @font-face {\
            font-family: "myfont";\
            src: url("fa2772327f55d8198301fdb8bcfc8158.woff") format("woff");\
          }\
          @font-face {\
            font-family: "myfont";\
            src: url("f4769f9bdb7466be65088239c12046d1.eot") format("woff");\
          }\
          @font-face {\
            font-family: "myfont";\
            src: url("e18bbf611f2a2e43afc071aa2f4e1512.ttf") format("woff");\
          }\
          @font-face {\
            font-family: "myfont";\
            src: url("89889688147bd7575d6327160d64e760.svg") format("woff");\
          }\
          @font-face {\
            font-family: "myfont";\
            src: url("448c34a56d699c29117adc64c43affeb.woff2") format("woff");\
          }\
      </head>\
      <body>\
        <div ui-view><h1></h1></div>\
        <script type="text/javascript" src="bundle.js"></script>\
      </body>\
    </html>\
    ');
});
app.listen(PORT, function(){
  console.log("Its running !! @ localhost:"+PORT);
});
