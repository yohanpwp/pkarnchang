const mysql = require('mysql');
const { result } = require('validate.js');
class MySqlDatabase {

        constructor() {
            this.connection = mysql.createPool({
                host : '127.0.0.1',
                user : 'root',
                password : 'password',
                database : 'db_test',
                charset : 'utf8'
            });
        }
            //แสดงข้อมูลในsqlออกมาแบบpromise
            query(sql, params = null) {
                return new Promise((resolve, reject) => {
                    this.connection.query(sql,params, (errors,result) => {
                        if(errors) return reject({errors});
                        resolve(result);
                    });
                });
            }
            //แสดงข้อมูลในsqlออกมาแบบcallback(สูตรเขียนเป็นpromise)
            //this.connection.query('SELECT * FROM db_test.posts', (err,result) => {
            //console.log(err,result);
            

        }


module.exports = { MySqlDatabase }