import React, { useState, useEffect } from "react";
import { getIncentives } from "./../../../redux/actions/site/siteActions";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

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
      <div className="homepage--wrapper">
        <section className="section">
          <div className="section--container">
            <h1 className="primary-heading">Get the best deal on solar</h1>
            <h3 className="primary-sub-heading">
              Calculate Savings with Accurate & Competitive Quotes from Local
              Installers
            </h3>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="primary-btn"
              onClick={() => history.push("/flow")}
            >
              Get Started
            </Button>
          </div>
        </section>
        <section className="section">
          <div className="section--container">
            <h3 className="primary-heading small-primary">
              It's as easy as one, two, three.
            </h3>
            <div className="boxes">
              <div className="box">
                <img src={require("./../../../assets/images/sites/zip.png")} />
                <span className="box--title">1. Enter your zip code</span>
                <p className="box--descriptions">
                  We will find you the biggest rebates and incentives currently
                  offered in your region.
                </p>
              </div>
              <div className="box">
                <img
                  src={require("./../../../assets/images/sites/check.png")}
                />
                <span className="box--title">2. Check eligibility</span>
                <p className="box--descriptions">
                  Enter basic information to see if installing solar panels make
                  sense for your home.
                </p>
              </div>
              <div className="box">
                <img src={require("./../../../assets/images/sites/save.png")} />
                <span className="box--title">3. See your savings</span>
                <p className="box--descriptions">
                  Once your home is approved, you can compare the best savings
                  offers in your area.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
