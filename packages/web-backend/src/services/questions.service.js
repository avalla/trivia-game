const fetch = require('node-fetch');
const logger = require('@trivia-game/module-logger');
const config = require('../config');

/**
 * Retrieve questions from trivjia API
 * @returns {Promise<any>}
 */
async function getQuestions() {
  try {
    const response = await fetch(config.triviaApi);
    if (!response.ok) {
      logger.error('Response faulty: %s', response.statusText);
      return Promise.reject(new Error(response.statusText));
    }
    const result = await response.json();
    if (result.response_code !== 0) {
      logger.error('Wrong response code: %s', result.response_code);
      return Promise.reject(new Error(`Wrong response code: ${result.response_code}`));
    }
    return result.results;
  } catch (error) {
    logger.error('Received error during fetch: %s', error.message);
    return Promise.reject(new Error(error));
  }
}

module.exports = getQuestions;
