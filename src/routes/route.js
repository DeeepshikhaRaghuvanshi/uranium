const express = require('express');
const Deep = require('./logging.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
    console.log('Googlie is : ', Deep.googlie);
    Deep.function();
});


module.exports = router;
// adding this comment for no reason