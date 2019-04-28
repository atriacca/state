import React, { Component } from 'react';

import CounterContainer from "./CounterContainer";


class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer title="Do a plus one thing" />
      </div>
    );
  }
}

export default App;