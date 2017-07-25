var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const api = require('./server/routes/api');
const port = 3000;

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api', api);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, function(){
    console.log('My App listenig port 3000');
})