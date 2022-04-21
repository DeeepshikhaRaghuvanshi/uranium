

const mid1= function ( req, res, next) {
    
    const flag = req.headers["isfreeappuser"];

    if(!flag){
     return   res.send("Missing a Mandatory Header")
    }
    else
    // req.body["isFreeAppUser"]=req.headers.isfreeappuse;
    next();
}

module.exports.mid1= mid1
