import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import useIsMounted from "ismounted";
import { useHistory } from "react-router-dom";

import { SET_NAME } from "./../../redux/actions/data/dataTypes";

import {
  makeStyles,
  withStyles,
  Container,
  TextField,
  CssBaseline,
  Button,
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
  const storedFirstName = useSelector((state) => state.data.name?.first_name);
  const storedLastName = useSelector((state) => state.data.name?.last_name);
  const [firstName, setFirstName] = useState(storedFirstName || "");
  const [lastName, setLastName] = useState(storedLastName || "");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const [redirect, setRedirect] = useState(false);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
    dispatch({
      type: SET_PROGRESS,
      payload: 7,
    });
  }, []);

  const handleSetPersonalInformation = (e) => {
    e.preventDefault();

    if (firstName) {
      setErrorFirstName("");
    } else if (firstName.length < 2) {
      setErrorFirstName("Please a valid first name.");
      return;
    } else {
      setErrorFirstName("Please add first name.");
      return;
    }

    if (lastName) {
      setErrorLastName("");
    } else if (lastName.length < 2) {
      setErrorLastName("Please a valid last name.");
      return;
    } else {
      setErrorLastName("Please add last name.");
      return;
    }

    dispatch({
      type: SET_NAME,
      payload: {
        first_name: firstName,
        last_name: lastName,
      },
    });

    history.push("/email");
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">What's your name?</div>
          <div className="primary-sub-heading">
            Personal Information Is Safe & Secure
          </div>

          <form style={{ paddingTop: 10 }} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstname"
              label="First Name"
              name="firstName"
              autoComplete="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
              className="text-input"
              error={errorFirstName ? true : false}
              helperText={errorFirstName}
              style={{ marginBottom: 0 }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastName"
              autoComplete="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-input"
              error={errorLastName ? true : false}
              helperText={errorLastName}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              onClick={handleSetPersonalInformation}
            >
              Continue
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
