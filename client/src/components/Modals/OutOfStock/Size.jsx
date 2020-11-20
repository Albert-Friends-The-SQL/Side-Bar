import React, {useState} from 'react';
import styled from 'styled-components';

const Size = ({shoe, index}) => {
  const [isClicked, setIsClicked] = useState(false);

  const Size = styled.button`
    background-color: white;
    color: 'black';
    border: 1px solid;
    height: 45px;
    width: 100px;
    /* align-items: center;
    justify-items: center; */
    font-family: 'Rubik', sans-serif;
    margin-right: 10px;
  `

  const SizeClicked = styled.button`
    background-color: black;
    color: white;
    border: 1px solid;
    height: 45px;
    width: 100px;
    align-items: center;
    justify-items: center;
    font-family: 'Rubik', sans-serif;
    margin-right: 10px;
  `

  const ClickChange = () => {
    if (isClicked) {
      return (
        <SizeClicked className="outOfStockSize" onClick={()=>setIsClicked(false)}>{shoe.size}</SizeClicked>
      )
    }else {
      return (
        <Size className="outOfStockSize" onClick={()=>setIsClicked(true)}>{shoe.size}</Size>
      )
    }
  }

  const Table = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `
  return (
    <div>{ClickChange()}</div>
  )
}

export default Size;