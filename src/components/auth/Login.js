import React, { useState, useEffect } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import firebase from './../../config/firebase'
import { Redirect } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import useIsMounted from 'ismounted';

import {
  makeStyles,
  Container,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const isMounted = useIsMounted();

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (email === '' || password === '') {
      setErrorMessage('Email and Password cannot be empty.')
      setIsLoading(false)
      return
    }
    const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
      if(isMounted.current) {
        setIsLoading(false)
        setErrorMessage(err.message)
      }
      return null
    })
    if (user) {
      if(isMounted.current) {
        setIsLoading(false)
        setErrorMessage('')
        setSuccessMessage('Login Successfully!')
      }
      setTimeout(() => {
        if(isMounted.current) setRedirect(true)
      }, 400)
    }
  }

  if (redirect) {
    return <Redirect to="/" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon color="primary"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          {
            successMessage && (<Alert severity="success">{successMessage}</Alert>)
          }
          {
            isLoading ? (<Alert severity="warning">Please wait...</Alert>) :
            errorMessage && (<Alert severity="error">{errorMessage}</Alert>)
          }
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => handleLogin(e)}
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>

            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login