import React from 'react';
import $ from 'jquery';
const FindSize = (props) => {
  const show = () => {
    $('.findSizeChart').css('display', 'block')
  }

  const showOutOfStock = () => {
    $('.outofstock').css({
      "visibility": "visible",
      "opacity": "1"
    })
  }
  return (
  <div className="size-bottom-controls">
    {/* <span className="findSize" onClick={show}><img src="http://integrations.fitanalytics.com/shop/adidas/adidas-icon-black.svg"/>Find your size</span> */}
    <span className="outOfStock" onClick={showOutOfStock}>Size out of stock?</span>
  </div>
  )
}

export default FindSize;