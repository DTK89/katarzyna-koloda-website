import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import Placeholder from 'components/organisms/Placeholder/Placeholder';
import './index.scss';

function Root() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Placeholder} />
        <Route path="/cennik" component={Placeholder} />
        <Route path="/contact" component={Placeholder} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
