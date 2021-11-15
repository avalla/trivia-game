import httpClient from '../../libs/http-client';

async function postLogout() {
  const url = `${process.env.REACT_APP_API_URL}/api/v1/authentication/logout`;
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
