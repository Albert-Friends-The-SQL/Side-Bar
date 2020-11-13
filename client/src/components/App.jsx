import React from 'react';
import Description from './Description.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
        <Description/>
      </div>
    )
  }
}

export default App;