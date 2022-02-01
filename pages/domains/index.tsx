import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Container } from '@mui/material'
import DomainList from '../../components/DomainList/DomainList'
import { useEffect, useState } from 'react'
import { Domain, ParseDomainQueryData } from '../../interfaces/DomainInterfaces'

const queryClient = new QueryClient()

const Home: NextPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <DomainData />
        </QueryClientProvider>
    )
}

function DomainData() {

    const [listOfDomains, updateListOfDomains] = useState<Domain[]>();

    useEffect(() => {
        console.log(listOfDomains);
    }, [listOfDomains])

    const { isLoading, error, data } = useQuery('domainData', () =>
        fetch('http://localhost:5000/domains/all').then(res => res.json()
        ).then(data => {
            const newListOfDomains = ParseDomainQueryData(data);
            if (newListOfDomains) {
                updateListOfDomains(newListOfDomains);
            }
            return data;
        })
    )

    

    if (isLoading) return <h1>Loading...</h1>;

    if (error) return <div>An error has occurred: {error.message}</div>

    return (
        <Container style={{marginTop: '2rem'}}>
            <DomainList domains={listOfDomains} />
        </Container>
    )
}

export default Home
