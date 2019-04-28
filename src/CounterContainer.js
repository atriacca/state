import React from 'react';

class CounterContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
        handleClickP1 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter + 1}
            })
        }
        handleClickM1 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter - 1}
            })
        }
        handleClickP10 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter + 10}
            })
        }
        handleClickM10 = () => {
            this.setState(prevState => {
                    return {counter: prevState.counter - 10}
            })
        }
        render () {
            const styles = {
                display: "grid",
                fontSize: "30px",
                width: "30%",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                margin: "auto",
                textAlign: "center"
            }
            return (
              <div>
                  <div>I did a thing</div>
                  <div>{this.state.counter } times</div>
                  <button onClick={this.handleClickP1}>Do a plus thing</button><br/>
                  <button onClick={this.handleClickM1}>Do a minus thing</button>
                  <p></p>
                  <span onClick={this.handleClickP1}>One at a time +  </span>
                  <span>{this.state.counter }  </span>
                  <span onClick={this.handleClickM1}>-</span>
                  <p></p>
                  <span onClick={this.handleClickP10}>Ten at a time +  </span>
                  <span>{this.state.counter }  </span>
                  <span onClick={this.handleClickM10}>-</span>
            </div>
            )
        }
}

export default CounterContainer;