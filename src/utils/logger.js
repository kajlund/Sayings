const pino = require('pino')

const cnf = require('../config')

const logCnf = { ...cnf.log }

if (logCnf.pretty) {
  logCnf.options.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  }
}

const logger = pino(logCnf.options)
logger.info(logCnf, 'Logger configured: ')

module.exports = logger
