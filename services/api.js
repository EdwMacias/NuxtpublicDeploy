import axios from 'axios';
import { API_URL, HEADERS } from '~/connections/helpers/endpoint';

export const api = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: HEADERS
});

