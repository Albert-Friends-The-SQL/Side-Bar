import React from 'react';
import Description from './Description.jsx';
import SizeTable from './SizeTable.jsx';
import FindSize from './FindSize.jsx';
import AddToBag from './AddToBag.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
        <Description />
        <SizeTable />
        <FindSize />
        <AddToBag />
      </div>
    )
  }
}

export default App;