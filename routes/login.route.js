const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('login', {
        file: 'login'
    })
});

router.get('/signup', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('signup',{
        file: 'signup'
    })
});

module.exports = router;