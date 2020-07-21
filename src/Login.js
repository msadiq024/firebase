import React , {Component} from "react";
import fire from "./config/fire";

class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email : "",
            password : ""
        }
    }
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>
    {
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>
    {
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handlechange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

    render(){
        return(
            <div className="logbck">
                <form>
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Please enter the email address"
                    onChange={this.handlechange}
                    value={this.state.email}/>
                    <br></br>  <br></br>
                   <input 
                   name="password"
                   type="password"
                   onChange={this.handlechange}
                   id="password"
                   placeholder="Please enter Password"
                   value={this.state.password}
                   />

<br></br>  <br></br>
                   <button onClick={this.login}>Login</button>
                   <br></br>
                   <br></br>
                   <button onClick={this.signup}>SignUp</button>

                </form>
            </div>
        )
    }
}

export default Login;