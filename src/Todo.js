import React from 'react';

class Todo extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
// old way but new is turning myHandleClick into an arrow function like below: this.myHandleClick = this.myHandleClick,myHandleClick.bind(this);
    }

    myHandleClick = () => {
        this.setState(prevState => {
                return {counter: prevState.counter + 1}
        })
    }

    render (){
        return (
          <div>
              <div>I did a plus one thing</div>
              <div>{this.state.counter } times</div>
              <button onClick={this.myHandleClick}>Do a plus one thing</button>
          </div>
        )
    }
}

export default Todo;