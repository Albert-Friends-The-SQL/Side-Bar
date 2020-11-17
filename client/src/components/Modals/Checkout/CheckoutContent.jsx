import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Container from './Container.jsx';

const CheckoutContent = (props) => {
  const hide = () => {
    $('.checkout').css('display', 'none');
  }

  const CheckoutContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 60%; /* Could be more or less, depending on screen size */
    height: 40%;
  `

  const Button = styled.button`
    top: 10px;
    right: 10px;
  `

  return (
    <CheckoutContent>
      <h2>Successfully Added To Bag!</h2>
      <Container/>
    </CheckoutContent>
  )
}

export default CheckoutContent;