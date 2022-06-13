import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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
      <CardContent>
        <Typography>
          <h2>{title}</h2>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default OutlinedCard;
