import httpClient from '../../libs/http-client';

async function getQuestions() {
  const url = '/api/v1/trivia/start-game';
  const result = await httpClient({ url, request: { method: 'POST', credentials: 'include' } });
  return result;
}

export default getQuestions;
