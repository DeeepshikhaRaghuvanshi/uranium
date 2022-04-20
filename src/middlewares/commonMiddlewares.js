

const mid1= function ( req, res, next) {
    
    const flag = req.headers["isfreeappuser"];

    if(!flag){
     return   res.send("Missing a Mandatory Header")
    }
    else
    res.header('isFreeAppUser', req.headers["isfreeappuser"] )

    next();
}

module.exports.mid1= mid1
