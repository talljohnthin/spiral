import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { SET_PROGRESS } from "./../../redux/actions/progress/progressTypes";
import { SET_IS_HOME_OWNER } from "./../../redux/actions/data/dataTypes";
import useIsMounted from "ismounted";
import MdCheckmark from "react-ionicons/lib/MdCheckmark";
import MdClose from "react-ionicons/lib/MdClose";
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
    maxWidth: 650,
    margin: "8px auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Index = () => {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const isMounted = useIsMounted();
  const zipcode = useSelector((state) => state.data.zip_code);
  const homeOwner = useSelector((state) => state.data.do_you_own_your_home);
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
      payload: 3,
    });
  }, []);

  const handleSetHomeOwner = (isHomeOwner) => {
    dispatch({
      type: SET_IS_HOME_OWNER,
      payload: isHomeOwner,
    });
    history.push("/provider");
  };

  if (redirect) {
    return <Redirect to="/flow" />;
  }

  return (
    <Fragment>
      <Container component="main" className="section-flow section-home-owners">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="primary-heading">Do you own your home?</div>
          <div className="home-owners-wrapper">
            <div className="box--wrapper">
              <div
                className="box"
                style={
                  homeOwner === "Yes" ? { border: "2px solid #2196f3" } : null
                }
                onClick={() => handleSetHomeOwner("Yes")}
              >
                <span>
                  <span>
                    <MdCheckmark
                      className="icon"
                      fontSize={dimensions.width < 768 ? "20px" : "90px"}
                      color="#48bf91"
                    />
                  </span>
                  <span className="text">Yes</span>
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
                  homeOwner === "No" ? { border: "2px solid #2196f3" } : null
                }
                onClick={() => handleSetHomeOwner("No")}
              >
                <span>
                  <span>
                    <MdClose
                      className="icon"
                      fontSize={dimensions.width < 768 ? "20px" : "90px"}
                      color="#f44438"
                    />
                  </span>
                  <span className="text">No</span>
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
