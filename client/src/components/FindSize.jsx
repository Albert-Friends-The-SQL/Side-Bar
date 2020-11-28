import React, {useState} from 'react';
import $ from 'jquery';
import Modal from './Modals/OutOfStock/Content.jsx';
const FindSize = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="size-bottom-controls">
    <span className="outOfStock" onClick={()=> setIsOpen(true)}>Size out of stock?</span>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
  </div>
  )
}

export default FindSize;