import React from 'react';

class TodoM1 extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
// old way but new is turning myHandleClick into an arrow function like below: this.myHandleClick = this.myHandleClick,myHandleClick.bind(this);
    }

    myHandleClick = () => {
        this.setState(prevState => {
                return {counter: prevState.counter - 1}
        })
    }

    render (){
        return (
          <div>
              <div>I did a minus one thing</div>
              <div>{this.state.counter } times</div>
              <button onClick={this.myHandleClick}>Do a minus one thing</button>
          </div>
        )
    }
}

export default TodoM1;