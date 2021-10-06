const express = require('express');
const router = express.Router();
router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
const instantiate = require('../services/instatiate');
const trigger = require('../services/trigger');


router.get('/parse/:sample', async (req, res) => {
    let data = await instantiate.instantiateClause(req.params.sample);
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(200).json({
            error: 'It was impossible to parse that file'
        })
    }
});

router.post('/trigger/:sample', async (req, res) => {
    try {
        let request = req.body.request;
        let state = req.body.state;
        if (request && state) {
            let data = await trigger.triggerClause(req.params.sample, request, state);
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(200).json({
                    error: 'It was not possible to trigger that clause'
                })
            }
        } else {
            res.status(200).json({
                error: 'The request was not defined'
            })
        }
    } catch (error) {
        console.log(error)
    }
});

router.post('/makepayment/:sample', async (req, res) => {
    try {
        let state = req.body.state;
        let request = req.body.request;
        if (state.status == 'OBRIGACAO_EMITIDA') {
            let data = await trigger.triggerClause(req.params.sample, request, state);
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(200).json({
                    error: 'It was not possible to make the payment'
                });
            }
        } else {
            res.status(200).json({
                error: `You can not make a payment if the contract status is ${state.status}`
            });
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;