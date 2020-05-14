import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import {
  SET_ZIPCODE_INFO,
  SET_ZIPCODE,
} from "./../../redux/actions/data/dataTypes";
import { GOOGLE_MAP_API_KEY } from "./../../config/keys";

import {
  makeStyles,
  Container,
  FormControl,
  TextField,
  CssBaseline,
  Button,
  MenuItem,
  Select,
  InputLabel,
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

const Change = () => {
  const classes = useStyles();
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);

  const isMounted = useIsMounted();
  const zipcode = useSelector((state) => state.data.zip_code);
  const address = useSelector((state) => state.data.address);
  const dispatch = useDispatch();

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

  const handleVerifyZipCode = async (e) => {
    e.preventDefault();
    if (IsValidZipCode(zip) && zipcode !== zip) {
      getZipCode(zip);
    } else {
      console.log("continue");
    }
  };

  function IsValidZipCode(zip) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
    return isValid;
  }

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    } else {
      setCity(address.city);
      setState(address.state?.long);
      setZip(zipcode);
    }
  }, [zipcode]);

  const getZipCode = async (zip) => {
    setIsLoading(true);
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
      } else {
        setErrorMessage("No results Found");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setIsLoading(false);
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
          <div className="primary-heading">What's your property address?</div>
          <div className="primary-sub-heading">
            For verification only. We do not mail.
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoFocus
              className="text-input"
            />
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state}
                fullWidth
                onChange={(e) => {
                  setState(e.target.value);
                  console.log(e.target.value);
                }}
                label="State"
              >
                {stateList.map((e, i) => {
                  return (
                    <MenuItem key={i} value={e.name}>
                      {e.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="number"
              id="zip"
              label="Zip Code"
              name="zipcode"
              autoComplete="Zip Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              autoFocus
              className="text-input"
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              onClick={handleVerifyZipCode}
            >
              {isLoading ? "Working..." : "Continue"}
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Change;
