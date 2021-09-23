const db = require('../util/database');

module.exports = {
    list(callback){
        var sql = 'SELECT * FROM states_log';
        db.query(sql, function(error, rows, fields){
            if (error) throw error;
            callback(rows);
        });
    },

    listContractLog(contract, callback) {
        var sql = 'SELECT * FROM states_log WHERE contract=?';
        db.query(sql, [contract], function (error, rows, fields){
            if (error) throw error;
            callback(rows);
        });
    },

    create(data, callback) {
        var sql = 'INSERT INTO states_log (state, contract, user) VALUES (?,?,?)';
        db.query(sql,
            [data.state, data.contract, data.user],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    }
};