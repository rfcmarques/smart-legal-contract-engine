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
        'firstName': request.body.firstName,
        'lastName': request.body.lastName
    }
    model.create(data, function(){
        setTimeout(()=>{
            response.redirect('/login')
        }, 3500);  
    });
});

module.exports = router;