import Button_modelling from '../components/ButtonModeling';
import { Grid } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link"
import React, { useState } from 'react';

const Modeling = () => {
    const [curState, newState] = useState([
        {
            key: 1,
            text: "My Domain 1"
        },
        {
            key: 2,
            text: "My Domain 2"
        },
        {
            key: 3,
            text: "My Domain 3"
        },

    ]);

    const onDelete = index => {
        const temp = [...curState];
        temp.splice(index, 1);
        newState(temp);
    }
    return (
        <>
            <Grid item xs={12} style={{ margin: "5%" }}>
                <Link href="/domain">
                    <Button variant="contained" style={{ marginBottom: "3%" }} startIcon={<AddIcon />}>Create New Domain</Button>
                </Link>
                {curState.map((todo, index) => (
                    <Button_modelling index={index} todo={todo} onDelete={onDelete} />
                ))}
            </Grid>

            <Link href="/">
                <Button variant="text" style={{ marginBottom: "3%" }} startIcon={<ArrowBackIcon />}>Landing Page</Button>
            </Link>
        </>
    )
}

export default Modeling
