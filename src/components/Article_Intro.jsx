import React from 'react';
import ArticleTitle from './ArticleTitle';
import styled from 'styled-components';

const articleSection = styled.div`
margin: 10px 10px 5px;
padding-left: 70px;
padding-top: 10px;
padding-right: 70px;
padding-bottom: 5px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;


const P = styled.p`
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;
box-shadow: 2px 2px 7px rgb(22, 7, 7);
background-color: rgb(236, 248, 248);
border-color: rgb(0, 95, 115);
border-radius: 10px; 
border-style: none;

word-break: break-word;
white-space: normal;
`;





function Article_Intro() {
  return (
      <articleSection className="container">
        <ArticleTitle titleText="Oceanside's Only Filipino American Mobile Notary" />
        <P className="card-text">
        Darren Santos has served the local Oceanside Community with Mobile Notary services since 2021. Conveniently located in the Fire Mountain area of Oceanside, I'm centrally located and ready to meet your notary needs. </P>
      </articleSection>
  )
}

export default Article_Intro