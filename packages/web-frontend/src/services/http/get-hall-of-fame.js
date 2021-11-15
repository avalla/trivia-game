import httpClient from '../../libs/http-client';

async function getHallOfFame() {
  const url = `${process.env.REACT_APP_API_URL}/api/v1/hall-of-fame`;
  const result = await httpClient({ url });
  return result;
}

export default getHallOfFame;
