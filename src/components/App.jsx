import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import List from './list/List';

class App extends Component {
  render() {
    return (
      <div className='wrapper'><List/></div>
    )
  }
}

export default App;
