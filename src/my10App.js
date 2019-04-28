import React, { Component } from 'react';

import Todo from "./Todo";
import TodoM1 from "./TodoM1";
import Todo10 from "./Todo10";
import TodoM10 from "./TodoM10";
 

class App extends Component {
  render() {
    return (
      <div>
        <Todo title="Do a plus one thing" />
        <TodoM1 title="Do a minus one thing" />
        <Todo10 title="Do a plus ten thing" />
        <TodoM10 title="Do a minus ten thing" />
      
      </div>
    );
  }
}

export default App;