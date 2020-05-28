import React, { useState, useEffect } from "react";
import { getIncentives } from "./../../../redux/actions/site/siteActions";
import { useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./scss/style.scss";

const Index = () => {
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    setRedirect(true);
  };

  useEffect(() => {
    dispatch(getIncentives());
  }, [dispatch]);

  if (redirect) {
    return <Redirect to="/flow" />;
  }

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
              onClick={handleRedirect}
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
                <img src={require("./../../../assets/images/noshade.png")} />
                <span className="box--title">Title</span>
                <p className="box--descriptions">
                  Enter basic information to see if installing solar panels make
                  sense for your home
                </p>
              </div>
              <div className="box">
                <img src={require("./../../../assets/images/noshade.png")} />
                <span className="box--title">Title</span>
                <p className="box--descriptions">
                  Enter basic information to see if installing solar panels make
                  sense for your home
                </p>
              </div>
              <div className="box">
                <img src={require("./../../../assets/images/noshade.png")} />
                <span className="box--title">Title</span>
                <p className="box--descriptions">
                  Enter basic information to see if installing solar panels make
                  sense for your home
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
