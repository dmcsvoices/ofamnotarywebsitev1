import React from 'react'
import logo from '../logo.svg';
import HorzNav from './HorzNav';
import '../App.css';

import styled from 'styled-components';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { withTheme } from 'styled-components';

const Div = styled.div`
  background-color: #8F0000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
`;

const Div2 = styled.div`
  padding: 1px;
  background-color: #0096a3;
  display: flex;
  flex-direction: row;
  justify-content: center; 
`;

const H3 = styled.h3`
  color: white;
  `;

function Header() {
  return (
    <>
    <Div>
      <header className="App-header"><img src="../OfamNotaryLogo2022.png" className="App-logo" alt="logo"/></header><H3>Serving Oceanside, Carlsbad, and Encinitas</H3>
    </Div> 
    <Div2> 
      <HorzNav />
    </Div2>
  </>  
    

  )
}

export default Header