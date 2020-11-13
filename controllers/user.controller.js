const User = require('../models/user.model');
const Joi = require('joi'); 
const validate = require('../utils/user.validate')


exports.user_create = async (req, res) => {

    const { value, error } = validate.createUser(req); 
    const valid = error == null; 
  
    if (valid) { 
        let user = new User(value)
        try {
            const isUserCreate = await user.save()
            console.log(isUserCreate)
            res.send(isUserCreate == null ? 'user cannot be created':isUserCreate)
            return;
    
        }catch(e){
            console.log(e)
            res.send("error occured while creating user...")
            return e
        }
        
    } else { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        res.status(422).json({ error: message }) 
    } 



}

exports.user_all = async(req,res) => {
    try {
        
        const allUsers = await User.find({})
        res.send(allUsers == null ? 'No data empty collection':allUsers)
        console.log(allUsers)
        return;
    }
    catch(e){
        res.send("error occured while fetching all users...")
        return e
    }

}


exports.user_delete = async(req,res) => {

    const { value, error } = validate.findAndDeleteUser(req); 
    const valid = error == null; 
    if(valid) {
        try {
            const isUserRemove = await User.findOneAndRemove(value,{new: true})
            console.log(isUserRemove)
            res.send(isUserRemove == null ? 'no user exit':isUserRemove)
            return;
    
        }
        catch(err){
            res.send("error occured while deleting record..")
            return err
        }

    }else {
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        res.status(422).json({ error: message }) 
    }
    
    return;
}

exports.user_update = async(req,res) => {

    const { value, error } = validate.updateUser(req); 
    const valid = error == null; 
    console.log(error)
    if(valid) {
    try {
        console.log(value.username)
        const updateUser = await User.findOneAndUpdate(
            {username: value.find_username },
            {$set:{
                first_name:value.first_name,
                last_name:value.last_name,
                email:value.email,
                username:value.username,
                password:value.password,
            }}, 
            {new: true}
        )
        console.log(updateUser)
        res.send(updateUser == null ? 'no user was found':updateUser)
        return;
    }
    catch(err){
        res.send("error occured while updating..")
        return err}
    }
    else {
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        res.status(422).json({ error: message }) 
    }
}

exports.user_delete_all = async(req,res) => {
    try {
        const allDeleted = await User.deleteMany({})
        res.send(allDeleted)
        
    }
    catch(err) {
        console.log(e)
        res.send("error occured while deleting users...")
    }
    return;
}

exports.user_findByPost = async(req,res) => {

    const { value, error } = validate.findAndDeleteUser(req); 
    const valid = error == null; 
    if(valid) {
        try {
            const userExits = await User.findOne(value)
            console.log(userExits)
            res.send(userExits == null ? 'no user such user exit':userExits)
            return;
        }
        catch(err) {
            console.log(e)
            res.send(`error occured while finding user...`)
            return err
        }
    }
    else {
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        res.status(422).json({ error: message }) 
    }

    return;
}