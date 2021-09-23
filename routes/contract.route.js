const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const contractModel = require('../models/contract.model');
const logModel = require('../models/log.model');

router.get('/', global.secure(), function (request, response) {
    userModel.list(function (user) {
        contractModel.list(function (contract) {
            response.set("Content-Type", "text/html");
            response.render('user-contracts', {
                isNew: false,
                data: user,
                contract: contract
            });
        });
    });
});

router.get('/:contractid', global.secure(), function (request, response) {
    userModel.list(function (user) {
        contractModel.read(request.params.contractid, function (contract) {
            if (contract != undefined) {
                logModel.listContractLog(request.params.contractid, function (log) {
                    response.set("Content-Type", "text/html");
                    response.render('form', {
                        isNew: false,
                        data: user,
                        contract: contract,
                        log: log
                    });
                });
            } else {
                response.status(404).render('404')
            }
        });
    });
});

router.post('/:contractid', global.secure(), function (request, response) {
    var data = {
        'state': parseInt(request.body.contractstate) + 3,
        'contract': request.params.contractid,
        'user': request.body.contractcreator    
    };

    console.log(data);
    logModel.create(data, function(){
        response.redirect('/user/'+request.params.contractid);
    });
});

module.exports = router;