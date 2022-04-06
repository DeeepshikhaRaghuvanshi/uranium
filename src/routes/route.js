const express = require('express');
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter = require('../validator/formatter.js')
const _ = require('lodash')
const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My assignment')

    logger.welcome();

    console.log("Module 2 of Assignment , Displaying current date , month and batch information : ");
    helper.date();
    helper.month();
    console.log("Batch Infomation : ")
    helper.batchInfo();


    console.log("Module 3 of Assignment : ");
    console.log(" Original Array containing white spaces around it :")
    console.log('    functionUp     ')
    console.log(" Trim function remove the extra spaces from the text : ")
    formatter.trimFunction( '   functionUp   ' );
    
    console.log("Uppercase String : ",'FUNCTIONUP')
    console.log("Lowercase conversion of the string : ")
    formatter.toLower("FUNCTIONUP")
    console.log("Lowercase String : ",'cohort')
    console.log("Uppercase conversion of the string : ")
    formatter.toUpper("cohort");
});








router.get('/hello', function (req, res) {
    res.send('Module 4 of my Assignment')

    console.log("An array of strings containing the names all the months of a year : ");
    let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  console.log(monthName);
  console.log("Array split up into 4 equally sized sub-arrays using the chunk function :");
    console.log( _.chunk(monthName, 12/4));

console.log("Array of first 10 odd numbers :");
   let arrayOfOddNum = [1,3,5,7,9,11,13,15,17,19]
   console.log(arrayOfOddNum);
   console.log(" The last 9 elements of Array using tail function : ");
   console.log(_.tail(arrayOfOddNum));


   console.log("Two Arrays consisting repititive values :");
   const arr1 = [1,2,3,4,5];
   const arr2 = [4,5,6,7,8];
   console.log(arr1);
   console.log(arr2);
   console.log("Merged Array with only unique value : ")
  console.log( _.union(arr1,arr2));



   const array =  [['horror','The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy','Pans Labyrinth']];
   let obj = _.fromPairs(array);
   console.log("An object containing key value pairs using fromPair function :")
   console.log(obj);
});




module.exports = router;

// adding this comment for no reason