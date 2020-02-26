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
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
}));

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
    history.push('/result')
  }

  return (
    <Container>
      {answers.map((a)=> {
        const q: QuestionInterface | any = questions.find(q => q.key === a.key);
        return (
          <Paper className={classes.paper} key={q.key}>
            <Typography variant="h5">{q.alias}</Typography>
            <div>
              {q.type === 'radio' && (
                <RadioGroup aria-label="gender" name={a.key} value={a.value} onChange={(e: any) => handleChangeRadio(e, q.key)}>
                  {q.options.length > 0 && q.options.map((option: OptionInterface) => (
                    <FormControlLabel key={option.key} value={option.key} control={<Radio />} label={option.alias} />
                  ))}
                </RadioGroup>
              )}

              {q.type === 'checkbox' && (
                <FormGroup>
                  {q.options.length > 0 && q.options.map((option: OptionInterface) => (
                    <FormControlLabel
                      key={option.key}
                      control={<Checkbox checked={a.value.indexOf(option.key) !== -1} onChange={(e: any) => handleChangeCheckbox(e, q.key)} value={option.key} />}
                      label={option.alias}
                    />
                  ))}
                </FormGroup>
              )}
            </div>
          </Paper>
      )})}
      <Button onClick={() => completeTest()} variant="contained" color="primary">Complete the test</Button>
    </Container>
  )
};

export default QuestionForm;