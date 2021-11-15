const express = require('express');
const logger = require('@trivia-game/module-logger');
const models = require('@trivia-game/module-models');

const router = express.Router();

/**
 * Register user
 */
router.post('/authentication/register', async (req, res) => {
  try {
    const { userName, password } = req.body;
    logger.info('Registering user %s', userName);
    const user = models.User.build({ userName, password });
    await user.save();
    req.session.userId = user.userId;
    res.json({
      status: true,
      message: 'User registered',
      user: { userId: user.userId, userName: user.userName },
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
/**
 * Allows users to logout from application
 */
router.post('/authentication/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send({
        status: false,
        code: 500,
        message: err.message,
        stack: err.stack,
      });
      return;
    }
    res.json({
      status: true,
      message: 'User logged out',
    });
  });
});

module.exports = router;
