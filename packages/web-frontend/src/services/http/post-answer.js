import httpClient from '../../libs/http-client';

async function postAnswer(body) {
  const url = `${process.env.REACT_APP_API_URL}/api/v1/trivia/answer`;
  const result = await httpClient({
    url,
    request: {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  });
  return result;
}

export default postAnswer;
