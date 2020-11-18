import React from 'react';
import styled from 'styled-components';


const Left = (props) => {
  const Left = styled.div`
    display: flex;
    padding: 10px;
  `
  const Container = styled.div`
    width: 50%;
    height: 50%;
  `
  const Img = styled.img`
    max-height: 55%;
    max-width: 55%;
  `
  const Title = styled.div`
    margin: 0px 10px;
    height: 10%;
    width: 100%;
  `

  const Price = styled.div`
    margin: 20px 0px 10px 10px;
    height: 10%;
    width: 100%;
  `

  const Color = styled.div`
    margin: 0px 10px;
    height: 20%;
    width: 100%;
  `

  const Size = styled.div`
  margin: 0px 10px;
  height: 20%;
  width: 100%;
  `

  const Quantity = styled.div`
  margin: 0px 10px;
  height: 20%;
  width: 100%;
  `
  return (
    <Left>
      <Img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7967fa1a9cb742d8a437ab6501290681_9366/NMD_R1_Shoes_Black_FV8732_01_standard.jpg"></Img>
      <Container>
      <Title>NMD_R1 SHOES</Title>
      <Price>$140</Price>
      <Color>Color: Core Black / Supplier Colour / Core Black</Color>
      <Size>Size: {props.size}</Size>
      <Quantity>Quantity: 1</Quantity>
      </Container>
    </Left>
  )
}

export default Left;