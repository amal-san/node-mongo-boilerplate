const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    name: {type: String, required: [true, ' name is required.'], max: 100},
    author: {type: String, required: [true, ' author is required.']},
    genre:{type: String},
    description:{type:String},
    price:{type:String},

});
                                        
module.exports = new mongoose.model('book', Book);