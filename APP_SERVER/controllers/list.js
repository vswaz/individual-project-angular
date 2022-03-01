const { response } = require('express');
const request = require('request');
const apiOptions = { 
    server: 'http://localhost:3000'
};


const booklist = function(req, res) {
    const path = '/api/books';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
    requestOptions,
    (err, response, body) => {
        _renderHomepage(req, res, body);
    }
    );
};

const _renderHomepage = function(req, res, responseBody){

    res.render('list-display', {
        title: 'Book List',
        books: responseBody
    });
};

//--------
const _renderDetailPage = function (req, res, responseBody) {
    console.log(responseBody)
    res.render('details',{
        title: 'Book Details',
        currentBook: responseBody
    });
};

const details = function(req, res){
    const path = `/api/books/${req.params.bookid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
    };

   
const _renderCreatePage = function(req, res){
    res.render('create', {
        title: "Add New Books"
    });
};

const addNewBook = function(req, res){
    _renderCreatePage(req, res);
};

const doAddNewBook = function(req, res){
    const path = '/api/books';
    const postdata = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        publisher: req.body.publisher,
        language: req.body.language,
        rauthor: req.body.rauthor,
        rating: req.body.rating,
        date: req.body.date,
        feedback: req.body.feedback
            
};
    console.log(req.body)
    const requestOptions = {
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
    requestOptions,
    (err, response, body) => {
        if (response.statusCode === 201) {
            res.redirect('/');
        }
    }
    );
};
    
// const _renderCreatePage = function(req, res){
//     res.render('create-new-bood', {
//         title: "create New Bood"
//     });
// };

//-------


// const bookArray = (req, res) => {
//     res.render('list-display', { 
//         title: 'List of Books',
//         books: [{
//             title: 'The landmark',
//             author: 'Joe Sandler',
//             price: '13$',
//             publisher: 'The boston',
//             language: 'English',
//             review: [{
//                 author: 'Balen rogan',
//                 rating: 5,
//                 date: '17 march 2021',
//                 feedback: 'Great book, Great story!'
//             }]
//         },{
//             title: 'Lost',
//             author: 'Franklin Marshall',
//             price: '12$',
//             publisher: 'dynamic',
//             language: 'English',
//             review: [{
//                 author: 'Greg Wheelock',
//                 rating: 5,
//                 date: '04 june 2019',
//                 feedback: 'Very well written, practical and acheiveable.!'
//             }]
//         },{
//             title: 'Water boy',
//             author: 'Peter Jackson',
//             price: '16$',
//             publisher: 'python',
//             language: 'English',
//             review: [{
//                 author: 'Roseanne Whitaker',
//                 rating: 5,
//                 date: '02 april 2018',
//                 feedback: 'Great book, Great story!'
//             }]
//         }
//     ]
//     });
// }

// const bookArray =  (req, res) => {
//     res.render('list-display', { title: 'About my site' });
//   }


module.exports = {
    booklist,
    details,
    addNewBook,
    doAddNewBook
};