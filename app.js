//app.js node js server

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views')); //serve static asset
app.get('*', function(req,res){
  res.sendfile('./views/index.html');
});

app.listen(port, function(){
  console.log('Listening on ' +  port);
});
