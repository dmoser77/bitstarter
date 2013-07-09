var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var fs = require('fs');
   var infile = "index.html";
   var data = fs.readFileSync(infile);
   var data2 = data.toString();   
   response.send(data2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
