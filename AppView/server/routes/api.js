const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = "mongodb://developer:developer@ds137207.mlab.com:37207/videoplayer";
mongoose.Promise = global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.error('custom error' + err);
    }
})


router.get('/', function(req, res){
    res.send('api works');
})

module.exports = router;