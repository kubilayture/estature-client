import axios from 'axios';

export const apiRequest = axios.create({
  baseURL: 'localhost:8800/api',
  withCredentials: true
});