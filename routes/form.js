const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');
var dirpath = path.join(__dirname, '../');

router.get('/', function (request, response) {
    response.set("Content-Type", "text/html");
    response.render('form', {})
});

router.post('/', function (request, response) {

    var template = path.join(dirpath, '/views', 'template.html');
    var destination = path.join('./public/downloads', 'template.pdf')
    var templateHtml = fs.readFileSync(template, 'utf8');

    var logo = path.join('file://', dirpath + '/public/css', 'digitalsign.png');
    templateHtml = templateHtml.replace('{{logo}}', logo);

    var style = path.join('file://', dirpath + '/public/css', 'template.css');
    templateHtml = templateHtml.replace('{{style}}', style);

    var data = request.body;

    var options = {
        format: 'Legal',
        localUrlAccess: true
    };

    templateHtml = templateHtml.replace('{{provider}}', data.provider);
    templateHtml = templateHtml.replace('{{providerNIF}}', data.providerNIF);
    templateHtml = templateHtml.replace('{{providerAddress}}', data.providerAddress);
    templateHtml = templateHtml.replace('{{providerRep}}', data.providerRep);
    templateHtml = templateHtml.replace('{{client}}', data.client);
    templateHtml = templateHtml.replace('{{clientNIF}}', data.clientNIF);
    templateHtml = templateHtml.replace('{{clientAddress}}', data.clientAddress);
    templateHtml = templateHtml.replace('{{clientRep}}', data.clientRep);
    templateHtml = templateHtml.replace('{{inicialDate}}', data.inicialDate);
    templateHtml = templateHtml.replace('{{contractDuration}}', data.contractDuration + " " + data.contractDurationUnit);
    templateHtml = templateHtml.replace('{{serviceCost}}', data.serviceCost + " " + data.serviceCostCurrency);
    templateHtml = templateHtml.replace('{{minPoints}}', data.minPoints);
    templateHtml = templateHtml.replace('{{lowPoints}}', data.lowPoints);
    templateHtml = templateHtml.replace('{{highPoints}}', data.highPoints);
    templateHtml = templateHtml.replace('{{highPercentage}}', data.highPercentage);
    templateHtml = templateHtml.replace('{{midPercentage}}', data.midPercentage);
    templateHtml = templateHtml.replace('{{lowPercentage}}', data.lowPercentage);

    pdf.create(templateHtml, options).toFile(destination, function (err, pdf) {})

    response.redirect('/');
})

module.exports = router;