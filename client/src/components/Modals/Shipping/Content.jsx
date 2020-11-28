import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const ShippingContent = ({open, onClose}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <Overlay>
    <Container>
      <Exit onClick={onClose}>X</Exit>
      <Paragrah>
        <Header>FREE SHIPPING + FREE RETURNS & EXCHANGES</Header>
        <Paragrah>Creators Club members unlock free shipping on any order. Sign up or Login.</Paragrah>

        <Paragrah>If you are not completely satisfied with your adidas.com purchase, for any reason, we will offer you a free return or exchange within 30 days of purchase. Some restrictions apply.</Paragrah>

        <Paragrah>Check out our Return Policy for more details.</Paragrah>
      </Paragrah>
    </Container>
    </Overlay>
    </>,
    document.getElementById('portal')
  )
}

export default ShippingContent;

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
  const Overlay = styled.div`
  display: flex;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`
  const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  flex-direction: column;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
  height: 20%;
  position: relative;
  transition: visibility 1s, opacity 0.5s;
`
