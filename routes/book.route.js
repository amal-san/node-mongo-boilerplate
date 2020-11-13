const express = require('express');
const router = express.Router();
const book = require('../controllers/book.controller');


//SHOWS All BOOKS
router.get('/all',book.book_all);


//CREATE NEW BOOK
router.post('/create', book.book_create);

//FIND BOOK WITH BOOK'S NAME
router.post('/find', book.book_findByPost);

//UPDATE A BOOK
router.put('/update',book.book_update)

//DELETE A BOOK
router.delete('/delete', book.book_delete);

//DELETE ALL BOOKS
router.delete('/delete/all',book.book_delete_all)


module.exports = router;