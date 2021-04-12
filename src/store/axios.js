import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://inovotek-sms.herokuapp.com/api',
});

export default instance;
