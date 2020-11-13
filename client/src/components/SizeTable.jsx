import React from 'react';
import data from '../../../data.json';
import TableCell from './TableCell.jsx'

const SizeTable = (props) => (
  <div>
    <h3 className="login">Select Size</h3>
    <div className="grid">
    {data.map((shoe, index) => {
    return <TableCell shoe={shoe} key={index} />
  })}
    </div>


  </div>
)

export default SizeTable;