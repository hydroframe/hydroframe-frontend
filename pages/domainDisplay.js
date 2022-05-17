import ButtonModeling from '../components/ButtonModeling';
import { Grid } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
// import Image from 'next/image'
import Container from '@mui/material/Container'

import React from 'react'

const DomainDisplay = () => {
    return (
        <div>
            <Container maxWidth="md" style= {{textAlign: "center"}}>
                <h1 > My Domain </h1>
                <p>Image of your domain and names of simulations that have been run with it</p>
            </Container>
            <Container maxWidth="md" style= {{textAlign: "center"}}>
                <h2 > HUC ID: 17050101 </h2>
                {/* <Image src="/1.png" alt="water shed" width = "400" height="300"/> */}
            </Container>
            <Container maxWidth="sm" style={{textAlign: "center"}}>
                <Button variant="contained" style={{ margin: "3%" }}> Subset Conus 1.0</Button>
                <Button variant="contained" style={{ margin: "3%" }}>Subset Conus 2.0</Button>
            </Container>
            <Link href="/modeling" passHref>
        <Button variant="text" style ={{marginBottom: "3%"}} startIcon={<ArrowBackIcon />}>Previoius Page</Button>
        </Link>

        </div>
    )
}

export default DomainDisplay


