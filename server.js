// load the things we need
let express = require('express');
let app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/styles', express.static('styles'));
app.use('/js', express.static('js'));
app.use('/content', express.static('content'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});



app.listen(8080);
console.log('8080 is the magic port');