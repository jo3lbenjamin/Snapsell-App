// databaseConfig.js
//NAME:             JOEL BENJAMIN SURYA
//CLASS:            DIT/FT/1B/06
//ADMIN NUMBER:     P1935446
const dotenv = require('dotenv');
dotenv.config({
    path:'./.env.development'
})
/* 
    The purpose of this file is to provide connections to the
    back-end database layer.

    It does not read/write to tables in the DB; that's the job \
    for the Models.

    It merely just opens the door to DB, and closes the door
*/

const mysql = require("mysql");
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


// ---------------------------------------------------------
//                      Configurations
// --------------------------------------------------------- 
var dbconnect = {
    connection: null,
    getConnection: function () {
        // get a connection to the DB
        var conn = mysql.createConnection({
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            dateStrings: true
        });

        // and return the connection
        // at this point in time, the door to the DB has not opened up
        // We merely just arrived at the doorstep, ready to supply
        // credentials to gain access in
        this.connection = conn;
        return conn;
    },
    connectNow: function (connection) {
        // to help us test if we can connect to the DB successfully
        // the parameter 'connection' is the object returned in
        // getConnection().
        // We need that object to start the actual connect
        connection.connect(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("DB Connection Successful");
            }
        });
    }
};

// example usage:
// dbconnect.getConnection();

// ---------------------------------------------------------
//                          Main
// --------------------------------------------------------- 
module.exports = dbconnect;