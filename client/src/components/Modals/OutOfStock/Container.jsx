import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import ContentContainer from './ContentContainer.jsx'

const Container = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #fefefe;
    margin: 12% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid black;
    width: 40%; /* Could be more or less, depending on screen size */
    height: 65%;
  
  `

  return (
    <Container>
      <ContentContainer/>
    </Container>
  )
}

export default Container;