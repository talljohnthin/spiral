import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Flow from "./components/flow/Index";
import PowerBill from "./components/powerbill/Index";
import Address from "./components/address/Address";
import Change from "./components/address/Change";
import Search from "./components/autocomplete/Index";
import Header from "./components/header/Index";
import HomeOwner from "./components/homeowner/Index";
import Provider from "./components/provider/Index";
import Results from "./components/results/Results";
import ProofShade from "./components/roofshade/Index";
import Personal from "./components/personal/Index";
import Email from "./components/email/Index";
import Phone from "./components/phone/Index";
import Progress from "./components/header/Progress";
import Footer from "./components/footer/Index";

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

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
  return (
    <Fragment>
      <Header />
      {dimensions.width < 767 ? (
        <div style={{ padding: "0 20px", marginTop: 30 }}>
          <Progress />{" "}
        </div>
      ) : null}
      <Router>
        <Route path="/" exact component={Flow} />
        <Route path="/powerbill" exact component={PowerBill} />
        <Route path="/address" exact component={Address} />
        <Route path="/address/change" exact component={Change} />
        <Route path="/address/search" exact component={Search} />
        <Route path="/homeowner" exact component={HomeOwner} />
        <Route path="/provider" exact component={Provider} />
        <Route path="/roofshade" exact component={ProofShade} />
        <Route path="/name" exact component={Personal} />
        <Route path="/email" exact component={Email} />
        <Route path="/tel" exact component={Phone} />
        <Route path="/results" exact component={Results} />
      </Router>
      <Footer />
    </Fragment>
  );
};
export default App;
