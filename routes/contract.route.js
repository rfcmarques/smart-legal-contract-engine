const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const contractModel = require('../models/contract.model');
const stateModel = require('../models/states.model');

router.get('/', global.secure(), function (request, response) {
    userModel.list(function (user) {
        contractModel.list(function (contract) {
            response.set("Content-Type", "text/html");
            response.render('user-contracts', {
                data: user,
                contract: contract
            });
        })
    })
});

router.get('/:contractid', global.secure(), function (request, response) {
    if (request.params.contractid != undefined) {
        userModel.list(function (user) {
            contractModel.read(request.params.contractid, function (contract) {
                stateModel.list(function (state) {
                    response.set("Content-Type", "text/html");
                    response.render('form', {
                        isNew: false,
                        data: user,
                        contract: contract,
                        state: state
                    });
                })
            });
        });
    } else {
        response.status(404).render('404')
    }
});

module.exports = router;