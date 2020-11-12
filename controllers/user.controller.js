const e = require('express');
const User = require('../models/user.model');

exports.user_create = async (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password,
    })
    try {
        if(user.username  != undefined && user.password != undefined ){
            const isUserCreate = await user.save()
            console.log(isUserCreate)
            res.send(isUserCreate == null ? 'user cannot be created':isUserCreate)

        }
        else {
            res.send("Pass both parameters")
        }
        return;

    }catch(e){
        console.log(e)
        res.send("error occured while creating user...")
        return e
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
    var username = req.body.username
    try {
        if(username.length > 0) {
            const isUserRemove = await User.findOneAndRemove({ username: username })
            console.log(isUserRemove)
            res.send(isUserRemove == null ? 'no user exit':isUserRemove)
        }else {
            res.send("Pass username to be deleted")
        }
        
    }
    catch(err){
        res.send("error occured while deleting record..")
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
        res.send("error occured while updating..")
        return err
    }
    return;
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
    var username = req.body.username
    try {
        if(username != undefined){
            const userExits = await User.findOne({username:username})
            console.log(userExits)
            res.send(userExits == null ? 'no user such user exit':userExits)
        }else {
            res.send("Pass a username to find")

        }
            
    }
    catch(err) {
        console.log(e)
        res.send(`error occured while finding user...`)
        return err
    }
    return;
}