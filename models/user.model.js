const db = require('../util/database');

module.exports = {
    list(callback) {
        var sql = 'SELECT * from Users';
        db.query(sql, function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        });
    },

    read(email, callback) {
        var sql = 'SELECT * from Users where email=?';
        db.query(sql, [email], function (error, rows, fields) {
            if (error) throw error;
            callback(rows[0]);
        });
    },

    create(data, callback) {
        var sql = 'INSERT INTO Users (email, password, name) VALUES (?,?,?)';
        db.query(
            sql, [data.email, data.password, data.name],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);

            });
    },

    update(email, data, callback) {
        var sql = 'UPDATE Users SET password=?, name=? WHERE email=?';
        db.query(
            sql, [data.password, data.name],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    remove(email, callback) {
        var sql = 'DELETE from Users WHERE email=?';
        db.query(sql, [email], function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        });
    },

    areValidCredentials(email, password, callback) {
        var sql = 'SELECT password FROM Users WHERE email=?';
        db.query(sql, [email], function (error, rows, fields) {
            if (error) throw error;
            if (rows.length == 1 && rows[0].password == password) {
                callback(true);
            }else{
                callback(false);
            }
        });
    }
};