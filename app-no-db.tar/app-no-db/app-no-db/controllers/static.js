var express = require("express");
var router = express.Router();


router.get('/', function(req, res) {
	res.sendfile('layouts/app.html');
});

router.use(express.static(__dirname + '/../templates')); 
router.use('/assets', express.static(__dirname + '/../assets'));
module.exports = router;
