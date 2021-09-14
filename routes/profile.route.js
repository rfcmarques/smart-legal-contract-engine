const express = require('express');
const router = express.Router();
const model = require('../models/user.model');


router.get('/:id', global.secure(), function(request, response){
    model.readId(request.params.id, function(user){
        if (user != undefined) {
            response.set("Content-Type", "text/html");
            response.render('profile', {
                data: user
            });
        }else{
            response.status(404).render('404');
        }
    })
});

router.post('/:id', global.secure(), function(request, response){
    var email = request.body.email
    var data = {
        'password': request.body.password,
        'firstName': request.body.firstName,
        'lastName': request.body.lastName
    };
    model.update(email, data, function(){
        response.redirect('/profile/' + request.params.id);
    });
});

module.exports = router;