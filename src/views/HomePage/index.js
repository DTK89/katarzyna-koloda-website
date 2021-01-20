import React from 'react';
import Placeholder from 'components/Placeholder';

import styled from 'styled-components';

const PageWrapper = styled.div`
  /* margin-top: 100px; */
  width: 100%;
  background: var(--clr-trinary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const SkewContainerUp = styled.div`
//   transform: skew(0deg, 2deg);
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 120px;
//   width: 100%;
//   background-color: red;
// `;
// const SkewContainerDown = styled.div`
//   /* transform: skew(0deg, 2deg);
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   height: 120px;
//   width: 100%;
//   background-color: green;
//   z-index: 50; */

//   :after {
//     position: absolute;
//     content: ' ';
//     display: block;
//     left: -5%;
//     bottom: -10px;
//     transform: rotate(2deg);
//     width: 110%;
//   }
// `;

const HomePage = () => (
  <PageWrapper>
    <Placeholder secondary scrollId="home">
      Slide Carousel
    </Placeholder>
    <Placeholder scrollId="zabiegi">Pricing</Placeholder>
    <Placeholder secondary scrollId="urzadzenia">
      Devices
    </Placeholder>
    <Placeholder scrollId="about">About</Placeholder>
    <Placeholder secondary scrollId="contact">
      Contact
    </Placeholder>
  </PageWrapper>
);

export default HomePage;
