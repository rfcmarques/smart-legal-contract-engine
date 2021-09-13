const mysql = require('mysql2');

const config = require('../config/config.json');

const pool = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
}).on('enqueue', function (sequence) {
    if ('Query' === sequence.constructor.name) {
        console.log(sequence.sql)
    }
});

module.exports = pool;