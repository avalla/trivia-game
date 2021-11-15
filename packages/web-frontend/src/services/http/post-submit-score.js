import httpClient from '../../libs/http-client';

async function submitScore() {
  const url = '/api/v1/trivia/submit-score';
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
