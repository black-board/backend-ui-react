import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserStatus(url) {

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (url !== "" || null || undefined) {
            axios.get(`${url}/${sessionStorage.getItem('auth')}`).then(data => {
                // console.log(data);
                setAuth(data.data.data)
            })
        }
    }, [url])

    return { auth };
}

export default useUserStatus;