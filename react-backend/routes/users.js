var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "蔡尚洲"
    }, {
        id: 2,
        username: "陳昱成"
    }, {
        id: 3,
        username: "黃宜展"
    }]);
});



module.exports = router;