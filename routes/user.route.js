const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');


//SHOWS All USERS
router.get('/all',user.user_all);


//CREATE NEW USER
router.put('/create', user.user_create);

//FIND USER WITH USERNAME
router.post('/find', user.user_findByPost);

//UPDATE USER
router.patch('/update',user.user_update)

//DELETE USER
router.delete('/delete', user.user_delete);

//DELETE ALL USER
router.delete('/delete/all',user.user_delete_all)


module.exports = router;