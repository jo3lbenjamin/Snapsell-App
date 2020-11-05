// user.js
// this file provides read/write access to the 'user' table
// in the database
//Name: Joel Surya
//Class: 1B/06
//Admission Number: P1935446
const db = require("./databaseConfig");
const bcrypt = require("bcryptjs");

// this is used later
const saltRounds = 10;

// ---------------------------------------------------------
//                      Configurations
// --------------------------------------------------------- 
var userDB = {
    // verify the login of user
    verify: function (data, callback) {
        var conn = db.getConnection();
        // username is a unique column, so this statement will have 
        // either 0 or 1 record returned
        var sqlCmd = "SELECT * FROM user WHERE username =?";

        var values = [
            data.username,
            data.password,
        ];

        conn.query(sqlCmd, values, function (err, result) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log(result);

                // (null, null)
                if (result.length == 0) {
                    return callback(null, null)
                }
                else {
                    // (null, one username)

                    // now we have
                    // 1. password user tries to login with (data.password) (plain)
                    // 2. password stored in database (result[0].password) (hashed)

                    var user = result[0];

                    //                 |--  plain to be hashed
                    //                 |                | -- already hashed
                    bcrypt.compare(data.password, user.password, function (err, cmp_result) {
                        if (err) {
                            return callback(err, null);
                        } else {
                            if (!cmp_result) {
                                return callback(null, null);
                            }
                            else {
                                return callback(null, user);
                            }
                        }
                    });
                }
            }
        });
    },
    findAll: function (callback) {
        var conn = db.getConnection();
        console.log("DB Connection Successful");
        var sqlCmd = "SELECT * FROM user";
        conn.query(sqlCmd, [], function (err, result) {

            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log(result);
                return callback(null, result);
            }
        });
    },
    insert: function (data, callback) {
        var conn = db.getConnection();
        var sqlCmd = "INSERT INTO user (username, profile_pic_url, password) VALUES (?,?,?)";
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(data.password, salt, function (err, hash) {
                var values = [
                    data.username,
                    data.profile_pic_url,
                    hash //data.password
                ];

                conn.query(sqlCmd, values, function (err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            })
        })
    },
    findByID: function (userid, callback) {
        var conn = db.getConnection();
        var sqlCmd = "SELECT * FROM user WHERE id = ?";

        conn.query(sqlCmd, [userid], function (err, result) {

            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                // success
                // there are 2 possibilities here:
                // either you get NO record, or ONE record
                if (result.length == 0) {

                }
                // console.log(result[0]);
                return callback(null, result[0]);
            }
        });
    },
    edit: function (data, callback) {
        var conn = db.getConnection();
        var sqlCmd = "UPDATE user set username=?, profile_pic_url=?, password=? WHERE id =?";
        bcrypt.genSalt(saltRounds, function (err, salt){
            bcrypt.hash(data.password, salt, function (err, hash) {
                var values = [
                    data.username,
                    data.profile_pic_url,
                    hash,
                    data.userid,
                ];
                conn.query(sqlCmd, values, function (err, result) {
                    conn.end();

                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });

            })
        })
    },
};

// example usage:
// userDB.getUser();

module.exports = userDB;