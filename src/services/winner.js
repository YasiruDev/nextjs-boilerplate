import axios from 'axios';
import { setHeader } from '../config/apiConfig';
import { HOOK_ENDPOINTS, METHOD } from '../config';

setHeader();

export const getWinners = (param) => { 
    return {
        api: axios.create(),
        method: METHOD.GET,
        url: HOOK_ENDPOINTS.WINNERS,
        params: param
    }
}
