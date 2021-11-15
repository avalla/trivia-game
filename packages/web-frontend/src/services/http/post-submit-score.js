import httpClient from '../../libs/http-client';

async function submitScore() {
  const url = `${process.env.REACT_APP_API_URL}/api/v1/trivia/submit-score`;
  const result = await httpClient({
    url,
    request: {
      method: 'POST',
      credentials: 'include',
    },
  });
  return result;
}

export default submitScore;
