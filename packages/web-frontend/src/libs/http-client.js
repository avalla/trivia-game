const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000';
async function httpClient({ url, request }) {
  const response = await fetch(`${BASE_URL}${url}`, request);
  if (!response.ok) {
    console.error('Error from API, response not OK', response.statusText);
    throw new Error(response.statusText);
  }
  const result = await response.json();
  const { status, message } = result;
  if (!status) {
    console.error('Error from API', message);
    throw new Error('Error from API');
  }
  return result;
}

export default httpClient;
