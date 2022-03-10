import React from 'react'
import logo from '../logo.svg';
import HorzNav from './HorzNav';
import '../App.css';

import styled from 'styled-components';

const Div = styled.div`
  background-color: rgb(11, 174, 45);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
`;

const Div2 = styled.div`
  padding: 1px;
  background-color: rgb(46, 163, 0);
  display: flex;
  flex-direction: row;
  justify-content: center; 
`;

function Header() {
  return (
    <>
    <Div>
      <header className="App-header"><img src={logo} className="App-logo" alt="logo"/></header><h3>Serving Oceanside, Carlsbad, and Encinitas</h3>
    </Div> 
    <Div2> 
      <HorzNav />
    </Div2>
  </>  
    

  )
}

export default Header