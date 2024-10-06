require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// L'educazione prima di tutto...
app.get('/api/hello', function (req, res) {
  res.json({ saluto: 'Bella Zionski' });
});


//route richiesta per certificazione
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  const method = req.method;
  const protocol = req.protocol; 
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
    metodo: method,
    protocollo: protocol
  });
});


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
