const express = require('express');
const router = express.Router();

router.get('/contacts', function(req, res){
    res.send('This is the contact list');
})

module.exports = router;