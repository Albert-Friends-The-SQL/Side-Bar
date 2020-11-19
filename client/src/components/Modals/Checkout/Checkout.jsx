import React from 'react';
import styled from 'styled-components';
import CheckoutContent from './CheckoutContent.jsx'
const Checkout = (props) => {
  const Checkout = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 1s, opacity 0.5s;
  `

  return (
    <Checkout className='checkout'>
      <CheckoutContent size={props.size} quantity={props.quantity}/>
    </Checkout>
  )
}

export default Checkout;