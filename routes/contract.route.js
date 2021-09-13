const express = require('express');
const router = express.Router();
const model = require('../models/user.model');

router.get('/', global.secure(), function (request, response) {
    model.list(function (user) {
        response.set("Content-Type", "text/html");
        response.render('user-contracts', {
            data: user
        });
    })
});

module.exports = router;