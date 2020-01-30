import React, { Component } from 'react'

export default class Myaccount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Myaccount:{
                 title:'',
                 author:''
             }
        }
    }
    withDrawButton=()=>{
        this.setState({
            Myaccount:this.state.Myaccount-1
        })
    }
    depositButton=()=>{
        this.setState({
            Myaccount:this.state.Myaccount+1
        })
    }
    render() {
        return (
            <div>
               <h1>Myaccount</h1>
               <h2>${this.state.Myaccount}</h2> 
               <button onClick={this.withDrawButton}>Withdraw $10</button>
               <button onClick={this.depositButton}>Deposit $10</button>
            </div>
        )
    }
}
