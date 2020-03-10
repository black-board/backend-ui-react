import { useState, useEffect } from 'react';
import axios from 'axios';


function useUserAllow(url) {
    const [columns] = useState([
        { title: 'order_id ', field: 'order_id' },
        { title: 'name', field: 'name' },
        { title: 'type', field: 'type' },
        { title: 'date', field: 'date' },
    ]);
    const [data, setData] = useState([
        {
            order_id: "0",
            name: "test",
            type: 'user',
            date: '12/12/12'
        }
    ])

    useEffect(() => {
        if (url !== "" || null || undefined) {
            axios.get(`${url}`).then(data => {
                // console.log(data);
                setData(data.data.data)
            })
        }
    }, [url])


    return { columns, data }
}

export default useUserAllow;