import React, { useState } from 'react';
import data from '../../../data.json';
import styled from 'styled-components';



const TableCell = ({ click, shoe, index }) => {
  const [isClicked, setIsClicked] = useState(false);

  const Button = styled.button`
    background-color: #FFF;
    color: 'black';
    border: 1px solid;
    height: 45px;
    width: 100px;
    align-items: center;
    justify-items: center;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
  `
    const ButtonActive = styled.button`
    background-color: black;
    color: white;
    border: 1px solid;
    height: 45px;
    width: 100px;
    align-items: center;
    justify-items: center;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
  `
  const changeButton = () => {
    if (isClicked) {
      return (
        <ButtonActive className="outOfStockSize"
        onClick={() => {click(shoe); setIsClicked(false)}} >
         {shoe.size}
       </ButtonActive>
      )} else {
        return (
          <Button className="outOfStockSize"
          onClick={() => {click(shoe); setIsClicked(true)}} >
           {shoe.size}
         </Button>
        )
      }
    }

  return (
    <div>
      {changeButton()}
    </div>
  )
}

export default TableCell;