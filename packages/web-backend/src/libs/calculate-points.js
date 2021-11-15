const logger = require('@trivia-game/module-logger');

/**
 * Calculate points
 * @param difficulty
 * @returns {number}
 */
function calculatePoints(difficulty) {
  switch (difficulty) {
    case 'hard':
      return 3;
    case 'medium':
      return 2;
    case 'easy':
      return 1;
    default:
      logger.error('Difficulty not recognized: %s', difficulty);
      throw new Error('Difficulty not recognized');
  }
}

module.exports = calculatePoints;
