const db = require('../util/database');

module.exports = {
    list(callback){
        var sql = 'SELECT * FROM Contracts';
        db.query(sql, function(error, rows, fields){
            if (error) throw error;
            callback(rows);
        });
    },

    read(idContract, callback) {
        var sql = 'SELECT * from Contracts where idContract=?';
        db.query(sql, [idContract], function (error, rows, fields) {
            if (error) throw error;
            callback(rows[0]);
        });
    },

    create(data, callback) {
        var sql = 'INSERT INTO Contracts (contract, contractData, creator) VALUES (?,?,?)';
        db.query(
            sql, [data.contract, data.contractData, data.creator],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    update(idContract, data, callback) {
        var sql = 'UPDATE Contracts SET contract=?, contractData=?, creator=? WHERE idContract=?';
        db.query(sql, [data.contract, data.contractData, data.creator],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    remove(idContract, callback) {
        var sql = 'DELETE from Contracts WHERE idContract=?';
        db.query(sql, [idContract], function (error, rows, fields){
            if (error) throw error;
            callback(rows);
        })
    }
}