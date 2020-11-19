import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Table from './Table.jsx'
import data from '../../../../../sizeguide.json';


const Modal = ({open, onClose}) => {
  if(!open) return null;
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    flex-direction: column;
    background-color: #fefefe;
    margin: 12% auto; /* 15% from the top and centered */
    padding: 10px;
    border: 1px solid black;
    width: 50%; /* Could be more or less, depending on screen size */
    height: 85%;
    position: relative;
  `

  const Overlay = styled.div`
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
  `
  const Header = styled.div`
    margin-top: 5%;
    margin-left: 1%;
    font-size: 28px;
    font-weight: bold;
    height: 8%;
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
      font-family: 'Rubik';
  `
  const Chart = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    justify-content: center;
    width: 100%;
  `
  const Inches = styled.div`
    display: flex;
    height: 50%;
    width: 50%;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-bottom: 10px;
  `
  const Buttons = styled.div`
    display:flex;
    flex-direction: row;
    width: 26%;
    height: 12%;
  `
  return ReactDOM.createPortal(
    <>
      <Overlay>
        <Container>

          <Exit onClick={onClose}>X</Exit>
          <Header>
           MEN'S AND WOMEN'S ADIDAS FOOTWEAR SIZING
          </Header>
          <Buttons>
            <Inches>Inches</Inches>
            <Inches>cm</Inches>
          </Buttons>
          <Chart>
          {data.map((category, index)=>{
            return <Table category={category} key={index}/>
          })}
          </Chart>
        </Container>
      </Overlay>
    </>,
    document.getElementById('portal')
  )
}

export default Modal;