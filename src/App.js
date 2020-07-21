import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Home from './Home';
import Login from './Login';
import Instructions from './Instructions';
import Students from './Students';
import Sections from './Sections';
import Departments from './Departments';
import Menu from './Menu'; 

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      user : null,
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    })
  }
  render(){
    return (
      <div className="App"> 
      <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/" exact component ={Home}/>
      
      <Route path="/instructions" component ={Instructions}/>
      
      <Route path="/departments" exact component ={Departments}/>
      
      <Route path="/students" exact component ={Students}/>
      
      <Route path="/sections" exact component ={Sections}/>
      </Switch>
      </BrowserRouter>
      {this.state.user ? (<Home/>) : (<Login/>)}

      </div>
    );
  }
}
export default App;
