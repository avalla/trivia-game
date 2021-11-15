import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import submitScore from '../../services/http/post-submit-score';

function SubmitScore() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authentication } = useSelector((state) => state);

  async function onClick() {
    try {
      dispatch({ type: 'SET_LOADING', value: true });
      await submitScore();
      // Redirect to hall of fame
      history.push('/hall-of-fame');
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_ERROR', value: error });
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  }

  // If user is not registered redirect to home
  if (!authentication.userId) {
    history.replace('/');
  }
  return (
    <>
      <h1 className="title is-1">Submit score</h1>
      <p className="subtitle is-5">Are you sure to save your score?</p>
      <button type="button" onClick={onClick} className="button is-white is-large">
        Save my score
      </button>
    </>
  );
}

SubmitScore.defaultProps = {};
SubmitScore.propTypes = {};
export default SubmitScore;
