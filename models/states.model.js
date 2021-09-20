const db = require('../util/database');

module.exports = {
    list(callback) {
        var sql = 'SELECT * FROM states';
        db.query(sql, function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        });
    },

    listlaststate(callback) {
        var sql = 'SELECT contract, MAX(timestamp) as lasttimestamp FROM states GROUP BY contract';
        db.query(sql, function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        });
    },

    read(contract, callback) {
        var sql = 'SELECT * FROM states where contract=?';
        db.query(sql, [contract], function (error, rows, fields) {
            if (error) throw error;
            callback(rows[0]);
        });
    },

    create(data, callback) {
        var sql = 'INSERT INTO states (description, contract) VALUES (?,?)';
        db.query(
            sql, [data.description, data.contract],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    update(idState, data, callback) {
        var sql = 'UPDATE states SET description=? WHERE idState=?';
        db.query(sql, [data.description, idState],
            function (error, rows, fields){
                if (error) throw error;
                callback(rows[0]);
            });
    },

    remove(idState, callback) {
        var sql = 'DELETE FROM states WHERE idState=?';
        db.query(sql, [idState], function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        })
    }
};