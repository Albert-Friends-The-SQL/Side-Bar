import React from 'react';
import styled from 'styled-components';

const Right = (props) => {
  const Right = styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
  `

  const Title = styled.div`
    height: 10%;
    width: 100%;
  `

  const ItemCount = styled.div`
    margin: 20px 0px 10px 0px;
    height: 10%;
    width: 100%;
  `
  const TotalCost = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: space-between;
  `
  const TotalText = styled.div`
    height: 10%;
    width: 40%;
  `
  const TotalAmount = styled.div`
    height: 10%;
    width: 20%;
  `
  const TotalDelivery = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid black;
  `

  const TotalDeliveryText = styled.div`
    height: 10%;
    width: 40%;
  `

  const TotalDeliveryAmount = styled.div`
    height: 10%;
    width: 20%;
  `

  const Lower = styled.div`
    height: 49%;
    width: 100%;
  `

  const TotalRow = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: space-between;
  `

  const Total = styled.div`
    height: 10%;
    width: 40%;
  `
  const PriceSum = styled.div`
    height: 10%;
    width: 20%;
  `
  const CheckoutButton = styled.button`
    margin-top: 10px;
    height: 50px;
    width: 300px;
    color: black;
    background-color: white;
    justify-content: space-between;
    font-family:'Rubik', sans-serif;
    font-size: 18px;
    position: relative;
    cursor: pointer;
  `
  const ViewBagButton = styled.button`
    margin-top: 20px;
    height: 50px;
    width: 300px;
    color: white;
    background-color: black;
    justify-content: space-between;
    font-family:'Rubik', sans-serif;
    font-size: 18px;
    position: relative;
    cursor: pointer;
  `

  const price = props.quantity * 140;
  return (
    <Right>
        <Title>Your Bag</Title>
        <ItemCount>{props.quantity} items</ItemCount>
        <TotalCost>
          <TotalText>Total Product Cost:</TotalText>
          <TotalAmount>${price}.00</TotalAmount>
        </TotalCost>
        <TotalDelivery>
          <TotalDeliveryText>Total Delivery Cost:</TotalDeliveryText>
          <TotalDeliveryAmount>FREE</TotalDeliveryAmount>
        </TotalDelivery>
        <TotalRow>
          <Total>Total</Total>
        <PriceSum>${price}.00</PriceSum>
        </TotalRow>
        <ViewBagButton>View Bag →</ViewBagButton>
        <CheckoutButton>Checkout →</CheckoutButton>
    </Right>
  )
}

export default Right;