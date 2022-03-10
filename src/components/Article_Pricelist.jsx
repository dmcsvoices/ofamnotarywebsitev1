import React from 'react'
import ArticleTitle from './ArticleTitle';
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarrot, faDna, faMugHot, faAppleWhole, faFish} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCarrot, faDna, faMugHot, faAppleWhole, faFish
   );

const P = styled.p`
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
margin-top: 10px;
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
border-style:solid;
border-radius: 10px; 
word-break: break-word;
white-space: normal;`;



function Article_Pricelist() {
  return (
    <articleSection className="container">
    <ArticleTitle titleText="Prices" />        
        <P>I charge a very reasonable $25 travel fee which includes reserving time for your signing</P>
                    <Ul>
                        <Li><FontAwesomeIcon icon="fa-solid fa-carrot"  size="2x"/>$15 per signature for Acknowledgements</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-dna"  size="2x"/> $15 per signature for Jurats</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-fish"  size="2x"/> $15 per signature for Power of Attorneys</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-mug-hot"  size="2x"/> Senior and Military Discounts available</Li>
                    </Ul>                
    </articleSection>
  )
}

export default Article_Pricelist