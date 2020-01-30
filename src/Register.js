import React,{Component} from 'react';
class Register extends Component{
    constructor(){
        super();
        this.state={
            registers:[],
            name:'',
            phone:'',
            email:'',

        }
    }
    onChangeName=(e)=>{
        var name=e.target.value
        this.setState({
            name:name
        })
    }
    onChangePhone=(e)=>{
        var phone=e.target.value
        this.setState({
            phone:phone
        })
    }
    onChangeEmail=(e)=>{
        var email=e.target.value
        this.setState({
            email:email
        })
    }
    SubmitButton=()=>{
        this.setState({
            registers:[
                this.state.name,
                this.state.phone,
                this.state.email
            ]
        })
        

    }
    render(){
        return(
            <div>
            <h1>Register</h1>
            <input type="text" name="name" value={this.state.name} onChange={this.onChangeName}/>
            <input type="text" name="phone" value={this.state.phone} onChange={this.onChangePhone}/>
            <input type="text"  name="email" value={this.state.email} onChange={this.onChangeEmail}/>
            <button onClick={this.SubmitButton}>Submit</button>
            <ul>
            {
                this.state.registers.map((register,index)=>{
                    return <li key={index}>{register}</li>
                })
            }
            </ul>
            
            </div>
        )
    }
}
export default Register;