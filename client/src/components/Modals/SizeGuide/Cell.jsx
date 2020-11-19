import React from 'react';
import styled from 'styled-components';

const Cell = ({size, index, header}) => {
  const Head = styled.div`
  /* border: 1px solid black; */
  /* border-right: 1px solid black; */
  background-color: ${header ? 'black !important' : 'white'};
  color: ${header ? 'white !important' : 'black'};
  display: flex;
  justify-content: center;
  width: 130px;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`
  return (
    <Head className="sizeCell">{size}</Head>
  )
}

export default Cell;