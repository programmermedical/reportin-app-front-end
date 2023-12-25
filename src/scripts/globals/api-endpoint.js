import Config from './config';

const API_ENDPOINT = {
  REGISTER: `${Config.BASE_URL}/auth/register`,
  GET_ALL_USER: `${Config.BASE_URL}/user`,
  LOGIN: `${Config.BASE_URL}/auth/login`,
  GET_ALL_REPORT: `${Config.BASE_URL}/`,
  REPORT: (id) => `${Config.BASE_URL}/${id}`,
  REPORT_HISTORY: (id) => `${Config.BASE_URL}/history/${id}`,
  NEWS: `https://api-berita-indonesia.vercel.app/cnbc/terbaru`,
  TOKEN: '',

};

export default API_ENDPOINT;
