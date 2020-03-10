import React,{ useState, useEffect } from 'react';
import axios from 'axios';


function usePayment(url) {
    var d = new Date();
    const [columns] = useState([
        { title: 'id_payment ', field: 'id_payment' },
        { title: 'title', field: 'title' },
        { title: 'paid', field: 'paid' },
        { title: 'date', field: 'date' },
        { title: 'time', field: 'time' },
        { title: 'image', field: 'image' },
    ]);
    const [data, setData] = useState([
        {
            id_payment: "0",
            title: "test",
            paid: 'user',
            date: d.toDateString(),
            time: d.getTime(),
            image: 'http://www.microsuck.net/wp-content/uploads/2019/09/1-592x1024.png',
            button: "test"
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

export default usePayment;