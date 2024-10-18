// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #FFFFFF; /* White background for cards */
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: #1E1E2F; /* Dark text for contrast */
`;

const Card = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardContainer>
  );
};

export default Card;
