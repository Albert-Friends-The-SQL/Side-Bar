import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const Content = ({open, onClose}) => {
if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <Overlay>
      <Container>
        <Exit onClick={onClose}>X</Exit>
        <Header>PAYING IN INSTALLMENTS</Header>
        <Paragraph>Want to spread out the cost of your order with adidas? Select ‘Affirm’, ‘Klarna‘, or ‘Afterpay‘ as your payment method at checkout to pay in interest-free installments, with no hidden fees.</Paragraph>
        <Paragraph>With Klarna, pay in 4 interest-free installments. The first payment is taken when the order is processed and the remaining 3 are automatically taken every two weeks. For CA residents, loans made or arranged are pursuant to a California Finance Lenders Law license.</Paragraph>
        <Paragraph>With Affirm, you can make 3 monthly payments with zero hidden fees. Payment options are subject to eligibility check and approval. Estimated payment amount excludes taxes and shipping fees. A down payment may be required. Affirm Payment options are provided by Cross River Bank, Member FDIC. ​</Paragraph>
        <Paragraph>With Afterpay, make 4 interest-free payments. You must be over 18, a resident of the U.S., and meet additional eligibility criteria to qualify. Late fees may apply. Click here for complete terms. Loans to California residents made or arranged are pursuant to a California Finance Lenders Law license.</Paragraph>
        </Container>
      </Overlay>
    </>
    ,
    document.getElementById('portal')
  )
}

export default Content;

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
flex-direction: column;
background-color: #fefefe;
margin: 12% auto; /* 15% from the top and centered */
padding: 20px;
border: 1px solid black;
width: 55%; /* Could be more or less, depending on screen size */
height: 45%;
position: relative;
transition: visibility 1s, opacity 0.5s;
`
const Header = styled.div`
font-size: 28px;
font-family: 'adineue PRO KZ Bold';
height: 8%;
`
const Paragraph = styled.p`
font-family: "AdihausDIN";
`
const Exit = styled.button`
position: absolute;
height: 40px;
width: 40px;
background-color: white;
color: black;
cursor: pointer;
border: 1px solid black;
top: 5px;
right: 5px;
font-size: 32px;
font-family: 'Arial';
`