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
    font-family: "AdihausDIN";
  `

  const ItemCount = styled.div`
    margin: 20px 0px 10px 0px;
    height: 10%;
    width: 100%;
    font-family: "AdihausDIN";
  `
  const TotalCost = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: space-between;
    font-family: "AdihausDIN";
  `
  const TotalText = styled.div`
    height: 10%;
    width: 40%;
    font-family: "AdihausDIN";
  `
  const TotalAmount = styled.div`
    height: 10%;
    width: 20%;
    font-family: "AdihausDIN";
  `
  const TotalDelivery = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid black;
    font-family: "AdihausDIN";
  `

  const TotalDeliveryText = styled.div`
    height: 10%;
    width: 40%;
    font-family: "AdihausDIN";
  `

  const TotalDeliveryAmount = styled.div`
    height: 10%;
    width: 20%;
    font-family: "AdihausDIN";
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
    margin-top: 5px;
  `

  const Total = styled.div`
    height: 10%;
    width: 40%;
    font-family: 'adineue PRO KZ Bold';
  `
  const PriceSum = styled.div`
    height: 10%;
    width: 20%;
    font-family: 'adineue PRO KZ Bold';
  `
  const CheckoutButton = styled.button`
    margin-top: 2%;
    height: 50px;
    width: 300px;
    color: black;
    background-color: white;
    justify-content: space-between;
    font-family: "AdihausDIN";
    font-size: 18px;
    position: relative;
    cursor: pointer;
  `
  const ViewBagButton = styled.button`
    margin-top: 2%;
    height: 50px;
    width: 300px;
    color: white;
    background-color: black;
    justify-content: space-between;
    font-family: "AdihausDIN";
    font-size: 18px;
    position: relative;
    cursor: pointer;
  `
  const AddButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Add = styled.div`
  margin-left: 5%;
`
const Arrow = styled.div`
  font-size: 20px;
  margin-right: 5%;
`

  const price = props.quantity * 140;
  return (
    <Right>
        <Title>Your Bag</Title>
        <ItemCount>{props.quantity} items</ItemCount>
        <TotalCost>
          <TotalText>Total Product Cost:</TotalText>
          <TotalAmount className="totalAmount">${price}.00</TotalAmount>
        </TotalCost>
        <TotalDelivery>
          <TotalDeliveryText>Total Delivery Cost:</TotalDeliveryText>
          <TotalDeliveryAmount>FREE</TotalDeliveryAmount>
        </TotalDelivery>
        <TotalRow>
          <Total>Total</Total>
        <PriceSum>${price}.00</PriceSum>
        </TotalRow>
        <ViewBagButton><AddButton><Add>View Bag</Add> <Arrow>→</Arrow></AddButton></ViewBagButton>
        <CheckoutButton><AddButton><Add>Check out</Add> <Arrow>→</Arrow></AddButton></CheckoutButton>
    </Right>
  )
}

export default Right;