const Joi = require('joi');
const logger = require('@trivia-game/module-logger');

const schema = Joi.object({
  SQLITE_PATH: Joi.string().default('/tmp/trivia.sqlite'),
})
  .unknown()
  .required();

const { error, value } = schema.validate(process.env);
if (error) {
  logger.error('Config validation error', error.message);
  throw new Error(`Config validation error: ${error.message}`);
}

const configuration = {
  path: value.SQLITE_PATH,
};

logger.info('Configuration: %O', configuration);
module.exports = configuration;
