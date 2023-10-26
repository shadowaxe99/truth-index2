const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: './logs/logs.log'
        })
    ],
    format: winston.format.combine(
        winston.format.colorize({ all:true }),
        winston.format.simple()
    )
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;