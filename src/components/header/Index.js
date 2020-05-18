import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Progress from "./Progress";

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

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <React.Fragment>
      <AppBar className="AppBar" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item className="logo">
              Logo
            </Grid>
            <Grid item xs />

            <Grid item>
              <Progress />
            </Grid>
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
