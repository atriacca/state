import React from 'react';

class Todo10 extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
// old way but new is turning myHandleClick into an arrow function like below: this.myHandleClick = this.myHandleClick,myHandleClick.bind(this);
    }

    myHandleClick = () => {
        this.setState(prevState => {
                return {counter: prevState.counter + 10}
        })
    }

    render (){
        return (
          <div>
              <div>I did a plus ten thing</div>
              <div>{this.state.counter } times</div>
              <button onClick={this.myHandleClick}>Do a plus ten thing</button>
          </div>
        )
    }
}

export default Todo10;