import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const ShippingContent = (props) => {
  const hide = () => {
    $('.shippingContainer').css({
      "visibility": "hidden",
      "opacity": "0"
    });
  }

  const ShippingContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 60%; /* Could be more or less, depending on screen size */
    height: 20%;
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
  font-family: 'Rubik';
  `

  return (
    <ShippingContent>
      <Exit onClick={hide}>X</Exit>
      <p>
        <h2>FREE SHIPPING + FREE RETURNS & EXCHANGES</h2>
        <p>Creators Club members unlock free shipping on any order. Sign up or Login.</p>

        <p>If you are not completely satisfied with your adidas.com purchase, for any reason, we will offer you a free return or exchange within 30 days of purchase. Some restrictions apply.</p>

        <p>Check out our Return Policy for more details.</p>
      </p>
    </ShippingContent>
  )
}

export default ShippingContent;