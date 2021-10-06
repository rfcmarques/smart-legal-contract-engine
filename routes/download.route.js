const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path')
const dir = path.join(__dirname,'../public/downloads');

router.get('/pdf/:filename', function (request, response) {
    let filepath = path.join(dir, '/pdfFiles', request.params.filename);
    fs.access(filepath, fs.F_OK, (err) => {
        if (err) {
            console.log('File does not exist')
            response.render('404')
        } else {
            console.log('File exists')
            response.download(filepath);
        }
    })
});

module.exports = router;