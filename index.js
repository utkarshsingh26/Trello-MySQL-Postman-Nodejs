var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false}));

const config = require("./config/default.json");
global.request = require("request");

const routes = require("./routes/route");

app.use(config.app.prefix, routes);

const port = process.env.PORT || config.server.port;

app.listen(port, function (){
    console.log(`Trello services listenting on port ${port}`);
});


module.exports = app;