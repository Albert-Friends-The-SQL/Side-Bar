import React from 'react';
import Description from './Description.jsx';
import SizeTable from './SizeTable.jsx';
import FindSize from './FindSize.jsx';
import AddToBag from './AddToBag.jsx';
import Promotion from './Promotion.jsx';
import styled from 'styled-components';
import axios from 'axios';
import Shipping from './Modals/Shipping/Container.jsx';
import Checkout from './Modals/Checkout/Checkout.jsx'
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnterWishlist: false,
      wishlistClicked: false,
      size: null,
      color: 'grey',
      name: 'NMD_R1 SHOES',
      price: 140,
      quantity: 1
    }

    // wishlist icon handlers
    this.handleWishlistMouseEnter = this.handleWishlistMouseEnter.bind(this);
    this.handleWishlistMouseLeave = this.handleWishlistMouseLeave.bind(this);
    this.toggleWishlistStatus = this.toggleWishlistStatus.bind(this);

    //size table
    this.handleSizeTableClick = this.handleSizeTableClick.bind(this);

    //checkout
    this.handleCheckOut = this.handleCheckOut.bind(this);

  }
// wishlist icon handlers
handleWishlistMouseEnter() {
  this.setState({
    mouseEnterWishlist: true
  })
}

handleWishlistMouseLeave() {
  this.setState({
    mouseEnterWishlist: false
  })
}

toggleWishlistStatus() {
  this.setState({
    wishlistClicked: !this.state.wishlistClicked
  })
}

// size Table handlers

handleCheckOut() {
  const { size, color, name, price, quantity } = this.state;
    axios.post('./products', {
      size: size,
      color: color,
      name: name,
      price: price,
      quantity: quantity
    })
    .then((response) => {console.log(response);
    $('.checkout').css('display', 'block')}
    )
    .catch((err) => console.log(err))

}

handleSizeTableClick(data) {
  this.setState({
    size: data.size
  })
}



  render() {
    return (
      <div>
        <Description />
        <SizeTable click={this.handleSizeTableClick}/>
        <FindSize />
        <AddToBag mouseEnter={this.handleWishlistMouseEnter} mouseLeave={this.handleWishlistMouseLeave} mouseEnterStatus={this.state.mouseEnterWishlist} click={this.toggleWishlistStatus} toggle={this.state.wishlistClicked} checkout={this.handleCheckOut}/>
        <Promotion/>
        <Shipping />
        <Checkout/>
      </div>
    )
  }
}

export default App;