import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function GameFooter() {
  const history = useHistory();
  const dispatch = useDispatch();
  const trivia = useSelector((state) => state.trivia);

  const isFirst = trivia.questionId === 0;
  const isLast = trivia.questionId >= trivia.questions.length - 1;
  const isAnswered = !!trivia.answers[trivia.questionId];
  function onPrevious() {
    if (isFirst) {
      return;
    }
    dispatch({ type: 'SET_QUESTION_ID', value: trivia.questionId - 1 });
  }

  function onNext() {
    if (isLast || !isAnswered) {
      return;
    }
    dispatch({ type: 'SET_QUESTION_ID', value: trivia.questionId + 1 });
  }
  function onLast() {
    if (!isLast) {
      return;
    }
    history.push('/game-over');
  }

  return (
    <div className="columns is-centered my-4">
      <div className="column is-2">
        <button
          type="button"
          className="button is-primary is-medium is-fullwidth"
          onClick={onPrevious}
          disabled={isFirst}
          data-testid="game-prev-question-button"
        >
          {'<'} Previous
        </button>
      </div>
      <div className="column is-2">
        {isLast ? (
          <button
            type="button"
            className="button is-primary is-medium is-fullwidth"
            onClick={onLast}
            data-testid="game-end-game-button"
          >
            End game
          </button>
        ) : (
          <button
            type="button"
            className="button is-primary is-medium is-fullwidth"
            onClick={onNext}
            data-testid="game-next-question-button"
            disabled={!isAnswered}
          >
            Next {'>'}
          </button>
        )}
      </div>
    </div>
  );
}

GameFooter.defaultProps = {};
GameFooter.propTypes = {};
export default GameFooter;
