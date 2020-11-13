const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    first_name:{type: String, required:true,max: 50},
    last_name:{type: String, max: 50,default:null},
    email:{type: String,  unique : true, max: 30,default:null},
    username: {type: String,  unique : [true, "username must be unique"], required: [true, ' username is required.'], max: 20},
    password: {type: String, required: [true, ' password is required.']},

});
                                        
module.exports = new mongoose.model('user', User);
