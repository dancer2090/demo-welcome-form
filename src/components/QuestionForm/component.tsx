import React, { useState } from 'react';
import { 
  questions, 
  defaultAnswers, 
  UserAnswerInterface,
  QuestionInterface,
  OptionInterface,
} from 'utils/questions';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { bpTheme } from 'utils/breakpoints';
import { StyledRadio, StyledCheckbox, StyledFormControlLabel, useStyles } from './style';


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const QuestionForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [answers, updateAnswers] = useState<UserAnswerInterface[]>(defaultAnswers || []);
  
  const handleChangeRadio = (e: any, key: string) => {
    const elementId:number = answers.findIndex((a: UserAnswerInterface) => a.key === key) || 0;
    answers[elementId].value = e.target.value;
    const newAnswers = answers.slice();
    updateAnswers(newAnswers);
  }
  
  const handleChangeCheckbox = (e: any, key: string) => {
    const elementId:number = answers.findIndex((a: UserAnswerInterface) => a.key === key) || 0;
    const { value: oldValues }: UserAnswerInterface = answers[elementId];
    const newValue = e.target.value;
    const valueIndex = oldValues.indexOf(newValue);
    if (valueIndex === -1) { 
      oldValues.push(newValue);
    } else {
      oldValues.splice(valueIndex, 1);
    }
    answers[elementId].value = oldValues;
    const newAnswers = answers.slice();
    updateAnswers(newAnswers);
  }

  const completeTest = () => {
    actionComplete(answers);
    history.push('/result')
  }

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
            <Typography variant="h3">Heading</Typography>
            <Typography>Description "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</Typography>
            <Typography>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
        </Paper>
        {answers.map((a)=> {
          const q: QuestionInterface | any = questions.find(q => q.key === a.key);
          return (
            <Paper className={classes.paper} key={q.key}>
              <Typography variant="h5">{q.alias}</Typography>
              <div>
                {q.type === 'radio' && (
                  <RadioGroup aria-label="gender" name={a.key} value={a.value} onChange={(e: any) => handleChangeRadio(e, q.key)}>
                    {q.options.length > 0 && q.options.map((option: OptionInterface) => (
                      <StyledFormControlLabel key={option.key} value={option.key} control={<StyledRadio />} label={option.alias} />
                    ))}
                  </RadioGroup>
                )}

                {q.type === 'checkbox' && (
                  <FormGroup>
                    {q.options.length > 0 && q.options.map((option: OptionInterface) => (
                      <StyledFormControlLabel
                        key={option.key}
                        control={<StyledCheckbox checked={a.value.indexOf(option.key) !== -1} onChange={(e: any) => handleChangeCheckbox(e, q.key)} value={option.key} />}
                        label={option.alias}
                      />
                    ))}
                  </FormGroup>
                )}
              </div>
            </Paper>
        )})}
        <Button className={classes.submitButton} onClick={() => completeTest() } variant="contained" color="primary">Send</Button>
      </Container>
    </section>
  )
};


const actionComplete = (newAnswers = defaultAnswers) => {
  console.log(newAnswers);
  return {
      type: 'ACTION_COMPLETE',
      payload: newAnswers,
  }
}

const mapStateToProps = (state : UserAnswerInterface[]) => {
  console.log(state);
  return {
    answers : state
  }
};

const dispatchActionsToProps = (dispatch : any) => {
  return {
    actionComplete: bindActionCreators(actionComplete, dispatch)
  }
};


const WrappedMainComponent = connect(mapStateToProps, dispatchActionsToProps)(QuestionForm);

export default WrappedMainComponent