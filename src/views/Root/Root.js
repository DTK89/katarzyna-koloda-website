import React from 'react';
import GlobalTemplate from 'templates/GlobalTemplate';
// import './Root.css';
import HomePage from 'templates/HomePageTemplate';

function Root() {
  return (
    <>
      <GlobalTemplate>
        <HomePage />
      </GlobalTemplate>
    </>
  );
}

export default Root;
