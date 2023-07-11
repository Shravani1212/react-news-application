import React, { Component } from 'react'

export class ClassCounter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }

    decrement=()=>{
        this.setState(prevState=>{
            return {count:prevState.count-1}
        })
    }
    reset=()=>{
        this.setState(prevState=>{
            return {count:0}
        })
    }
    increment5=()=>{
for(let i=0;i<5;i++){
    this.increment()
}
    }
    render() {
        return (
            <div>
                Count {this.state.count}
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.increment5}>increment5</button>
            </div>
        )
    }
}

export default ClassCounter2
