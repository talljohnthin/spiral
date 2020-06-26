import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import useIsMounted from "ismounted";
import { useHistory } from "react-router-dom";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
import ModelsModal from "./ModelsModal";

import { SET_PHONE } from "./../../redux/actions/data/dataTypes";

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
    marginTop: -65,
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
  const storedPhone = useSelector((state) => state.data.phone);
  const [phone, setPhone] = useState(storedPhone || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const [redirect, setRedirect] = useState(false);
  const isMounted = useIsMounted();
  const [modelsModal, setModelsModal] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

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

  const pleaseClose = () => {
    setModelsModal(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!zipcode) {
      setRedirect(true);
    }
    dispatch({
      type: SET_PROGRESS,
      payload: 8.5,
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
    window.scrollTo(0, 0);

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
      <div className="section-flow section-phone">
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
        />
        <CssBaseline />
        <div className={classes.paper}>
          <h1 className="primary-heading">You've Been Matched With Solar</h1>
          <h2 className="primary-sub-heading">Experts In Your Area!</h2>
          <div className="primary-sub-text">
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
              autoComplete="off"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                isError && onErrorValidate(e.target.value);
              }}
              autoFocus={dimensions.width <= 1024 ? false : true}
              type="Number"
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
              Get Free Quote
            </Button>
          </form>
          <label className="h6">
            <input type="hidden" id="leadid_tcpa_disclosure" />
            By clicking above, you authorize up to
            <span
              style={{
                padding: "0 7px",
                color: "#333",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setModelsModal(true)}
            >
              four Solar Companies
            </span>{" "}
            to call you and send you pre-recorded messages and text messages at
            the number you entered above, using an autodialer, with offers about
            their products or services, even if your phone number is on any
            national or state “Do Not Call” list. Your consent here is not based
            on a condition of purchase.
          </label>
        </div>
        <ModelsModal isOpen={modelsModal} pleaseClose={pleaseClose} />
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
