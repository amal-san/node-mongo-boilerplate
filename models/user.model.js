const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {type: String, required: [true, ' username is required.'], max: 100},
    password: {type: String, required: [true, ' password is required.']},
});
                                        
module.exports = new mongoose.model('user', User);
