import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import useIsMounted from "ismounted";
import { useHistory } from "react-router-dom";

import { SET_EMAIL } from "./../../redux/actions/data/dataTypes";

import { GOOGLE_MAP_API_KEY } from "./../../config/keys";

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
    marginTop: theme.spacing(6),
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
  const storedEmail = useSelector((state) => state.data.email);
  const [email, setEmail] = useState(storedEmail || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
    dispatch({
      type: SET_PROGRESS,
      payload: 8,
    });
  }, []);

  const onErrorValidate = (e) => {
    if (validEmail(e)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please a valid email address");
      return;
    }
  };

  const handleSetEmail = (e) => {
    e.preventDefault();

    if (validEmail(email)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please a valid email address");
      setIsError(true);
      return;
    }

    dispatch({
      type: SET_EMAIL,
      payload: email,
    });

    history.push("/tel");
  };

  function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">What's your email?</div>
          <div className="primary-sub-heading">
            We take privacy seriously. No spam!
          </div>

          <form
            onSubmit={handleSetEmail}
            style={{ paddingTop: 10 }}
            className={classes.form}
            noValidate
          >
            <TextField
              id="outlined-number"
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                isError && onErrorValidate(e.target.value);
              }}
              autoFocus
              className="text-input"
              error={errorMessage ? true : false}
              helperText={errorMessage}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              type="submit"
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
