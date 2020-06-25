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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles, withStyles, TextField } from "@material-ui/core";

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
  select: {
    color: "#848484",
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

const Change = ({
  city,
  state,
  zip,
  zipError,
  cityError,
  setZipError,
  setCityError,
  handleSetZip,
  handleSetCity,
  handleSetState,
}) => {
  const classes = useStyles();
  const [streetAddress, setStreetAddress] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const isMounted = useIsMounted();
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
  return (
    <Fragment>
      <CustomTextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="city"
        label="City"
        name="city"
        autoComplete="off"
        value={city}
        onChange={(e) => {
          handleSetCity(e.target.value);
          setCityError();
        }}
        autoFocus
        className="text-input"
        InputLabelProps={{
          shrink: true,
          margin: "dense",
        }}
        error={cityError ? true : false}
        helperText={cityError}
      />
      {/* <FormControl
        className="form-select"
        variant="outlined"
        style={{ marginTop: 9, width: "100%" }}
      >
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          fullWidth
          style={{ color: "#343131" }}
          onChange={(e) => handleSetState(e.target.value)}
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
      </FormControl> */}
      {console.log(state)}
      <div className="dropdown-state">
        <div className="label-state">State</div>
        <span
          className={
            toggleDropdown ? "dropdown-selected open" : "dropdown-selected"
          }
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
        >
          {state ? state : "Select State"}
          <ExpandMoreIcon className={toggleDropdown ? "caret open" : "caret"} />
        </span>
        <ul
          className="list-item"
          style={toggleDropdown ? { display: "block" } : { display: "none" }}
        >
          {stateList.length
            ? stateList.map((e, i) => {
                return (
                  <li
                    key={i}
                    value={e}
                    onClick={() => {
                      handleSetState(e.name);
                      setToggleDropdown(!toggleDropdown);
                    }}
                  >
                    {e.name}
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <CustomTextField
        variant="outlined"
        margin="normal"
        fullWidth
        type="number"
        id="zip"
        label="Zip Code"
        name="zipcode"
        autoComplete="off"
        value={zip}
        onChange={(e) => {
          handleSetZip(e.target.value);
          setZipError();
        }}
        autoFocus
        className="text-input"
        InputLabelProps={{
          shrink: true,
          margin: "dense",
        }}
        error={zipError ? true : false}
        helperText={zipError}
      />
    </Fragment>
  );
};

export default Change;
