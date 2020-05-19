import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import useIsMounted from "ismounted";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Loader from "react-loader-spinner";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { SET_PROVIDER } from "./../../redux/actions/data/dataTypes";
import { PROVIDERS_API } from "./../../config/keys";
import { useHistory } from "react-router-dom";

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
  select: {
    //color: "#a6a6a6",
  },
}));

const Index = () => {
  const classes = useStyles();
  const [listOfProviders, setListOfProviders] = useState([]);
  const [listOfProvidersWithRadius, setListOfProvidersWithRadius] = useState(
    []
  );
  const [selectedProvider, setSelectedProvider] = useState("");
  const [provider, setProvider] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleSelectProvider = () => {
    dispatch({
      type: SET_PROVIDER,
      payload: provider,
    });
    history.push("/roofshade");
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
            {listOfProviders.length ? (
              listOfProviders.map((e, i) => (
                <li
                  key={i}
                  className="list-button"
                  onClick={() => {
                    setProvider(e);
                    handleSelectProvider();
                  }}
                >
                  <RadioButtonUncheckedIcon />
                  <span>{e}</span>
                </li>
              ))
            ) : (
              <Loader type="ThreeDots" color="#00BFFF" height={60} width={60} />
            )}
          </div>

          <FormControl
            variant="outlined"
            style={{ width: "100%", maxWidth: 400, margin: "20px auto" }}
          >
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ color: "rgba(0, 0, 0, 0.87)" }}
            >
              More Options
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedProvider}
              fullWidth
              onChange={(e) => {
                setSelectedProvider(e.target.value);
                setProvider(e.target.value);
              }}
              label="More Options"
              className={classes.select}
            >
              {listOfProvidersWithRadius.length ? (
                listOfProvidersWithRadius.map((e, i) => {
                  return (
                    <MenuItem key={i} value={e}>
                      {e}
                    </MenuItem>
                  );
                })
              ) : (
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={40}
                  width={40}
                />
              )}
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="primary-btn"
            onClick={handleSelectProvider}
          >
            Continue
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
