const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const expressValidator = require('express-validator')
const conn = require('./config/db.config')
const user = require('./routes/user.route'); 
const book = require('./routes/book.route'); 


app.use(bodyParser.json());
app.use(expressValidator())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user/', user);
app.use('/book/', book);



app.listen(port, () => {
  console.log(`Running on Port:${port}`);
});

module.exports = app