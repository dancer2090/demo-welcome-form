import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './pages/Login';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
