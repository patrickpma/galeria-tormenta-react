const winston = require('winston');

winston.add(new winston.transports.File({
  name: 'debug-file',
  filename: './logs/api-core.log',
  level: 'info',
  handleExceptions: true,
  humanReadableUnhandledException: true,
  exitOnError: true,
  json: false,
  maxsize: 104857600,
  maxFiles: 5
}));

winston.add(new winston.transports.Console, {
  name: 'error-console',
  level: 'info',
  handleExceptions: true,
  humanReadableUnhandledException: true,
  exitOnError: true
});

module.exports = winston;