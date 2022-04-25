const axios = require('axios')
const { get } = require('../routes/route')

const getWeather = async function(req,res){

    try{
        let city = req.query.city
        let options = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bc4c0eab655dba0dd3f9dee2920f1ea`
        }
        let result = await axios(options)
        k = result.data.main.temp
        c = k - 273.15;
        res.status(200).send({temperature : c.toFixed(2) + " degree Celcius" })
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Error" , error : err.message})
    }
}

const getWeatherOfMultipleCities = async function(req,res){

    try{

        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newArr = [];
        for(let i =0;i<cities.length;i++){

            let options = {
                method : "get",
                url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2bc4c0eab655dba0dd3f9dee2920f1ea`
            }
           
            let result = await axios(options)
            console.log(result)
            let obj = { city : cities[i]};
            obj.temp =  result.data.main.temp
            newArr.push(obj)
           
        }
       
        return res.status(200).send({data : newArr.sort(function (a,b) { return a.temp - b.temp}) })
    }
    catch(err){
        console.log(err);
        res.status(500).send({msg : "Error" , error : err.message})
    }

}

module.exports = { getWeather, getWeatherOfMultipleCities}