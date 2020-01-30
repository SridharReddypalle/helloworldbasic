import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(){
      super()
      this.state={
          clicks:0
      }
    }
    upDate=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }
    render() {
        return (
            <div>
                <h1 onClick={this.upDate}>Welcome to {this.props.name} ({this.state.clicks})</h1>
            </div>
        )
    }
}
