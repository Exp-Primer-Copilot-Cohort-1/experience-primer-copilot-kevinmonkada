//create a web server
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Comment } = require('../models');

//GET /comments
router.get('/', (req, res) => {
  db.Comment.findAll()
    .then(comments => {
      res.json(comments);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});
