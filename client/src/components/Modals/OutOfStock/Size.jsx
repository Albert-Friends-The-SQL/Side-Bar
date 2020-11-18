import React from 'react';
import styled from 'styled-components';

const Size = ({shoe, index}) => {

  const Size = styled.button`
    background-color: white;
    color: 'black';
    border: 1px solid;
    height: 45px;
    width: 100px;
    align-items: center;
    justify-items: center;
    font-family: 'Rubik', sans-serif;
    margin: 5px 5px;
  `
  return (
  <Size>{shoe.size}</Size>
  )
}

export default Size;