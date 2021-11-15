import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from './components/Question';
import postAnswer from '../../../services/http/post-answer';

function GameBody() {
  const dispatch = useDispatch();
  const trivia = useSelector((state) => state.trivia);
  async function onAnswer({ questionId, answer }) {
    try {
      dispatch({ type: 'SET_LOADING', value: true });
      const { answers, score } = await postAnswer({ questionId, answer });
      dispatch({ type: 'SET_ANSWERS', value: answers });
      dispatch({ type: 'SET_SCORE', value: score });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_ERROR', value: error });
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  }
  return (
    <>
      <div className="columns has-text-grey">
        <div className="column has-text-left">
          <strong>{trivia.answers.length}</strong> questions answered
        </div>
        <div className="column">
          Score: <strong>{trivia.score}</strong>
        </div>
        <div className="column has-text-right">
          Question: <strong>{trivia.questionId + 1}</strong> of {trivia.questions.length}
        </div>
      </div>
      {trivia.questions.map((question) => (
        <Question key={question.question} onAnswer={onAnswer} questionId={question.questionId} {...question} />
      ))}
    </>
  );
}

GameBody.defaultProps = {};
GameBody.propTypes = {};
export default GameBody;
