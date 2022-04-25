const axios = require('axios')

const getStates = async function(req,res){

    try{
     let options = {
        method : "get",
        url : 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    }
    let result = await axios(options)
    res.status(200).send({data : result.data})
    }
    catch(err){
        console.log(err);
        res.status(500).send({error : err.message})
    }

}

const getDistricts = async function(req,res){
    try{
        let id = req.params.state_id;
        console.log(id)
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: "Error", error: err.message})

    }
    catch(err){
        console.log(err);
        res.status(500).send({data : err.message})
    }
}

const findByPin = async function(req,res){
    try{
        let pincode = req.query.pincode;
        let date = req.query.date;
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({data : result.data})
    }
    catch(err){
        console.log(err);
        res.status(500).send({ msg: "Error", error: err.message})
    }
}

const getOtp = async function(req,res){
    try{
        let number = req.body;
        let options = {
            method : "post",
            url : 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
            data : number
        }
        let result = await axios(options)
        res.status(200).send({data : result.data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg : "Error" , error : err.message})
    }
}

const getSession = async function(req,res){
    try{
        let id = req.query.district_id;
        let date = req.query.date;
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        res.status(200).send({data : result.data})
    }
    catch(err){
        console.log(err);
        res.send({msg : "Error" , error : err.message})
    }

}
module.exports = { getStates, getDistricts , findByPin , getOtp, getSession}