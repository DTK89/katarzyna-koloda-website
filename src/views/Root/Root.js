import React from 'react';
import './Root.css';
import Header from 'components/Header';
import HomePage from 'views/HomePage';

function Root() {
  return (
    <>
      <Header />
      <HomePage />
      {/* <Footer /> */}
    </>
  );
}

export default Root;
