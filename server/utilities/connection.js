let mongoose = require("mongoose"),
    dbUri = "mongodb://nirmal:nirmal@localhost:27017/SMS?authSource=admin",
    winston = require("winston");

mongoose.connect(dbUri);
mongoose.connection.on('connected', function () {
    console.log('Default Connection to DB established!!!');
});
mongoose.connection.on('error', function () {
    console.log("Error while connecting to DB.");
});
mongoose.connection.on('disconnected', function () {
    console.log("Disconnected from DB.");
});
process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Default connection to DB ternimated by application.");
        process.exit(0);
    });
});

module.exports = mongoose.connection;