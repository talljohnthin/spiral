import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Index(props) {
  const { classes, onDrawerToggle, logout } = props;

  return (
    <React.Fragment>
      <AppBar className="AppBar" position="sticky" elevation={0}>
        <Toolbar className="toolbar">
          <Grid container spacing={1} alignItems="center">
            <Grid item className="logo">
              Logo
            </Grid>
            <Grid item xs />

            <Grid item>Menu</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
