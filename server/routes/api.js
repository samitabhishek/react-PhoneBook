var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



router.use('/user', require('../api/user.api'));

router.use('/file', require('../api/file.api'));


module.exports = router;
