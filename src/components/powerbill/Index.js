import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Redirect } from "react-router-dom";
import useIsMounted from "ismounted";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { SET_POWERBILL } from "./../../redux/actions/data/dataTypes";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
import { makeStyles, Container, CssBaseline, Button } from "@material-ui/core";
import ValueLabel from "@material-ui/core/Slider/ValueLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
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
    color: "#2196f3",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#2196f3",
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
  const storedCost = useSelector((state) => state.data.power_bill);
  const [cost, setCost] = useState(storedCost);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSliderChange = (value) => {
    setCost({
      value,
      text_value: getMonthlyCost(value),
    });
  };

  const handleSetPowerBill = () => {
    dispatch({
      type: SET_POWERBILL,
      payload: cost,
    });

    history.push("/homeowner");
  };

  function getMonthlyCost(bill) {
    if (bill < 100) {
      return "Under $100";
    } else if (bill >= 100 && bill < 150) {
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
    dispatch({
      type: SET_PROGRESS,
      payload: 2,
    });
    dispatch(setCurrentView(true));
    return () => {
      dispatch(setCurrentView(false));
    };
  }, []);

  if (redirect) {
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-powerbill">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading power-heading">
            Current Monthly Power Bill
          </div>
          <div className="cost">{cost?.text_value || "$301 - $400"}</div>
          <PrettoSlider
            aria-label="pretto slider"
            value={cost?.value}
            step={100}
            max={800}
            valueLabelDisplay="off"
            ValueLabelComponent={StyledValueLabel}
            thumb="red"
            onChange={(event, value) => handleSliderChange(value)}
          />
          <div className="text">
            Drag the slider above to indicate your average power bill
          </div>
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
