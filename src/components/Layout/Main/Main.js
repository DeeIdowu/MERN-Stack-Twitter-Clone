import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid container justify="center">
        <Grid item style={{ marginTop: 30 }}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
