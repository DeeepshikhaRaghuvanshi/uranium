let d = new Date();
let date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
let m = d.getMonth();
let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let printDate = function(){                  
    console.log(" Date : " , date)
}

let printMonth = function(){
    
    console.log(" Month : ", monthName[m] );
}

let getBatchInfo = function(){
    console.log("Uranium, W3D3, the topic for today is Nodejs module system")
}
module.exports.date=printDate;
module.exports.month=printMonth;
module.exports.batchInfo=getBatchInfo;