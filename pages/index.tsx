import type { NextPage } from "next";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <Grid container justifyContent="center" className="doCenter">
            <Grid item xs={12}>
                <h1> Welcome to HydroFrame</h1>
                <p>
                    Here you can build and run your own model, explore data from CONUS
                    simulations, and try the sandtank app.
                </p>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <Link href="/modeling">
                    <a>
                        <Card title={"Model Builder"} />
                    </a>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <Card title={"Data Explorer"} />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <Card title={"Open Sandtank App"} />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <Card title={"Launch Apps"} />
            </Grid>
        </Grid>
    );
};
export default Home;
