import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
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
    marginTop: -110,
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
  const storedFirstName = useSelector((state) => state.data.name?.first_name);
  const storedLastName = useSelector((state) => state.data.name?.last_name);
  const [firstName, setFirstName] = useState(storedFirstName || "");
  const [lastName, setLastName] = useState(storedLastName || "");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
    dispatch(setCurrentView(true));
    return () => {
      dispatch(setCurrentView(false));
    };
  }, []);

  const validateFN = (value) => {
    if (value.length < 2) {
      setErrorFirstName("Please add valid first name.");
      return;
    } else {
      setErrorFirstName("");
    }
  };

  const validateLN = (value) => {
    if (value.length < 2) {
      setIsError(true);
      setErrorLastName("Please add valid last name.");
      return;
    } else {
      setErrorLastName("");
    }
  };

  const handleSetPersonalInformation = (e) => {
    e.preventDefault();

    if (firstName.length < 2) {
      setIsError(true);
      setErrorFirstName("Please add valid first name.");
      return;
    } else {
      setErrorFirstName("");
    }

    if (lastName.length < 2) {
      setIsError(true);
      setErrorLastName("Please add valid last name.");
      return;
    } else {
      setErrorLastName("");
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
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <div className="section-flow section-personal">
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
        />
        <CssBaseline />
        <div className={classes.paper}>
          <h2 className="primary-heading">What's your name?</h2>
          <div className="primary-sub-text">
            Personal Information Is Safe & Secure
          </div>

          <form className={classes.form} noValidate>
            <CustomTextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstname"
              label="First Name"
              name="firstName"
              autoComplete="off"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                isError && validateFN(e.target.value);
              }}
              autoFocus
              className="text-input"
              error={errorFirstName ? true : false}
              helperText={errorFirstName}
              style={{ marginBottom: 0 }}
              InputLabelProps={{
                margin: "dense",
              }}
            />

            <CustomTextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastName"
              autoComplete="off"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                isError && validateLN(e.target.value);
              }}
              className="text-input"
              error={errorLastName ? true : false}
              helperText={errorLastName}
              InputLabelProps={{
                margin: "dense",
              }}
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
