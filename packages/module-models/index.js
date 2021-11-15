const logger = require('@trivia-game/module-logger');
const models = require('./src/models');
const database = require('./src/services/database.service');

async function initialize() {
  try {
    const result = await database.sync();
    logger.info('Database synced');
    logger.debug('Database sync result', result);
    return true;
  } catch (error) {
    logger.error('Error during database sync: %s', error.message);
    return Promise.reject(new Error(error));
  }
}

module.exports = models;
module.exports.initialize = initialize;
module.exports.database = database;
