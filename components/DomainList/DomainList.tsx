import Link from "next/link";
import { useEffect, useState } from "react";
import { Domain } from "../../interfaces/DomainInterfaces"
import styles from "./DomainList.module.css";

interface props {
    domains: Domain[] | undefined
}

const DomainList = (props : props) => {

    const [currentPage, updateCurrentPage] = useState(1);
    const [username, updateUsername] = useState("");

    useEffect(() => {
        if (Array.isArray(props.domains) && props.domains.length > 0) {
            updateUsername(props.domains[0].username);
        }
    }, [props.domains])

    const renderDomains = (domainList : Domain[] | undefined) => {
        console.log(domainList);
        if (!domainList) {
            return <></>;
        }
        const renderedDomains =  domainList.map((domain) =>
            <li key={domain.id}>
                <Link href={{
                    pathname: '/domains/domain',
                    query: domain as any
                }}>
                    <a>{domain.name}</a>
                </Link>
            </li>
        )
        return renderedDomains;
    }

    return (
        <>
            <h1>{username}'s Domains</h1>
            <div className={styles.domainlistcontainer}>
                <ul className={styles.domainlist}>
                    {renderDomains(props.domains)}
                </ul>
            </div>
        </>
    )
}

export default DomainList