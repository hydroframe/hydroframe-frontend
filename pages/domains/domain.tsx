import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Domain } from "../../interfaces/DomainInterfaces";
import styles from "./domain.module.css"


const queryClient = new QueryClient()

const Home: NextPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <DomainData />
        </QueryClientProvider>
    )
}

function DomainData() {

    const router = useRouter();
    console.log(router.query);

    // const { isLoading, error, data } = useQuery('domainData', () =>
    //     fetch('http://localhost:5000/domains/all').then(res => res.json()
    //     ).then(data => {})
    // )

    return (
        <Container style={{marginTop: '2rem'}}>
            <div className={styles.domaincontainer}>
                <h1>{router.query.name}</h1>
                <p>ID: {router.query.id}</p>
                <h3>{router.query.username}</h3>
                <p>HUC's: {Array.isArray(router.query.hucs) && router.query.hucs?.map((huc) => <li key={huc}>{huc}</li>)} {!Array.isArray(router.query.hucs) && <li>{router.query.hucs}</li>}</p>
                <p>Input's: {Array.isArray(router.query.hucs) && router.query.inputs?.map((input) => <li key={input}>{input}</li>)}</p>
            </div>
        </Container>
    )
}

export default Home
