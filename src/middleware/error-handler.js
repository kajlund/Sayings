const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const { log } = require('../utils/logger')

/**
 * Generic Error Handling middleware. Will be called from controllers using next(err)
 * or by throwing errors
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || StatusCodes.INTERNAL_SERVER_ERROR
  const message = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
  let errors = { message }

  if (process.env.NODE_ENV === 'development') {
    errors = err
  }

  if (statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
    log.error(err)
  }
  res.status(statusCode).json({
    success: false,
    message,
    data: null,
    errors,
  })
}

module.exports = errorHandlerMiddleware
