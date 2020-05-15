import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import {
  SET_STREET_ADDRESS,
  SET_ZIPCODE_INFO,
} from "./../../redux/actions/data/dataTypes";
import { GOOGLE_MAP_API_KEY } from "./../../config/keys";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { RoomRounded } from "@material-ui/icons";

import {
  makeStyles,
  withStyles,
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

const Address = () => {
  const classes = useStyles();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [longLat, setLongLat] = useState({});
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

  // const handleAddStreetAddress = async (e) => {
  //   e.preventDefault();
  //   if (streetAddress) {
  //     dispatch({
  //       type: SET_STREET_ADDRESS,
  //       //payload: streetAddress,
  //     });
  //     setRedirectToNext(true);
  //   } else {
  //     setErrorMessage("Please add your street address.");
  //   }
  // };

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
  }, []);

  const getCoordinates = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLongObj = await getLatLng(results[0]);
      if (isMounted.current) {
        console.log(latLongObj);
        setLongLat(latLongObj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getGeoCode = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      if (isMounted.current) {
        const formatted_address = results[0]?.formatted_address.split(",");
        const short = formatted_address[1].trim().split(" ")[0];
        let long = stateList.filter((e) => e.abbreviation === short)[0]?.name;

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
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <GooglePlacesAutocomplete
              renderInput={(props) => (
                <div className="custom-wrapper">
                  <CustomTextField
                    id="outlined-number"
                    style={{ marginTop: 25 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="number"
                    id="address"
                    label="Find Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                    className="text-input"
                    {...props}
                  />
                </div>
              )}
              renderSuggestions={(active, suggestions, onSelectSuggestion) => (
                <div className="suggestions-container">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion"
                      style={suggestion.active ? { color: "red" } : null}
                      onClick={(event) => onSelectSuggestion(suggestion, event)}
                    >
                      <RoomRounded />
                      {suggestion.description}
                    </div>
                  ))}
                </div>
              )}
              onSelect={({ description }) => {
                setSelectedAddress(description);
                //getCoordinates(description);
                getGeoCode(description);
              }}
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
              {address.city}, {address.state?.short}
            </div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              //onClick={handleAddStreetAddress}
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
