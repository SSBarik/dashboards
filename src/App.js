import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from './components/navigation/AppBar'
import ResAppBar from './components/ResAppBar'
import Dashboards from './views/Dashboards'
import PageNotFound from './views/PageNotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route path="/" exact component={Dashboards} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
