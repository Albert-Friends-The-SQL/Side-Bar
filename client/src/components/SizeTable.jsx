import React from 'react';
import data from '../../../data.json';

const SizeTable = (props) => {
  <div>
    <h3>Select Size</h3>
    {data.map((shoe, index) => {
    return <TableCell shoe={shoe} key={index}>
  })}
  </div>
}