const express = require('express');
const models = require('@trivia-game/module-models');
const logger = require('@trivia-game/module-logger');
const getQuestions = require('../services/questions.service');
const shuffle = require('../libs/shuffle');
const formatter = require('../libs/question-formatter');

const router = express.Router();

router.post('/trivia/start-game', async (req, res) => {
  try {
    logger.info('Start game');
    const questions = await getQuestions();
    const shuffled = shuffle(questions).map(formatter);
    logger.info('Saving questions to session', shuffled);
    req.session.questions = shuffled;
    req.session.answers = [];
    req.session.score = 0;
    res.send({
      status: true,
      // remove correct_answer from response
      questions: shuffled.map(({ correct_answer, ...question }) => question), // eslint-disable-line camelcase
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
router.post('/trivia/answer', async (req, res) => {
  const { questionId, answer } = req.body;
  if (!req.session.questions) {
    res.status(500).send({
      status: false,
      code: 500,
      message: 'Session is not ready, sorry',
    });
    return;
  }
  if (req.session.answers[questionId]) {
    res.status(500).send({
      status: false,
      code: 500,
      message: 'Question already answered, sorry',
    });
    return;
  }
  try {
    logger.info('Send answer %s to question %s', answer, questionId);
    const question = req.session.questions[questionId];
    const isCorrect = answer === question.correct_answer;
    if (isCorrect) {
      // eslint-disable-line camelcase
      req.session.score += question.points;
    }
    logger.info('Question:\n %s', question.question);
    logger.info('Answer:\n %s', answer);
    logger.info('Correct answer:\n %s', question.correct_answer);
    const answers = [...req.session.answers, { answer, is_correct: isCorrect }];
    req.session.answers = answers;
    res.send({
      status: true,
      answers,
      score: req.session.score,
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
router.post('/trivia/submit-score', async (req, res) => {
  if (!req.session.userId) {
    res.status(500).send({
      status: false,
      code: 500,
      message: 'User not logged in, sorry',
    });
    return;
  }
  if (!req.session.score) {
    res.status(500).send({
      status: false,
      code: 500,
      message: 'Score not found, sorry',
    });
    return;
  }
  try {
    logger.info('End game');
    const { userId, score } = req.session;
    const user = await models.User.findOne({ where: { userId } });
    if (user.highestScore < score) {
      await user.set({
        highestScore: score,
      });
      await user.save();
    }
    res.send({
      status: true,
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
