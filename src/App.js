import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Flow from "./components/flow/Index";
import PowerBill from "./components/powerbill/Index";
import Address from "./components/address/Address";
import Change from "./components/address/Change";
import Header from "./components/header/Index";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Route path="/" exact component={Flow} />
        <Route path="/powerbill" exact component={PowerBill} />
        <Route path="/address" exact component={Address} />
        <Route path="/address/change" exact component={Change} />
      </Router>
    </Fragment>
  );
};
export default App;
