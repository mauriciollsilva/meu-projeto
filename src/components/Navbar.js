// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #e0dcd6;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => (
  <NavbarWrapper>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/about">Sobre</Link>
      <Link to="/photos">Fotos</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/login">Login</Link>
    </div>
  </NavbarWrapper>
);

export default Navbar;
