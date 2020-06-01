import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Progress from "./Progress";
import MobileMenu from "./MobileMenu";
import SecureFormText from "./SecureFormText";
import logo from "./../../assets/images/logo.png";

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
  const [menuActive, setMenuActive] = useState("");
  const isLanding = useSelector((state) => state.data.landingView);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const renderProgressbar = () => {
    return (
      <Grid item>
        {dimensions.width > 767 ? <Progress /> : <SecureFormText />}
      </Grid>
    );
  };

  const renderMenuItem = () => {
    return (
      <Grid item>
        <MobileMenu />
        <ul className="menu--items">
          <Link
            className={menuActive === "about" ? "active" : ""}
            onClick={() => setMenuActive("about")}
            to="/about"
          >
            About
          </Link>
          <Link
            className={menuActive === "faq" ? "active" : ""}
            onClick={() => setMenuActive("faq")}
            to="/faq"
          >
            Faqs
          </Link>
          <Link
            className={menuActive === "incentives" ? "active" : ""}
            onClick={() => setMenuActive("incentives")}
            to="/incentives"
          >
            Rebates and Incentives
          </Link>
          <Link
            className={menuActive === "works" ? "active" : ""}
            onClick={() => setMenuActive("works")}
            to="/how-solar-works"
          >
            How Solar Works
          </Link>
          <Link
            className={menuActive === "contact" ? "active" : ""}
            onClick={() => setMenuActive("contact")}
            to="/contact"
          >
            Contact Us
          </Link>
        </ul>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <AppBar className="AppBar" position="sticky" elevation={0}>
        <Toolbar className="toolbar">
          <Grid container spacing={1} alignItems="center">
            <Grid item className="logo">
              <Link to="/">
                <img src={logo} alt="solor logo" />
              </Link>
            </Grid>
            <Grid item xs />
            {isLanding ? renderProgressbar() : renderMenuItem()}
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
