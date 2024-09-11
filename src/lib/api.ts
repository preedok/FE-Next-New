import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const fetchData = async (endpoint: string) => {
  const response = await api.get(endpoint);
  return response.data;
};
