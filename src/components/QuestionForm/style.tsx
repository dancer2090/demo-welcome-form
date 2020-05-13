import { makeStyles, withStyles } from '@material-ui/core/styles';
import { bpTheme } from 'utils/breakpoints';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 75,
    background: '#E5E5E5',
  },
  container: {
    maxWidth: '720px',
  },
  paper: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '80px',
    paddingRight: '80px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    background: '#FFFFFF',
    [bpTheme.breakpoints.down("sm")]: {
      paddingTop: '30px',
      paddingBottom: '30px',
      paddingLeft: '35px',
      paddingRight: '35px',
    }
  },
  submitButton: {
    display: 'block',
    margin: '0 auto',
    marginTop: '16px',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '70px',
    paddingRight: '70px',
    background: '#004AFF',
    borderRadius: '4px',
    boxShadow: 'none',
  }
}));

export const StyledRadio = withStyles({
    root: {
      marginTop: '-9px',
      color:'rgba(0, 0, 0, 0.54);',
      '&$checked':{
        color: '#004AFF',
        '&:hover':{
          backgroundColor: 'rgba(0, 74, 255, 0.04)',
        }
      },
      '&:hover':{
        backgroundColor: 'rgba(0, 74, 255, 0.04)',
      }
    },
    checked: {},
  })(Radio);

export const StyledCheckbox = withStyles({
    root: {
      marginTop: '-9px',
      color:'rgba(0, 0, 0, 0.54);',
      '&$checked':{
        color: '#004AFF',
        '&:hover':{
          backgroundColor: 'rgba(0, 74, 255, 0.04)',
        }
      },
      '&:hover':{
        backgroundColor: 'rgba(0, 74, 255, 0.04)',
      }
    },
    checked: {},
  })(Checkbox);

export const StyledFormControlLabel = withStyles({
    root: {
      alignItems: 'flex-start',
      marginTop: 20,
    },
    label: {
      marginTop: 0,
    }
  })(FormControlLabel);