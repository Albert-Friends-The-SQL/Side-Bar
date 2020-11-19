import React, {useState} from 'react';
import $ from 'jquery';
import Modal from './Modals/SizeGuide/Modal.jsx';
const Promotion = () => {
  const [isOpen, setIsopen] = useState(false);
  const show = () => {
    $('.shippingContainer').css({
      "visibility": "visible",
      "opacity": "1"
    });
  }
  const showPayment = () => {
    $('.payment').css({
      "visibility": "visible",
      "opacity": "1"
    });
  }

  const showSizeguide = () => {
    $('.sizeGuide').css({
      "visibility": "visible",
      "opacity": "1"
    });
  }
  return (
    <div>
      <div>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        <span className="promotion" onClick={showPayment}>PAY OVER TIME IN INTEREST-FREE INSTALLMENTS WITH AFFIRM, KLARNA OR AFTERPAY</span>
      </div>
      <div>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z"/></svg>
        <span className="promotion" onClick={show}>FREE SHIPPING + FREE RETURNS & EXCHANGES</span>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 16v-8h-24v8h24zm-22-6h2v2h1v-2h2v3h1v-3h2v2h1v-2h2v2h1v-2h2v3h1v-3h2v2h1v-2h2v4h-20v-4z"/></svg>
        <span id="size-guide" onClick={() => {setIsopen(true)}}>Size Guide</span>
        <Modal open={isOpen} onClose={()=>setIsopen(false)}/>
      </div>
    </div>
  )
}

export default Promotion;