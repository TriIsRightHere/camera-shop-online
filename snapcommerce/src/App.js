import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/product" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
