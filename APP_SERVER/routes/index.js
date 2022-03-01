var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

const ctrlHome = require('../controllers/about');
const ctrlAbout = require('../controllers/about');
const ctrllist = require('../controllers/list');


/* GET home page. */
router.get('/', ctrlHome.home);
router.get('/about', ctrlAbout.abouts);
router.get('/list', ctrllist.booklist);
router.get('/books/:bookid', ctrllist.details);

router.route('/new')
    .get(ctrllist.addNewBook)
    .post(ctrllist.doAddNewBook);



module.exports = router;
