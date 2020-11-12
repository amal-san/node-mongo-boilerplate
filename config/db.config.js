const mongoose = require("mongoose");

var uri = "mongodb://localhost:27017/test";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connected to MongoDb");
});

module.exports = connection;

