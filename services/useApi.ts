import axios from 'axios';
import { useEffect, useState } from 'react';

interface IUseApiProps {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    headers?: any;
    onSuccess?: Function;
    onError?: Function;
    autoFetch?: boolean;
};
const useApi = ({
    url,
    method,
    data,
    headers,
    onSuccess,
    onError,
    autoFetch
}: IUseApiProps) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const call = async () => {
        try {
            const res = await axios({
                url,
                method,
                data,
                headers
            });
            setResponse(res.data);
            if (onSuccess) onSuccess(res.data);
        } catch (err) {
            setError(err);
            if (onError) onError(err);
        }
    }

    // if autoFetch is true, call call() on componentDidMount
    useEffect(() => {
        if (autoFetch) call();
    }, []);
    

    return {
        response,
        error,
        call
    };
};

export default useApi;
