import axios from 'axios';
import { BASE_URL } from '.';

axios.defaults.baseURL = BASE_URL;
export const setHeader = () => {
    let token = '';
    (typeof localStorage !== 'undefined') &&
        (token = `Bearer ${localStorage.getItem("token")}`)

    axios.defaults.headers.common['Authorization'] = token
}