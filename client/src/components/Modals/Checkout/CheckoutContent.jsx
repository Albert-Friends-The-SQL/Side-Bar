import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Left from './Left.jsx';
import Right from './Right.jsx';

const CheckoutContent = (props) => {
  const hide = () => {
    $('.checkout').css({
      "visibility": "hidden",
      "opacity": "0"
    });
  }

  const CheckoutContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fefefe;
    margin: 12% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid black;
    width: 50%; /* Could be more or less, depending on screen size */
    height: 35%;
    position: relative;
  `

  const Exit = styled.button`
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: white;
    cursor: pointer;
    color: black;
    border: 1px solid black;
    top: 5px;
    right: 5px;
    font-size: 32px;
    font-family: 'Arial';
  `

  const CheckoutTitle = styled.div`
    height: 15%;
    width: 100%;
    font-family: 'adineue PRO KZ Bold';
    font-size: 28px;
  `
  const SubContentLeft = styled.div`
    height: 80%;
    width: 49%;
    border-right: 1px solid black;
  `
    const SubContentRight = styled.div`
    height: 80%;
    width: 49%;

  `



  return (
    <CheckoutContent>
        <Exit onClick={hide}>X</Exit>
      <CheckoutTitle>Successfully Added To the Bag</CheckoutTitle>
      <SubContentLeft>
        <Left size={props.size}/>
      </SubContentLeft>
      <SubContentRight>
        <Right quantity={props.quantity}/>
      </SubContentRight>
    </CheckoutContent>
  )
}

export default CheckoutContent;