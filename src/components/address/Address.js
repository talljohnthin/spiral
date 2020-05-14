import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import { SET_STREET_ADDRESS } from "./../../redux/actions/data/dataTypes";
import { GOOGLE_MAP_API_KEY } from "./../../config/keys";

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

const Address = () => {
  const classes = useStyles();
  const [streetAddress, setStreetAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);

  const isMounted = useIsMounted();
  const zipcode = useSelector((state) => state.data.zip_code);
  const address = useSelector((state) => state.data.address);
  const dispatch = useDispatch();

  const handleAddStreetAddress = async (e) => {
    e.preventDefault();
    if (streetAddress) {
      dispatch({
        type: SET_STREET_ADDRESS,
        payload: streetAddress,
      });
      setRedirectToNext(true);
    } else {
      setErrorMessage("Please add your street address.");
    }
  };

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  if (redirectToNext) {
    return <Redirect to="/results" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">What's your property address?</div>
          <div className="primary-sub-heading">
            For verification only. We do not mail.
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="street_address"
              label="Enter Street Address"
              name="street_address"
              autoComplete="street address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
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
            <div className="address">
              {address.city}, {address.state?.short}, {zipcode}
              <Link to="/address/change">Change</Link>
            </div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              onClick={handleAddStreetAddress}
            >
              Continue
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Address;
