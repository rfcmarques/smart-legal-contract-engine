const express = require('express');
const router = express.Router();
const model = require('../models/user.model');

router.get('/', global.secure(), function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('user-contracts', {})
});

module.exports = router;