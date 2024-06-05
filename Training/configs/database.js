const mysql = require('mysql');

class MySqlDatabase {

    constructor() {
        this.connection = mysql.createPool({
            host: '127.0.0.1',
            user: 'test',
            password: '1234',
            database: 'db_test',
            charset: 'utf8'
        });
    }

    // Custom ฟังชั่นก์ Query ข้อมูลใหม่
    query(sql, params = null) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (errors, result) => {
                if (errors) return reject({ errors });
                resolve(result);
            });
        });
    }

}

module.exports = { MySqlDatabase };