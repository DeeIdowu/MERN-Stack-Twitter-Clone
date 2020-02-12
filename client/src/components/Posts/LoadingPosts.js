import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/icons/CircularProgress";

const styles = {
  load: {
    textAlign: "center",
    marginTop: 25,
    width: "100%"
  },
  loadIcon: {
    color: "#e50000"
  }
};

const Loading = ({ classes }) => {
  return (
    <div className={classes.load}>
      <CircularProgress className={classes.loadicon} />
    </div>
  );
};

export default withStyles(styles)(Loading);
