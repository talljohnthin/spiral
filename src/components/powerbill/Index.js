import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { SET_POWERBILL } from "./../../redux/actions/data/dataTypes";

import {
  makeStyles,
  Container,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";
import ValueLabel from "@material-ui/core/Slider/ValueLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
    maxWidth: 650,
    margin: "8px auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StyledValueLabel = withStyles({
  label: {
    color: "#fff",
  },
})(ValueLabel);

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Index = () => {
  const classes = useStyles();
  const [cost, setCost] = useState("$151 - $200");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();

  const handleSliderChange = (value) => {
    setCost(getMonthlyCost(value));
  };

  const handleSetPowerBill = () => {
    dispatch({
      type: SET_POWERBILL,
      payload: cost,
    });
    setRedirectToNext(true);
  };

  function getMonthlyCost(bill) {
    if (bill < 100) {
      return "Under $100";
    } else if (bill > 100 && bill < 150) {
      return "$101 - $150";
    } else if (bill >= 150 && bill < 200) {
      return "$151 - $200";
    } else if (bill >= 200 && bill < 300) {
      return "$201 - $300";
    } else if (bill >= 300 && bill < 400) {
      return "$301 - $400";
    } else if (bill >= 300 && bill < 400) {
      return "$301 - $400";
    } else if (bill >= 400 && bill < 500) {
      return "$401 - $500";
    } else if (bill >= 500 && bill < 600) {
      return "$501 - $600";
    } else if (bill >= 600 && bill < 700) {
      return "$601 - $700";
    } else if (bill >= 700 && bill < 800) {
      return "$701 - $800";
    } else if (bill >= 800) {
      return "Over $800";
    }
  }

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  if (redirectToNext) {
    return <Redirect to="/address" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-powerbill">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading power-heading">
            How much is your average electricity bill?
          </div>
          <div className="cost">{cost}</div>
          <PrettoSlider
            aria-label="pretto slider"
            defaultValue={180}
            step={1}
            max={800}
            valueLabelDisplay="on"
            ValueLabelComponent={StyledValueLabel}
            onChange={(event, value) => handleSliderChange(value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="primary-btn"
            onClick={handleSetPowerBill}
          >
            Continue
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
