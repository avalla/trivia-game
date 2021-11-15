import httpClient from '../../libs/http-client';

async function postLogout() {
  const url = '/api/v1/authentication/logout';
  const result = await httpClient({
    url,
    request: {
      method: 'POST',
      credentials: 'include',
    },
  });
  return result;
}

export default postLogout;
