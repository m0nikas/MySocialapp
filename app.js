const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const keys=require('./config/keys');

const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
mongoose.connect(keys.MongoURI,{
    useNewUrlParser: true
}) 
.then(() => {
    console.log('Connectd to your remote getyourdate database');
}).catch((err) => {
    console.log(err);
});

const port = 7000;

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(port, () => {
    console.log(`Server run ai chastundi ${port}`);
});