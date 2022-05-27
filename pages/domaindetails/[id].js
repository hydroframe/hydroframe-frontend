import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const DomainDetails = () => {
    const [item, setItem] = useState([])
    const router  = useRouter()
    const id = router.query.id;
    useEffect(() => {
        axios.get('/api/domains/'+id)
            .then(res => { 
                console.log(res)
                setItem(res.data)
            });
    }, []);

    return (
        <div> 
            this is from domaindetails with ID {id}
            <ul>
                    <li key={item.id}>
                    <p> <b>Name:</b> {item.id} </p>
                        <p> <b>Name:</b> {item.name} </p>
                        <p> <b>Model:</b> {item.model} </p>
                        <p> <b>Slug:</b> {item.slug} </p>
                    </li>
            </ul> 
        </div>
    )
}

export default DomainDetails
