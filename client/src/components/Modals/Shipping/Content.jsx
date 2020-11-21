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
  font-family: 'Arial';
  `
  const Paragrah = styled.p`
    font-family: "AdihausDIN";
  `

  const Header = styled.div`
  font-size: 28px;
  font-family: 'adineue PRO KZ Bold';
  height: 8%;
  `
  return (
    <ShippingContent>
      <Exit onClick={hide}>X</Exit>
      <Paragrah>
        <Header>FREE SHIPPING + FREE RETURNS & EXCHANGES</Header>
        <Paragrah>Creators Club members unlock free shipping on any order. Sign up or Login.</Paragrah>

        <Paragrah>If you are not completely satisfied with your adidas.com purchase, for any reason, we will offer you a free return or exchange within 30 days of purchase. Some restrictions apply.</Paragrah>

        <Paragrah>Check out our Return Policy for more details.</Paragrah>
      </Paragrah>
    </ShippingContent>
  )
}

export default ShippingContent;