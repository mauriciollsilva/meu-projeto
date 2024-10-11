// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #e0dcd6;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Meu Site Minimalista</p>
  </FooterWrapper>
);

export default Footer;
