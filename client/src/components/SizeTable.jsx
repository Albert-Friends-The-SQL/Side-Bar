import React from 'react';
import data from '../../../data.json';
import TableCell from './TableCell.jsx'
import styled from 'styled-components';

const SizeTable = (props) => (
  <div>
    <h3 className="login">Select Size</h3>
    <div className="grid">
    {data.map((shoe, index) => {
    return <TableCell shoe={shoe} key={index} index={index} toggle={props.toggle} click={props.click}/>
  })}
    </div>
  </div>
)

export default SizeTable;