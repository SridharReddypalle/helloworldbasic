import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sign:{
                 name:'',
                 email:'',
                 phone:'',
                 password:'',
                 conformPassword:''
             },
             toched:{
                 name:false,
                 email:false,
                 phone:false,
                 password:false,
                 conformPassword:false
             }
        }
    }
    onBlur=(e)=>{
        var toched=Object.assign({},this.state.toched)
        toched[e.target.name]=true;
        this.setState({
            toched
        },()=>{
            console.log(JSON.stringify(this.state.toched))
        })
    }
    onChange=(e)=>{
        var sign=Object.assign({},this.state.sign);
        sign[e.target.name]=e.target.value;
        this.setState({
            sign
        },()=>{
            
        })
    }
    SubmitButton=(e)=>{
        e.preventDefault();
        
    }
    isValidEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }
//     function phonenumber(inputtxt)
// {
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if(inputtxt.value.match(phoneno))
//      {
// 	   return true;      
// 	 }
//    else
//      {
// 	   alert("Not a valid Phone Number");
// 	   return false;
//      }
// }
isValidPhone=(phone)=>{
    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
        return (true)
    }
    return (false)
}
    validate = () => {
        var errors = {}

        if (this.state.sign.name == "") {
            errors.name = "Name is required"
        }

        if (this.state.sign.email == "") {
            errors.email = "Email is required"
        }
        else {
            if (!this.isValidEmail(this.state.sign.email)) {
                errors.email = "Invalid email address"
            }
        }
        if(this.state.sign.phone==""){
            errors.phone="valid Phone number"
        }
        else{
            if(!this.isValidPhone(this.state.sign.phone)){
             errors.phone='not valid phone number'
            }
        }
        if(this.state.sign.password==""){
            errors.password="password is Required"
        }
        if(this.state.sign.conformPassword==""){
            errors.conformPassword="conform password is Required"
        }
        else{
            if(this.state.sign.password!=this.state.sign.conformPassword){
                errors.conformPassword=" password does not Match"
            }
        }
        
      return {
            errors,
            isValid: Object.keys(errors).length == 0 ? true : false
        }
    }
    render() {
        var { errors, isValid } = this.validate();
        return (
            <div>
                <form>
                <h1>Register Form</h1>
                <input type="text" name="name" placeholder="name" onChange={this.onChange} onBlur={this.onBlur}/>
                <div style={{color:'red'}}>
                {(this.state.toched.name==true) && (errors.name) &&  <span>{errors.name}</span>}<br/>
            </div>
                <input type="text" name="email" placeholder="email" onChange={this.onChange} onBlur={this.onBlur}/>
                <div style={{color:'red'}}>
                {(this.state.toched.email==true) && (errors.email) &&  <span>{errors.email}</span>}<br/>
            </div>
            <input type="text" name="phone" placeholder="phone Number" onChange={this.onChange} onBlur={this.onBlur}/>
            <div style={{color:'red'}}>
                {(this.state.toched.phone==true) && (errors.phone) &&  <span>{errors.phone}</span>}<br/>
            </div>
                <input type="text" name="password" placeholder="password" onChange={this.onChange}
                 onBlur={this.onBlur}/>
                 <div style={{color:'red'}}>
                {(this.state.toched.password==true) && (errors.password) && 
                     <span>{errors.password}</span>}<br/>
            </div>
            <input type="text" name="conformPassword" placeholder=" conformPassword" 
            onChange={this.onChange} onBlur={this.onBlur}/>
            <div style={{color:'red'}}>
            {(this.state.toched.conformPassword==true) && (errors.conformPassword) && 
                 <span>{errors.conformPassword}</span>}<br/>
        </div>
                <button type="button" onClick={this.SubmitButton}>Submit</button>
                </form>
            </div>
        )
    }
}
