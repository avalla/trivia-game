import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Difficulty({ difficulty }) {
  return (
    <span
      className={classNames(
        'tag has-text-white',

        difficulty === 'hard' && 'is-danger',
        difficulty === 'medium' && 'is-warning',
        difficulty === 'easy' && 'is-success'
      )}
      data-testid="game-question-difficulty-category"
    >
      {difficulty}
    </span>
  );
}

Difficulty.defaultProps = {};
Difficulty.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
};
export default Difficulty;
