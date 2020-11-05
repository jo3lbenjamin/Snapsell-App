//offer.js
//access from offers table 
//Name: Joel Surya
//Class: 1B/06
//Admission Number: P1935446
const db = require("./databaseConfig");

var offerDB = {
    allOffer: function (id, callback) {
    var conn = db.getConnection();
    var sqlCmd = "SELECT o.fk_listing_id, l.title, o.offer, l.fk_poster_id, u.username FROM offers o INNER JOIN user u ON u.id = o.fk_offeror_id INNER JOIN listing l ON o.fk_listing_id=l.id WHERE l.fk_poster_id=?";
    

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
    findOffer: function (id, callback) {
        var conn = db.getConnection();
        var sqlCmd = "SELECT * FROM offers WHERE fk_listing_id = ?";

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
    addOffer: function (data, callback) {
        var conn = db.getConnection();
        var sqlCmd = "INSERT INTO offers (offer, fk_offeror_id, fk_listing_id) VALUES (?,?,?)";

        var values = [
            data.offer,
            data.fk_offeror_id,
            data.fk_listing_id
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
};



module.exports = offerDB;