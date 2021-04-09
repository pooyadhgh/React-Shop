import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-shop-cfd4d-default-rtdb.firebaseio.com/',
});

export default instance;
