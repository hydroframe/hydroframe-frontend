import ButtonModeling from '../components/ButtonModeling';
import { Grid } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Modeling = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        axios.get('/api/domains')
            .then(res => {
                console.log(res)
                setItem(res.data.data)
            });
    }, []);
    // useEffect(() => {
    //     fetch("/api/domains")
    //         .then(res => res.json())
    //         .then(res => console.dir(res));
    // }, []);

    const onDelete = index => {
        const temp = [...curState];
        temp.splice(index, 1);
        newState(temp);
    }
    return (
        <>
        <Grid item xs={12} style={{ margin: "5%" }}>
            {/* <ul>
                {item.map(it => (
                    <li key={it.id}>
                        <p> <b>Name:</b> {it.name} </p>
                        <p> <b>Model:</b> {it.model} </p>
                        <p> <b>Slug:</b> {it.slug} </p>
                        <p> <b>Description:</b> {it.description} </p>
                    </li>
                ))}
            </ul> */}

            <Link href="/domain" passHref>
                <Button variant="contained" style={{ marginBottom: "3%" }} startIcon={<AddIcon />}>Create New Domain</Button>
            </Link>
            {/* {item.map((todo, index) => (
                <ButtonModeling key={index} index={index} todo={todo} onDelete={onDelete} />
            ))} */}
            <ButtonModeling item = {item} onDelete={onDelete} />
        </Grid>

        <Link href="/" passHref>
            <Button variant="text" style={{ marginBottom: "3%" }} startIcon={<ArrowBackIcon />}>Landing Page</Button>
        </Link>
        <Link href="/domainDisplay" passHref>
            <Button variant="text" style={{ marginBottom: "3%" }} startIcon={<ArrowBackIcon />}>Domain Display</Button>
        </Link>

    </>
    )
}

export default Modeling
