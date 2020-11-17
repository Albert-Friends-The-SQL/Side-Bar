import React, { useState } from 'react';
import data from '../../../data.json';
import styled from 'styled-components';


const TableCell = ({ click, shoe, index }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseLeave, setMouseLeave] = useState(false);

  const mouseOverState = () => {
    setMouseEnter(true);
  }

  const mouseLeaveState = () => {
    setMouseEnter(false)
  }


  const Button = styled.button`
    background-color: ${mouseEnter ? 'black' : 'white'};
    color: ${mouseEnter ? 'white' : 'black'};
    border: 1px solid;
    height: 45px;
    width: 100px;
    align-items: center;
    justify-items: center;
    font-family: 'Rubik', sans-serif;
  `
  return (
    <div>
      <Button onMouseEnter={mouseOverState} onMouseLeave={mouseLeaveState}
       onClick={() => {click(shoe)}} >
        {shoe.size}
      </Button>
    </div>
  )
}

export default TableCell;