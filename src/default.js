import React from 'react';

class CounterContainer extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }

    render (){
        return (
          <div>
              <div>{this.state.counter } times</div>
          </div>
        )
    }
}

export default CounterContainer;


import React, { Component } from 'react';
import CounterContainer from "./CounterContainer";
 
class App extends Component {
  render() {
    return (
      <div>
          <CounterContainer />
      </div>
    );
  }
}

export default App;