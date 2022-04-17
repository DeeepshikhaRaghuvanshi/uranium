const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook= async function (req, res) {
    let book = req.body;
   let authorId = req.body.author_id;
   let publisherId = req.body.publisher_id;
   

   if(!authorId){
     return  res.send({msg:"Author Id is required"})
   }
   
   let author = await authorModel.findOne({ _id : authorId });
    if(!author){
    return res.send({msg:"Author id is not present"})
   }

   if(!publisherId){
   return  res.send({msg:"Publisher Id is required"})
   }

   let publisher = await publisherModel.findOne({ _id : publisherId  });

   if(!publisher){
   return res.send({msg:"Publisher id is not present"})
   }

  else{
   let bookCreated = await bookModel.create(book)
  return res.send({data : bookCreated})
  }
}

const getBooks = async function (req,res){

    let allBooks = await bookModel.find().populate('author_id publisher_id');
    res.send({msg : allBooks})

}

const updateBooks = async function(req,res){


      let updatedKey = await bookModel.updateMany({ $or : [{ publisher_id :"625b98399e40cd03012df0b2"},{publisher_id :"625bbedaf60fc00202fef7a4"}]} , {isHardCover : true},{upsert:true,new:true})

      let authId = await authorModel.find({rating : {$gt : 3.5}}).select({_id : 1});
      const id = authId.map(a=>a._id)
     

      for(let i=0;i<id.length;i++){
        let x = id[i];
        const bookUpdated = await bookModel.updateMany({author_id : x},{$inc :{ price : 10}})
      }

      let updatedBooks = await bookModel.find().populate('author_id publisher_id');
      res.send({msg : updatedBooks})



}

module.exports.createBook= createBook
module.exports.getBooks = getBooks
module.exports.updateBooks = updateBooks