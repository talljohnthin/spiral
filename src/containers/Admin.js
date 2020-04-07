import React, { useEffect, useState } from 'react'
import firebase from './../config/firebase'
import TopTab from './../components/header/TopTab'
import { Redirect } from 'react-router-dom'
import useIsMounted from 'ismounted';

import {
    makeStyles,
    Container,
    Card,
    CssBaseline,
    CardContent,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        paddingLeft:30,
        paddingRight:30,
        textAlign:'center',
        marginBottom:0
    },
    name: {
        fontSize:20,
        textAlign:'center'
    }
}));

export default function Admin() {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const isMounted = useIsMounted();


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                if (isMounted.current) {
                    setIsLogin(true)
                    setName(user.displayName)
                }
            } else {
                if (isMounted.current) {
                    setIsLogin(false)
                }
            }
        });
    }, [])

    const handleLogout = () => {
        firebase.auth().signOut()
    }

    if (!isLogin) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <TopTab logout={() => handleLogout()} />
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.paper}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Welcome
                            </Typography>
                            <Typography className={classes.name} color="textSecondary" gutterBottom>
                                { name }
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
