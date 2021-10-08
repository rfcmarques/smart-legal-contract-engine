var fs = require('fs');

var htmlSample = 'test.html';
var stream = fs.createWriteStream(htmlSample);

stream.once('open', function (fd) {
    var html = buildHtml();

    stream.end(html);
})

function buildHtml(req) {
    var header = '';
    var body = '<h1>Hello World</h1>'

    return '<!DOCTYPE html>' +
        '<html><head>' + header + '</head><body>' + body + '</body></html>';
}