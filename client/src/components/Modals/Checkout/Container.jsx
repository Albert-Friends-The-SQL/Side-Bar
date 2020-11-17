import React from 'react';
import styled from 'styled-components';

const Container = () => {
  const CheckoutContainer = styled.div`
    /* max-height: 80%; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* max-height: 100vh;
    min-height: 100vh; */
  `

  const Img = styled.img`
    max-height: 80%;
    max-width: 80%;
  `
  return (
    <CheckoutContainer>
      <Img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7967fa1a9cb742d8a437ab6501290681_9366/NMD_R1_Shoes_Black_FV8732_01_standard.jpg"></Img>
    </CheckoutContainer>
  )
}

export default Container;