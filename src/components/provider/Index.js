import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { SET_PROVIDER } from "./../../redux/actions/data/dataTypes";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
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
    marginTop: theme.spacing(6),
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
    color: "#848484",
  },
}));

const Index = () => {
  const classes = useStyles();
  const storedMoreDropdown = useSelector(
    (state) => state.data.providers.is_dropdown
  );
  const storedProvider = useSelector((state) => state.data.providers.provider);
  const [selectedProvider, setSelectedProvider] = useState(
    storedMoreDropdown ? storedProvider : ""
  );
  const [provider, setProvider] = useState("");
  const [redirect, setRedirect] = useState(false);
  const zipcode = useSelector((state) => state.data.zip_code);
  const providers = useSelector(
    (state) => state.data.providers.list_of_providers
  );
  const providersWithRadius = useSelector(
    (state) => state.data.providers.list_of_providers_with_radius
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectProvider = (data, isDropdown) => {
    dispatch({
      type: SET_PROVIDER,
      payload: {
        provider: data,
        isDropdown: data ? isDropdown : false,
      },
    });
    history.push("/roofshade");
  };

  const handleBtnSelectProvider = (data, isDropdown) => {
    dispatch({
      type: SET_PROVIDER,
      payload: {
        provider: storedMoreDropdown ? storedProvider : data,
        isDropdown: data ? isDropdown : storedMoreDropdown ? true : false,
      },
    });
    history.push("/roofshade");
  };

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
    dispatch({
      type: SET_PROGRESS,
      payload: 4,
    });
    dispatch(setCurrentView(true));
    return () => {
      dispatch(setCurrentView(false));
    };
  }, []);

  if (redirect) {
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <Container
        component="main"
        className="section-powerbill section-providers"
      >
        <input
          id="leadid_token"
          name="universal_leadid"
          type="hidden"
          value=""
        />
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading power-heading">
            Who is your Electricity Provider?
          </div>
          <div className="list">
            {providers.length
              ? providers.map((e, i) => (
                  <li
                    key={i}
                    className="list-button"
                    style={
                      !storedMoreDropdown
                        ? e === storedProvider
                          ? { borderColor: "#2196f3" }
                          : null
                        : null
                    }
                    onClick={() => {
                      setProvider(e);
                      handleSelectProvider(e, false);
                    }}
                  >
                    <RadioButtonUncheckedIcon style={{ color: "#848282" }} />
                    <span style={{ color: "#848282" }}>{e}</span>
                  </li>
                ))
              : null}
          </div>

          <FormControl
            variant="outlined"
            style={{ width: "100%", maxWidth: 400, margin: "20px auto" }}
          >
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ color: "#848282" }}
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
              style={{ color: "#848484" }}
              className={storedMoreDropdown ? "isCurrent" : null}
            >
              {providersWithRadius.length
                ? providersWithRadius.map((e, i) => {
                    return (
                      <MenuItem key={i} value={e} style={{ color: "#848282" }}>
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
            onClick={() => handleBtnSelectProvider(provider, true)}
          >
            Continue
          </Button>
        </div>
      </Container>
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
