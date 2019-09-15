import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/henriquepesi/netshoes-json',
  // baseURL: 'http://localhost:3333',
});

export default api;
