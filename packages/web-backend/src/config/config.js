const Joi = require('joi');
const logger = require('@trivia-game/module-logger');

const schema = Joi.object({
  NODE_ENV: Joi.string().allow('development', 'production', 'test', 'provision').default('development'),
  SESSION_SECRET: Joi.string().default('my-session-secret'),
  API_PORT: Joi.number().default(9000),
  TRIVIA_API: Joi.string().uri().default('https://opentdb.com/api.php?amount=10'),
  FRONTEND_URL: Joi.string().uri().default('http://localhost:3000'),
})
  .unknown()
  .required();

const { error, value } = schema.validate(process.env);
if (error) {
  logger.error('Config validation error', error.message);
  throw new Error(`Config validation error: ${error.message}`);
}

const configuration = {
  env: value.NODE_ENV,
  port: value.API_PORT,
  secret: value.SESSION_SECRET,
  triviaApi: value.TRIVIA_API,
  frontendUrl: value.FRONTEND_URL,
};

logger.info('Configuration: %O', configuration);
module.exports = configuration;
