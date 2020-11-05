//listing.js
//access from listing table 
//Name: Joel Surya
//Class: 1B/06
//Admission Number: P1935446
const db = require("./databaseConfig");

var listingDB = {
    search: function (data, callback) {
        var conn = db.getConnection();
        console.log("DB Connection Successful");
        var sqlCmd = "SELECT * FROM listing WHERE title LIKE" + " ?"
        var values = [
            "%"+data.search+"%"
        ]
        conn.query(sqlCmd, [values],function(err, result){
            if(err){
                console.log(err);
                return callback(err, null);
            } else {
                console.log(result);
                return callback(null, result)
            }
        } )
    },
    findAllListing: function (callback) {
        var conn = db.getConnection();
        console.log("DB Connection Successful");
        var sqlCmd = "SELECT l.title, l.description, l.price, l.created_at, l.image, l.fk_poster_id, l.id, u.username FROM listing l INNER JOIN user u ON u.id = l.fk_poster_id;";
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
        var sqlCmd = "INSERT INTO listing (title, description, price, fk_poster_id, image) VALUES (?,?,?,?,?)";

        var values = [
            data.title,
            data.description,
            data.price,
            data.fk_poster_id,
            data.image
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
    },
    userListing: function (id, callback) {
        var conn = db.getConnection();
        var sqlCmd = "SELECT * FROM listing WHERE fk_poster_id = ?";

        conn.query(sqlCmd, [id], function (err, result) {

            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                return callback(null, result);
            }
        });
    },
    findListingByID: function (id, callback) {
        var conn = db.getConnection();
        var sqlCmd = "SELECT * FROM listing WHERE id = ?";

        conn.query(sqlCmd, [id], function (err, result) {

            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                // success
                // there are 2 possibilities here:
                // either you get NO record, or ONE record
                // console.log(result[0]);
                return callback(null, result[0]);
            }
        });
    },
    delete: function (id, callback) {
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null)
            }
            else {
                console.log("DB Connection Successful");

                var sqlCmd = "DELETE FROM listing WHERE id = ?";
                conn.query(sqlCmd, [id], function (err, result) {
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
            }
        });
    },
    edit: function (data, callback) {
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null)
            }
            else {
                console.log("DB Connection Successful");

                var sqlCmd = "UPDATE listing set title =?, description=?, price=?, fk_poster_id=? WHERE id=?";

                var values = [
                    data.title,
                    data.description,
                    data.price,
                    data.fk_poster_id,
                    data.listing_id
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
            }
        });
    },
};



module.exports = listingDB;