import React from 'react';
import styled from 'styled-components';

const Cell = ({size}) => {
  const Head = styled.div`
  /* border: 1px solid black; */
  /* border-right: 1px solid black; */
  display: flex;
  justify-content: center;
  width: 130px;
  align-items: center;

`
  return (
    <Head>{size}</Head>
  )
}

export default Cell;