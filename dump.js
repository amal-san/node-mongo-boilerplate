const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const {check, validationResult} = require('express-validator/check');


const ERROR = (method) => (`${method} should have more than 4 characters`)
const COMMON_ERROR = (method) => (`Enter a valid ${method}`)




//SHOWS All USERS
router.get('/all',user.user_all);


//CREATE NEW USER
router.post('/create',

    [check('first_name')
        .isLength({ min: 4 })
        .withMessage(ERROR('FirstName')),
    check('email')
        .isEmail()
        .withMessage(COMMON_ERROR('Email')),
    check('username')
        .isLength({ min: 4 })
        .withMessage(ERROR('Username')),
    check('password').isLength({ min: 4 })
        .withMessage(COMMON_ERROR('password'))
],

    (req,res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
    }
    else {
        (req,res) => user.user_create
    }}
)

//FIND USER WITH USERNAME
router.post('/find',[
    check('username')
    .isLength({min: 3})
    .withMessage(ERROR('Username'))
    ],
    (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
    }
        else {
            user.user_findByPost
    }
})

//UPDATE USER
router.put('/update',
    [check('first_name')
        .isLength({ min: 4 })
        .withMessage(ERROR('FirstName')),
    check('email')
        .isEmail()
        .withMessage(COMMON_ERROR('Email')),
    check('username')
        .isLength({ min: 4 })
        .withMessage(ERROR("Username")),
    check('password').isLength({ min: 4 }),
    check('find_username')
        .isLength({min:3})
        .withMessage('Pass a Username for find user')
],

    (req, res,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        else {
            user.user_create
            next();
        }
    }
)

//DELETE USER
router.delete('/delete',[
    check('username')
    .isLength({min: 4})
    .withMessage(ERROR('Username'))
    ],
    (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
    }
        else {
            user.user_delete
    }
})

//DELETE ALL USER
router.delete('/delete/all',user.user_delete_all)


module.exports = router;