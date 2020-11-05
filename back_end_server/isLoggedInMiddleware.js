// isLoggedInMiddleware.js 
//NAME:             JOEL BENJAMIN SURYA
//CLASS:            DIT/FT/1B/06
//ADMIN NUMBER:     P1935446

const dotenv = require('dotenv');
dotenv.config({
    path:'./.env.development'
})
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    // does the header contain the authorization info
    if (authHeader === null || authHeader === undefined || !authHeader.startsWith("Bearer ")) {
        res.status(401).send("Unauthorized [1]");
        return;
    }

    // extract the tokn
    const token = authHeader.replace("Bearer ", "");

    var options = {
        algorithms: ["HS256"]
    }

    // verify the token
    jwt.verify(token, JWT_SECRET, options, function(error, decodedToken) {
        if (error) {
            res.status(401).send("Unauthorized [2]");
            return;
        }

        // take the decoded token and save it in the request object
        // so that other MFs down the chain has access to it
        req.decodedToken = decodedToken;

        // call the next MF
        next();
    });
};

module.exports = verifyToken;