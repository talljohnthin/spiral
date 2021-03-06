import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MdClose from "react-ionicons/lib/MdClose";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactUsModal({ isOpen, pleaseClose }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={pleaseClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="contact-modal-dialog"
      >
        <DialogTitle id="scroll-dialog-title" className="modalTitle">
          <span>Contact Us</span>
          <MdClose onClick={pleaseClose} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div style={{ textAlign: "right" }}>
              8383 Wilshire Blvd,
              <br />
              Suite 540 Los Angeles, CA 90211
              <br />
              sales@energybillcruncher.com
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={classes.form}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    inputRef={register({ required: true })}
                    error={errors.name ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    inputRef={register({
                      required: "E-mail required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    error={errors.email ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    id="message"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    //defaultValue="Default Value"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={[classes.submit, "primary-btn"]}
              >
                Submit
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
