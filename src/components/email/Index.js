import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
import { validEmail } from "./../../helpers/Validations";
import useIsMounted from "ismounted";
import { useHistory } from "react-router-dom";

import { SET_EMAIL } from "./../../redux/actions/data/dataTypes";

import { GOOGLE_MAP_API_KEY } from "./../../config/keys";

import {
  makeStyles,
  withStyles,
  TextField,
  CssBaseline,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: -110,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
    maxWidth: 441,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
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

const CustomTextField = withStyles({
  root: {
    background: "#fff",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#343131",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#343131 !important",
        borderWidth: 1,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#343131",
        borderWidth: 1,
      },
    },
  },
})(TextField);

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
    dispatch(setCurrentView(true));
    return () => {
      dispatch(setCurrentView(false));
    };
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

  if (redirect) {
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <div className="section-flow section-email">
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
        />
        <CssBaseline />
        <div className={classes.paper}>
          <h2 className="primary-heading">What's your email?</h2>
          <div className="primary-sub-text">
            We take privacy seriously. No spam!
          </div>

          <form onSubmit={handleSetEmail} className={classes.form} noValidate>
            <CustomTextField
              id="outlined-number"
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                isError && onErrorValidate(e.target.value);
              }}
              autoFocus
              className="text-input"
              error={errorMessage ? true : false}
              helperText={errorMessage}
              InputLabelProps={{
                margin: "dense",
              }}
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
      </div>
      <noscript>
        <img src="http://api.trustedform.com/ns.gif" />
      </noscript>
      <noscript>
        <img src="//create.leadid.com/noscript.gif?lac=064c6972-8aba-292f-69eb-5b338dd8b54f&lck=0cfd5396-15c4-921a-bae8-2f4c79ad8761&snippet_version=2" />
      </noscript>
    </Fragment>
  );
};

export default Index;
