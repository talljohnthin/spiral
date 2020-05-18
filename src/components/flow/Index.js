import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import useIsMounted from "ismounted";

import {
  SET_ZIPCODE,
  SET_ZIPCODE_INFO,
} from "./../../redux/actions/data/dataTypes";

import { GOOGLE_MAP_API_KEY } from "./../../config/keys";

import {
  makeStyles,
  withStyles,
  Container,
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
  const [zip, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const isMounted = useIsMounted();

  const stateList = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  const dispatch = useDispatch();

  const handleVerifyZipCode = async (e) => {
    e.preventDefault();

    if (!IsValidZipCode(zip)) {
      setErrorMessage("Please add a valid zipcode.");
      return;
    }

    getZipCode(zip);
  };

  function IsValidZipCode(zip) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
    return isValid;
  }

  useEffect(() => {
    dispatch({
      type: SET_PROGRESS,
      payload: 20,
    });
  }, []);

  const getZipCode = async (zip) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&sensor=true&key=${GOOGLE_MAP_API_KEY}`
      );
      const data = await response.json();
      if (data.results.length) {
        const formatted_address = data.results[0]?.formatted_address.split(",");
        const short = formatted_address[1].trim().split(" ")[0];
        let long = stateList.filter((e) => e.abbreviation === short)[0].name;

        const addressObj = {
          city: formatted_address[0],
          state: {
            long,
            short,
          },
        };
        dispatch({
          type: SET_ZIPCODE_INFO,
          payload: addressObj,
        });
        dispatch({
          type: SET_ZIPCODE,
          payload: zip,
        });
        setIsLoading(false);
        setErrorMessage("");
        setRedirectToNext(true);
      } else {
        setErrorMessage("No results Found");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

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
            Save On Your Monthly Electric Bill
            <br />
            With Affordable Solar Energy
          </div>
          <div className="primary-sub-heading">
            Enter basic information to see if your home is eligible!
          </div>
          <form className={classes.form} noValidate>
            <CustomTextField
              id="outlined-number"
              InputLabelProps={{
                shrink: true,
              }}
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
