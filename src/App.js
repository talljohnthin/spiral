import React, { Fragment } from "react";
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

const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Route path="/" exact component={Flow} />
        <Route path="/powerbill" exact component={PowerBill} />
        <Route path="/address" exact component={Address} />
        <Route path="/address/change" exact component={Change} />
        <Route path="/address/search" exact component={Search} />
        <Route path="/homeowner" exact component={HomeOwner} />
        <Route path="/provider" exact component={Provider} />
        <Route path="/results" exact component={Results} />
      </Router>
    </Fragment>
  );
};
export default App;
