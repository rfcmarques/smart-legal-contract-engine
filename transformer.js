var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./views/test.html', 'utf-8');
var options = { format: 'Letter'};

pdf.create(html, options).toFile('test.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
})