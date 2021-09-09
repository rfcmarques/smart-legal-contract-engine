const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');
var dirpath = path.join(__dirname, '../');

router.get('/', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('user-contracts', {})
})

module.exports = router;