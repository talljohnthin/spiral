import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import { SET_ZIPCODE } from "./../../redux/actions/data/dataTypes";

import {
  makeStyles,
  Container,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Index = () => {
  const classes = useStyles();
  const [zip, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();

  const handleVerifyZipCode = async (e) => {
    e.preventDefault();

    if (!IsValidZipCode(zip)) {
      setErrorMessage("Please add a valid zipcode.");
      return;
    }

    setErrorMessage("");

    dispatch({
      type: SET_ZIPCODE,
      payload: zip,
    });
    setRedirectToNext(true);
  };

  function IsValidZipCode(zip) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
    return isValid;
  }

  if (redirect) {
    return <Redirect to="/" />;
  }
  if (redirectToNext) {
    return <Redirect to="/powerbill" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">
            You may be eligible for a new US solar program.
          </div>
          <div className="primary-sub-heading">
            Enter basic information to see if your home is eligible!
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="number"
              id="zip"
              label="Enter Zip Code"
              name="zip"
              autoComplete="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              autoFocus
              className="text-input"
            />
            {successMessage && (
              <Alert severity="success">{successMessage}</Alert>
            )}
            {isLoading ? (
              <Alert severity="warning">Please wait...</Alert>
            ) : (
              errorMessage && <Alert severity="error">{errorMessage}</Alert>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              onClick={handleVerifyZipCode}
            >
              Free Quote
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
