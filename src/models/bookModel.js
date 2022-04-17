const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    publisher_id: {
        type: ObjectId,
        ref: "newPublisher"
    },
    price: Number,
    ratings: Number,
    isHardCover : {
        type :Boolean,
        default : false
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
