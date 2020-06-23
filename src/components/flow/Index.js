import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import {
  handleGetProviders,
  handleGetProvidersWithRadius,
} from "./../../redux/actions/data/dataActions";
import useIsMounted from "ismounted";
import { useHistory } from "react-router-dom";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
import {
  SET_ZIPCODE,
  SET_ZIPCODE_INFO,
} from "./../../redux/actions/data/dataTypes";
import { Tracker } from "./Tracker";
import { trustedForm, leadScript } from "./../../helpers/funnelCommon";

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
    marginTop: -50,
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
        borderRadius: 8,
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
  const storedZip = useSelector((state) => state.data.zip_code);
  const [zip, setZip] = useState(storedZip);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
  const history = useHistory();

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
    trustedForm();
    leadScript();

    dispatch({
      type: SET_PROGRESS,
      payload: 1,
    });

    dispatch(setCurrentView(true));

    //InitTracker(); //https://realsolarquotes.herokuapp.com/flow?s1=yahoo.com&s2=Advertisement_ID&s3=RandomWord

    return () => {
      dispatch(setCurrentView(false));
    };
  }, []);

  const InitTracker = () => {
    const tracker = new Tracker(
      document.referrer,
      window.navigator.userAgent,
      window.location.href
    );
    tracker.initate_track();
  };

  const getZipCode = async (zip) => {
    try {
      setIsLoading(true);
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

        dispatch(handleGetProviders(zip));

        dispatch(handleGetProvidersWithRadius(zip, 200)); // pass zipcode & radius range

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
        history.push("/powerbill");
      } else {
        setIsLoading(false);
        setErrorMessage("No results Found");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

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
          <h1 className="primary-heading">
            Save On Your Monthly Electric Bill
          </h1>
          <h2 className="primary-sub-heading">With Affordable Solar Energy</h2>
          <div className="primary-sub-text">
            Enter basic information to see if your home is eligible!
          </div>
          <form
            onSubmit={handleVerifyZipCode}
            style={{ paddingTop: 10 }}
            className={classes.form}
            noValidate
          >
            <CustomTextField
              id="outlined-number"
              variant="outlined"
              margin="normal"
              fullWidth
              type="number"
              id="zip"
              label="Enter Your Zip Code"
              name="zip"
              autoComplete="off"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
                setErrorMessage("");
              }}
              autoFocus
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
              {isLoading ? "Validating Zip..." : "Free Quote"}
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

export default Index;
