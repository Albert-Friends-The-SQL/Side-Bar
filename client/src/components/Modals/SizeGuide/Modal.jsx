import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Table from './Table.jsx'
import data from '../../../../../sizeguide.json';
import data2 from '../../../../../cm.json';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
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
    transition: visibility 1s, opacity 0.5s;
  `
  const [isClicked, setIsClicked] = useState(true);

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
    height: 8%;
    font-family: 'adineue PRO KZ Bold';
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
    cursor: pointer;
    border-bottom: ${isClicked ? '2px solid black' : '1px solid black'};
    color: ${isClicked ? 'black' : 'grey'};
    font-family: 'AdihausDIN';
  `
   const Cm = styled.div`
   display: flex;
   height: 50%;
   width: 50%;
   justify-content: center;
   align-items: center;
   border: 1px solid black;
   margin-bottom: 10px;
   cursor: pointer;
   border-bottom: ${isClicked ? '1px solid black' :'2px solid black'};
   color: ${isClicked ? 'grey' : 'black'};
   font-family: 'AdihausDIN';
 `
  const Buttons = styled.div`
    display:flex;
    flex-direction: row;
    width: 26%;
    height: 12%;
  `


  const showTable = () => {
    if (isClicked) {
      return (
        <Chart>
          {data.map((category, index) => {
            return <Table category={category} key={index} />
          })}
        </Chart>
    ) } else {
      return (
        <Chart>
        {data2.map((category, index) => {
          return <Table category={category} key={index} />
        })}
      </Chart>
      )
    }
  }

  const Question = styled.div`
    font-family: adineue PRO KZ Bold;
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 15px;
  `
  const Fit = styled.div`
    font-family: 'AdihausDIN';
  `


  return ReactDOM.createPortal(

    <>
      <Overlay className="sizeGuideContainer">
        <Container >

          <Exit onClick={onClose}>X</Exit>
          <Header>
            MEN'S AND WOMEN'S ADIDAS FOOTWEAR SIZING
          </Header>
          <Buttons>
            <Inches onClick={()=> setIsClicked(true)}>Inches</Inches>
            <Cm onClick={()=> setIsClicked(false)}>cm</Cm>
          </Buttons>
          {/* <Chart>
            {data.map((category, index) => {
              return <Table category={category} key={index} />
            })}
          </Chart> */}
          {showTable()}
          <Fit>Scroll horizontally to see more.</Fit>
          <Question>In Between Sizes?</Question>
          <Fit>For tight fit, go one size down.</Fit>
          <Fit>For loose fit, go one size up.</Fit>
        </Container>
      </Overlay>
    </>,
    document.getElementById('portal')
  )
}

export default Modal;

// font-family: 'adineue PRO KZ Bold';