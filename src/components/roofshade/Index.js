import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { SET_ROOF_SHADE } from "./../../redux/actions/data/dataTypes";
import useIsMounted from "ismounted";
import noShade from "./../../assets/images/noshade.png";
import littleShade from "./../../assets/images/littleshade.png";
import lotsOfShade from "./../../assets/images/lotofshade.png";
import uncertain from "./../../assets/images/uncertain.png";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";
import { useHistory } from "react-router-dom";

import { makeStyles, Container, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
    maxWidth: 800,
    margin: "8px auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Index = () => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const isMounted = useIsMounted();
  const zipcode = useSelector((state) => state.data.zip_code);
  const roof_shade = useSelector((state) => state.data.roof_shade);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (!zipcode) {
      setRedirect(true);
    }
    dispatch({
      type: SET_PROGRESS,
      payload: 5,
    });
  }, []);

  const handleRoofShade = (value) => {
    dispatch({
      type: SET_ROOF_SHADE,
      payload: value,
    });
    setRedirectToNext(true);
    history.push("/address");
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow section-roofshade">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">
            How much roof shade do you have?
          </div>
          <div className="roofshade-wrapper">
            <div className="box--wrapper">
              <div
                className="box"
                style={
                  roof_shade === "No Shade"
                    ? { border: "2px solid #2196f3" }
                    : null
                }
                onClick={() => handleRoofShade("No Shade")}
              >
                <span>
                  <span>
                    <img src={noShade} alt="No Shade" className="home home-1" />
                  </span>
                  <span className="text">No Shade</span>
                </span>
                <span>
                  <IosArrowForward
                    className="mobile-icon"
                    style={
                      dimensions.width < 768
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    fontSize="20px"
                  />
                </span>
              </div>
              <div
                className="box"
                style={
                  roof_shade === "A Little Shade"
                    ? { border: "2px solid #2196f3" }
                    : null
                }
                onClick={() => handleRoofShade("A Little Shade")}
              >
                <span>
                  <span>
                    <img
                      src={littleShade}
                      alt="A Little Shade"
                      className="home home-2"
                    />
                  </span>
                  <span className="text">A Little Shade</span>
                </span>
                <span>
                  <IosArrowForward
                    className="mobile-icon"
                    style={
                      dimensions.width < 768
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    fontSize="20px"
                  />
                </span>
              </div>
              <div
                className="box"
                style={
                  roof_shade === "A Lot Of Shade"
                    ? { border: "2px solid #2196f3" }
                    : null
                }
                onClick={() => handleRoofShade("A Lot Of Shade")}
              >
                <span>
                  <span>
                    <img
                      src={lotsOfShade}
                      alt="A Lot Of Shade"
                      className="home home-3"
                    />
                  </span>
                  <span className="text">A Lot Of Shade</span>
                </span>
                <span>
                  <IosArrowForward
                    className="mobile-icon"
                    style={
                      dimensions.width < 768
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    fontSize="20px"
                  />
                </span>
              </div>
              <div
                className="box"
                style={
                  roof_shade === "Uncertain"
                    ? { border: "2px solid #2196f3" }
                    : null
                }
                onClick={() => handleRoofShade("Uncertain")}
              >
                <span>
                  <span>
                    <img
                      src={uncertain}
                      alt="Home Icon"
                      className="home home-4"
                    />
                  </span>
                  <span className="text">Uncertain</span>
                </span>
                <span>
                  <IosArrowForward
                    className="mobile-icon"
                    style={
                      dimensions.width < 768
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    fontSize="20px"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
