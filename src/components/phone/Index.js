import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import useIsMounted from "ismounted";
import { useHistory } from "react-router-dom";
import { setCurrentView } from "./../../redux/actions/data/dataActions";

import { SET_PHONE } from "./../../redux/actions/data/dataTypes";

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

const CustomTextField = withStyles({
  // root: {
  //   "& input:valid + fieldset": {
  //     borderColor: "#48bf91",
  //     borderWidth: 2,
  //   },
  //   "& input:invalid + fieldset": {
  //     borderColor: "red",
  //     borderWidth: 2,
  //   },
  // },
})(TextField);

const Index = () => {
  const classes = useStyles();
  const storedPhone = useSelector((state) => state.data.phone);
  const [phone, setPhone] = useState(storedPhone || "");
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
      payload: 9,
    });
    dispatch(setCurrentView(true));
    return () => {
      dispatch(setCurrentView(false));
    };
  }, []);

  const onErrorValidate = (p) => {
    if (validPhone(p)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please add a valid phone number");
      return;
    }
  };

  const handleSetPhone = (e) => {
    e.preventDefault();

    if (validPhone(phone)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please add a valid phone number");
      setIsError(true);
      return;
    }

    dispatch({
      type: SET_PHONE,
      payload: phone,
    });

    //history.push()
  };

  function validPhone(phone) {
    var re = /^(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+$/g;
    return re.test(phone);
  }

  if (redirect) {
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow section-phone">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">
            You've Been Matched With Solar Experts In Your Area!
          </div>
          <div className="primary-sub-heading">
            Complete this final step to see your savings.
          </div>

          <form
            onSubmit={handleSetPhone}
            style={{ paddingTop: 10 }}
            className={classes.form}
            noValidate
          >
            <CustomTextField
              id="outlined-number"
              variant="outlined"
              margin="normal"
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                isError && onErrorValidate(e.target.value);
              }}
              autoFocus
              type="Number"
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
              Get Free Quote
            </Button>
          </form>
          <div className="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
