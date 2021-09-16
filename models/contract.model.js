const db = require('../util/database');

module.exports = {
    list(callback){
        var sql = 'SELECT * FROM contracts';
        db.query(sql, function(error, rows, fields){
            if (error) throw error;
            callback(rows);
        });
    },

    read(idContract, callback) {
        var sql = 'SELECT * from contracts where idContract=?';
        db.query(sql, [idContract], function (error, rows, fields) {
            if (error) throw error;
            callback(rows[0]);
        });
    },

    create(data, callback) {
        var sql = 'INSERT INTO contracts (contracthash, data, creator) VALUES (?,?,?)';
        db.query(
            sql, [data.contracthash, data.data, data.creator],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    update(idContract, data, callback) {
        var sql = 'UPDATE contracts SET contracthash=?, contractData=?, creator=? WHERE idContract=?';
        db.query(sql, [data.contracthash, data.contractData, data.creator],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    remove(idContract, callback) {
        var sql = 'DELETE from contracts WHERE idContract=?';
        db.query(sql, [idContract], function (error, rows, fields){
            if (error) throw error;
            callback(rows);
        })
    }
}