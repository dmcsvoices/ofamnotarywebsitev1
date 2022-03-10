import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
color: rgb(28, 17, 10);
font-family: Lusitana;
font-size: 30px;
margin: 10px 10px 10px;
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

function ArticleTitle(props) {
  return (
    
    <Title className='container'>
    
      {props.titleText}
    
    </Title>
   
  )
}

export default ArticleTitle