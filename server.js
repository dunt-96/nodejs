const route = require('./app/routes/index')
const { json } = require('express');
var express = require('express');
var bodyParser = require('body-parser')
const db = require('./app/configs/database')
const morgan = require('morgan');
require('dotenv').config()
const connectDB = require('./app/configs/database')

let port = process.env.PORT || 3000;
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
route(app);


connectDB();
console.log('<<<<<<<<< running on port: ',port);
app.listen(port);