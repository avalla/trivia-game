import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import postRegister from '../../services/http/post-register';

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(body) {
    try {
      dispatch({ type: 'SET_LOADING', value: true });
      const { user } = await postRegister(body);
      dispatch({ type: 'REGISTER', user });
      // Redirect to submit score
      history.push('/submit-score');
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_ERROR', value: error });
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  }

  // If user is already register redirect to home
  if (authentication.userId) {
    history.replace('/');
  }
  return (
    <>
      <h1 className="title is-1">Sign up</h1>
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label is-large" htmlFor="userName">
                Username
              </label>
              <div className="control">
                <input
                  id="userName"
                  placeholder="John doe"
                  className="input"
                  {...register('userName', {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.userName && <p className="help is-danger">Username is not valid</p>}
            </div>

            <div className="field">
              <label className="label is-large" htmlFor="password">
                Password
              </label>
              <div className="control">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                  {...register('password', { required: true })}
                />
              </div>
              {errors.password && <p className="help is-danger">Password is not valid</p>}
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-success is-large" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Register.defaultProps = {};
Register.propTypes = {};
export default Register;
