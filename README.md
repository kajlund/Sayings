# Sayings API and App

The server is implemented as a Node.js/Express server using the Knex.js query builder for querying a SQL database.

### Database Migrations

- Create migration: `npx knex --knexfile=./src/db/knexfile.js migrate:make <name>`
- Run all migrations: `npx knex --knexfile ./src/db/knexfile.js migrate:latest`
- Rollback all: `npx knex --knexfile ./src/db/knexfile.js migrate:rollback --all`
- Create Seed: `npx knex --knexfile ./src/db/knexfile.js seed:make <name>`
- Run Seed: `npx knex --knexfile=./src/db/knexfile.js seed:run`

### Resources

- [Knex.js Guide](https://knexjs.org/guide/)
- [Validator](https://github.com/validatorjs/validator.js)
- [Japa testing framework doc](https://japa.dev/docs/usage)
  - [Using the API client](https://japa.dev/docs/plugins/api-client)
- [Jest Expect docs](https://jestjs.io/docs/expect)
- [TDD with Node Udemy Course](https://www.udemy.com/course/test-driven-development-with-nodejs/)
- [TDD With Node course repo](https://github.com/basarbk/tdd-nodejs/blob/main/src/error/ValidationException.js)

### ToDos

- [] Add tests forconfig and error handler
-
