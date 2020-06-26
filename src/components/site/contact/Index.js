import React, { useState, useEffect } from "react";
import { getIncentives } from "./../../../redux/actions/site/siteActions";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button, Grid, TextField } from "@material-ui/core";

import "./scss/style.scss";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch(getIncentives());
    dispatch(setCurrentView(false));
  }, [dispatch]);

  const onSubmit = (data) => {
    console.log(data);
  };

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
                    2505 Foothill Blvd Suite B La Crescenta,CA 91214
                  </span>
                </div>
                <div className="block">
                  <span className="block--title">Email Us</span>
                  <span className="block--text">sales@realsolarquotes.com</span>
                </div>
              </div>
              <div className="box">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="firstName"
                        name="firstname"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        inputRef={register({ required: true })}
                        error={errors.firstname ? true : false}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="lastName"
                        name="lastname"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        inputRef={register({ required: true })}
                        error={errors.lastname ? true : false}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        inputRef={register({
                          required: "E-mail required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                        error={errors.email ? true : false}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="reason"
                        name="reason"
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
                        multiline={true}
                        autoComplete="Comments or Concerns"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        className="primary-btn"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
