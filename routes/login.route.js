const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');

router.get('/', function (request, response) {
    if (request.isAuthenticated()) {
        response.redirect('/');
        return;
    }

    response.set("Content-Type", "text/html");
    response.render('login', {
        file: 'login'
    })
});

router.post('/', function (request, response) {
    console.log(request.body);
    
    userModel.areValidCredentials(request.body.email, request.body.password, function (areValid) {
        if (areValid){
            request.login(request.body.email, function (err) {
                response.redirect('/user');
            });
            console.log('logged')
        }else{
            console.log('login failed')
            response.render('login', {
                file: 'login'
            })
        }
    });
});

module.exports = router;