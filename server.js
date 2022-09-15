const express = require('express');
const app = express();
const { default: knex } = require('knex');
const { reset } = require('nodemon');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/'), (req, res) => {
    res.render('index');
}

app.get('/lagence', (req, res) => {
    res.render('lagence');
})

app.get('/travaux', (req, res) => {
    res.render('travaux');
})

app.get('/clients', (req, res) => {
    res.render('clients');
})

app.get('/actus', (req, res) => {
    res.render('actus');
})

app.get('/contacts', (req, res) => {
    res.render('contacts');
})

app.listen(3000, () => console.log('Server is listening on port 3000!'));