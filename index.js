const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const conn = require('./config/db.config')
const user = require('./routes/user.route'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user/', user);


app.listen(port, () => {
  console.log(`Running on Port:${port}`);
});

module.exports = app