// app.js
//Name: Joel Surya
//Class: 1B/06
//Admission Number: P1935446
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const user = require('../model/user');
const listing = require('../model/listing');
const offer = require('../model/offer');

const cors = require("cors");
const jwt = require("jsonwebtoken");
const isLoggedInMiddleware = require("../isLoggedInMiddleware");

// ---------------------------------------------------------
//                      Configurations
// --------------------------------------------------------- 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
app.options('*', cors());
app.use(cors());


// ---------------------------------------------------------
//                      Middleware
// --------------------------------------------------------- 
app.use(urlencodedParser);
app.use(jsonParser);

// ---------------------------------------------------------
//                    Service Requests
// --------------------------------------------------------- 
// login
app.post('/login', function (req, res) {
    console.log("Last MF for servicing POST /login...");

    var data = {
        username: req.body.username,
        password: req.body.password
    };

    // contact the model layer
    user.verify(data, function (err, result) {

        if (err) {
            // case 1: (err, null)
            var output = JSON.stringify({ "Result": "Internal Error" });
            res.status(500).type("json").send(output);
        }
        else {
            if (result == null) {
                // case 2: (null, null)
                var output = JSON.stringify("Invalid username/password. Try again.");
                res.status(401).type("json").send(output);
            } else {
                // case 3: (null, user)
                const payload = {
                    user_id: user.id
                };

                const options = {
                    algorithm: "HS256"
                }

                var jwt_secret = process.env.JWT_SECRET;

                jwt.sign(payload, jwt_secret, options, function (error, token) {
                    if (error) {
                        console.log(error);
                        res.status(401).send();
                        return;
                    }

                    var success_package = {
                        token: token,
                        user_id: result.id
                    };

                    console.log("---------------- < app.js :: /login :: success package >----------------");
                    console.log(success_package);
                    console.log("---------------- < app.js :: /login :: success package >----------------");

                    res.status(200).send(success_package);
                })
            }
        }
    });
});
//search
app.post('/search', function(req, res){
    console.log('Last MF for servicing POST /search');
    var data={
        search: req.body.search,
    }

    listing.search(data, function(err, result){
        var jsonData=null;
        var output=null;
        if(err){
            res.status(500);
            jsonData={
                "Results":"Internal Error"
            };
            output=JSON.stringify(jsonData);
        } else {
            res.status(200);
            var message = result
            output = JSON.stringify(message)
        }

        // sending data out
        res.type("json");
        res.send(output);
    })

})
//get all offers with username & title
app.get('/offers/:id', function (req, res) {
    console.log("Last MF for servicing GET /offers...");
    var message = "";

    var id = req.params.id;

    // contact the model layer
    offer.allOffer(id, function (err, result) {
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)
        }
        else {
            if (!result) {
                res.status(404)
                message = "No records found";
                output = JSON.stringify(message)
            } else {
                res.status(200)
                message = result
                output = JSON.stringify(result)
            }
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// get all users (endpoint 1)
app.get('/users', function (req, res) {
    console.log("Last MF for servicing GET /users...");
    // contact the model layer
    user.findAll(function (err, result) {
        var jsonData = null;
        var output = null;

        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };

            output = JSON.stringify(jsonData)
        }
        else {
            res.status(200)
            jsonData = {
                result
            };

            output = JSON.stringify(result)
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// add one user (endpoint 2)
app.post('/users', function (req, res) {
    console.log("Last MF for servicing POST /users...");
    var data = {
        username: req.body.username,
        profile_pic_url: req.body.profile_pic_url,
        password: req.body.password
    };

    // contact the model layer
    user.insert(data, function (err, result) {
        var jsonData = null;
        var output = null;

        if (err) {
            res.status(500);
            jsonData = {
                "Results": "Internal Error"
            };

            output = JSON.stringify(jsonData);
        }
        else {

            res.status(201); // when a new resource is created

            var message = "userID: " + result.insertId;

            output = JSON.stringify(message);
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// get one user (endpoint 3)
app.get('/users/:id', function (req, res) {
    console.log("Last MF for servicing GET /users/:id...");
    var message = "";

    var id = req.params.id;

    // contact the model layer
    user.findByID(id, function (err, result) {
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)
        }
        else {
            if (!result) {
                res.status(404)
                message = "No records found";
                output = JSON.stringify(message)
            } else {
                res.status(200)
                message = result
                output = JSON.stringify(result)
            }
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// update one user (endpoint 4)
app.put('/users/:id', function (req, res) {
    console.log("Last MF for servicing PUT /user/:id...");
    var data = {
        userid: req.params.id,
        username: req.body.username,
        profile_pic_url: req.body.profile_pic_url,
        password: req.body.password
    }

    // contact the model layer
    user.edit(data, function (err, result) {
        var jsonData = null;
        var output = null;
        if (err) {
            if (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) {
                res.status(422)
                jsonData = {
                    "Results": "The new username provided already exists"
                };
                output = JSON.stringify(jsonData)

            } else {
                res.status(500)
                jsonData = {
                    "Results": "Internal Error"
                };
                output = JSON.stringify(jsonData)
            }
        }
        else {
            res.status(204)
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// get all listing from a user (endpoint 5)
app.get('/users/:user_id/listings', function (req, res) {
    console.log("Last MF for servicing GET /users/:user_id/listings...");
    var message = "";

    var id = req.params.user_id;

    // contact the model layer
    listing.userListing(id, function (err, result) {
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)
        }
        else {
            if (!result) {
                res.status(404)
                message = "No records found";
                output = JSON.stringify(message)
            } else {
                res.status(200)
                message = result
                output = JSON.stringify(result)
            }
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// get all listings (endpoint 6)
app.get('/listings', function (req, res) {
    console.log("Last MF for servicing GET /listings...");

    // contact the model layer
    listing.findAllListing(function (err, result) {
        var jsonData = null;
        var output = null;

        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };

            output = JSON.stringify(jsonData)
        }
        else {
            res.status(200)
            jsonData = {
                result
            };

            output = JSON.stringify(result)
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// get a listing by its id (endpoint 7)
app.get('/listings/:listing_id', function (req, res) {
    console.log("Last MF for servicing GET /listings/:listing_id...");
    var message = "";

    var listing_id = req.params.listing_id;

    // contact the model layer
    listing.findListingByID(listing_id, function (err, result) {
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)
        }
        else {
            if (!result) {
                res.status(404)
                message = "No records found";
                output = JSON.stringify(message)
            } else {
                res.status(200)
                message = result
                output = JSON.stringify(result)
            }
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// add a new listing to database (endpoint 8)
app.post('/listings', function (req, res) {
    console.log("Last MF for servicing POST /listings...");

    var data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        fk_poster_id: req.body.fk_poster_id,
        image:req.body.image
    };

    // contact the model layer
    listing.insert(data, function (err, result) {
        var jsonData = null;
        var output = null;

        if (err) {
            res.status(500);
            jsonData = {
                "Results": "Internal Error"
            };

            output = JSON.stringify(jsonData);
        }
        else {

            res.status(201); // when a new resource is created

            var message = "listingID: " + result.insertId;

            output = JSON.stringify(message);
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// delete a listing (endpoint 9)
app.delete('/listings/:listing_id', function (req, res) {
    console.log("Last MF for servicing DELETE /listings/:listing_id...");
    var message = "";

    var id = req.params.listing_id;

    // contact the model layer
    listing.delete(id, function (err, result) {
        var jsonData = null;
        var output = null;
        if (err) {
            res.status(500);
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData);
        } else {
            res.status(204)
        }

        // build output package
        var jsonData = {
            "message": message
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// update a listing (endpoint 10)
app.put('/listings/:listing_id', function (req, res) {
    console.log("Last MF for servicing PUT /listings/:listing_id...");
    var data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        fk_poster_id: req.body.fk_poster_id,
        listing_id: req.params.listing_id
    };

    // contact the model layer
    listing.edit(data, function (err, result) {
        var jsonData = null;
        var output = null;
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)

        }
        else {
            res.status(204)
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// get all offer from a listing (endpoint 11)
app.get('/listings/:listing_id/offers', function (req, res) {
    console.log("Last MF for servicing GET /listings/:listing_id/offers...");
    var message = "";

    var id = req.params.listing_id;

    // contact the model layer
    offer.findOffer(id, function (err, result) {
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)
        }
        else {
            if (!result) {
                res.status(404)
                message = "No records found";
                output = JSON.stringify(message)
            } else {
                res.status(200)
                message = result
                output = JSON.stringify(result)
            }
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// add an offer to a listing (endpoint 12)
app.post('/listings/:listing_id/offers', function (req, res) {
    console.log("Last MF for servicing POST /listings/:listing_id...");
    var data = {
        offer: req.body.offer,
        fk_offeror_id: req.body.fk_offeror_id,
        fk_listing_id: req.params.listing_id,
    };

    // contact the model layer
    offer.addOffer(data, function (err, result) {
        var jsonData = null;
        var output = null;
        if (err) {
            res.status(500)
            jsonData = {
                "Results": "Internal Error"
            };
            output = JSON.stringify(jsonData)

        }
        else {
            res.status(201); // when a new resource is created

            var message = "listingID: " + result.insertId;

            output = JSON.stringify(message);
        }

        // sending data out
        res.type("json");
        res.send(output);
    });

});

// ---------------------------------------------------------
//                          Main
// --------------------------------------------------------- 
module.exports = app;

