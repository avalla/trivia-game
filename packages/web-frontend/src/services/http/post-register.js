import httpClient from '../../libs/http-client';

async function getQuestions(body) {
  const url = '/api/v1/authentication/register';
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

export default getQuestions;
