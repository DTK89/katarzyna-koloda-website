import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px 10px 15px 10px;
`;

const Container = styled.table`
  font-family: 'Montserrat', sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: white;

  th {
    color: var(--clr-trinary);
    background-color: var(--clr-primary);
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #ddd;
    padding: 2px;
  }

  td {
    min-width: 50px;
    border: 1px solid #ddd;
    padding: 5px 2px;
    font-size: 13px;
    font-weight: 300;
    text-align: center;

    p {
      font-size: 10px;
      margin: 0;
    }
  }

  tr {
    &:nth-child(even) {
      background-color: var(--clr-trinary);
    }
  }

  @media screen and (min-width: 768px) {
    th {
      font-size: 2rem;
      border: 1px solid #ddd;
      padding: 5px;
    }

    td {
      min-width: 50px;
      border: 1px solid #ddd;
      padding: 10px 5px;
      font-size: 1.7rem;
    }

    tr {
      &:nth-child(even) {
        background-color: var(--clr-trinary);
      }
    }
  }
`;

const PriceTable = ({ tableContent, primary }) => (
  <Wrapper>
    <Container>
      <thead>
        <tr>
          <th rowSpan="2" scope="col">
            Obszar
          </th>
          <th rowSpan="2" scope="col">
            Czas
          </th>
          <th colSpan="3" scope="colgroup">
            Cena za zabieg (cena/ilość)
          </th>
        </tr>
        <tr>
          <th scope="col">1</th>
          {primary ? <th scope="col">6</th> : <th scope="col">5</th>}
          {primary ? <th scope="col">12</th> : null}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((row) => (
          <tr key={row.id}>
            <td>
              {row.descriptionGeneral}
              <br /> <p>{row.descriptionDetails}</p>
            </td>
            <td>{row.time}</td>
            <td>{row.price1}</td>
            <td>{row.price6}</td>
            {primary ? <td>{row.price12}</td> : null}
          </tr>
        ))}
      </tbody>
    </Container>
  </Wrapper>
);
// };

PriceTable.propTypes = {
  tableContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  primary: PropTypes.bool,
};

PriceTable.defaultProps = {
  primary: true,
};

export default PriceTable;
