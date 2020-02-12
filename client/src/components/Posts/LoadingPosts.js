import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

const Loading = ({ classes }) => {
  return (
    <div>
      <h1>Loading Posts</h1>
    </div>
  );
};

export default withStyles(styles)(Loading);
