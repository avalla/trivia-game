import httpClient from '../../libs/http-client';

async function getHallOfFame() {
  const url = '/api/v1/hall-of-fame';
  const result = await httpClient({ url });
  return result;
}

export default getHallOfFame;
