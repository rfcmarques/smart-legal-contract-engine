const db = require('../util/database');

module.exports = {
    list() {
        var sql = 'SELECT * FROM rmarquesdb.States';
        db.query(sql, function (error, rows, fields) {
            if (error) throw error;
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);

            console.log(json);

            return json
        });
    }
};