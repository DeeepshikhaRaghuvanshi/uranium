let trim = function(string){

    console.log(string.trim());
}

let changeToLowerCase = function(string){

    console.log( string.toLowerCase())

}

let changeToUpperCase = function(string){

    console.log( string.toUpperCase())

}

module.exports.trimFunction = trim;
module.exports.toLower = changeToLowerCase;
module.exports.toUpper = changeToUpperCase;