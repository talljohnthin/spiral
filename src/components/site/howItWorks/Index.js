import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./scss/style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#6a6a6a",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: "100%",
    flexShrink: 0,
    fontWeight: 500,
    color: "#333",
  },
  subHeading: {
    color: "#6a6a6a",
    fontSize: theme.typography.pxToRem(15),
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentView(false));
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="how-it-works--wrapper">
        <section className="section">
          <div className="section--container">
            <h1 className="primary-sub-heading">
              Incredible! But How Does It Work?
            </h1>

            <h2 className="section--text">
              Most photovoltaic solar panel systems (PV Systems) have four
              components that make them work:
            </h2>

            <div className="section--images">
              <div className="box">
                <img
                  src={require("./../../../assets/images/sites/how-it-works/pv-modules.jpg")}
                />
                <h4 className="box--title">1. PV Modules</h4>
                <div className="box--text">
                  Solar panels contain photovoltaic cells which capture the
                  sun's energy and convert it to electricity.
                </div>
              </div>
              <div className="box">
                <img
                  src={require("./../../../assets/images/sites/how-it-works/regulator-controller.jpg")}
                />
                <h4 className="box--title">
                  2. A charge regulator or controller
                </h4>
                <div className="box--text">
                  This protects batteries from being overloaded by regulating
                  the electricity flow
                </div>
              </div>
              <div className="box">
                <img
                  src={require("./../../../assets/images/sites/how-it-works/batteries.jpg")}
                />
                <h4 className="box--title">3. One or more batteries</h4>
                <div className="box--text">
                  Anytime the sun isn't out (nighttime, cloudy days), your
                  batteries are storing electricity for later use. In places
                  that lack grid pwoer, these batteries act as the only
                  electricity backup.
                </div>
              </div>
              <div className="box">
                <img
                  src={require("./../../../assets/images/sites/how-it-works/inverter.jpg")}
                />
                <h4 className="box--title">4. Inverter</h4>
                <div className="box--text">
                  This equipment converts the stored energy from a battery into
                  voltage that will power electrical equipment, like the lights
                  and appliances in your home!
                </div>
              </div>
            </div>

            <div className="section--details">
              EnergyBillCruncher provides homeowners with a unique online
              marketplace to shop for solar installers. After you run a side by
              side comparison, we’ll match you with a dedicated solar power
              expert to answer all of your questions and help guide you through
              the purchase and installation process. Our experts are fully
              trained and extremely knowledgeable regarding all federal and
              state solar incentives, rebates, and tax breaks you can qualify
              for. As we custom design your solar system, we’ll simultaneously
              organize the installation (permits and all) for you with as little
              out of pocket cost as possible (sometimes even Zero Down!). We’ll
              be here for you even after your system is up and running, ensuring
              you have all the maintenance and monitoring services you require
              to have your system running at maximum efficiency at all times.
              Are your ready to start saving? Then let’s go solar!
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
