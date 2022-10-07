const path = require('path')

const dotenv = require('dotenv')

// Load environment variables BEFORE setting up config
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const ENV = process.env.NODE_ENV || 'development'
const PORT = parseInt(process.env.PORT) || 8080

const config = {
  development: {
    port: PORT,
    nodeEnv: ENV,
    log: {
      http: true,
      pretty: true,
      options: {
        enabled: true,
        level: 'trace',
      },
    },
  },
  production: {
    port: PORT,
    nodeEnv: ENV,
    log: {
      http: false,
      pretty: false,
      options: {
        enabled: true,
        level: 'info',
      },
    },
  },
  test: {
    port: PORT,
    nodeEnv: ENV,
    log: {
      http: false,
      pretty: false,
      options: {
        enabled: true,
        level: 'trace',
      },
    },
  },
}

module.exports = config[ENV]
