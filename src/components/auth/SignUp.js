import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import firebase from './../../config/firebase'
import Alert from '@material-ui/lab/Alert';
import { Redirect } from "react-router-dom";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const isMounted = useIsMounted();

  const handleSignUp = (e) => {
    e.preventDefault()
    if (email && password) {
      setIsLoading(true)
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
          return result.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
          }).then(() => {
            if(isMounted.current) {
              setIsLoading(false)
              setErrorMessage('')
              setSuccessMessage('Signed Up Successfully')
            }
            setTimeout(() => {
              if(isMounted.current) {
                setFirstName('')
                setLastName('')
                setPassword('')
                setEmail('')
                setRedirect(true)
              }
            }, 300)
          })
        })
        .catch(error => {
          if(isMounted.current) {
            setErrorMessage(error.message)
            setIsLoading(false)
          }
        })
    } else {
      if(isMounted.current) setErrorMessage('Email & Password cannot be empty!')
    }
  }

  if (redirect) {
    return <Redirect to="/login" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon color="primary" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          {
            successMessage && (<Alert style={{marginBottom:15}} severity="success">{successMessage}</Alert>)
          }
          {
            isLoading ? (<Alert style={{marginBottom:15}} severity="warning">Please wait...</Alert>) : null
          }
          {
            errorMessage && (<Alert style={{marginBottom:15}} severity="error">{errorMessage}</Alert>)
          }
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>handleSignUp(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}