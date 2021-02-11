import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordion from 'components/organisms/Accordion';

const Container = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 5rem auto;
  display: grid;
  gap: 1rem 2rem;
`;

const Accordions = ({ data }) => {
  const [accordionData] = useState(data);
  const [activeAcc, setActiveAcc] = useState(0);

  return (
    <Container>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={accordion.id}
          accTitle={accordion.accTitle}
          accContent={accordion.accContent}
          tableOption={accordion.tableOption}
          index={index}
          active={activeAcc}
          setActive={setActiveAcc}
        />
      ))}
    </Container>
  );
};

Accordions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // duration: PropTypes.number.isRequired, // Should no be required / Consider to add option
  // opened: PropTypes.number.isRequired, // Should no be required / Consider to add option
};

export default Accordions;
