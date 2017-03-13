var express = require('express');
var app = express();
var server = require('http').createServer(app);
 
app.use('/', express.static(__dirname)); 
app.use('/asd',function(req,res){
	res.send([{
  		id:1,
  		content:"content1"
  	},{
  		id:2,
  		content:"content2"
  	},{
  		id:3,
  		content:"content3"
  	}]);
})

server.listen(8080);