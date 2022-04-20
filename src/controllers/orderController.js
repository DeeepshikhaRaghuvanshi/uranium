const orderModel= require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");


const createOrder= async function (req, res) {
   
    let userId = req.body.userId;
    let productId = req.body.productId;
    let flag = req.headers["isfreeappuser"]

    if(!userId){
     return   res.send("User Id is required");
    }

   let  user = await userModel.findById(userId);
    if(!user){
      return  res.send(" This User Id is not present in Database")
    }

    if(!productId){
     return   res.send("Product Id is required")
    }

   let  product = await productModel.findById(productId);
    if(!product){
     return   res.send("This product Id is not present in Database")
    }

    else {

        if(flag == "true"){
            let order = await orderModel.updateOne(req.body ,{ $set : {amount : 0 , isFreeAppUser : flag}},{upsert : true , new : true});
            
            res.send({msg : req.body})
        }

        else {

            let priceObj = await productModel.findOne().select({_id : 0 , price : 1});
            let updatedBalance = await userModel.updateOne({} , {$inc : { balance : -priceObj.price }});
            let updatedOrder = await orderModel.updateOne({}, {amount : priceObj.price , isFreeAppUser : false});
           
            res.send()
        }

    }
   

}

module.exports.createOrder= createOrder