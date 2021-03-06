import { makeStyles } from "@material-ui/core/styles";
import { bpTheme } from "utils/breakpoints";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 105,
    borderLeft: "2px solid rgba(0, 0, 0, 0.2)",
    paddingBottom: 20,
    [bpTheme.breakpoints.down("sm")]: {
      marginTop: 75,
      borderLeft: "0px",
    },
  },
  resultContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "65px",
    position: "relative",
    [bpTheme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
  },
  resultHeader: {
    fontWeight: "bold",
    textTransform: "uppercase",
    [bpTheme.breakpoints.down("sm")]: {
      maxWidth: "220px",
      margin: "0 auto",
    },
  },
  circleBg: {
    strokeDashoffset: 0,
    stroke: "#C4C4C4",
  },
  svgb: {
    "& circle": {
      transition: "stroke-dashoffset 1s linear",
      strokeWidth: "22px",
    },
  },
  bar: {},
  cont: {
    display: "block",
    height: "200px",
    width: "200px",
    boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.25)",
    borderRadius: "100%",
    position: "relative",
    [bpTheme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "calc(50% - 100px)",
      top: "55px",
    },
    "&:after": {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "160px",
      width: "160px",
      left: "50%",
      top: "50%",
      content: 'attr(data-pct)"%"',
      marginTop: "-80px",
      marginLeft: "-80px",
      borderRadius: "100%",
      lineHeight: "64px",
      fontSize: "55px",
      textAlign: "center",
    },
  },

  resultText: {
    textAlign: "left",
    width: "288px",
    marginLeft: "55px",
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    [bpTheme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
    },
  },
  resultTextHeader: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: "28px",
    width: "100%",
    textAlign: "left",
    [bpTheme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "18px",
      lineHeight: "21px",
      marginBottom: "300px",
    },
  },
  techContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px",
    position: "relative",
    [bpTheme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  techLeft: {
    [bpTheme.breakpoints.down("sm")]: {
      // eslint-disable-next-line
      ["& button"]: {
        position: "absolute",
        top: "100%",
        left: "calc(50% - 90px)",
      },
    },
  },
  techRight: {
    marginLeft: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "300px",
    [bpTheme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    "& img": {
      margin: "3px",
    },
  },
  button: {
    display: "block",
    margin: "0 auto",
    marginTop: "16px",
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "180px",
    background: "#004AFF",
    borderRadius: "4px",
    boxShadow: "none",
    color: "#fff",
    border: "0px",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "21px",
    fontWeight: 500,
  },
  link: {
    display: "block",
    margin: "0 auto",
    marginTop: "16px",
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "180px",
    background: "#004AFF",
    borderRadius: "4px",
    boxShadow: "none",
    color: "#fff",
    border: "0px",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "21px",
    fontWeight: 500,
    // eslint-disable-next-line
    ["&:hover"]: {
      backgroundColor: "#303f9f",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      cursor: "pointer",
    },
  },
  techLeftHeader: {
    fontSize: "20px",
    lineHeight: "23px",
    fontWeight: 500,
    textAlign: "center",
    [bpTheme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "19px",
    },
  },
  form: {
    maxWidth: "500px", // Fix IE 11 issue.
    margin: "0 auto",
    marginTop: "80px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
    [bpTheme.breakpoints.down("sm")]: {
      marginTop: "100px",
    },
  },
  submit: {
    display: "block",
    marginTop: "20px",
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "180px",
    background: "#004AFF",
    borderRadius: "4px",
    boxShadow: "none",
    color: "#fff",
    border: "0px",
  },
  footer: {
    background: "#0C0B0B",
    color: "#fff",
  },
  footerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "2px solid rgba(255, 255, 255, 0.2)",
    minHeight: "400px",
    [bpTheme.breakpoints.down("sm")]: {
      borderRight: "0px",
      flexWrap: "wrap",
      alignItems: "flex-start",
      paddingTop: "40px",
      minHeight: "0px",
      paddingBottom: "80px",
    },
  },
  footerLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    [bpTheme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  footerRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    flexWrap: "wrap",
    [bpTheme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "45px",
    },
  },
  footerPhoto: {
    borderRadius: "360px",
    [bpTheme.breakpoints.down("sm")]: {
      width: "110px",
    },
  },
  authorInfo: {
    marginLeft: "40px",
    [bpTheme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
  },
  authorName: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 500,
    letterSpacing: "0.015em",
    [bpTheme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: "21px",
    },
  },
  authorText: {
    fontSize: "20px",
    lineHeight: "23px",
    [bpTheme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "16px",
    },
  },
  authorUrl: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 500,
    marginTop: "30px",
    [bpTheme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: "21px",
      marginTop: "24px",
    },
  },
  authorUrlLink: {
    color: '#ffffff',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: 'blue',
    }
  },
  letsWork: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 700,
    letterSpacing: "0.015em",
    width: "100%",
    fontVariant: "small-caps",
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  thanksHeader: {
    fontSize: "36px",
    lineHeight: "42px",
    textAlign: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "65px",
    paddingBottom: "74px",
    maxWidth: "580px",
    width: "100%",
    position: "relative",
    "&:focus": {
      outline: "none",
    },
  },
  modalForm: {
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "60px",
  },
  close: {
    background: "transparent",
    border: "0",
    padding: "0px",
    position: "absolute",
    bottom: "100%",
    right: "-60px",
    outline: "none",
    cursor: "pointer",
    "& svg path": {
      transition: "all 0.2s ease",
    },
    "&:hover svg path": {
      fill: "#000",
    },
  },
}));
