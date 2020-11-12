const e = require('express');
const User = require('../models/user.model');

exports.user_create = async (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    })
    try {
        if(user.username  != undefined && user.password != undefined ){
            const result = await user.save()
            console.log(result)
            res.send(result)

        }
        else {
            res.send("Pass both parameters")
        }
        return;

    }catch(e){
        console.log(e)
        return e
    }
}

exports.user_all = async(req,res) => {
    try {
        const result = await User.find({})
        res.send(result)
        console.log(result)
        return;
    }
    catch(e){
        return e
    }

}


exports.user_delete = async(req,res) => {
    var username = req.body.username
    try {
        if(username.length > 0) {
            const isUser = await User.findOneAndRemove({ username: username })
            console.log(isUser)
            res.send(isUser)
        }else {
            res.send("Pass username to be deleted")
        }
        
    }
    catch(err){
        return err
    }
    return;
}

exports.user_update = async(req,res) => {

    var usernameToFind = req.body.find_username
    var usernameToUpdate = req.body.update_username

    try {
        if(usernameToFind != undefined && usernameToUpdate != undefined) {
            const updateUser = await User.findOneAndUpdate(
                {username: usernameToFind },
                {$set:{username:usernameToUpdate}}, 
                {new: true},
            )
            console.log(updateUser)
            res.send(updateUser == null ? 'no user was found':updateUser)
        }else {
            res.send("Pass both usernames for updating")
        }
        
    }
    catch(err){
        return err
    }
    return;
}

exports.user_delete_all = async(req,res) => {
    try {
        const result = await User.deleteMany({})
        res.send(result)
        
    }
    catch(err) {
        console.log(e)
        res.send("Data can't be deleted")
    }
    return;
}

exports.user_findByPost = async(req,res) => {
    var username = req.body.username
    try {
        if(username != undefined){
            const result = await User.findOne({username:username})
            res.send(result)
        }else {
            res.send("Pass a username to find")

        }
            
    }
    catch(err) {
        console.log(e)
        res.send(`User with ${username} not found`)
        return err
    }
    return;
}