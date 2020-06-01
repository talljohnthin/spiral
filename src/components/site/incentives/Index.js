import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import aboutHeroImg from "./../../../assets/images/sites/about-hero.jpg";
import { InputLabel, FormControl, Select, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./scss/style.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Index = () => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedState, setSelectedState] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentView(false));
  }, []);

  return (
    <>
      <div className="incentives--wrapper">
        <section
          className="section section-hero"
          style={{
            background: `url(${aboutHeroImg})`,
          }}
        >
          <div className="section--container">
            {/* <img src={require("./../../../assets/images/sites/America.png")} /> */}
            <h1 className="primary-heading">Solar Incentives</h1>
            <h3 className="primary-sub-heading">
              {" "}
              Rebates and Incentives vary by region - to see what's available in
              your area, get started below.
            </h3>
            <div className="dropdown--wrapper">
              <div className="box">
                <FormControl required className={classes.formControl}>
                  <InputLabel>Search incentives by state</InputLabel>
                  <Select
                    native
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    name="location"
                    style={{ padding: 10, width: 260, fontSize: 18 }}
                  >
                    <option value=""></option>
                    <option value="AZ">Arizona</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="FL">Florida</option>
                    <option value="HI">Hawaii</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="NV">Nevada</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NY">New York</option>
                    <option value="SC">South Carolina</option>
                    <option value="TX">Texas</option>
                  </Select>
                </FormControl>
              </div>
              <div className="box">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="primary-btn"
                  onClick={() => {
                    history.push(`/incentives/${selectedState}`);
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-list">
          <div className="section--container">
            <h3 className="primary-sub-heading">
              States with current incentives include:
            </h3>

            <div className="boxes">
              <div>
                <Link to="/incentives/AZ">Arizona</Link>
              </div>
              <div>
                <Link to="/incentives/CA">California</Link>
              </div>
              <div>
                <Link to="/incentives/CO">Colorado</Link>
              </div>
              <div>
                <Link to="/incentives/CT">Connecticut</Link>
              </div>
              <div>
                <Link to="/incentives/FL">Florida</Link>
              </div>
              <div>
                <Link to="/incentives/HI">Hawaii</Link>
              </div>
              <div>
                <Link to="/incentives/MD">Maryland</Link>
              </div>
              <div>
                <Link to="/incentives/MA">Massachusetts</Link>
              </div>
              <div>
                <Link to="/incentives/NV">Nevada</Link>
              </div>
              <div>
                <Link to="/incentives/NJ">New Jersey</Link>
              </div>
              <div>
                <Link to="/incentives/NY">New York</Link>
              </div>
              <div>
                <Link to="/incentives/SC">South Carolina</Link>
              </div>
              <div>
                <Link to="/incentives/TX">Texas</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
