// server.js
// load the things we need
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

// about page 
// app.get('/about', function(req, res) {
//     res.render('pages/about.html');
// });

app.listen(8080);
console.log('8080 is the magic port');