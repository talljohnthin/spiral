import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import useIsMounted from "ismounted";
import { SET_STREET_ADDRESS } from "./../../redux/actions/data/dataTypes";
import { GOOGLE_MAP_API_KEY } from "./../../config/keys";

import {
  makeStyles,
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

const Results = () => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  const isMounted = useIsMounted();
  const zipcode = useSelector((state) => state.data.zip_code);
  const address = useSelector((state) => state.data.address);
  const street_address = useSelector((state) => state.data.street_address);
  const power_bill = useSelector((state) => state.data.power_bill);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-result">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">Generated Info</div>
          <div>
            <div className="street">
              Street Address: <span>{street_address}</span>
            </div>
            <div className="city">
              City: <span>{address.city}</span>
            </div>
            <div className="state">
              State: <span>{address.state?.short}</span>
            </div>
            <div className="zip">
              Zip Code: <span>{zipcode}</span>
            </div>
            <div className="cost">
              Monthly Cost: <span>{power_bill}</span>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Results;
