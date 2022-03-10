import React from 'react';

import ArticleTitle from './ArticleTitle';
import styled from 'styled-components';

const P = styled.p``;


const articleSection = styled.div`
background-color: rgb(254, 74, 73)!important;
border-style: dotted;
margin: 10px 10px 5px;
padding-left: 100px;
padding-top: 10px;
padding-right: 70px;
padding-bottom: 5px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

const Ul = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;
box-shadow: 2px 2px 7px rgb(22, 7, 7);
background-color: rgb(236, 248, 248);
border-color: rgb(0, 95, 115);
border-radius: 10px; 
border-style: none;`;

const Li = styled.li`
background-color: rgb(229, 236, 233);
font-family: 'Asap', sans-serif;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center; 
margin: 4px;
padding: 4px;   
border-color: rgb(0, 95, 115);
border-style:dotted;
border-radius: 10px; 
word-break: break-word;
white-space: normal;`;


const Button = styled.button``;

function Article_Services() {
  return (
    <articleSection className="container">
        <ArticleTitle titleText="Services Rendered" />        
        <P className="card-text">
            <Ul className = "list-group">
                <Li className="list-group-item">Acknowledgements and Jurats</Li>
                <Li className="list-group-item">Power of Attorney</Li>
                <Li className="list-group-item">Loan Documents</Li>
                <Li className="list-group-item">Advance Healthcare Directives</Li>
                <Li className="list-group-item">All business performed in the convenience of your home</Li>
            </Ul>  
        </P>
    </articleSection>
    
  )
}

export default Article_Services