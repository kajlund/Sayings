const { StatusCodes, ReasonPhrases } = require('http-status-codes')

module.exports = (_req, res, _next) =>
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: ReasonPhrases.NOT_FOUND,
    data: null,
    errors: {
      notFound: ReasonPhrases.NOT_FOUND,
    },
  })
