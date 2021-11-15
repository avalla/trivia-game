import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Answer from './Answer';
import Difficulty from './Difficulty';

const StyledWrapper = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

function Question({ question, answers, onAnswer, questionId, difficulty, category }) {
  const trivia = useSelector((state) => state.trivia);
  const isActive = questionId === trivia.questionId;
  return (
    <StyledWrapper isActive={isActive}>
      Category: <strong data-testid="game-question-category">{category}</strong>
      {' | '}
      Difficulty:{' '}
      <strong>
        <Difficulty difficulty={difficulty} />
      </strong>
      <h3 className="title is-3" dangerouslySetInnerHTML={{ __html: question }} data-testid="game-question-body" />
      <div className="columns is-centered">
        {answers.map((answer) => (
          <div key={answer} className="column">
            <Answer
              onClick={onAnswer}
              answer={answer}
              questionId={questionId}
              isAnswered={!!trivia.answers[trivia.questionId]}
              isCorrect={
                trivia.answers[trivia.questionId]?.answer === answer &&
                trivia.answers[trivia.questionId]?.is_correct === true
              }
              isWrong={
                trivia.answers[trivia.questionId]?.answer === answer &&
                trivia.answers[trivia.questionId]?.is_correct === false
              }
            />
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

Question.defaultProps = {};
Question.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  category: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default Question;
