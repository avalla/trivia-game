import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getHallOfFame from '../../services/http/get-hall-of-fame';
import User from './components/User';

function HallOfFame() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: 'SET_LOADING', value: true });
        const result = await getHallOfFame();
        setUsers(result.users);
      } catch (error) {
        console.error(error);
        dispatch({ type: 'SET_ERROR', value: error });
      } finally {
        dispatch({ type: 'SET_LOADING', value: false });
      }
    }

    fetchData();
  }, [dispatch, history]);
  return (
    <>
      <h1 className="title is-1">Hall of Fame</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.userName} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
}

HallOfFame.defaultProps = {};
HallOfFame.propTypes = {};
export default HallOfFame;
