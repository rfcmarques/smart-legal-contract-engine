const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('index', {})
});

router.get('/rui', async function (request, response) {
    const apiResponse = await axios.get('http://localhost:3000/api/data');
    return response.status(200).json(apiResponse.data);
});

module.exports = router;