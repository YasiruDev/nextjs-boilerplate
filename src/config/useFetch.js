import { useState, useEffect } from "react";
import _ from 'lodash';

const useFetch = (req) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        req && calApi(req);
    }, []);

    const calApi = (request) => {
        const { api, method, url, data, params } = request;
        
        const apiUrl = params ? `${url}?${buildURLQuery(params)}` : url;
        api[method](apiUrl, data)
            .then(res => {
                setError('')
                setResponse(res.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const buildURLQuery = (obj) => 
        Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');
    
    
    return { response, error, isLoading, calApi };

};

export default useFetch;
