import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from 'pages/Login';
import Welcome from 'pages/Welcome';
import Result from 'pages/Result';
import { getStore } from 'utils/localStore';
import { defaultAnswers } from 'utils/questions';
import './App.css';

const ProtectedRoute = ( props: any ) => {
  return getStore('jwt') === process.env.REACT_APP_JWT ? 
    <Route {...props} /> : 
    <Redirect to="/" />
}

function App() {

  const [answers, setAnswers] = useState(defaultAnswers);
  const [isCompleted, setCompleted] = useState(false);

  return (
    <ThemeProvider theme={createMuiTheme()}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/welcome" render={(props: any) => <Welcome {...props} setAnswers={setAnswers} setCompleted={setCompleted} />} component={Welcome} />
          <ProtectedRoute exact path="/result" render={(props: any) => <Result {...props} answers={answers} isCompleted={isCompleted} /> } />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
