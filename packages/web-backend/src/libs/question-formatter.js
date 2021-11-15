const shuffle = require('./shuffle');
const calculatePoints = require('./calculate-points');

function formatter(question, questionId) {
  if (!question) {
    throw new Error('Question should be defined');
  }
  if (typeof question !== 'object') {
    throw new Error('Question type not recognized');
  }
  if (typeof questionId !== 'number') {
    throw new Error('Question index type not recognized');
  }
  if (
    !question.hasOwnProperty('incorrect_answers') || // eslint-disable-line no-prototype-builtins
    !question.hasOwnProperty('correct_answer') || // eslint-disable-line no-prototype-builtins
    !question.hasOwnProperty('difficulty') || // eslint-disable-line no-prototype-builtins
    !question.hasOwnProperty('category') || // eslint-disable-line no-prototype-builtins
    !question.hasOwnProperty('question') // eslint-disable-line no-prototype-builtins
  ) {
    throw new Error('Question is missing one or more property');
  }
  // merge correct_answer and incorrect_answers, then shuffle them
  const answers = shuffle([...question.incorrect_answers, question.correct_answer]);
  return {
    questionId,
    difficulty: question.difficulty,
    category: question.category,
    points: calculatePoints(question.difficulty),
    question: question.question,
    correct_answer: question.correct_answer, // eslint-disable-line camelcase
    answers,
  };
}

module.exports = formatter;
module.exports.calculatePoints = calculatePoints;
