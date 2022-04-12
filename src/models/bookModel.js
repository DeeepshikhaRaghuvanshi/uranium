const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   
    bookName : {
        type : String,
       required : true,
       unique : true
    },
    authorName : String,
    category : String,
    Year : Number
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 