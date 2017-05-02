let winston = require("winston");
module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            timestamp: new Date().toLocaleTimeString(),
            level: 'error',
            handleExceptions: true,
            json: true,
            maxsize: 5242880
        }),
        new (winston.transports.File)({
            colorize: true,
            timestamp: new Date().toLocaleTimeString(),
            filename: process.cwd() + "/logs/user.log",
            level: 'info',
            handleExceptions: true,
            json: true,
            maxsize: 5242880
        })
    ]
});;