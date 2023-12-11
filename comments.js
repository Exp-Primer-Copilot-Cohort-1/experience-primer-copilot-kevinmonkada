// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET comments listing
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// GET /comments/5a7db6c74d55bc51bdf39793
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// POST /comments
router.post('/', function(req, res, next) {
  Comment.create(req.body, function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// PUT /comments/5a7db6c74d55bc51bdf39793
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// DELETE /comments/5a7db6c74d55bc51bdf39793
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

module.exports = router;
