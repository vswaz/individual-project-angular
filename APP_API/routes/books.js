var express = require('express');
var router = express.Router();

const ctrlBook = require('../controllers/book');

router.route('/books')
    .get(ctrlBook.getBooks)
    .post(ctrlBook.createBook)

router.route('/books/:bookid')
    .get(ctrlBook.getSingleBook)
    .put(ctrlBook.updateBook)
    .delete(ctrlBook.deleteBook)

module.exports = router;