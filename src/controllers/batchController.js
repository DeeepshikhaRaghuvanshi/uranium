const batchModel = require('../models/batchModel.js')

let createBatch = async function(req,res){

    let batch = req.body;
    let createdBatch = await batchModel.create(batch);
    res.send({msg : createdBatch})


}

module.exports.createBatch = createBatch