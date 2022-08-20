const route = require('./app/routes/index')
const { json } = require('express');
var express = require('express');
var bodyParser = require('body-parser')
const db = require('./app/configs/database')


var app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

route(app);

app.listen(8000);