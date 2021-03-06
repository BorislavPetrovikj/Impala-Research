import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Eye from "../../../Assets/Images/Eye-img.png";
import { Link } from "react-router-dom";
import "./ServicesCard.css";

const useStyles = makeStyles({
  root: {
    paddingTop: "45px",
    backgroundColor: "#F9F1E9",
    paddingBottom: "45px",
  },
  img: {
    width: "35%",
    height: "auto",
    borderRadius: "10px",
  },

  pos: {
    paddingTop: "20px",
  },
  paper: {
    margin: "16px",
  },
  BtnColor: {
    backgroundColor: "#FFFFFF",
    color: "#5c42ba",
    "&:hover": {
      color: " white",
      Backgorundcolor: " #5c42ba",
    },
  },
});

export default function ServicesCard(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card className={classes.root}>
        <CardContent>
          <img className={classes.img} src={Eye} alt="img"></img>
          <Typography className={classes.pos} variant="h5" color="primary">
            {props.title}
          </Typography>
          <Typography className={classes.pos}>{props.text}</Typography>
        </CardContent>
        <Link to="/Services">
          <Button className={classes.BtnColor} variant="contained">
            How it works
          </Button>
        </Link>
      </Card>
    </Paper>
  );
}
