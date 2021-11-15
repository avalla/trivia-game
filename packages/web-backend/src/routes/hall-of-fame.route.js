const express = require('express');
const models = require('@trivia-game/module-models');
const logger = require('@trivia-game/module-logger');

const router = express.Router();

router.get('/hall-of-fame', async (req, res) => {
  try {
    logger.info('Requested Hall Of Fame');
    const users = await models.User.findAll({
      order: [['highestScore', 'DESC']],
      limit: 10,
      attributes: ['userName', 'highestScore', 'updatedAt'],
    });
    res.json({
      status: true,
      users,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      code: 500,
      message: error.message,
      stack: error.stack,
    });
  }
});

module.exports = router;
