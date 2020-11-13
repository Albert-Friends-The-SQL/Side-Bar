import React from 'react';
import Description from './Description.jsx';
import SizeTable from './SizeTable.jsx';
import FindSize from './FindSize.jsx';
import AddToBag from './AddToBag.jsx';
import Promotion from './Promotion.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnterWishlist: false,
      wishlistClicked: false,
    }
    // wishlist icon handlers
    this.handleWishlistMouseEnter = this.handleWishlistMouseEnter.bind(this);
    this.handleWishlistMouseLeave = this.handleWishlistMouseLeave.bind(this);
    this.toggleWishlistStatus = this.toggleWishlistStatus.bind(this);
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



  render() {
    return (
      <div>
        <Description />
        <SizeTable />
        <FindSize />
        <AddToBag mouseEnter={this.handleWishlistMouseEnter} mouseLeave={this.handleWishlistMouseLeave} mouseEnterStatus={this.state.mouseEnterWishlist} click={this.toggleWishlistStatus} toggle={this.state.wishlistClicked}/>
        <Promotion/>
      </div>
    )
  }
}

export default App;