import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function GameOver() {
  const authentication = useSelector((store) => store.authentication);
  const trivia = useSelector((store) => store.trivia);

  return (
    <>
      <h1 className="title is-1">Game Over!</h1>
      <div className="subtitle is-4">
        Thanks for playing this game, your score is: <strong>{trivia.score}</strong>
      </div>
      {authentication.userId ? (
        <>
          <p className="subtitle is-5">Do you want to save your score? Click here!</p>
          <Link to="/submit-score" className="button is-white is-large">
            Submit score
          </Link>
        </>
      ) : (
        <>
          <p className="subtitle is-5">Do you want to save your score? Please register!</p>
          <Link to="/register" className="button is-white is-large">
            Sign up
          </Link>
        </>
      )}
    </>
  );
}

GameOver.defaultProps = {};
GameOver.propTypes = {};
export default GameOver;
