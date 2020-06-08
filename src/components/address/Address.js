import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import {
  SET_STREET_ADDRESS,
  SET_ZIPCODE_INFO,
  SET_ZIPCODE,
  SET_CITY,
} from "./../../redux/actions/data/dataTypes";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { GOOGLE_MAP_API_KEY } from "./../../config/keys";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { RoomRounded } from "@material-ui/icons";
import Change from "./Change";
import { useHistory } from "react-router-dom";

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

const Address = () => {
  const classes = useStyles();
  const storedStreetAddress = useSelector((state) => state.data.street_address);
  const [street, setStreet] = useState(storedStreetAddress || "");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [cityError, setCityError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [streetError, setStreetError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const isMounted = useIsMounted();
  const reducerZipCode = useSelector((state) => state.data.zip_code);
  const reducerStreetAddress = useSelector(
    (state) => state.data.street_address
  );
  const reducerCity = useSelector((state) => state.data.city);
  const reducerState = useSelector((state) => state.data.state);
  const dispatch = useDispatch();
  const history = useHistory();

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

  useEffect(() => {
    if (isMounted.current) {
      setCity(reducerCity);
      setZip(reducerZipCode);
      setState(reducerState.long);
    }
    if (!reducerZipCode) {
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

  const getGeoCode = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const address_components = results[0]?.address_components;
      const check = checkIsValidStreetNumber(
        address_components,
        reducerZipCode
      );
      const formatted_address = results[0]?.formatted_address.split(",");
      const short = formatted_address[2].trim().split(" ")[0];
      let long = stateList.filter((e) => e.abbreviation === short)[0]?.name;

      if (isMounted.current) {
        if (check.valid && check.samePostalCode) {
          setCity(formatted_address[0]);
          setStreet(check.streetAddress);
          setState(reducerState.long);
          //setSelectedAddress(check.streetAddress);
          const addressObj = {
            city: formatted_address[1],
            state: {
              long: reducerState.long,
              short: reducerState.short,
            },
          };
          dispatch({
            type: SET_ZIPCODE_INFO,
            payload: addressObj,
          });
          dispatch({
            type: SET_STREET_ADDRESS,
            payload: check.streetAddress,
          });
        } else if (check.valid && !check.samePostalCode) {
          setCity(formatted_address[1]);
          setStreet(check.streetAddress);
          setZip(check.postalCode);
          setState(long);
          //setSelectedAddress(check.streetAddress);
          const addressObj = {
            city: formatted_address[1],
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
            type: SET_STREET_ADDRESS,
            payload: check.streetAddress,
          });
          dispatch({
            type: SET_ZIPCODE,
            payload: check.postalCode,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIsValidStreetNumber = (arr, zipcode) => {
    let route = arr.filter((e) => e.types[0] === "route");
    let street_number = arr.filter((e) => e.types[0] === "street_number");
    let postal_code = arr.filter((e) => e.types[0] === "postal_code");

    let samePostalCode = false;

    if (postal_code[0]?.short_name === zipcode) {
      samePostalCode = true;
    } else {
      samePostalCode = false;
    }

    if (route.length || (street_number.length && postal_code.length)) {
      return {
        valid: true,
        samePostalCode,
        streetAddress: `${
          street_number[0]?.long_name ? street_number[0]?.long_name : ""
        } ${route[0]?.long_name}`,
        postalCode: postal_code[0]?.short_name,
      };
    } else {
      return {
        valid: false,
      };
    }
  };

  const updateZip = (zip) => {
    setZip(zip);
  };

  const updateCity = (city) => {
    setCity(city);
  };

  const updateState = (state) => {
    setState(state);
  };

  const handleResetZipError = () => {
    setZipError("");
  };
  const handleResetCityError = () => {
    setCityError("");
  };

  const removeCountryAtTheEnd = (suggestion) => {
    const arr = suggestion.split(",");
    arr.pop();
    return arr.join(",");
  };

  const streetAutofill = () => {
    const inputProps = {
      value: street,
      placeholder: "Street Address",
      onChange: (e) => setStreet(e.target.value),
    };
    return (
      <GooglePlacesAutocomplete
        renderInput={(props) => (
          <div className="custom-wrapper">
            <TextField
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
              label="Street Address"
              name="address"
              autoComplete="address"
              autoFocus
              className="text-input"
              inputProps={inputProps}
              {...props}
              error={streetError ? true : false}
              helperText={streetError}
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

                {removeCountryAtTheEnd(suggestion.description)}
              </div>
            ))}
          </div>
        )}
        onSelect={({ description }) => {
          getGeoCode(description);
          setStreetError("");
        }}
      />
    );
  };

  const streetNotAutofill = () => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="street"
        label="Street Number"
        name="streetNumber"
        autoComplete="Street Number"
        value={street}
        onChange={(e) => {
          setStreet(e.target.value);
          setStreetError("");
        }}
        autoFocus
        className="text-input"
        InputLabelProps={{
          shrink: true,
        }}
        error={streetError ? true : false}
        helperText={streetError}
        style={{ marginBottom: 3 }}
      />
    );
  };

  function IsValidZipCode(zip) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
    return isValid;
  }

  const handleContinue = () => {
    // need to update state here
    if (!street) {
      setStreetError("Please add street address.");
      return;
    } else {
      setStreetError("");
    }

    if (editMode) {
      if (!city) {
        setCityError("Please add a city.");
        return;
      } else {
        setCityError("");
      }

      if (!IsValidZipCode(zip)) {
        setZipError("Please add a valid zipcode.");
        return;
      } else {
        setZipError("");
      }

      dispatch({
        type: SET_STREET_ADDRESS,
        payload: street,
      });

      const addressObj = {
        city: city,
        state: {
          long: state,
          short: stateList.filter((e) => e.name === state)[0]?.abbreviation,
        },
      };

      dispatch({
        type: SET_ZIPCODE_INFO,
        payload: addressObj,
      });

      setEditMode(false);
      history.push("/name");
    } else {
      dispatch({
        type: SET_STREET_ADDRESS,
        payload: street,
      });

      setEditMode(false);
      history.push("/name");
    }
  };

  if (redirect) {
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <div className="section-flow">
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
        />
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">What's your property address?</div>
          <div className="primary-sub-heading">
            For verification only. We do not mail.
          </div>
          <form className={classes.form} noValidate>
            {editMode ? streetNotAutofill() : streetAutofill()}

            {successMessage && (
              <Alert severity="success">{successMessage}</Alert>
            )}
            {isLoading ? (
              <Alert severity="warning">Please wait...</Alert>
            ) : (
              errorMessage && <Alert severity="error">{errorMessage}</Alert>
            )}
            {!editMode && (
              <div className="address">
                {reducerCity}, {reducerState?.short}, {reducerZipCode}
                <div
                  style={{ color: "#48bf91", cursor: "pointer" }}
                  className="edit"
                  onClick={() => setEditMode(true)}
                >
                  Change
                </div>
              </div>
            )}

            <div style={editMode ? { display: "block" } : { display: "none" }}>
              <Change
                city={city}
                zip={zip}
                state={state}
                zipError={zipError}
                cityError={cityError}
                setZipError={handleResetZipError}
                setCityError={handleResetCityError}
                handleSetZip={updateZip}
                handleSetCity={updateCity}
                handleSetState={updateState}
              />
            </div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              onClick={handleContinue}
              style={{ marginTop: 20 }}
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

export default Address;
