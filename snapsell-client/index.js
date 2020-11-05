const express = require("express");
const app = express();

app.get("/login", (req, res) => {
    res.sendFile("/public/login.html", { root: __dirname });
});

app.get("/profile", (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
});

app.get("/items", (req, res) => {
    res.sendFile("/public/items.html", { root: __dirname });
});

app.get("/search", (req, res) => {
    res.sendFile("/public/search.html", { root: __dirname });
});

app.get("/sell", (req, res) => {
    res.sendFile("/public/sell.html", { root: __dirname });
});

app.get("/listing", (req, res) => {
    res.sendFile("/public/listing.html", { root: __dirname });
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});
