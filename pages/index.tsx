import type { NextPage } from 'next'
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
    >
      <Grid item xs={12}>
        <h1> Welcome to HydroFrame</h1>
        <p>Here you can build and run your own model,
          explore data from CONUS simulations, and try the sandtank app.</p>
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Link href="/modeling" passHref>
          <a><Card title={"Model Builder"} /></a>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Card title={"Data Explorer"} />
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Card title={"Open SandTask App"} />
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Card title={"Anything Else"} />
      </Grid>
    </Grid>
  )
}
export default Home
