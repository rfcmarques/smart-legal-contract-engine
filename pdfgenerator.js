var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');


var template = path.join(__dirname + '/views', 'index.html');
var filename = template.replace('.html', '.pdf');
var templateHtml = fs.readFileSync(template, 'utf8');


var options = {
    format: 'Legal',
    localUrlAccess: true
};

pdf.create(templateHtml, options).toFile(filename, function (err, pdf) {
   
})