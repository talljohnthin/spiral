import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIncentives } from "./../../../redux/actions/site/siteActions";
import HeroImg from "./../../../assets/images/sites/states.jpg";
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

const Index = (props) => {
  const paramState = props.match.params.state;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const incentives = useSelector((state) => state.site.incentives);

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
              <img
                src={require("./../../../assets/images/sites/America.png")}
              />
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
