import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { PROVIDERS_API } from "./../../config/keys";

import {
  makeStyles,
  Container,
  CssBaseline,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import ValueLabel from "@material-ui/core/Slider/ValueLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
    maxWidth: 650,
    margin: "8px auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Index = () => {
  const classes = useStyles();
  const [listOfProviders, setListOfProviders] = useState([]);
  const [listOfProvidersWithRadius, setListOfProvidersWithRadius] = useState(
    []
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();

  const handleSetPowerBill = () => {
    setRedirectToNext(true);
  };

  const handleGetProviders = async () => {
    try {
      const response = await fetch(
        `https://developer.nrel.gov/api/utility_rates/v3.json?api_key=${PROVIDERS_API}&format=JSON&address=${zipcode}`
      );
      const result = await response.json();
      const data = result.outputs?.utility_name?.split("|");
      if (isMounted.current) {
        setListOfProviders(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetProvidersWithRadius = async (radius) => {
    try {
      const response = await fetch(
        `https://developer.nrel.gov/api/utility_rates/v3.json?api_key=${PROVIDERS_API}&format=JSON&address=${zipcode}&radius=${radius}`
      );
      const result = await response.json();
      const data = result.outputs?.utility_name?.split("|");
      if (isMounted.current) {
        setListOfProvidersWithRadius(Array.from(new Set(data)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }

    if (!listOfProviders.length) handleGetProviders();
    if (!listOfProvidersWithRadius.length) handleGetProvidersWithRadius(200);

    dispatch({
      type: SET_PROGRESS,
      payload: 4,
    });
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  if (redirectToNext) {
    return <Redirect to="/homeowner" />;
  }

  return (
    <Fragment>
      <Container
        component="main"
        className="section-powerbill section-providers"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading power-heading">
            Who is your Electricity Provider?
          </div>
          <div className="list">
            {listOfProviders.length
              ? listOfProviders.map((e, i) => (
                  <li key={i} className="list-button">
                    <RadioButtonUncheckedIcon color="disabled" />
                    <span>{e}</span>
                  </li>
                ))
              : null}
          </div>

          <FormControl
            variant="outlined"
            style={{ width: "100%", maxWidth: 400, margin: "20px auto" }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              More Options
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              //value={state}
              fullWidth
              onChange={(e) => {}}
              label="More Options"
            >
              {listOfProvidersWithRadius.length
                ? listOfProvidersWithRadius.map((e, i) => {
                    return (
                      <MenuItem key={i} value={e}>
                        {e}
                      </MenuItem>
                    );
                  })
                : null}
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="primary-btn"
            onClick={handleSetPowerBill}
          >
            Continue
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
