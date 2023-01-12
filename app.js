//modules
const express = require('express');
const path = require('path');

//app
const app = express();

//port
const port = 3000;

//express configuration
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended : true }));

//ejs configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//endpoints
app.get('/', (req, res) => {
    res.status(200).render('layout.ejs');
    res.end();
});
app.get('/contact', (req, res) => {
    res.status(200).render('contact.ejs');
    res.end();
});
app.get('/article', (req, res) => {
    res.status(200).render('article.ejs');
    res.end();
});

app.get('/admin', (req, res) => {
    res.status(200).render('admin.ejs');
    res.end();
});

app.get('/login', (req, res) => {
    res.status(200).render('login.ejs');
    res.end();
})

app.get('/signup', (req, res) => {
    res.status(200).render('signup.ejs');
    res.end();
})
app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log(`Server running on port ${port}`)
})