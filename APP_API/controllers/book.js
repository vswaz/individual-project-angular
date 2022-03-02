const mongoose = require('mongoose');
const Book = mongoose.model('book');

const getBooks = (req, res) => {
    Book.find().exec(function(err, bookdata){
        if (err) {
            res.status(404)
            .json(err);
        return;
        }
        res.status(200)
        .json(bookdata);
    });
};

const createBook = (req, res) => {
    Book.create({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        publisher: req.body.publisher,
        language: req.body.language,
        review: [
            {
                author: req.body.rauthor,
                rating: req.body.rating,
                date: req.body.date,
                feedback: req.body.feedback
            }
        ]

    }, (err, bookdata) => {
        if (err){
            
            res.status(400)
            .json(err);
        } else {
            res.status(201)
            .json(bookdata);
        }
    });
};

const getSingleBook = (req, res) => {
    Book.findById(req.params.bookid)
    .exec((err, bookdata) => {
        if (!bookdata) {
            return res
              .status(404)
              .json({
               "message" : "food not found"
        });
      } else if (err) {
          return res
              .status(404)
              .json(err);
      }
      res
        .status(200)
        .json(bookdata);
        
    });
};

const updateBook = (req, res) => {
    if(!req.params.bookid) {
        res
        .status(404)
        .json({
            "message": "Not found, foodid is required"
        });
    return;
    }
    Food.findById(req.params.bookid)
        .exec((err, bookdata) => {
            if(!bookdata) {
                res
            .status(404)
            .json({
                "message": "foodid not found"
            });
            return;
        } else if (err) {
            res
            .status(400)
            .json(err);
            return;
        }
        bookdata.title = req.body.title;
        bookdata.price = req.body.price;
        bookdata.publisher = req.body.publisher;
        bookdata.language = req.body.language;
        bookdata.review = [
            {
                author: req.body.author,
                rating: req.body.rating,
                date: req.body.date,
                feedback: req.body.feedback
            }
        ];
        bookdata.save((err, bookdata) => {
            if (err) {
                res.status(404)
                .json(err);
            } else {
                res.status(200)
                .json(bookdata);
            }
        });
        });
};

const deleteBook = (req, res) => {
    const { bookid } = req.params;

    if (bookid) {
        Book
        .findByIdAndRemove(bookid)
        .exec((err, bookdata) => {
        if (err) {
            res
            .status(404)
            .json(err);
        return;
        }
    res
    .status(204)
    .json(null);
        });
    } else {
        res.status(404)
        .json({"message" : "No foodid"});
    
    };
};


module.exports = {
    getBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook
};