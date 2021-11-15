import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle.hook';
import getQuestions from '../../services/http/get-questions';

function Home() {
  useDocumentTitle({ title: 'Home' });
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'RESET_QUESTIONS' });
  }, [dispatch]);
  async function onClick() {
    try {
      dispatch({ type: 'SET_LOADING', value: true });
      const { questions } = await getQuestions();
      dispatch({ type: 'SET_QUESTIONS', value: questions });
      history.push('/game');
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_ERROR', value: error });
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  }
  return (
    <>
      <h1 className="title is-1">Trivia Game</h1>
      <p className="subtitle is-2">Hello, do you want to play?</p>
      <p className="subtitle is-5">I will ask to you 10 random questions, let&apos;s test your knowledge :)</p>
      <button type="button" onClick={onClick} className="button is-white is-large">
        Let&apos;s start!
      </button>
    </>
  );
}

Home.defaultProps = {};
Home.propTypes = {};
export default Home;
