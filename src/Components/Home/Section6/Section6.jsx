import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AlkaloidLogo from "./AlkaloidLogo.png";
import GeneraliLogo from "./GeneraliLogo.png";
import OvationLogo from "./OvationLogo.png";
import PrilepslaLogo from "./PrilepslaLogo.png";
import ThomeLogo from "./ThomeLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    padding: "200px 0px 200px 0px ",
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#ffffff",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  img: {
    width: "50%",
    height: "50px",
  },
}));

export default function Section6() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container></Grid>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={AlkaloidLogo} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={GeneraliLogo} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={OvationLogo} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={PrilepslaLogo} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={ThomeLogo} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}