import ButtonModeling from "../components/ButtonModeling";
import { Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Modeling = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("/api/domains").then((res) => {
            console.log(res);
            setItem(res.data.data);
        });
    }, []);

    const onDelete = (index) => {
        const temp = [...curState];
        temp.splice(index, 1);
        newState(temp);
    };
    return (
        <>
            <div style={{ margin: "2%" }}>
                <div>
                    <ul id='domain-btn' style={{ backgroundColor: "#212529" }}>
                        <li>
                            <h2 style={{ color: "white" }}>List of Domains</h2>
                        </li>
                        <li style={{ marginLeft: "5%" }}>
                            <Link href="/domain" passHref>
                                <Button
                                    variant="contained"
                                    style={{ marginBottom: "3%", marginTop: "3%" }}
                                    startIcon={<AddIcon />}
                                >
                                    Create New Domain
                                </Button>
                            </Link>
                        </li>

                    </ul>
                    <ButtonModeling item={item} onDelete={onDelete} />

                </div>

                <Link href="/" passHref>
                    <Button
                        variant="text"
                        style={{ margin: "3%" }}
                        startIcon={<ArrowBackIcon />}
                    >
                        Landing Page
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Modeling;
