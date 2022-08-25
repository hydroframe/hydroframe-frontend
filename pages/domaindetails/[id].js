import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const DomainDetails = () => {
    const [item, setItem] = useState([]);
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        axios.get(`${process.env.basePath}/api/domains/${id}`).then((res) => {
            console.log(res);
            setItem(res.data);
        });
    }, []);

    return (
        <div>
            <Stack direction="column" style={{ fontSize: "16px" }}>
                <Item>
                    <h2>Domain Details</h2>
                </Item>
                <Item key={item.id} style={{ fontSize: "16px" }}>
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
                </Item>
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
