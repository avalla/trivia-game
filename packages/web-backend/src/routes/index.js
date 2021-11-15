const logger = require('@trivia-game/module-logger');
const index = require('./index.route');
const authentication = require('./authentication.route');
const hallOfFame = require('./hall-of-fame.route');
const trivia = require('./trivia.route');

function initialize(app) {
  logger.info('Initializing routes');
  app.use('/', index);
  app.use('/api/v1', authentication);
  app.use('/api/v1', hallOfFame);
  app.use('/api/v1', trivia);
  logger.info('Routes ready');
}

module.exports = initialize;
