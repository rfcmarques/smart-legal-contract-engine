const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('index', {})
});

// ESTE CÓDIGO VAI SERVIR PARA MAIS TARDE
//
// router.get('/rui', async function (request, response) {
//     const apiResponse = await axios.get('http://localhost:3000/api/v1/data');
//     return response.status(200).json(apiResponse.data);
// });

// router.get('/ruiv2', async function (request, response) {
//     const apiResponse = await axios.get('http://localhost:5000/api/v2/parse/teste');
//     return response.status(200).json(apiResponse.data);
// });

// router.get('/ruiv2/post', async function (request, response) {
//     let body = {
//         state: {
//             $class: "pt.digitalsign.fullcontract.ServiceLevelAgreementState",
//             status: "INICIADO",
//             $identifier: "5823883b-9a72-4840-8457-58bb6ac29984"
//         },
//         request: {
//             $class: "pt.digitalsign.fullcontract.ContractRequest",
//             points: 30.0
//         }
//     };
//     const apiResponse = await axios.post('http://localhost:5000/api/v2/trigger/teste', body);
//     return response.status(200).json(apiResponse.data);
// });

module.exports = router;