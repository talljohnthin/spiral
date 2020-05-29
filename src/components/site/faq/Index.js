import React, { useState, useEffect } from "react";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  makeStyles,
} from "@material-ui/core";
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(setCurrentView(false));
  }, []);

  return (
    <>
      <div className="faq--wrapper">
        <section className="section">
          <div className="section--container">
            <h2 className="primary-sub-heading">Frequently Asked Questions</h2>
            <div className={classes.root}>
              <ExpansionPanel
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    How does EnergyBillCruncher work?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.subHeading}>
                    After you enter your unique home information into our secure
                    system, we’ll analyze your roof specs, sun exposure ratings
                    specific to your neighborhood, and your local utility rate
                    schedule. Our proprietary technology completes these tasks
                    within minutes, matching you with fully certified,
                    pre-screened solar installation companies in your area.
                    These installers will offer bids on a solar system custom
                    designed for your home, giving you multiple options to
                    choose from. No high pressure sales; just a streamlined,
                    simple platform for you to install your solar system at the
                    lowest possible cost. Because when solar companies compete
                    for your business, you come out on top.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    What makes you different from the other solar guys?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.subHeading}>
                    If you go directly to any solar installer, you’re going to
                    get one offer. With us, you instantly get multiple offers,
                    giving you the negotiating leverage you need to secure the
                    best deal. By providing side by side installation quote
                    comparisons, including all rebates and incentives, along
                    with long term solar energy rates, you can make an informed
                    decision before committing to a solar installer.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>
                    Which states is EnergyBillCruncher in?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.subHeading}>
                    We’re in every state. Our solar installation partners have
                    all been pre-screened, ensuring our homeowners that any
                    company they contract through us will be properly certified,
                    licensed, bonded and insured.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>
                    Does EnergyBillCruncher install solar panels?
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.subHeading}>
                    We’re in every state. Our solar installation partners have
                    all been pre-screened, ensuring our homeowners that any
                    company they contract through us will be properly certified,
                    licensed, bonded and insured.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
