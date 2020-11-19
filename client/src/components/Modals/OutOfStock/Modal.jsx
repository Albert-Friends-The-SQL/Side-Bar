import React from 'react';
import styled from 'styled-components';
import Container from './Container.jsx';
const OutOfStock = () => {
  const OutOfStock = styled.div`
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
    visibility: hidden;
    opacity: 0;
    transition: visibility 1s, opacity 0.5s;
  `
  return (
    <OutOfStock className="outofstock">
      <Container />
    </OutOfStock>
  )
}

export default OutOfStock;