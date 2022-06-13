import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
const DomainDisplay = () => {
    const [item, setItem] = useState([])
    const { query } = useRouter();
    var pass = query.id
    useEffect(() => {
        axios.get('/api/domains/' + pass)
            .then(res => {
                console.log(res)
                setItem(res.data)
            });
    }, []);
    return (
        <ul>
            <li> id is {pass} </li>
            <li key={item.pass}>
                <p> <b>Name:</b> {item.pass} </p>
                <p> <b>Name:</b> {item.name} </p>
                <p> <b>Model:</b> {item.model} </p>
                <p> <b>Slug:</b> {item.slug} </p>
            </li>
        </ul>
    )
}
export default DomainDisplay