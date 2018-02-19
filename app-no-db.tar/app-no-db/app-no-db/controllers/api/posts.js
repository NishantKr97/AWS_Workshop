var router = require('express').Router();

var posts = [];

router.get('/', function (req, res, next) {
  res.json(posts);
});

router.post('/', function (req, res, next) {
  var post = {
    username: req.body.heading,
    body: req.body.body
  };
  posts.push(post);
  res.json(post);
});

module.exports = router;
