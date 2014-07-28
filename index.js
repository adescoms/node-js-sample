var express = require('express')
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	var buff = new Buffer(fs.readFileSync('index.html'));
  	response.send(buff.toString());
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
