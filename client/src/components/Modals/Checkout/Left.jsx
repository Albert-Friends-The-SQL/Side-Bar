import React from 'react';
import styled from 'styled-components';

const Left = () => {

  const Img = styled.img`
    max-height: 70%;
    max-width: 70%;
  `
  return (
    <Left>
      <Img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7967fa1a9cb742d8a437ab6501290681_9366/NMD_R1_Shoes_Black_FV8732_01_standard.jpg"></Img>
    </Left>
  )
}

export default Left;