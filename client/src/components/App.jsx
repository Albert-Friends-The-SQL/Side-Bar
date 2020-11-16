import React from 'react';
import Description from './Description.jsx';
import SizeTable from './SizeTable.jsx';
import FindSize from './FindSize.jsx';
import AddToBag from './AddToBag.jsx';
import Promotion from './Promotion.jsx';
import styled from 'styled-components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnterWishlist: false,
      wishlistClicked: false,
      sizeTableClicked: false
    }
    // wishlist icon handlers
    this.handleWishlistMouseEnter = this.handleWishlistMouseEnter.bind(this);
    this.handleWishlistMouseLeave = this.handleWishlistMouseLeave.bind(this);
    this.toggleWishlistStatus = this.toggleWishlistStatus.bind(this);
    // Size Table handlers
    this.toggleSizeTableStatus = this.toggleSizeTableStatus.bind(this);
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

toggleSizeTableStatus() {
  this.setState({
    sizeTableClicked: !this.state.sizeTableClicked
  })
}


  render() {
    return (
      <div>
        <Description />
        <SizeTable click={this.toggleSizeTableStatus} toggle={this.state.sizeTableClicked}/>
        <FindSize />
        <AddToBag mouseEnter={this.handleWishlistMouseEnter} mouseLeave={this.handleWishlistMouseLeave} mouseEnterStatus={this.state.mouseEnterWishlist} click={this.toggleWishlistStatus} toggle={this.state.wishlistClicked}/>
        <Promotion/>
      </div>
    )
  }
}

export default App;