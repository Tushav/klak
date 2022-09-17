const express = require('express');
const app = express();
const { default: knex } = require('knex');
const { reset } = require('nodemon');
app.use(express.static('public'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3500;
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get(''), (req, res) => {
    res.render('');
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

app.listen(PORT, ()=>console.log('Server is listening on port ${PORT}'));