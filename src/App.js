import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp';
import Admin from './containers/Admin';

const App = () => {
  return <Fragment>
    <Router>
      <Route path="/" exact component={Admin} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  </Fragment>
}
export default App