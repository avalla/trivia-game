const INITIAL_STATE = {
  questions: [],
  answers: [],
  questionId: 0,
  score: 0,
};

/**
 * User reducer
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = INITIAL_STATE, { type, value }) => {
  switch (type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: value };
    case 'SET_ANSWERS':
      return { ...state, answers: value };
    case 'SET_SCORE':
      return { ...state, score: value };
    case 'SET_QUESTION_ID':
      return { ...state, questionId: value };
    case 'RESET_QUESTIONS':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
