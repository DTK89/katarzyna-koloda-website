import React from 'react';
import './Root.css';
import Header from 'components/Header';
// import Placeholder from 'components/Placeholder';
import HomePage from 'views/HomePage';

function Root() {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default Root;
