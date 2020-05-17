import React, { useState, FormEvent, useEffect } from "react";
import { questions, resultConfig } from "utils/questions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import { validateTextField } from "utils/validate";
import { useStyles } from "./style";
import ReduxImage from "images/redux.png";
import ReactImage from "images/react.svg";
import TSImage from "images/typescript.svg";
import NodeImage from "images/node.svg";
import WebpackImage from "images/webpack.svg";
import JSImage from "images/js.svg";
import CSS3Image from "images/css3.svg";
import HTMLImage from "images/html5.svg";
import Photo from "images/author.png";

const Result = (props: any) => {
  const classes = useStyles();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [feedbackError, setFeedbackError] = useState<string>("");

  function validateForm(): boolean {
    const getFeedbackErrors: string[] = validateTextField(feedback);
    const getFeedbackError: string = getFeedbackErrors.length
      ? getFeedbackErrors[0]
      : "";
    setFeedbackError(getFeedbackError);
    return getFeedbackErrors.length === 0;
  }

  function validateModalForm(): boolean {
    const getNameErrors: string[] = validateTextField(name);
    const getNameError: string = getNameErrors.length ? getNameErrors[0] : "";
    setNameError(getNameError);

    const getEmailErrors: string[] = validateTextField(email);
    const getEmailError: string = getEmailErrors.length
      ? getEmailErrors[0]
      : "";
    setEmailError(getEmailError);

    const getMessageErrors: string[] = validateTextField(message);
    const getMessageError: string = getMessageErrors.length
      ? getMessageErrors[0]
      : "";
    setMessageError(getMessageError);

    return (
      getNameErrors.length === 0 ||
      getEmailErrors.length === 0 ||
      getMessageErrors.length === 0
    );
  }

  function submitForm(e: FormEvent) {
    e.preventDefault();
    if (validateForm()) {
      const submitData = {
        type: "contact-us",
        fields: {
          your_text: feedback,
        },
      };
      const url = "https://frontback.org/api/email";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        setFeedback("");
        handleOpenThanks();
      });
    }
  }

  function submitModal(e: FormEvent) {
    e.preventDefault();
    if (validateModalForm()) {
      const submitData = {
        type: "contact-us",
        fields: {
          your_name: name,
          your_email: email,
          your_text: message,
        },
      };
      const url = "https://frontback.org/api/email";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        setName("");
        setEmail("");
        setMessage("");
        handleClose();
        handleOpenThanks();
      });
    }
  }

  const defaultResultObj = resultConfig.less30;

  const [strokeDashoffset, updateStrokeDashoffset] = useState(90);
  const [circlePct, updateCirclePct] = useState(90);
  const [resultObj, updateResultObj] = useState(defaultResultObj);

  useEffect(() => {
    do_circle();
  }, []);

  const do_circle = () => {
    var resultCount = 0;
    var countQuestions = 0;

    props.answers.map((a: any, key: number) => {
      if (Array.isArray(a.value)) {
        a.value.map((subValues: any, subKey: number) => {
          var answerSubValue = questions[key].answer.value[subKey];
          if (subValues == answerSubValue) resultCount = resultCount + 1;
        });
      } else {
        if (a.value == questions[key].answer.value)
          resultCount = resultCount + 1;
      }
    });
    questions.map((a: any, key: number) => {
      if (Array.isArray(a.answer.value)) {
        countQuestions = countQuestions + a.answer.value.length;
      } else countQuestions = countQuestions + 1;
    });

    var val = Math.round(resultCount / (countQuestions / 100));
    if (val < 30) updateResultObj(resultConfig.less30);
    else if (val < 60) updateResultObj(resultConfig.less60);
    else updateResultObj(resultConfig.more60);

    if (isNaN(val)) {
      val = 100;
    } else {
      var r = 90;
      var c = Math.PI * (r * 2);

      if (val < 0) {
        val = 0;
      }
      if (val > 100) {
        val = 100;
      }

      var pct = ((100 - val) / 100) * c;

      updateStrokeDashoffset(pct);
      updateCirclePct(val);
    }
    return false;
  };

  const [open, setOpen] = useState(false);
  const [openThanks, setOpenThanks] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenThanks = () => {
    setOpenThanks(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenThanks(false);
  };

  return (
    <>
      <Container>
        <section className={classes.root}>
          <Typography className={classes.resultHeader} variant="h3">
            Thank you for passing this test!
          </Typography>
          <div className={classes.resultContainer}>
            <div className={classes.cont} data-pct={circlePct}>
              <svg
                className={classes.svgb}
                width="200"
                height="200"
                viewBox="0 0 200 200"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={classes.circleBg}
                  r="90"
                  cx="100"
                  cy="100"
                  fill="transparent"
                  strokeDasharray="565.48"
                  strokeDashoffset="0"
                ></circle>
                <circle
                  className={classes.bar}
                  stroke={resultObj.color}
                  r="90"
                  cx="100"
                  cy="100"
                  fill="transparent"
                  strokeDasharray="565.48"
                  strokeDashoffset={strokeDashoffset}
                ></circle>
              </svg>
            </div>
            <div className={classes.resultText}>
              <Typography className={classes.resultTextHeader} variant="h3">
                {resultObj.header}
              </Typography>
              <Typography>{resultObj.text}</Typography>
            </div>
          </div>

          <div className={classes.techContainer}>
            <div className={classes.techLeft}>
              <Typography className={classes.techLeftHeader} variant="h4">
                Technologies used
              </Typography>
              <Link
                href={process.env.REACT_APP_LINK_REP}
                className={classes.link}
                underline="none"
                color="primary"
              >
                VIEW CODE
              </Link>
            </div>
            <div className={classes.techRight}>
              <img alt="Redux" src={ReduxImage} />
              <img alt="React" src={ReactImage} />
              <img alt="Type Script" src={TSImage} />
              <img alt="Node js" src={NodeImage} />
              <img alt="Webpack" src={WebpackImage} />
              <img alt="JS" src={JSImage} />
              <img alt="CSS" src={CSS3Image} />
              <img alt="HTML" src={HTMLImage} />
            </div>
          </div>

          <form className={classes.form} onSubmit={submitForm}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="feedback"
              label="Your feedback about this demo"
              type="textarea"
              id="textarea"
              multiline={true}
              rows="3"
              rowsMax="3"
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback}
              error={feedbackError.length > 0}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
          </form>
        </section>
      </Container>
      <footer className={classes.footer}>
        <Container>
          <div className={classes.footerContainer}>
            <div className={classes.footerLeft}>
              <img src={Photo} className={classes.footerPhoto} />
              <div className={classes.authorInfo}>
                <div className={classes.authorText}>Contact persona</div>
                <div className={classes.authorName}>Ivan Ivaneichyk</div>
                <div className={classes.authorUrl}>frontback.org</div>
              </div>
            </div>
            <div className={classes.footerRight}>
              <div className={classes.letsWork}>lets work together!</div>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleOpen}
              >
                CONTACT US
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                closeAfterTransition
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <button
                      onClick={() => handleClose()}
                      className={classes.close}
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.0217 9.05103L24.8904 7.91966L16.9707 15.8393L9.05103 7.91968L7.91966 9.05105L15.8393 16.9707L7.9198 24.8902L9.05117 26.0216L16.9707 18.1021L24.8902 26.0216L26.0216 24.8902L18.1021 16.9707L26.0217 9.05103Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </button>
                    <Typography variant="h3">Заголовок формы</Typography>
                    <form className={classes.modalForm} onSubmit={submitModal}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={nameError.length > 0}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError.length > 0}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="message"
                        label="Message"
                        type="textarea"
                        id="textarea"
                        multiline={true}
                        rows="3"
                        rowsMax="3"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        error={messageError.length > 0}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Send
                      </Button>
                    </form>
                  </div>
                </Fade>
              </Modal>
              <Modal
                open={openThanks}
                onClose={handleClose}
                className={classes.modal}
                closeAfterTransition
              >
                <Fade in={openThanks}>
                  <div className={classes.paper}>
                    <button
                      onClick={() => handleClose()}
                      className={classes.close}
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.0217 9.05103L24.8904 7.91966L16.9707 15.8393L9.05103 7.91968L7.91966 9.05105L15.8393 16.9707L7.9198 24.8902L9.05117 26.0216L16.9707 18.1021L24.8902 26.0216L26.0216 24.8902L18.1021 16.9707L26.0217 9.05103Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </button>
                    <Typography className={classes.thanksHeader}>
                      Thank your for you feedback!
                    </Typography>
                  </div>
                </Fade>
              </Modal>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

const actionComplete2 = (newAnswers: any) => {
  console.log(newAnswers);
  return {
    type: "ACTION_COMPLETE",
    payload: newAnswers,
  };
};

const mapStateToProps2 = (state: any) => {
  console.log(state);
  return {
    answers: state,
  };
};

const dispatchActionsToProps2 = (dispatch: any) => {
  return {
    actionComplete: bindActionCreators(actionComplete2, dispatch),
  };
};

const WrappedResultComponent = connect(
  mapStateToProps2,
  dispatchActionsToProps2
)(Result);

export default WrappedResultComponent;
