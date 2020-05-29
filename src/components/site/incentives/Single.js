import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { getIncentives } from "./../../../redux/actions/site/siteActions";
import HeroImg from "./../../../assets/images/sites/states.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, FormControl, Select, Button } from "@material-ui/core";

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

const Index = (props) => {
  const paramState = props.match.params.state;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const incentives = useSelector((state) => state.site.incentives);
  const [selectedState, setSelectedState] = useState("");

  const getData = () => {
    const filteredData = incentives.filter((e) => e.short_name === paramState);
    setData(filteredData[0]);
  };

  useEffect(() => {
    if (!incentives.length) {
      dispatch(getIncentives());
    }
    getData();
  }, [dispatch, incentives]);

  useEffect(() => {
    dispatch(setCurrentView(false));
  }, []);

  const handleLoadState = () => {
    const filteredData = incentives.filter(
      (e) => e.short_name === selectedState
    );
    setData(filteredData[0]);
    history.push(`/incentives/${selectedState}`);
  };

  const renderImage = () => {
    if (typeof data?.image !== "undefined") {
      return (
        <img
          src={require(`../../../assets/images/sites/states/${data?.image}`)}
        />
      );
    }
  };

  return (
    <>
      <div className="incentives--single-wrapper">
        <div
          className="cover"
          style={{
            background: `url(${HeroImg})`,
          }}
        ></div>
        <section className="section section-hero">
          <div className="section--container">
            <div className="breadcrumb">
              <Link to="/incentives">Solar Incentives</Link> >
              <span> {data?.state} </span>
            </div>
            <div className="section--box">
              {renderImage()}
              <h1 className="primary-heading">{data?.title}</h1>
              <div className="boxes">
                {data?.list?.map((e, i) => {
                  return (
                    <div className="box" key={i}>
                      <div className="box--title">{e.list_title}</div>
                      <div className="box--text">{e.list_descriptions}</div>
                    </div>
                  );
                })}
              </div>
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
                    onClick={handleLoadState}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
