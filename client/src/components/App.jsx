import React from 'react';
import Description from './Description.jsx';
import SizeTable from './SizeTable.jsx';


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
      </div>
    )
  }
}

export default App;