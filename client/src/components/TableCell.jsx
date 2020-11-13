import React from 'react';
import data from '../../../data.json'

const TableCell = (props) => (
    <div>
      <button className="cell">{props.shoe.size}</button>
    </div>
)

export default TableCell;