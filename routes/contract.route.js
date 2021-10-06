const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const contractModel = require('../models/contract.model');
const logModel = require('../models/log.model');
const axios = require('axios');

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
                console.log(contract.currentstate)
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
    switch (request.body.contractstate) {
        case "2":
            let formdata = {
                'state': 5,
                'contract': request.params.contractid,
                'user': request.body.contractcreator
            };
            logModel.create(formdata, function () {
                response.redirect('/user/' + request.params.contractid);
            });
            break;
        case "5":
            let triggerbody = {
                state: {
                    $class: "pt.digitalsign.fullcontract.ServiceLevelAgreementState",
                    status: "INICIADO",
                    $identifier: "5823883b-9a72-4840-8457-58bb6ac29984"
                },
                request: {
                    $class: "pt.digitalsign.fullcontract.ContractRequest",
                    points: parseFloat(request.body.slapoints)
                }
            }
            axios.post('http://localhost:5000/api/v2/trigger/' + request.body.contracthash, triggerbody)
                .then((apiresponse) => {
                    if (apiresponse.data.state.status == 'OBRIGACAO_EMITIDA') {
                        let data = {
                            'state': 8,
                            'contract': request.params.contractid,
                            'user': request.body.contractcreator
                        };
                        logModel.create(data, function () {
                            response.redirect('/user/' + request.params.contractid);
                        });
                    } else if (apiresponse.data.state.status == 'TERMINADO') {
                        let data = {
                            'state': 11,
                            'contract': request.params.contractid,
                            'user': request.body.contractcreator
                        };
                        logModel.create(data, function () {
                            response.redirect('/user/' + request.params.contractid);
                        });
                    } else {
                        console.log(apiresponse.data);
                    };
                }).catch((err) => {
                    console.log(err)
                });
            break;

        case "8":
            let paymentbody = {
                state: {
                    "$class": "pt.digitalsign.fullcontract.ServiceLevelAgreementState",
                    "status": "OBRIGACAO_EMITIDA",
                    "$identifier": "5823883b-9a72-4840-8457-58bb6ac29984"
                },
                request: {
                    "$class": "org.accordproject.payment.PaymentReceived"
                }
            };

            axios.post('http://localhost:5000/api/v2/makepayment/' + request.body.contracthash, paymentbody)
                .then((apiresponse) => {
                    
                    if (apiresponse.data.state.status == 'TERMINADO') {
                        let data = {
                            'state': 11,
                            'contract': request.params.contractid,
                            'user': request.body.contractcreator
                        };
                        logModel.create(data, function () {
                            response.redirect('/user/' + request.params.contractid);
                        });
                    } else {
                        console.log(apiresponse.data)
                    }
                }).catch((err) => {
                    console.log(err)
                })

            break;
        default:
            response.status(404).render('404')
            break;
    }
});

module.exports = router;