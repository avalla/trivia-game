const INITIAL_STATE = {
  userId: null,
  userName: null,
};

/**
 * User reducer
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { ...state, ...action.user };
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
