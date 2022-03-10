import React from 'react';
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faLeaf, faCannabis, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCheckSquare, faCoffee,  faLeaf, faCannabis, faSeedling);

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

const P = styled.p`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center; 
`;


function Footer() {
  return (
    <Div>
        <nav id="nav-footer">      
            <a href="#"><FontAwesomeIcon className="navIcon" icon="fa-solid fa-seedling" size="3x" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-leaf" size="3x"/></a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-cannabis" size="3x"/></a>
        </nav>
        <P>Copyright &copy; 2022 Darren Santos</P>
    </Div>
  )
}

export default Footer