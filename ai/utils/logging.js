const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: './logs/logfile.log'
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

const logEvent = (message) => {
    logger.info(message);
};

const logError = (error) => {
    logger.error(error);
};

module.exports = {
    logEvent,
    logError
};