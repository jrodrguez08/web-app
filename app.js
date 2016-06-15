'use strict';

var express = require('express');

var app = express();

var nav = [{
    link: '/Books',
    text: 'Book'
}, {
    link: '/Authors',
    text: 'Author'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

var port = 8181;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        nav: [{
            link: '/Books',
            text: 'Books'
        }, {
            link: '/Authors',
            text: 'Authors'
        }]
    });
});

app.listen(port, function (err) {
    console.log('Running on port ' + port);
});