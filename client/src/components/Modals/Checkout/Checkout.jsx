import React from 'react';
import styled from 'styled-components';
import CheckoutContent from './CheckoutContent.jsx'
const Checkout = (props) => {
  const Checkout = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.5);
    transition: opacity 0.2s;
  `


  return (
    <Checkout className='checkout'>
      <CheckoutContent />
    </Checkout>
  )
}

export default Checkout;