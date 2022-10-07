/**
 * App object configures express server middleware and routes
 */
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const pinoHttp = require('pino-http')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const cnf = require('./config')
const logger = require('./utils/logger')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// Create and configure server
const app = express()

app.disable('x-powered-by')

// Configure middleware
app.use(express.json({ limit: '1000kb' })) // Limit input data size for security reasons
app.use(express.urlencoded({ extended: false })) // Extended to support form input
app.use(cookieParser()) // Handle cookies
app.use(helmet()) // Adds security headers
// const whitelist = ['http://localhost:8080' /** other domains if any */]
// const corsOptions = {
//   credentials: true,
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
// }
app.use(cors({ credentials: true, exposedHeaders: ['set-cookie'] }))

if (cnf.log.http) {
  app.use(pinoHttp({ logger }))
}

// Add route handlers

// Application root
app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send(ReasonPhrases.OK)
})

// Sign of life ping handler
app.get('/ping', (req, res) => {
  res.status(StatusCodes.OK).send('pong')
})

// Add API routes

// Not Found route handler
app.use(notFoundMiddleware)

// Generic error handler
app.use(errorMiddleware)

module.exports = app
