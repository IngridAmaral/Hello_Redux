import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { store } from './store';
import ButtonGroup from './components/ButtonGroup';

class App extends Component {    
  render() {
    return (
      <div className='outer-container'>
        <HelloWorld tech={store.getState().tech} />
        <ButtonGroup technologies={['React', 'Elm', 'React-redux']} />
      </div>
    )
  }
}

export default App;
