import React from 'react';

class CounterContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
        myHandleClickP1 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter + 1}
            })
        }
        myHandleClickM1 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter - 1}
            })
        }
        myHandleClickP10 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter + 10}
            })
        }
        myHandleClickM10 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter - 10}
            })
        }
        render () {
            return (
              <div>
                  <div>I did a thing</div>
                  <div>{this.state.counter } times</div>
                  <button onClick={this.myHandleClickP1}>Do a plus thing</button><br/>
                  <button onClick={this.myHandleClickM1}>Do a minus thing</button><p></p>
                  <span onClick={this.myHandleClickP1}>One at a time +  </span>
                  <span>{this.state.counter }  </span>
                  <span onClick={this.myHandleClickM1}>-</span><p></p>
                  <span onClick={this.myHandleClickP10}>Ten at a time +  </span>
                  <span>{this.state.counter }  </span>
                  <span onClick={this.myHandleClickM10}>-</span>
            </div>
            )
        }
}

export default CounterContainer;