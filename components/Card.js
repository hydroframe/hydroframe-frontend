import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Riz.module.css";

const OutlinedCard = ({ title }) => {
  return (
    <Card
      className={styles.card_style}
      variant="outlined"
      style={{ backgroundColor: "#B2BEB5" }}
    >
      <CardContent style={{marginTop: "5%"}}>
      <Typography variant="h5" gutterBottom component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};



export default OutlinedCard;
