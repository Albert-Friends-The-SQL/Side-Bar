import React from 'react';

const AddToBag = (props) => {

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

  return (
  <div>
    <button className="addToBag">Add To Bag →</button>
    <button className="wishlist" onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.click}>
    {wishlist()}
    </button>
  </div>
  )
}

export default AddToBag;