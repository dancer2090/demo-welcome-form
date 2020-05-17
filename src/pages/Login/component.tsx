import React, { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "components/Logo";
import { validateEmailField, validatePasswordField } from "utils/validate";
import { setStore, getStore } from "utils/localStore";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href={process.env.REACT_APP_MAIN_WEBSITE_URL}
      >
        frontback.org
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  function validateForm(): boolean {
    const getEmailErrors: string[] = validateEmailField(email);
    const getPasswordErrors: string[] = validatePasswordField(password);
    const getEmailError: string = getEmailErrors.length
      ? getEmailErrors[0]
      : "";
    const getPasswordError: string = getPasswordErrors.length
      ? getPasswordErrors[0]
      : "";
    setEmailError(getEmailError);
    setPasswordError(getPasswordError);
    return getEmailErrors.length === 0 && getPasswordError.length === 0;
  }

  function submitForm(e: FormEvent) {
    e.preventDefault();
    if (validateForm()) {
      setStore("jwt", `${process.env.REACT_APP_JWT}`);
      history.push("/welcome");
      window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    const key: string = getStore("jwt");
    if (key) history.push("/welcome");
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <br />
        <br />
        <Typography component="h1" variant="h2">
          Sign in
        </Typography>
        <br />
        <br />
        <Typography component="p" variant="body2">
          This is a demo project. Please, use this credencials to enter:
          <br />
          <br />
          login: {process.env.REACT_APP_LOGIN}
          <br />
          password: {process.env.REACT_APP_PASSWORD}
        </Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError.length > 0}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError.length > 0}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
