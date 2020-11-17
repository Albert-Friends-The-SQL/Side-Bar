import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Left from './Left.jsx';

const CheckoutContent = (props) => {
  const hide = () => {
    $('.checkout').css('display', 'none');
  }

  const CheckoutContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #fefefe;
    margin: 12% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
    height: 35%;
  `
  const CheckoutTitle = styled.div`
    height: 20%;
    width: 100%;
  `
  const SubContent = styled.div`
    height: 80%;
    width: 50%;
  `

  const Button = styled.button`

  `

  return (
    <CheckoutContent>
      <CheckoutTitle>Successfully Added To the Bag</CheckoutTitle>
      <SubContent>
        <Left />
      </SubContent>
      <SubContent>
    im right
      </SubContent>
    </CheckoutContent>
  )
}

export default CheckoutContent;