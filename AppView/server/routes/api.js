const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://developer:developer@ds137207.mlab.com:37207/videoplayer";
mongoose.Promise = global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.error('custom error' + err);
    }
})

//get all videos
router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err,videos){
        if(err){
            console.log('Error retrieving videos ' + err);
        }else{
            res.json(videos);
        }
    });
});

//select video by id
router.get('/videos/:id', function(req, res){
    console.log('Get request for all videos');
    Video.findById(req.params.id)
    .exec(function(err,video){
        if(err){
            console.log('Error retrieving the video ' + err);
        }else{
            res.json(video);
        }
    });
});

//Add Video
router.post('/video', function(req, res){
    console.log('Adding video');

    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('error inserted video');
        }else{
            res.json(insertedVideo);
        }
    });
});

//Update vudeo
router.put('/video/:id', function(req, res){
    console.log('Updating video');

    Video.findByIdAndUpdate(req.params.id,
        {
            $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        },
        {
             new: true
        },
        function(err, updatedVideo)
        {
            if(err)
            {
                res.send('error updating');
            }
            else
            {
                res.json(updatedVideo);
            }
        }
    );
});

//Delete a video
router.delete('/video/:id', function(req, res){
    console.log('Deleting video');

    Video.findByIdAndRemove(req.params.id,        
        function(err, deletedVideo)
        {
            if(err)
            {
                res.send('error deleting');
            }
            else
            {
                res.json(deletedVideo);
            }
        }
    );
});

module.exports = router;