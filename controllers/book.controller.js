const e = require('express');
const Book = require('../models/book.model');

exports.book_create = async (req, res) => {
    let book = new Book({
        name: req.body.name,
        author: req.body.author,
        genre:req.body.genre,
        description:req.body.description,
        price:req.body.price})

    try {
        if(book.name  != undefined && book.author!= undefined ){
            const isBookCreate = await book.save()
            console.log(isBookCreate)
            res.send(isBookCreate == null ? 'book cannot be created':isBookCreate)
        }
        else {
            res.send("Pass at least 2 arguments (Bookname, Author)")
        }
        return;

    }catch(e){
        console.log(e)
        res.send("error occured while creating book...")
        return e
    }
}

exports.book_all = async(req,res) => {
    try {
        const allBooks = await Book.find({})
        res.send(allBooks == null ? 'No data ,empty collection of books':allBooks)
        console.log(allBooks)
        return;
    }
    catch(e){
        res.send("error occured while fetching all books...")
        return e
    }

}


exports.book_delete = async(req,res) => {
    var name = req.body.name
    try {
        if(name.length > 0) {
            const isBookRemove = await Book.findOneAndRemove({ name:name })
            console.log(isBookRemove)
            res.send(isBookRemove == null ? 'no book exits':isBookRemove)
        }else {
            res.send("Pass argument book's name to erase")
        }
        
    }
    catch(err){
        res.send("error occured while deleting record..")
        return err
    }
    return;
}

exports.book_update = async(req,res) => {

    var booknameToFind = req.body.find_name
    var booknameToUpdate = req.body.update_name

    try {
        if(booknameToFind != undefined && booknameToUpdate != undefined) {
            const updateBook = await Book.findOneAndUpdate(
                {name: booknameToFind },
                {$set:{name:booknameToUpdate}}, 
                {new: true},
            )
            console.log(updateBook)
            res.send(updateBook == null ? 'no book was found':updateBook)
        }else {
            res.send("Pass both book's names for updating..")
        }
        
    }
    catch(err){
        res.send("error occured while updating..")
        return err
    }
    return;
}

exports.book_delete_all = async(req,res) => {
    try {
        const allDeleted = await Book.deleteMany({})
        res.send(allDeleted)
        
    }
    catch(err) {
        console.log(e)
        res.send("error occured while deleting books...")
    }
    return;
}

exports.book_findByPost = async(req,res) => {
    var bookname = req.body.name
    try {
        if(bookname != undefined){
            const bookExits = await Book.findOne({name:bookname})
            console.log(bookExits)
            res.send(bookExits == null ? 'no book such book exit':bookExits)
        }else {
            res.send("Pass a book's name to find")

        }
            
    }
    catch(err) {
        console.log(e)
        res.send(`error occured while finding book...`)
        return err
    }
    return;
}