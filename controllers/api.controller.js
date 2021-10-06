const express = require('express');
let app = express.Router()
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const fs = require('fs')

const Template = require('@accordproject/cicero-core').Template;
const Clause = require('@accordproject/cicero-core').Clause;
const Engine = require('@accordproject/cicero-engine').Engine;

async function run() {

    const aod = await Template.fromDirectory('./data');

    const sample = aod.getMetadata().getSample();
    
    // const newsample = fs.readFileSync('./public/downloads/mdSamples/BpD6Ywt5NjKgK6zQ-uoJGgUOmnOaoTO1p.md').toString();
    

    const clause = new Clause(aod);
    clause.parse(sample);

    let response = clause.toJSON();

    str = JSON.stringify(response);

    obj = JSON.parse(str);

    let obligation = {};

    app.get("/data", (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(obj.data);
    })

    app.get("/client", (req, res, next) => {
        let clientData = {
            "cliente": {
                "nome": obj.data.client,
                "representante": obj.data.clientRep,
                "nif": obj.data.clientNIF,
                "morada": obj.data.clientAddress
            }
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(clientData);
    })

    app.get("/provider", (req, res, next) => {
        let providerData = {
            "fornecedor": {
                "nome": obj.data.provider,
                "representante": obj.data.providerRep,
                "nif": obj.data.providerNIF,
                "morada": obj.data.providerAddress
            }
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(providerData);
    })

    app.post("/trigger", async (req, res, next) => {

        const engine = new Engine();

        let request = req.body.request;

        let state = req.body.state;

        const cls = aod.getIdentifier() + "-" + aod.getHash();

        const result = await engine.trigger(clause, request, state);

        strg = JSON.stringify(result);
        objt = JSON.parse(strg);

        obligation.data = objt.emit[0];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(objt);
    })

    app.post("/init", async (req, res, next) => {
        const engine = new Engine();

        const result = await engine.init(clause);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(result);
        console.log(aod.getHash());
    })

    app.get("/obligation", (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(obligation.data);
    })

    app.post("/makepayment", async (req, res, next) => {
        const engine = new Engine();

        let request = req.body.request;

        let state = req.body.state;

        const result = await engine.trigger(clause, request, state);

        strg = JSON.stringify(result);
        objt = JSON.parse(strg);

        obligation.data = objt.emit[0];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.json(objt);

    })
}

run();

module.exports = app;