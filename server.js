const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engin','hbs');

app.use('/',(req, res, next) => {
    res.render('maintenance.hbs');
}),

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})


app.listen(port);