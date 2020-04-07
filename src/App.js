import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getCategories } from './redux/actions/category/categoryActions'
import { getSegments } from './redux/actions/segment/segmentActions'
import Login from './components/auth/Login'

import { useDispatch } from 'react-redux'
import useIsMounted from 'ismounted';
import SignUp from './components/auth/SignUp';
import Admin from './containers/Admin';


const App = () => {
  const isMounted = useIsMounted()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isMounted.current) {
      dispatch(getCategories())
      dispatch(getSegments())
    }
  }, [dispatch, isMounted])

  return <Fragment>
    <Router>
      <Route path="/" exact component={Admin} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  </Fragment>
}
export default App