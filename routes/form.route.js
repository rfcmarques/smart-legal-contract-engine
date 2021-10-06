const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');
const Mustache = require('mustache');
var dirpath = path.join(__dirname, '../');
const contractModel = require('../models/contract.model');

router.get('/', global.secure(), function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('form', {
        isNew: true
    })
});

router.get('/:pdf', global.secure(), function (request, response) {
    if(request.params.pdf === 'contract-template'){
        response.download(dirpath + '/public/downloads/template.pdf');
    }else{
        response.render('404')
    }
})

router.post('/:user', global.secure(), function (request, response) {
    let filename = makeid(16)+"-"+makeid(16);

    let destination = path.join('./public/downloads/pdfFiles', filename+".pdf");

    let data = request.body;

    let options = {
        format: 'Legal',
        localUrlAccess: true
    };

    let contractJSON = {
        'provider': data.provider,
        'providerNIF': data.providerNIF,
        'providerRep': data.providerRep,
        'providerAddress': data.providerAddress,
        'client': data.client,
        'clientNIF': data.clientNIF,
        'clientRep': data.clientRep,
        'clientAddress': data.clientAddress,
        'inicialDate': data.inicialDate,
        'contractDuration': data.contractDuration + " " + data.contractDurationUnit,
        'serviceCost': data.serviceCost + " " + data.serviceCostCurrency,
        'minPoints': data.minPoints,
        'lowPoints': data.lowPoints,
        'midPoints': data.midPoints,
        'highPoints': data.highPoints,
        'maxPoints': data.highPoints,
        'highPercentage': data.highPercentage,
        'midPercentage': data.midPercentage,
        'lowPercentage': data.lowPercentage
    };

    let markJSON = {
        provider:  data.provider,
        providerNIF:  data.providerNIF,
        providerRep: data.providerRep ,
        providerAddress:  data.providerAddress ,
        client:  data.client ,
        clientNIF: data.clientNIF,
        clientRep:  data.clientRep ,
        clientAddress:  data.clientAddress ,
        inicialDate: data.inicialDate,
        contractDuration: data.contractDuration + " " + data.contractDurationUnit,
        serviceCost: data.serviceCost + " " + data.serviceCostCurrency,
        minPoints: data.minPoints,
        lowPoints: data.lowPoints,
        midPoints: data.midPoints,
        highPoints: data.highPoints,
        maxPoints: data.highPoints,
        highPercentage: data.highPercentage,
        midPercentage: data.midPercentage,
        lowPercentage: data.lowPercentage
    };

    let contractData = {
        'name': data.contractname,
        'hash': filename,
        'contractData': JSON.stringify(contractJSON),
        'creator': request.params.user
    };

    createMD(markJSON,filename);
    let templateHtml = createPDF(contractJSON);

    pdf.create(templateHtml, options).toFile(destination, function (err, pdf) {
        // response.redirect('/form/contract-template');
        contractModel.create(contractData, function(){});
    }); 
});


function createMD(json, name){
    let templatepath = path.join(dirpath, '/data/text','template.md');
    let destinationpath = path.join(dirpath, '/public/downloads/mdSamples',name+'.md');

    let template = fs.readFileSync(templatepath, 'utf-8');

    let output = Mustache.render(template,json);
    fs.writeFileSync(destinationpath,output);
}

function createPDF(json){
    let template = path.join(dirpath, '/views', 'template.html');
    let templateHtml = fs.readFileSync(template, 'utf8');
    let logo = path.join('file://', dirpath + '/public/css', 'digitalsign.png');
    templateHtml = templateHtml.replace('{{logo}}', logo);
    let style = path.join('file://', dirpath + '/public/css', 'template.css');
    templateHtml = templateHtml.replace('{{style}}', style);


    templateHtml = templateHtml.replace('{{provider}}', json.provider);
    templateHtml = templateHtml.replace('{{providerNIF}}', json.providerNIF);
    templateHtml = templateHtml.replace('{{providerAddress}}', json.providerAddress);
    templateHtml = templateHtml.replace('{{providerRep}}', json.providerRep);
    templateHtml = templateHtml.replace('{{client}}', json.client);
    templateHtml = templateHtml.replace('{{clientNIF}}', json.clientNIF);
    templateHtml = templateHtml.replace('{{clientAddress}}', json.clientAddress);
    templateHtml = templateHtml.replace('{{clientRep}}', json.clientRep);
    templateHtml = templateHtml.replace('{{inicialDate}}', json.inicialDate);
    templateHtml = templateHtml.replace('{{contractDuration}}', json.contractDuration);
    templateHtml = templateHtml.replace('{{serviceCost}}', json.serviceCost);
    templateHtml = templateHtml.replace('{{minPoints}}', json.minPoints);
    templateHtml = templateHtml.replace('{{lowPoints}}', json.lowPoints);
    templateHtml = templateHtml.replace('{{midPoints}}', json.midPoints);
    templateHtml = templateHtml.replace('{{highPoints}}', json.highPoints);
    templateHtml = templateHtml.replace('{{maxPoints}}', json.highPoints);
    templateHtml = templateHtml.replace('{{highPercentage}}', json.highPercentage);
    templateHtml = templateHtml.replace('{{midPercentage}}', json.midPercentage);
    templateHtml = templateHtml.replace('{{lowPercentage}}', json.lowPercentage);

    return templateHtml;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

module.exports = router;