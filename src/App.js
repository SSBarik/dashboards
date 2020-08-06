import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar'
import Dashboards from './views/Dashboards'
import Spaces from './views/Spaces'
import Analytics from './views/Analytics'
import Live from './views/Live'
import SafeDisplay from './views/SafeDisplay'
import Support from './views/Support'
import Admin from './views/Admin'
import Account from './views/Account'
import PageNotFound from './views/PageNotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboards} />
          <Route path="/spaces" exact component={Spaces} />
          <Route path="/analytics" exact component={Analytics} />
          <Route path="/live" exact component={Live} />
          <Route path="/safedisplay" exact component={SafeDisplay} />
          <Route path="/support" exact component={Support} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/account" exact component={Account} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
