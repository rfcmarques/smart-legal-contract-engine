const db = require('../util/database');

module.exports = {
    list (callback) {
        var sql = 'SELECT * FROM Contracts_States';
        db.query(sql, function (error, rows, fields){
            if (error) throw error;
            callback(rows);
        });
    },

    read ()
}