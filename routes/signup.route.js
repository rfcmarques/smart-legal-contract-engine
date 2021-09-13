const express = require('express');
const router = express.Router();
const model = require('../models/user.model');

router.get('/', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('signup',{
        file: 'signup'
    })
});

router.post('/', function (request, response) {
    var data = {
        'email': request.body.email,
        'password': request.body.password,
        'name': request.body.firstName + " " + request.body.lastName
    }
    model.create(data, function(){
        response.redirect('/user')
    });
});

module.exports = router;