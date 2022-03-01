const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: { type: String },
    rating: { type: Number, required: true, min: 0, max: 5 },
    date: { type: Date, "default": Date.now },
    feedback: { type: String }
});
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        type: String
    },
    price: {
        type: String
    },
    publisher: {
        type: String
    },
    language: {
        type: String
    },
    review: [reviewSchema]
});

mongoose.model('book', bookSchema);