var express = require('express');
var router = express.Router();
const app = express()
app.use(express.static(__dirname + '/public'));
router.get('/',(req,res)=>{
    res.sendFile(__dirname+'public/views/index.html')
})
module.exports = router;
