import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import MainPage from 'views/MainPage/MainPage';
import Placeholder from 'components/organisms/Placeholder/Placeholder';
import './index.scss';

function Root() {
  return (
    <BrowserRouter>
      <NavBar style={{ zIndex: '99999' }} />
      <MainPage style={{ zIndex: '90' }} />
      <Switch>
        <Route exact path="/" component={Placeholder} />
        <Route path="/cennik" component={Placeholder} />
        <Route path="/contact" component={Placeholder} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
