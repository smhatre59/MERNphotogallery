/**
 * Main server side file
 *
 */

var express    = require("express");
var photos = require('./routes/photos');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Prevents CORS issue
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to retrieve photos
router.get('/retrievephotos',photos.getphotos);
app.use('/api', router);
app.listen(4000);
