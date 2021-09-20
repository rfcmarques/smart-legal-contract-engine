const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const contractModel = require('../models/contract.model');
const stateModel = require('../models/states.model');

router.get('/', global.secure(), function (request, response) {
    userModel.list(function (user) {
        contractModel.list(function (contract) {
            stateModel.list(function (state){
                stateModel.listlaststate(function (laststate) {
                    response.set("Content-Type", "text/html");
                    response.render('user-contracts', {
                        isNew: false,
                        data: user,
                        contract: contract,
                        state: state,
                        laststate: laststate
                    });
                });
            });
        });
    });
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

router.post('/:contractid', global.secure(), function (request, response) {
    var data = {
        'description': 'OBRIGACAO_EMITIDA',
        'contract': request.params.contractid
    }
    stateModel.create(data, function (){
        response.redirect('/user');
    });
});

module.exports = router;