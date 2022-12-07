import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from '@mui/icons-material/Share';
import ArchiveIcon from '@mui/icons-material/Archive';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));
//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);

const DomainDetails = () => {
    //const [item, setItem] = useState([]);
    //const {router} = useRouter();
    //console.log("This is a test");
    //console.log(router);
    //const id = router.id;
    const [item, setItem] = useState([]);
    const { query } = useRouter();
    var id = query.id;
    //const id = 2
    console.log("Testing from domain details page");
    console.log(id);
    useEffect(() => {
        axios.get(`${process.env.basePath}/api/domains/${id}`).then((res) => {
            console.log(res);
            setItem(res.data);
        });
    }, []);
    const onSubmit = () => {
        let data = JSON.stringify({
            id: id,
            year: 2003,
        });
        axios
        .post("/api/domains/subset", data, {
            headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
            console.log(id);
        })
        .catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });
    }
    return (
        <div>
            <Stack direction="column" style={{ fontSize: "16px", marginLeft: "3%", marginTop: "3%"}}>
                <div>
                    <h2>Domain Details</h2>
                </div>
                <div key={item.id} style={{ fontSize: "16px" }}>
                    <p>

                        <b>Name:</b> {item.name}
                    </p>
                    <p>

                        <b>Description:</b> {item.description}
                    </p>
                    <p>
                        <b>Model:</b> {item.model}
                    </p>
                    <p>
                        <b>Slug:</b> {item.slug}
                    </p>
                    </div>
                    <div>
                    <ul id="domain-btn">
                <li>
                  <Button style={{ height: "20px", padding: "15px", margin: "5px" }} variant="contained" startIcon={<ContentCutIcon />} onClick={onSubmit}>Subset</Button>
                  <Button style={{ height: "20px", padding: "15px", margin: "5px" }} variant="contained" color="error" startIcon={<ArchiveIcon />} >Archive</Button>
                  <Button style={{ height: "20px", padding: "15px", margin: "5px" }} variant="contained" startIcon={<ShareIcon />} >Share</Button>
                  <Button style={{ height: "20px", padding: "15px" }} variant="contained" startIcon={<ContentCopyIcon />} >Copy</Button>

                </li>
              </ul>
                </div>
            </Stack>
            <Link href="/modeling" passHref>
                <Button
                    variant="text"
                    style={{ marginBottom: "3%" }}
                    startIcon={<ArrowBackIcon />}
                >
                    Previous Page
                </Button>
            </Link>
        </div>
    );
};

export default DomainDetails;
