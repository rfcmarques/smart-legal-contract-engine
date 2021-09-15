const db = require('../util/database');

module.exports = {
    list(callback) {
        var sql = 'SELECT * FROM user';
        db.query(sql, function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        });
    },

    read(email, callback) {
        var sql = 'SELECT * FROM user where email=?';
        db.query(sql, [email], function (error, rows, fields) {
            if (error) throw error;
            callback(rows[0]);
        });
    },

    readId(idUser, callback) {
        var sql = 'SELECT * FROM user where idUser=?';
        db.query(sql, [idUser], function (error, rows, fields) {
            if (error) throw error;
            callback(rows[0]);
        });
    },

    create(data, callback) {
        var sql = 'INSERT INTO user (email, password, firstName, lastName) VALUES (?,?,?,?)';
        db.query(
            sql, [data.email, data.password, data.firstName, data.lastName],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    update(email, data, callback) {
        var sql = 'UPDATE user SET password=?, firstName=?, lastName=? WHERE email=?';
        db.query(
            sql, [data.password, data.firstName, data.lastName, email],
            function (error, rows, fields) {
                if (error) throw error;
                callback(rows[0]);
            });
    },

    remove(email, callback) {
        var sql = 'DELETE FROM user WHERE email=?';
        db.query(sql, [email], function (error, rows, fields) {
            if (error) throw error;
            callback(rows);
        });
    },

    areValidCredentials(email, password, callback) {
        var sql = 'SELECT password FROM user WHERE email=?';
        db.query(sql, [email], function (error, rows, fields) {
            if (error) throw error;
            if (rows.length == 1 && rows[0].password == password) {
                callback(true);
            } else {
                callback(false);
            }
        });
    }
};