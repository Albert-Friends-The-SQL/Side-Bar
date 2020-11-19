import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const AddToBag = (props) => {

  const show = () => {
    $('.checkout').css('display', 'block');
  }

  const wishlist = () =>{
    const mouseState = props.mouseEnterStatus;
    const toggleStatus = props.toggle;
    if (mouseState) {
      return <img src="https://img.icons8.com/material-two-tone/36/000000/like--v1.png"/>
    } else if (toggleStatus) {
      return <img src="https://img.icons8.com/material-sharp/36/000000/like.png"/>
    } else {
      return <img src="https://img.icons8.com/material-outlined/36/000000/like.png"/>
    }
  }
  const Bag = styled.div`
    display: flex;
    align-items: center;
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

  return (
  <Bag>
    <button className="addToBag" onClick={()=>{props.checkout()}} ><AddButton><Add>Add To Bag</Add> <Arrow>→</Arrow></AddButton></button>
    <button className="wishlist" onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.click}>
    {wishlist()}
    </button>
  </Bag>
  )
}

export default AddToBag;