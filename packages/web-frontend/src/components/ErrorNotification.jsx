import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ErrorNotification() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.application);
  if (!error) {
    return <span />;
  }
  return (
    <div className="notification is-danger" data-testid="error-notification-wrapper">
      <button
        className="delete"
        type="button"
        data-testid="error-close"
        onClick={() => dispatch({ type: 'SET_ERROR', value: null })}
      />
      <h3 className="title is-5 has-text-white" data-testid="error-title">
        Sorry, there was an error
      </h3>
      <details style={{ whiteSpace: 'pre-wrap' }}>{error?.message}</details>
    </div>
  );
}

ErrorNotification.defaultProps = {};
ErrorNotification.propTypes = {};
export default ErrorNotification;
