const batchModel = require('../models/batchModel.js');
const developerModel = require('../models/developerModel.js')

let createDeveloper = async function(req,res){

    let developer = req.body;
    let createdDeveloper = await developerModel.create(developer);
    res.send({msg : createdDeveloper})


}

let scholarshipDevelopers = async function(req,res){

    let developer = await developerModel.find({gender : "Female", percentage : {$gte : 70}}).select();
    res.send({msg : developer})
    
}

let developersSelected = async function(req,res){

    let pg = req.query.program;
    let per = req.query.percentage;
    pgId = await batchModel.find({name: pg}).select({_id : 1})
    
   
    let arrOfBatch = [];

    for(let i =0;i<pgId.length;i++){
        let temp = pgId[i]._id
        arrOfBatch.push(temp)
    }
    let selectedDevelopers = await developerModel.find({batch: {$in : arrOfBatch } , percentage : {$gte : per}}).select();
    
    res.send({msg : selectedDevelopers})

    
}

module.exports.createDeveloper = createDeveloper
module.exports.scholarshipDevelopers = scholarshipDevelopers
module.exports.developersSelected = developersSelected