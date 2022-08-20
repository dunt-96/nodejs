var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('This is home!');
});
app.get('/contact/:userId/send/:content', function (req, res) {
    res.send('Custom with id is ' + req.params.userId + ' want to said: ' + req.params.content);
});

app.listen(8000);