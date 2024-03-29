//first import react package when you make a new component
import React from "react";
class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment=this.increment.bind(this);
        this.state = {
            number:0
        };
    }

    increment(){
        this.setState({
         number: ++ this.state.number
        })
     }
    render(){
        return(
            <div>
            <h1>Classbase Component</h1>
            <h1>Counter = {this.state.number}</h1>
            <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default CounterClass;