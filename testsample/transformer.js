var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');


var template = path.join(__dirname, 'index.html');
var filename = template.replace('.html', '.pdf');
var templateHtml = fs.readFileSync(template, 'utf8');

var logo = path.join('file://', __dirname, 'logo.png');
templateHtml = templateHtml.replace('{{logo}}', logo);

var style = path.join('file://', __dirname, 'style.css');
templateHtml = templateHtml.replace('{{style}}', style);

var company = "My Company"
templateHtml = templateHtml.replace('{{company}}', company);

console.log(templateHtml);

var options = {
    format: 'Legal',
    localUrlAccess: true
};

pdf.create(templateHtml, options).toFile(filename, function (err, pdf) {
   
})


// pdf.create(html, options).toFile('csstest.pdf', function (err, res) {
//     if (err) return console.log(err);
//     console.log(res);
// })