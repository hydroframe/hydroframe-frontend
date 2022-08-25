import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const Domain = () => {
    const [name, setName] = useState("");
    const [hId, setID] = useState("");
    const [desc, setDesc] = useState("");
    const [nameErr, setNameErr] = useState({});
    const [hIdErr, setHIDErr] = useState({});
    const [descErr, setDescErr] = useState({});
    const router = useRouter();
    const OnSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            const arr = hId.split(",");
            let data = JSON.stringify({
                name: name,
                description: desc,
                geography: arr,
                model: "CONUS1",
            });

            console.log(data);
            axios
                .post(`${process.env.basePath}/api/domains/`, data, {
                    headers: { "Content-Type": "application/json" },
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                });

            const doRedirect = () => {
                setTimeout(() => {
                    router.push("/modeling");
                }, 1000);
            };

            doRedirect();
        }
    };

    const formValidation = () => {
        const nameErr = {};
        const hIdErr = {};
        const descErr = {};

        let isValid = true;
        let isLess = true;
        let isEqual = true;

        if (name.trim().length == 0) {
            nameErr.nameNull = "Name can not be empty";
            isValid = false;
        }
        if (desc.trim().length == 0) {
            descErr.descNull = "Description can not be empty";
            isValid = false;
        }
        if (hId.trim().length == 0) {
            hIdErr.hIdNull = "HUC IDs can not be empty";
            isValid = false;
        } else {
            let size = hId.split(",");
            for (var i = 0; i < size.length - 1; i++) {
                if (size[i].trim().length !== size[i + 1].trim().length) {
                    isEqual = false;
                    console.log("executed");
                    break;
                }
            }
            for (var i = 0; i < size.length; i++) {
                console.log(size[i].length);
                let len = size[i].length;
                if (len < 2 || len > 12 || len % 2 != 0) {
                    isLess = false;
                    break;
                }
            }

            if (!isEqual) {
                hIdErr.hIdNull = "All HUC IDs must be of same length";
            } else if (!isLess) {
                hIdErr.hIdNull = "Valid HUC ID lengths are 2,4,6,8,10,12";
            }
        }
        setNameErr(nameErr);
        setDescErr(descErr);
        setHIDErr(hIdErr);

        if (isValid && isLess && isEqual) {
            return true;
        } else return false;
    };

    return (
        <>
            <div className="wrapper">
                <div id="heading">
                    <h2>Name and Describe Your Domain</h2>
                    <Button
                        id="btn-header"
                        variant="contained"
                        style={{ marginRight: "10px", color: "#275392" }}
                    >
                        Enter HUC Id
                    </Button>
                    <Button
                        id="btn-header"
                        disabled
                        variant="contained"
                        style={{ marginRight: "10px" }}
                    >
                        Map Selection
                    </Button>
                    <Button
                        id="btn-header"
                        disabled
                        variant="contained"
                        style={{ marginRight: "10px" }}
                    >
                        Enter Shape File
                    </Button>
                </div>

                <form onSubmit={OnSubmit}>
                    <div className="name-id">
                        <div>
                            <label className="required">Name: </label>
                            <div>
                                <input
                                    id="name-id"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    placeholder="Enter domain name"
                                ></input>
                            </div>
                            {Object.keys(nameErr).map((key) => {
                                return (
                                    <p key={key} style={{ color: "red" }}>
                                        {" "}
                                        {nameErr[key]}
                                    </p>
                                );
                            })}
                        </div>
                        <div id="id-box">
                            <label className="required">Description: </label>
                            <div>
                                <textarea
                                    id="desc-box"
                                    placeholder="Enter description"
                                    value={desc}
                                    onChange={(e) => {
                                        setDesc(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            {Object.keys(descErr).map((key) => {
                                return (
                                    <p key={key} style={{ color: "red" }}>

                                        {descErr[key]}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="desc">
                            <label className="required">Enter Comma Separated ID(s): </label>
                            <div>
                                <textarea
                                    id="enter_huc"
                                    placeholder="Enter IDs of same length"
                                    value={hId}
                                    onChange={(e) => {
                                        setID(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            {Object.keys(hIdErr).map((key) => {
                                return (
                                    <p key={key} style={{ color: "red" }}>
                                        {hIdErr[key]}
                                    </p>
                                );
                            })}
                        </div>
                        <div>
                            <Button id="btn" variant="contained" type="submit">
                                Create
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Domain;
