var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');


var template = path.join(__dirname + '/views', 'template.html');
var filename = template.replace('.html', '.pdf');
var templateHtml = fs.readFileSync(template, 'utf8');

var logo = path.join('file://', __dirname + '/css', 'digitalsign.png');
templateHtml = templateHtml.replace('{{logo}}', logo);

var style = path.join('file://', __dirname + '/css', 'template.css');
templateHtml = templateHtml.replace('{{style}}', style);

var provider = "DigitalSign";
templateHtml = templateHtml.replace('{{provider}}', provider);
var client = "Rui Marques";
templateHtml = templateHtml.replace('{{client}}', client);


var options = {
    format: 'Legal',
    localUrlAccess: true
};

pdf.create(templateHtml, options).toFile(filename, function (err, pdf) {
   
})