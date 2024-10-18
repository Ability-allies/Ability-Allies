// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #282c34; /* Darker Header */
  color: #FFFFFF; /* White text */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Welcome, User</h1>
      <div>Profile</div>
    </HeaderContainer>
  );
};

export default Header;
