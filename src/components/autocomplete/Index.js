import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { RoomRounded } from "@material-ui/icons";
import SimpleMap from "./Map";

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
  root: {
    "& input:valid + fieldset": {
      fontWeight: 300,
    },
    //   "& input:invalid + fieldset": {
    //     borderColor: "red",
    //     borderWidth: 2,
    //   },
  },
})(TextField);

const Index = () => {
  const classes = useStyles();
  const [address, setAddress] = useState("");
  const [longLat, setLongLat] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();
  const zipcode = useSelector((state) => state.data.zip_code);

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
          <div className="primary-heading" style={{ paddingBottom: 10 }}>
            Find your address
          </div>
        </div>
        <div
          className="search"
          style={{ width: 400, margin: "0 auto", float: "none" }}
        >
          <SimpleMap longLat={longLat} style={{ marginBottom: 10 }} />
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
                  label="Input Address"
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
              setAddress(description);
              getCoordinates(description);
            }}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
