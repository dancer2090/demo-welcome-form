import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// redux begin
import { Provider } from 'react-redux';
import { store } from './reducers';
// redux end
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from 'pages/Login';
import Welcome from 'pages/Welcome';
import Result from 'pages/Result';
import { getStore } from 'utils/localStore';
import { defaultAnswers } from 'utils/questions';
import { bpTheme } from 'utils/breakpoints';
import './App.css';

const ProtectedRoute = ( props: any ) => {
  return getStore('jwt') === process.env.REACT_APP_JWT ? 
    <Route {...props} /> :
    <Redirect to="/" />
}

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 55,
      lineHeight: '18px',
      textAlign: 'center',
      [bpTheme.breakpoints.down("sm")]: {
        fontSize: 41,
        lineHeight: '18px',
      },
    },
    h3: {
      fontSize: 24,
      lineHeight: '28px',
      textAlign: 'center',
      [bpTheme.breakpoints.down("sm")]: {
        fontSize: 18,
        lineHeight: '21px',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)',
      [bpTheme.breakpoints.down("sm")]: {
        fontSize: 17,
        lineHeight: '19px',
      },
    },
    body1: {
      fontSize: 18,
      lineHeight: '24px',
      marginTop: '15px',
      [bpTheme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: '19px',
        textAlign: 'justify',
      },
    }
  },
});

function App() {

  const [answers, setAnswers] = useState(defaultAnswers);
  const [isCompleted, setCompleted] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/welcome" render={(props: any) => <Welcome {...props} setAnswers={setAnswers} setCompleted={setCompleted} />} component={Welcome} />
            <ProtectedRoute exact path="/result" render={(props: any) => <Result {...props} answers={answers} isCompleted={isCompleted} /> } />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
