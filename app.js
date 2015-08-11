var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var post = server.address().port;
    console.log('app listening at http://%s:%s', host, post);
});
