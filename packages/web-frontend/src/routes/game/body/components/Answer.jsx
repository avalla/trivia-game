import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Answer({ answer, questionId, isCorrect, isWrong, isAnswered, onClick }) {
  function handleClick() {
    if (isAnswered) {
      return;
    }
    onClick({ questionId, answer });
  }
  return (
    <button
      type="button"
      className={classNames(
        'button is-fullwidth is-large',
        isAnswered ? { 'is-danger': isWrong, 'is-primary': isCorrect } : 'is-white'
      )}
      disabled={isAnswered}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: answer }}
      data-testid="game-answer-button"
    />
  );
}

Answer.defaultProps = {};
Answer.propTypes = {
  onClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  isWrong: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  answer: PropTypes.string.isRequired,
};
export default Answer;
