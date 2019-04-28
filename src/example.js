import React from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Sally",
            age: 13
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: "in"
        }
    }    
    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )        
    }
}

export default App