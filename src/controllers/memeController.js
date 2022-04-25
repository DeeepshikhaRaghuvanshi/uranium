const axios = require('axios')

let getMeme = async function(req,res){
try{
    let id = req.query.template_id;
    let username = req.query.username;
    let pwd =  req.query.password;
    let text0 = req.query.text0;
    let text1 = req.query.text1;

    let options = {
        method : "get",
        url : `https://api.imgflip.com/caption_image?template_id=${id}&username=${username}&password=${pwd}&text0=${text0}&text1=${text1}`
    }
    let result = await axios(options)
   let obj = {};
   obj.url = result.data.data.url
   obj.page_url = result.data.data.page_url;
  res.status(200).send({data : obj})
}
catch(err){
    res.status(500).send({msg : "Error" , error : err.message})
}
}

module.exports.getMeme = getMeme