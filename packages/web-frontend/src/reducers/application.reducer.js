const INITIAL_STATE = {
  loading: false,
  error: null,
};

/**
 * Application reducer
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = INITIAL_STATE, { type, value }) => {
  switch (type) {
    case 'SET_ERROR':
      return { ...state, error: value };
    case 'SET_LOADING':
      return { ...state, loading: value };
    default:
      return state;
  }
};

export default reducer;
