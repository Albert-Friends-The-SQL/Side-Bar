import React, {useState} from 'react';
import data from '../../../data.json';
import TableCell from './TableCell.jsx'
import styled from 'styled-components';

const SizeTable = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const setClickedIndex = (index) => {
    if (index === isClicked) {
      setIsClicked(null)
    } else {
      setIsClicked(index)
    }
  }

  return (
    <div className="sizeTable">
      <h3 className="login">Select Size</h3>
      <div className="grid">
        {data.map((shoe, index) => {
          return <TableCell shoe={shoe} key={index} index={index} click={props.click} isClicked={isClicked === index} setClickedIndex={setClickedIndex}/>
        })}
      </div>
    </div>
  )

}

export default SizeTable;

