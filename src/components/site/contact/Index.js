import React, { useState, useEffect } from "react";
import { getIncentives } from "./../../../redux/actions/site/siteActions";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  CssBaseline,
  Button,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
} from "@material-ui/core";

import "./scss/style.scss";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncentives());
    dispatch(setCurrentView(false));
  }, [dispatch]);

  return (
    <>
      <div className="contact--wrapper">
        <section className="section">
          <div className="section--container">
            <h1 className="section--title">Contact Us</h1>
            <div className="boxes">
              <div className="box box-1">
                <div className="block">
                  <span className="block--title">Address</span>
                  <span className="block--text">
                    8383 Wilshire Blvd, Suite 540 Los Angeles, CA 90211
                  </span>
                </div>
                <div className="block">
                  <span className="block--title">Email Us</span>
                  <span className="block--text">
                    sales@energybillcruncher.com
                  </span>
                </div>
              </div>
              <div className="box">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="reason"
                      name="address2"
                      label="Reason"
                      fullWidth
                      autoComplete="reason"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="comments"
                      name="comments"
                      label="Comments or Concerns"
                      fullWidth
                      rows="4"
                      multiline="true"
                      autoComplete="Comments or Concerns"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      className="primary-btn"
                      //onClick={handleNext}
                      //className={classes.button}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
